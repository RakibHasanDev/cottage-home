import React from "react";

import nurse from "../../../../assets/nurse-icon-1.1.png";
import heart from "../../../../assets/two-heart-icons-large.png";
import blueTick from "../../../../assets/blue-tick-white-background-1.jpg";

const Quality = () => {
  return (
    <div className="bg-white ">
      <h3 className="text-[#322e51] text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-10 playrify">
        The Service We Provide <br /> in-home care
      </h3>
      <hr className="border-[#00a6b2] border-t-2 w-12 mt-2 mb-8 mx-auto" />
      <h6 className="text-center md:text-2xl text-primary px-4 md:px-0">
        HHA/PCA CDPAP SERVICES THROUGHOUT NEW YORK CITY{" "}
      </h6>
      <div className="md:grid grid-cols-2  w-[90%] mx-auto pb-14 pt-9">
        <div
          className="border border-primary lg:p-[90px] p-10"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="flex justify-center">
            <img src={nurse} alt="" />
          </div>
          <h3 className="text-[#322e51] text-center font-semibold text-2xl md:text-3xl my-8 space-y-1">
            HHA/PCA
          </h3>
          <div>
            <div className="flex items-center mb-1">
              <img src={blueTick} alt="" />
              <p className="ml-4 text-[#67637e] font-normal text-xl">
                Monitor patients Safety{" "}
              </p>
            </div>
            <div className="flex items-center mb-1">
              <img src={blueTick} alt="" />
              <p className="ml-4 text-[#67637e] font-normal text-xl">
                Light housekeeping
              </p>
            </div>
            <div className="flex items-center">
              <img src={blueTick} alt="" />
              <p className="ml-4 text-[#67637e] font-normal text-xl">
                Assist with home exercise program
              </p>
            </div>
            <div className="flex items-center">
              <img src={blueTick} alt="" />
              <p className="ml-4 text-[#67637e] font-normal text-xl">
                Prepare-Meal
              </p>
            </div>
            <div className="flex items-center">
              <img src={blueTick} alt="" />
              <p className="ml-4 text-[#67637e] font-normal text-xl">
                Even sometimes patient Total care
              </p>
            </div>
          </div>
        </div>
        <div
          className="border border-primary  lg:p-[90px] p-10"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="flex justify-center">
            <img src={heart} alt="" />
          </div>
          <h3 className="text-[#322e51] text-center font-semibold md:text-3xl text-2xl my-8">
            CDPAP
          </h3>
          <div>
            <div className="flex items-center mb-1">
              <img src={blueTick} alt="" />
              <p className="ml-4 text-[#67637e] font-normal text-xl">
                Allows recipients to choose their own caregivers
              </p>
            </div>
            <div className="flex items-center mb-1">
              <img src={blueTick} alt="" />
              <p className="ml-4 text-[#67637e] font-normal text-xl">
                Who can be friends
              </p>
            </div>
            <div className="flex items-center mb-1">
              <img src={blueTick} alt="" />
              <p className="ml-4 text-[#67637e] font-normal text-xl">
                Family members
              </p>
            </div>
            <div className="flex items-center">
              <img src={blueTick} alt="" />
              <p className="ml-4 text-[#67637e] font-normal text-xl">
                Or other individuals of their choosing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
