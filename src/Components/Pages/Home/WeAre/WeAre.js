import React, { useState } from "react";
import benifit from '../../../../assets/benefits.png'
import day from '../../../../assets/day.png'
import match from '../../../../assets/match.png'

import Modal from "./Modal/Modal";

const WeAre = () => {
  const [show, setShow] = useState({});

  const showDetails = (info) => {
    setShow(info);
  };

  const informations = [
    {
      img: benifit,
      title: " Caregivers You Can Trust",
      description:
        " Feel better in the comfort of your own home. We specialize in care and daily living assistance to an array of individuals. Whether you need daily or weekly assistance due to aging, illness, recovery, or rehabilitation, our care givers will provide an individualized service that you can trust. With the CDPAP program, now your family can take care of you with no special certificates required. Our in-house Registered Nurse makes frequent visits to ensure not only safety and wellbeing, but also to guarantee peace of mind for those in our Home Health Care program. We believe at Cottage Home Care Services that quality should always come before all else, be it quality care or quality support from our in-house staff, so give us a call anytime with any inquiries!",
    },
    {
      img: day,
      title: "Experienced and Supportive",
      description:
        " We understand that not one care plan fits all, CDPAP or Home Health Care. Daily services can include anything from meal preparation, hygiene, cleaning, and supervision. We at Cottage Home Care Services will take the time to get to know you and develop an individualized care plan that fits your specific needs. ",
    },
    {
      img: match,
      title: "Experienced Home Health Aids",
      description:
        "Companionship is key to a trusted relationship with our caregivers at Cottage Home Care Services. We not only strive to help you with everyday tasks but want to develop a caring relationship with you. We provide one-on-one attention and care that cannot compare in other settings for both patients in Home Health Care and CDPAP. All our Home Health Aides are strictly trained under New York City guidelines, and all have Certification from a specialized training school.",
    },
  ];
  return (
    <div className="bg-[#F5F5F7] pb-20">
      <div className=" pt-10 md:w-[80%] w-[95%] mx-auto">
        <h1 className="playrify text-4xl font-bold text-center">Who We Are</h1>
        <div className="flex justify-center">
          <hr className="bg-primary px-5 mt-2 py-[1px] w-[80px] lg:w-[220px]" />
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mt-5 lg:mt-0">
          {informations.map((info, index) => (
            <div
              key={index}
              className="lg:mt-16
                            p-4 border-[1px] border-primary shadow-md"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                src={info?.img}
                alt=""
                className="w-14 lg:w-20 lg:h-20 h-14"
              />
              <p className="playrify text-xl font-semibold mt-5">
                {info.title}
              </p>
              <p className="mt-3 text-justify">
                <p>
                  {info?.description.slice(0, 300)}
                  <br />
                  <label
                    onClick={() => showDetails(info)}
                    htmlFor="show-details"
                    className="cursor-pointer pt-3 text-lg font-semibold"
                  >
                    See More..{" "}
                  </label>
                </p>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Modal details={show}></Modal>
    </div>
  );
};

export default WeAre;
