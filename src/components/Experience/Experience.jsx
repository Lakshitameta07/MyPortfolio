import React,{useContext} from 'react'
import './Experience.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import Certificate1 from '../../img/certificate1.png'
import Certificate2 from '../../img/certificate2.png'
import Certificate3 from '../../img/certificate3.png'
import Certificate4 from '../../img/certificate4.jpg'
import Certificate5 from '../../img/certificate5.png'
import Certificate6 from '../../img/certificate6.png'
import Certificate7 from '../../img/certificate7.jpg'
import {themeContext} from '../../Context'

const Experience = () => { 

const theme = useContext(themeContext)
const darkMode = theme.state.darkMode

  return (
    <div className='experience' id='Experience'>
       <span style={{color: darkMode ? 'white' : ''}}> Achievements & </span>
       <span>Certificates</span>
       <Swiper
         spaceBetween={30}
         slidesPerView={3} 
         grabCursor={true}
         className='experience-slider'  
       >
        <SwiperSlide>
          <img src={Certificate1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Certificate2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Certificate3} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Certificate4} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Certificate5} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Certificate6} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Certificate7} alt=""/>
        </SwiperSlide>
       </Swiper>
    </div>
  )
}


export default Experience
