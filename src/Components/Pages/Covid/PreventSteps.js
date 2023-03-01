import React from 'react';

import hand from '../../../../src/assets/Covid-19/hand.png'
import drink from '../../../../src/assets/Covid-19/drink.png'
import mask from '../../../../src/assets/Covid-19/mask.png'
import shake from '../../../../src/assets/Covid-19/shake.png'
import gather from '../../../../src/assets/Covid-19/gathering.png'
import face from '../../../../src/assets/Covid-19/tuch.png'

import './prevent.css'


const PreventSteps = () => {

    const wrongThings = [
        
        {
            img: shake,
            title: 'Avoid Close Contact',
            description: 'The best thing you can do now is plan for how.',


        },
        {
            img: face,
            title: 'Don’t Touch Face',
            description: 'The best thing you can do now is plan for how.',


        },
        {
            img: gather,
            title: 'Social Distancing',
            description: 'The best thing you can do now is plan for how.',


        },
        
    ]

    const rightThings  = [
        {
            img: hand,
            title: 'Wash Your Hands',
            description: 'The best thing you can do now is plan for how.',


        },
        {
            img: drink,
            title: 'Drink Much Watar',
            description: 'The best thing you can do now is plan for how.',


        },
        {
            img: mask,
            title: 'Use Face Mask',
            description: 'The best thing you can do now is plan for how.',


        }

    ]


    return (
        <div className=' py-10 bg-cover'>
            <h1 className='md:text-3xl font-semibold text-center font-[PlayfairDisplay]'>
                What Actions We Took and so on
            </h1>

            <div className='grid md:grid-cols-2 gap-8 w-[95%] md:w-[80%] lg:w-[70%] mx-auto'>

                <div>
                    {
                        rightThings.map((right,index)=><div
                        key={index}

                        className='shadow-md my-5 px-6 py-5'
                        
                        >

                                <div className='flex gap-4 items-center'>
                                    <div>
                                       <img src={right.img} className='w-14 h-14 rounded-full border-2 border-primary'  alt="" /> 
                                    </div>
                                    <div>
                                        <h5>
                                            {right.title}
                                        </h5>
                                        <p>
                                            {right.description}
                                        </p>

                                    </div>
                                </div>
                        



                        </div>)
                    }
                </div>

                <div>
                    {
                        wrongThings.map((wrong,index)=><div
                        key={index}
                        className='shadow-md my-5 px-6 py-5'
                        >
                             <div className='flex gap-4 items-center'>
                                    <div>
                                       <img src={wrong.img} className='w-16 h-16 rounded-full border-2 border-primary'  alt="" /> 
                                    </div>
                                    <div>
                                        <h5>
                                            {wrong.title}
                                        </h5>
                                        <p>
                                            {wrong.description}
                                        </p>

                                    </div>
                                </div>


                        </div>)
                    }

                </div>

            </div>

            <p className='md:w-[60%] mx-auto w-[95%] text-center mt-5'>The safety of our employees and our clients at Cottage Home Care Services is our priority. As the Coronavirus (COVID-19) pandemic continues, we are monitoring the situation closely and following the guidance from the Centers for Disease Control

                and Prevention and local health authorities.</p>
        </div>
    );
};

export default PreventSteps;