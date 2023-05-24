import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { FaTiktok } from 'react-icons/fa';
import GoogleTranslate from '../../GoogleTranslate/GoogleTranslate';



const TopBar = () => {
    return (
        <div className=''>
           
            <div className='text-[#2E294E] block w-[95%] mx-auto'>
                <div className='flex justify-end md:justify-center lg:justify-between items-center '>
                <div className='roboto px-8 py-3 lg:flex items-center lg:justify-between lg:w-[95%]'>
                <div className='lg:flex gap-8 hidden'>
                    <div className='flex gap-4 items-center md:text-lg '>
                        <BsFillTelephoneFill />
                        <p>
                            Call  <a href="tel:+1516-367-2266" className='text-primary '> 516-367-2266</a>
                        </p>

                    </div>
                    <div className='flex gap-4 items-center md:text-lg '>
                        <TfiEmail />
                        <p>
                            Email  <a href="mailto:info@cottagehomecare.com" className='text-primary '> info@cottagehomecare.com</a>
                        </p>

                    </div>
                </div>

                <div className='flex items-center gap-4 md:gap-5 md:text-lg font-medium  text-primary '>

                    <a href="tel:+1516-367-2266" className='text-primary lg:hidden md:text-2xl bg-hov2'> <BsFillTelephoneFill /></a> 

                    <a href="mailto:info@cottagehomecare.com" className='text-primary md:text-2xl bg-hov2 lg:hidden'> <TfiEmail /></a>



                    <a href="https://www.facebook.com/CottageHCS" target='_blank'><BsFacebook className='md:text-2xl bg-hov2' /></a>


                    <a href="https://www.instagram.com/cottagehcs/" target='_blank'>
                        <BsInstagram className='md:text-2xl bg-hov2' />
                    </a>
                    <a href="https://twitter.com/cottagecareny" target='_blank'>
                        <BsTwitter className='md:text-2xl bg-hov2' />

                    </a>
                    <a href="https://www.tiktok.com/@cottagehomecare" target='_blank'>
                        <FaTiktok className='md:text-2xl bg-hov2' />

                    </a>




                </div>


            </div>
            <div>
                 <GoogleTranslate/>
            </div>
                </div>
            </div>

            <hr/>
        </div>
    );
};

export default TopBar;