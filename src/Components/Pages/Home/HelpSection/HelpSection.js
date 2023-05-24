import React from "react";
import { FaStar } from "react-icons/fa";
import chatting from "../../../../assets/new-smile.jpg";

const HelpSection = () => {
  return (
    <div className="bg-[#EBF8F9]">
      <h1 className="text-center playrify  md:text-3xl text-2xl lg:text-4xl font-bold text-[#322e51] pt-5 md:pt-20 px-5 md:px-0 ">
        When you’re getting the right help <br className="hidden md:block" />{" "}
        you live healthier — and happier
      </h1>
      <hr className="border-[#00a6b2] border-t-2 w-12 mt-5 md:mb-14 lg:mb-36 mx-auto mb-5 " />
      <div className="lg:flex md:w-[90%] mx-auto lg:pb-36 md:pb-20">
        <div
          className="bg-[#FFFFFF] pb-12 pt-16 px-5 md:pl-11 w-full"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h3 className="text-[#322e51] pb-5 md:pb-12 font-bold text-2xl text-left ">
            We Belive
          </h3>
          <div className="flex items-center pr-5">
            <FaStar className="mr-3 text-[#00A6B2] text-2xl"></FaStar>
            <p className=" font-semibold md:text-lg w-[98%] lg:w-[80%] md:w-[90%] md:text-justify text-justify source-sun md:tracking-tight tracking-tighter ">
              <span className="text-[#00a6b2] font-semibold text-lg">
              Exceptional patient care:
              </span>{" "}
              As a home health care company we prioritize providing the highest level of care to our patients. 
            </p>
          </div>
          <div className="flex items-center pt-7 pr-5">
            <FaStar className="mr-3 text-[#00A6B2] text-2xl"></FaStar>
            <p className="font-semibold md:text-lg  w-[98%] lg:w-[80%] md:w-[90%] md:text-justify text-justify source-sun md:tracking-tight tracking-tighter">
              <span className="text-[#00a6b2] font-semibold text-lg">
              Strong communication & collaboration:
              </span>{" "}
              Effective communication and collaboration among all members of the care team - including patients, caregivers, physicians, and other healthcare professionals - is one of the most important aspects to delivering quality home healthcare services.
            </p>
          </div>
          <div className="flex items-center pt-7 pr-5">
            <FaStar className="mr-3 text-[#00A6B2] text-2xl"></FaStar>
            <p className="font-semibold md:text-lg w-[98%] lg:w-[80%] md:w-[90%] md:text-justify text-justify source-sun md:tracking-tight tracking-tighter">
              <span className="text-[#00a6b2] font-semibold text-lg">
              Respect for patients’ choices and preferences:
              </span>{" "}
              Cottage Home Care Services recognizes that each patient is an individual with unique preferences and values, and we respect those preferences in all aspects of care. 
            </p>
          </div>
        </div>
        <div
          className="w-full lg:ml-[-100px]"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <img
            className="lg:mt-[-80px] believe-img hidden md:block"
            src={chatting}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
