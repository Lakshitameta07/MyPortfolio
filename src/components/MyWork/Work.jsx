import React,{useContext} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import './Work.css'
import Project1 from '../../img/project1.png'
import Project2 from '../../img/project2.png'
import Project3 from '../../img/project3.png'
import Project4 from '../../img/project4.png'
import Project5 from '../../img/project5.png'
import {themeContext} from '../../Context'

const Work = () => {

const theme = useContext(themeContext)
const darkMode = theme.state.darkMode
  return (
    <div className='work' id='Work'>
      <span style={{color: darkMode ? 'white' : ''}}> Work & </span>
      <span> Projects </span>

      <Swiper
       spaceBetween={30}
       slidesPerView={3} 
       grabCursor={true}
       className='work-slider'
      >
          <SwiperSlide>
            <img src={Project1} alt=""/>  
          </SwiperSlide>  
          <SwiperSlide>
            <img src={Project2} alt=""/>  
          </SwiperSlide> 
          <SwiperSlide>
            <img src={Project3} alt=""/>  
          </SwiperSlide> 
          <SwiperSlide>
            <img src={Project4} alt=""/>  
          </SwiperSlide> 
          <SwiperSlide>
            <img src={Project5} alt=""/>  
          </SwiperSlide> 
      </Swiper>
    </div>
  )
}

export default Work