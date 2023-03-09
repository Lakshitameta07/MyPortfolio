import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy1 from "../../img/boy1.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesemoji from "../../img/glassesemoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am </span>
          <span> Lakshit Ameta </span>
          <span>
            Hello my name is Lakshit Ameta and I'm currently pursuing my graduation in bachelors 
            degree program of Computer Science and Engineering from Geetanjali Institute Of Technical Studies
            Udaipur Rajasthan.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
        <button className=" button i-button"> Hire Me </button>
        </Link>
        <div className="i-icons">
        <a href='https://github.com/Lakshitameta07'>
          <img src={Github} alt="" />
        </a>  
          <a href='https://www.linkedin.com/in/lakshit-ameta-45220a218'>
          <img src={LinkedIn} alt="" />
          </a>
          <a href='https://instagram.com/_myself_lakshit?igshid=YmMyMTA2M2Y='>
          <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy1} alt="" />
     
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesemoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18.1rem", left: "1.1rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Creative" txt2="Design" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(236 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
