import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Emp from '../../img/emp.png'
import Weather from '../../img/weather.png'

import Webpage from '../../img/webpage.png'
import Ecomm from '../../img/ecomm.png'

import SnakeGame from '../../img/snakegame.png'

export const Portfolio = () => {
    return (
        <div className="portfolio">
            {/* heading*/}
            <span>Recent Projects</span>
            <span>Portfolio</span>



            {/* slider */}


            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Webpage} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecomm} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Emp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Weather} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SnakeGame} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;