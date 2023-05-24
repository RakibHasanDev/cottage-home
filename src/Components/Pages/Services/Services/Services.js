import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Care from "../../Home/Care/Care";
import ServiceBanner from "../Banner/ServiceBanner";
import Stressed from "../Stressed/Stressed";
import AboutWeDo from "./AboutWeDo";
import Carousel from "./Carousel";
import ServiceCard from "./ServiceCard";


const Services = () => {
  document.documentElement.style.scrollBehavior = "smooth";
  useTitle('Services');
  window.scrollTo(0, 0);
  return (
    <div>
      <div>
      <ServiceBanner></ServiceBanner>
      </div>
      
      
      <ServiceCard></ServiceCard>
      
      <Stressed></Stressed>
      
      <div className="bg-[#EBF8F9] py-20">
        <h1 className="text-[#322e51] pb-2 text-2xl lg:text-[35px] relative font-bold font-[PlayfairDisplay] afterEffect md:mb-10 mb-5 text-center px-5">"The Right Home Care for You"</h1>
      <div className="w-[95%] lg:w-[75%] mx-auto">
      <Carousel></Carousel>
      </div>
      </div>
      {/* <Care></Care> */}
      
    </div>
  );
};

export default Services;
