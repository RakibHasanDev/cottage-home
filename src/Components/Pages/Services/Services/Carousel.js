import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Carousel.css'


import { Pagination, Navigation, Autoplay, A11y } from "swiper";
import { SliderButton } from "./SliderButton/SliderButton";


const sliders = [
    {
        img:'https://i.ibb.co/LnVyP2X/slider-4.jpg'
    },
    {
        img:'https://i.ibb.co/6sXnnmv/slider-2.jpg'
    },
    {
        img:'https://i.ibb.co/YZX00Cv/TLC-Your-Way-Home-Care-Banner-bottom.jpg'
    },
]


export default function Slider() {
    return (
        <>
            <Swiper
                 modules={[Navigation, Pagination, A11y,Autoplay]}
                 pagination={ true}
                 slidesPerView="auto"
                 loop={true}
                 autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
              
                className="mySwiper relative "
            >  
            {
                sliders.map((slider,index)=> <SwiperSlide
                
                key={index}
                >
                    <div
                        className="lg:h-[500px] md:h-96 h-56 bg-cover bg-center bg-no-repeat text-white rounded-xl "
                        style={{
                            backgroundImage: `url(${slider.img})`,
                        }}
                    >
                    </div>
                   




                </SwiperSlide>)
            }
                
                <div className=" absolute bottom-5 left-[60%] lg:left-[80%]  z-50">
                <SliderButton></SliderButton>
                </div>
            </Swiper>
        </>
    );
}