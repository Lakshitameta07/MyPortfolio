import React,{useRef,useContext, useState} from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser'
import {themeContext} from '../../Context'

const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e)  => {
    e.preventDefault();

    emailjs.sendForm('service_svqsy5p', 'template_u48njx1', form.current, 'QE3ZBzJGZ-xk13R0I')
    .then((result) => {
      console.log(result.text);
      setDone(true);
      form.reset();
    }, (error) => {
      console.log(error.text);
    })
  };


const theme = useContext(themeContext)
const darkMode = theme.state.darkMode

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{color: darkMode ? 'white' : ''}}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" 
            name="user_name" 
            className="user" 
            placeholder="Name"/>

            <input type="email" 
            name="user_email" 
            className="user" 
            placeholder="Email"/>

            <textarea name="message" 
            className="user" 
            placeholder="Message"/>
            
            <input
            type="submit"
            value="Send"
            className="button"
            />

            <span>{done && "Thanks For Contacting Me"}</span>

            <div 
            className="blur c-blur1"
            style={{background:"var(--purple)"}}
            ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
