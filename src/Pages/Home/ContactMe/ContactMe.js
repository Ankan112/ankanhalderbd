import React from "react";
import SectionTitle from "../../../Components/Common/SectionTitle/SectionTitle";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactMe = () => {
  return (
    <div className="container-w pt-20 md:pt-32" id="contact">
      <div>
        <SectionTitle title_text={"Contact Me"}></SectionTitle>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center my-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl ah-color-primary font-medium">
            Contact Information
          </h2>
          <div className="ah-bg-secondary p-6 my-8 rounded-lg border-2 border-gray-700">
            <div className="flex items-center">
              <div>
                <a href="mailto:ankanhalder112@gmail.com" rel="noreferrer">
                  <div className="h-20 w-20 ah-bg-third-transparent ah-color-third rounded-full flex justify-center items-center">
                    <FiPhone size={40}></FiPhone>
                  </div>
                </a>
              </div>
              <div className="ml-8">
                <h2 className="text-xl ah-color-primary font-medium">
                  Contact on Phone
                </h2>
                <p className="text-lg ah-color-secondary">+8801904727185</p>
              </div>
            </div>
          </div>
          <div className="ah-bg-secondary p-6 my-8 rounded-lg border-2 border-gray-700">
            <div className="flex items-center">
              <div>
                <a href="mailto:ankanhalder112@gmail.com" rel="noreferrer">
                  <div className="h-20 w-20 ah-bg-third-transparent ah-color-third rounded-full flex justify-center items-center">
                    <AiOutlineMail size={40}></AiOutlineMail>
                  </div>
                </a>
              </div>
              <div className="ml-8">
                <h2 className="text-xl ah-color-primary font-medium">
                  Contact on Email
                </h2>
                <p className="text-lg ah-color-secondary">
                  ankanhalder112@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="ah-bg-secondary p-6 my-8 rounded-lg border-2 border-gray-700">
            <div className="flex items-center">
              <div>
                <a href="mailto:ankanhalder112@gmail.com" rel="noreferrer">
                  <div className="h-20 w-20 ah-bg-third-transparent ah-color-third rounded-full flex justify-center items-center">
                    <HiOutlineLocationMarker
                      size={40}
                    ></HiOutlineLocationMarker>
                  </div>
                </a>
              </div>
              <div className="ml-8">
                <h2 className="text-xl ah-color-primary font-medium">
                  Contact Address
                </h2>
                <p className="text-lg ah-color-secondary">
                  Gobindapur, Nawabganj, Dhaka-1320
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="p-6 ah-bg-secondary border-2 rounded-lg border-gray-700">
            <div>
              <div className="mb-5">
                <p className="text-lg mb-3 ah-color-primary">Name</p>
                <input
                  type="text"
                  placeholder="Enter Your Name..."
                  className="input w-full  ah-bg-primary ah-color-secondary border-2 border-gray-700 focus:border-[#72E2AE]"
                />
              </div>
              <div className="mb-5">
                <p className="text-lg mb-3 ah-color-primary">Email</p>
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="input w-full ah-bg-primary ah-color-secondary border-2 border-gray-700 focus:border-[#72E2AE]"
                />
              </div>
              <div className="mb-5">
                <p className="text-lg mb-3 ah-color-primary">Subject</p>
                <input
                  type="text"
                  placeholder="Enter Your Subject..."
                  className="input w-full ah-bg-primary ah-color-secondary border-2 border-gray-700 focus:border-[#72E2AE]"
                />
              </div>
              <div className="mb-5">
                <p className="text-lg mb-3 ah-color-primary">Message</p>
                <textarea
                  type="text"
                  placeholder="Enter Your Message..."
                  className="text-base w-full ah-bg-primary textarea textarea-bordered textarea-lg ah-color-secondary border-2 border-gray-700 focus:border-[#72E2AE]"
                />
              </div>
              <button className="btn ah-bg-third text-black uppercase hover:bg-white duration-300 rounded-md">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
