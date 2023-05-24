import React from 'react';
import { useSwiper } from 'swiper/react';
import { AiOutlineArrowRight} from 'react-icons/ai';
import { AiOutlineArrowLeft} from 'react-icons/ai';

export const SliderButton = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex gap-5 text-white font-bold">
      <button onClick={() => swiper.slidePrev()} className='px-4 py-2 md:px-5 md:py-3 shadow-md rounded-md bg-primary text-white text-lg font-semibold'><AiOutlineArrowLeft/></button>
      <button onClick={() => swiper.slideNext()} className=' px-4 py-2 md:px-5 md:py-3 shadow-md rounded-md bg-primary text-white text-lg font-semibold'><AiOutlineArrowRight/></button>
    </div>
  );
};