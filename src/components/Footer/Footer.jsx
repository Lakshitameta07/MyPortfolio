import React from 'react'
import './Footer.css'
import Insta from  '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'
const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt="" style={{width:'100%'}}/>
      <div className='f-content'>
        <span>lakshitameta07@gmail.com</span>
          <div className='f-icons'>
            <a href='https://instagram.com/_myself_lakshit?igshid=YmMyMTA2M2Y='>
            <Insta color='white' size='3rem'/>
            </a>
            <a href='https://www.linkedin.com/in/lakshit-ameta-45220a218'>
            <LinkedIn color='white' size='3rem'/>
            </a>
            <a href='https://github.com/Lakshitameta07'>
            <GitHub color='white' size='3rem'/>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Footer
