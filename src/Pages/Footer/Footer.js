import React from 'react';
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className=" py-8 ah-bg-secondary">
            <div className='flex flex-col md:flex-row-reverse justify-between items-center container-w'>
                <div className=''>
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
                <div>
                    <p className="mt-4 md:mt-0 text-lg ah-color-secondary text-center">{currentYear} &copy; All Rights Reserved <span className='ah-color-primary'>Ankan Halder.</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;