import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import contactImage from "../../../../assets/ramona.jpg";
import { AuthContext } from "../../Context/AuthProvider";

const EasierLife = () => {
  const { user } = useContext(AuthContext);

  // console.log(user)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const date = Date.now();

  const submitHandler = (data) => {
    // console.log(data)

    const message = {
      firstName: data.firstName,
      photoURL: user?.photoURL,
      email: data?.email,
      phone: data.phone,
      service: data.service,
      inquiry: data.inquiry,
      subject: data.subject,
      time: date,
    };

    fetch(
      "https://cottage-home-care-services-server-site.vercel.app/messages",
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(message),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //    console.log(data)
        if (data.acknowledged) {
          toast.success("Message Send Successfully");
          reset();
        }
      });
  };

  return (
    <div className="bg-[#F5F5F7] pb-20">
      <div className="text-center max-w-xl mx-auto py-[90px]">
        <h1 className="text-[#322e51] pb-3 text-2xl md:text-[35px] relative font-bold font-[PlayfairDisplay] afterEffect mb-10">
          You deserve an easier life, too
        </h1>
        <p className="text-[#67637e] text-lg font-[Roboto]">
          Call us now at{" "}
          <a href="tel: +1516-367-2266" className="text-[#00a6b2]">
            516-367-2266
          </a>
          , or fill out this form and a member of our team will contact you
          within 24 business hours.
        </p>
      </div>
      <div>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white lg:flex justify-start gap-2 py-[68px]">
            <div
              className="md:-ml-15 lg:-ml-10 flex lg:block justify-center items-center px-5"
            // data-aos="fade-right"
            // data-aos-duration="2000"
            >
              <img
                src={contactImage}
                // width="495"
                // height="627"
                alt=""
                className="max-w-[85%] shadow-lg md:md:max-w-2xl lg:max-w-[85%] "
              />
            </div>
            {/*             
            <div>
              <form
                className="flex justify-center items-center"
                // data-aos="fade-left"
                // data-aos-duration="2000"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="flex flex-wrap mt-10 lg:mt-0 justify-center md:justify-start gap-5">
                    <div className="w-[250px]">
                      <p className="text-lg text-[#67637e] font-[Roboto]">
                        Name
                      </p>
                      <input
                        className="mt-3 text-base bg-[#f5f5f7] py-[15px] focus:outline-none px-5 h-12 border border-[#d5d6de] text-[#6f7274] w-full"
                        type="text"
                        placeholder="Your Name"
                        size={40}
                      />
                    </div>
                    <div className="w-[250px]">
                      <p className="text-lg text-[#67637e] font-[Roboto]">
                        Email
                      </p>
                      <input
                        className="mt-3 text-base bg-[#f5f5f7] py-[15px] w-full focus:outline-none px-5 h-12 border border-[#d5d6de] text-[#6f7274]"
                        type="email"
                        placeholder="you@email.com"
                        size={40}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-5">
                    <div className="mt-4 md:mt-8 w-[250px]">
                      <p className="text-lg text-[#67637e] font-[Roboto]">
                        Phone
                      </p>
                      <input
                        className="mt-3 text-base bg-[#f5f5f7] py-[15px] focus:outline-none px-5 h-12 border border-[#d5d6de] text-[#6f7274] w-full"
                        type="text"
                        placeholder="000-000-0000"
                        size={40}
                      />
                    </div>
                    <div className="mt-4 md:mt-8 w-[250px]">
                      <p className="text-lg text-[#67637e] font-[Roboto]">
                        Best time to call?
                      </p>
                      <select className="mt-3 text-base bg-[#f5f5f7] py-[12px] focus:outline-none px-5 border border-[#d5d6de] text-[#6f7274] w-full">
                        <option value="9am-10am">9am-10am</option>
                        <option value="10am-11am">10am-11am</option>
                        <option value="12am-1pm">12am-1pm</option>
                        <option value="1pm-2pm">1pm-2pm</option>
                        <option value="2pm-3pm">2pm-3pm</option>
                        <option value="3pm-4pm">3pm-4pm</option>
                        <option value="4pm-5pm">4pm-5pm</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full flex justify-center md:items-start items-center flex-col">
                    <p className="text-lg text-[#67637e] font-[Roboto] mt-4">
                      Are you the patient?
                    </p>
                    <div className="flex items-center">
                      <div class="flex items-center my-4">
                        <input
                          id="yes"
                          type="radio"
                          name="patient"
                          value="Yes"
                          class="h-4 w-4 border-gray-300"
                        />
                        <label
                          for="yes"
                          class="text-lg text-[#67637e] font-[Roboto] ml-1"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="flex items-center my-4 ml-5">
                        <input
                          id="no"
                          type="radio"
                          name="patient"
                          value="No"
                          class="h-4 w-4 border-gray-300"
                        />
                        <label
                          for="no"
                          class="text-lg text-[#67637e] font-[Roboto] ml-1"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="px-12 md:px-0">
                    <p className="text-lg text-[#67637e] font-[Roboto]">
                      Your relationship to the patient?
                    </p>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      placeholder="Write Here"
                      className="bg-[#f5f5f7] py-[15px] focus:outline-none px-5 border border-[#d5d6de] text-[#6f7274] w-full"
                    ></textarea>
                  </div>
                  <div className="mt-4 flex md:block justify-center">
                    <button className="text-[15px] text-white rounded-[30px] py-[10px] px-10 bg-[#49a4b0] font-normal font-[Roboto]">
                      Get Care
                    </button>
                  </div>
                </div>
              </form>
            </div> */}

            <div
              className="w-full "

            >
              <form
                // onSubmit={submitHandler}

                onSubmit={handleSubmit(submitHandler)}
                className="max-w-xl md:max-w-2xl  bg-gray-50 p-8 rounded-md shadow-xl md:ml-[7%] lg:ml-0"
              >
                <h1 className="text-2xl text-gray-600 text-center Poppins font-semibold">
                  {" "}
                  CONTACT FORM
                </h1>

                <div className="grid grid-cols-1 gap-3 md:gap-6 md:mt-4 sm:grid-cols-2">
                  <div className="md:space-y-1 text-sm ">
                    <label
                      htmlFor="firstName"
                      className="block dark:text-gray-400"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "Name is required",
                      })}
                      id="firstName"
                      placeholder="Full Name"
                      className="w-full px-4  py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                        focus:bg-white shadow-md"
                    />

                    {errors.firstName && (
                      <p className="text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div className="md:space-y-1  text-sm ">
                    <label htmlFor="phone" className="block dark:text-gray-400">
                      Phone
                    </label>
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone Number is required",
                      })}
                      id="phone"
                      placeholder="Phone"
                      className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                        focus:bg-white shadow-md"
                    />

                    {errors.phone && (
                      <p className="text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="space-y-1   text-sm">
                    <label htmlFor="email" className="block dark:text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: "email is required" })}

                      id="email"

                      placeholder="E-mail "
                      className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                        focus:bg-white shadow-md"
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1 text-sm ">
                    <label
                      htmlFor="option"
                      className="block dark:text-gray-400"
                    >
                      Services
                    </label>
                    <select
                      // name='service'
                      {...register("service", {
                        required: "service is required",
                      })}
                      id="option"
                      className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                    focus:bg-white shadow-md"
                      required
                    >
                      <option value={""} disabled hidden selected required>
                        Select One
                      </option>
                      <option value="CDPAP">CDPAP</option>
                      <option value="PCA">PCA</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-600">{errors.service.message}</p>
                    )}
                  </div>
                </div>

                <hr className="my-5" />

                <div className="space-y-1 text-sm mt-1">
                  <label htmlFor="option" className="block dark:text-gray-400">
                    Inquiry Type
                  </label>
                  <select
                    {...register("inquiry", {
                      required: "inquiry is required",
                    })}
                    id="option"
                    className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                    focus:bg-white shadow-md"
                    required
                  >
                    <option value={""} disabled hidden selected required>
                      Select One
                    </option>
                    <option value="General">General Inquiry</option>
                    <option value="Grievance">Grievance</option>
                  </select>
                  {errors.inquiry && (
                    <p className="text-red-600">{errors.inquiry.message}</p>
                  )}
                </div>

                <div className="space-y-1 text-sm  mt-5">
                  <label
                    htmlFor="description"
                    className="block dark:text-gray-400"
                  >
                    Subject
                  </label>
                  <textarea
                    type="tel"
                    {...register("subject", {
                      required: "subject is required",
                    })}
                    // name="subject"
                    id="subject"
                    rows={5}
                    placeholder="Subject"
                    className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                    focus:bg-white shadow-md"
                  />
                  {errors.subject && (
                    <p className="text-red-600">{errors.subject.message}</p>
                  )}
                </div>
                <button className="block w-full p-3 text-center rounded-sm  bg-primary hover:bg-secondary text-white mt-6">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasierLife;
