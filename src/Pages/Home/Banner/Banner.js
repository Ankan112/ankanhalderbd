import React from 'react';
import ankan from '../../../img/ankan112.png';
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Banner = () => {
    return (
        <div className="hero min-h-screen ah-bg-banner" >
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content">

                <div className="">
                    <div className='bg-white mx-auto opacity-90 rounded-full w-44 h-44 border-[5px] border-[#72E2AE]'>
                        <img className='rounded-full' src={ankan} alt="anaknImage" />
                    </div>
                    <h1 className="mb-8 mt-8 text-5xl font-bold">Hello, I am <span className='ah-color-third'>Ankan Halder</span></h1>
                    <p className="mb-8 text-xl ah-color-secondary md:w-3/4 mx-auto">I am a frontend web developer from Bangladesh. I can provide clean code and pixel perfect design. I always provide my best service to clients so that they can be happy.</p>
                    <div className='flex justify-center'>
                        <div className='flex gap-5'>
                            <a href="https://www.facebook.com/ankan.halder.581" rel='noreferrer' target='_blank'>
                                <div className='h-10 w-10 ah-bg-secondary duration-500 cursor-pointer border-2 border-gray-700 ah-color-secondary hover:bg-[#72E2AE] hover:text-black flex justify-center items-center'><FaFacebookF size={20}></FaFacebookF></div>
                            </a>
                            <a href="https://www.linkedin.com/in/ankan-halder/" rel='noreferrer' target='_blank'>
                                <div className='h-10 w-10 ah-bg-secondary duration-500 cursor-pointer border-2 border-gray-700 ah-color-secondary hover:bg-[#72E2AE] hover:text-black flex justify-center items-center'><FaLinkedinIn size={20}></FaLinkedinIn></div>
                            </a>
                            <a href="https://github.com/Ankan112" rel='noreferrer' target='_blank'>
                                <div className='h-10 w-10 ah-bg-secondary duration-500 cursor-pointer border-2 border-gray-700 ah-color-secondary hover:bg-[#72E2AE] hover:text-black flex justify-center items-center'><FaGithub size={20}></FaGithub></div>
                            </a>
                            <a href="https://wa.me/+8801904727185" rel='noreferrer' target='_blank'>
                                <div className='h-10 w-10 ah-bg-secondary duration-500 cursor-pointer border-2 border-gray-700 ah-color-secondary hover:bg-[#72E2AE] hover:text-black flex justify-center items-center'><FaWhatsapp size={20}></FaWhatsapp></div>
                            </a>
                            <a href="mailto:ankanhalder112@gmail.com" rel='noreferrer'>
                                <div className='h-10 w-10 ah-bg-secondary duration-500 cursor-pointer border-2 border-gray-700 ah-color-secondary hover:bg-[#72E2AE] hover:text-black flex justify-center items-center'><AiOutlineMail size={20}></AiOutlineMail></div>
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex items-center justify-center gap-2 mt-8 ah-color-secondary'>
                            <AiOutlineArrowDown></AiOutlineArrowDown>
                            <span className='text-base'>SCROLL DOWN</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;