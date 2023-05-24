import React from 'react';
import Slider from './SwipperSlider';


const TestimonialPart = () => {
    return (
        <div className=' w-[95%] md:w-[90%] mx-auto md:py-10 '>
            <div className='flex justify-center'>
            <h1 className=' testimonial-text lg:w-[40%] text-2xl md:text-3xl playrify font-semibold text-center '>Testimonials From Our Patients and Their Loved Ones</h1>
            </div>
            <div className='flex justify-center'>
               <hr  className='bg-primary px-5 mt-2 py-[1px] w-[100px]'/>
               </div>
            <div  >

               <Slider></Slider> 
            </div>
        </div>



    );
};

export default TestimonialPart;