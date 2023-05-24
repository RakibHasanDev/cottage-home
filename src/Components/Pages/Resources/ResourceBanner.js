import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import './ResourcesBanner.css'

const ResourceBanner = () => {

    const handleDone = () => {
        // console.log(`Done after 5 loops!`);
    };
    const handleType = () => {
        // console.log(`Done after 5 loops!`);
    };
    return (
        <div className='resource-Banner h-[50vh] md:h-[50vh] lg:h-[100vh] '>

            <div className='text-center pt-[10vh] md:pt-[20vh] flex justify-center'>
                <h1 className="md:text-5xl text-3xl px-4 md:px-0  text-white font-[PlayfairDisplay]  font-semibold w-[600px]  h-[100px] ">
                    <Typewriter
                        words={["All Internal Resources You Can Use For Your Needs"]}
                        loop={1000}
                        cursor
                        cursorStyle="।"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    />
                </h1>
            </div>

            <div className='flex gap-6 items-center justify-center   pt-[5vh]'>
                <h1 className=' text-xl md:text-4xl text-white playrify font-bold'>
                    Resources

                </h1>

                <Link
                
                to='/contacts'
                
                >
            
                
                <button className='bg-primary uppercase text-white px-4 py-3 shadow-md rounded-md bg-hov2 hover:bg-secondary'>

Find Out More
</button>
                </Link>
            </div>

        </div>
    );
};

export default ResourceBanner;