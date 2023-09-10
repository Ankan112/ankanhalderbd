import React from "react";
import SectionTitle from "../../../Components/Common/SectionTitle/SectionTitle";
import ankan from "../../../img/ankan112.png";

const AboutMe = () => {
  return (
    <div className="container-w pt-20 md:pt-32" id="about">
      <div>
        <SectionTitle title_text={"About Me"}></SectionTitle>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center mt-10">
        <div className="w-full md:w-1/2">
          <div className="bg-white opacity-90 border-[5px] border-[#72E2AE] flex justify-center items-center">
            <img className="-ml-8" src={ankan} alt="" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-xl font-medium ah-color-secondary text-center md:text-left">
            Hi, I'm a web developer with good knowledge of different
            technologies & enough experience in creating & designing super
            responsive websites. <br /> <br /> I am always trying to disclosure
            something new every single day to become a High-Level programmer.
          </p>
          <div className="mt-10 md:mt-14 text-center md:text-left">
            <a
              href="https://drive.google.com/file/d/1Y65kdb4ylPH_mHlajXTGUTlzkWX9q17D/view"
              rel="noreferrer"
              target="_blank"
              className="btn ah-bg-third text-black uppercase hover:bg-white duration-300 rounded-md"
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
