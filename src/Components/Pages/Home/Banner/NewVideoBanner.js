import React from 'react';
import videoBg from '../../../../assets/new-cottage-crop-banner.mp4';


const NewVideoBanner = () => {

  //   useEffect(()=>{

  //     const obj = document.getElementById("video");
  //     obj.playbackRate = 0.5;
  // },[])

  return (
    <div>
      <div className='main relative md:block hidden'>
        <div className="overlay"></div>
        <video

          id='video'

          src={videoBg} autoPlay loop muted />
        <div className="content title-section absolute top-0   w-[100%] ">

          <div className=" tracking-[1px] mx-auto pt-40">
            <div className="h-[150px] max-w-2xl mx-auto main-text mt-[5vh] md:mt-[40vh] lg:mt-[18vh]">
              <h1 className="md:text-6xl cottage-text text-4xl px-[15px] text-white advertise text-center leading-loose ">

               Right Home Care For You
              </h1>
            </div>
            <div className="md:mt-[3vh] banner-text ">
              <div className=" mx-auto  ">
                <div className="rounded-md bg-contact-2 md:max-w-3xl lg:max-w-4xl mx-auto">
                  <div className="bg-simple px-5 py-4 ">
                    <p className="text-white text-sm text-justify font-normal">
                      Cottage Home Care Services provides care to seniors in need
                      and has taken on some of the most challenging cases in New
                      York City to fulfill its mandate of providing care to
                      everyone who qualifies.
                    </p>
                    <p className="text-white text-xl text-justify">-</p>
                    <p className="text-white text-sm text-justify font-normal">
                      Our company focuses on enhancing and building our people - staff, patients, and all others; a principle that has earned us a reputation for being generous, so much so that Cottage Care is known for lending a helping hand to seniors throughout New York City.
                    </p>
                    <h4 className=" md:text-xl text-sm font-semibold text-[#dbf2f4] font-[Roboto] mb-8 px-5 md:px-0 mt-5">
                      “HHA/PCA & CDPAP SERVICES THROUGHOUT NEW YORK CITY, NASSAU & SUFFOLK COUNTY, WESTCHESTER & ALBANY”
                    </h4>
                    <div className=" md:mt-[4vh] flex justify-center text-white font-semibold gap-8">
                      <a
                        href="tel:+1516-367-2266"
                        className=" px-8 py-2.5 rounded-full lg:text-lg bg-primary uppercase  bg-hov2 "
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default NewVideoBanner;