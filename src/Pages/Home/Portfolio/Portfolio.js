import React from 'react';
import SectionTitle from '../../../Components/Common/SectionTitle/SectionTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaGithub } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { TfiServer } from 'react-icons/tfi'
// import 'react-tabs/style/react-tabs.css';

const Portfolio = () => {
    return (
        <div className='container-w pt-20 md:pt-32 pb-10'>
            <div>
                <SectionTitle title_text={'My Projects'}></SectionTitle>
            </div>
            <Tabs className='mt-10'>
                <TabList className='flex-wrap flex justify-center gap-5'>
                    <Tab className="cursor-pointer ah-color-third ah-bg-third-transparent hover:bg-white hover:text-black rounded duration-300 px-5 py-2 inline-block">ALL</Tab>
                    <Tab className="cursor-pointer ah-color-third ah-bg-third-transparent hover:bg-white hover:text-black rounded duration-300 px-5 py-2 inline-block">REACT JS</Tab>
                    <Tab className="cursor-pointer ah-color-third ah-bg-third-transparent hover:bg-white hover:text-black rounded duration-300 px-5 py-2 inline-block">NEXT JS</Tab>
                    <Tab className="cursor-pointer ah-color-third ah-bg-third-transparent hover:bg-white hover:text-black rounded duration-300 px-5 py-2 inline-block">JAVASCRIPT</Tab>
                    <Tab className="cursor-pointer ah-color-third ah-bg-third-transparent hover:bg-white hover:text-black rounded duration-300 px-5 py-2 inline-block">HTML & CSS</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                        <div className='ah-bg-secondary rounded-md border-2 border-gray-700 p-6'>
                            <div class="overflow-hidden bg-cover rounded-md cursor-pointer h-64 group"
                                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80)` }}>
                                <div
                                    class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                    <div className='flex justify-center gap-4'>
                                        <div className="tooltip" data-tip="Client Side Code">
                                            <a href="https://github.com/Ankan112" rel='noreferrer' target='_blank'>
                                                <div className='h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center'><FaGithub size={24}></FaGithub></div>
                                            </a>
                                        </div>
                                        <div className="tooltip" data-tip="Live Website">
                                            <a href="https://github.com/Ankan112" rel='noreferrer' target='_blank'>
                                                <div className='h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center'><RxOpenInNewWindow size={24}></RxOpenInNewWindow></div>
                                            </a>
                                        </div>
                                        <div className="tooltip" data-tip="Server Side Code">
                                            <a href="https://github.com/Ankan112" rel='noreferrer' target='_blank'>
                                                <div className='h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center'><TfiServer size={24}></TfiServer></div>
                                            </a>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <h2 className='text-2xl ah-color-primary mt-4'>Book House</h2>
                        </div>
                        <div className='ah-bg-secondary rounded-md border-2 border-gray-700 p-6'>
                            <div class="overflow-hidden bg-cover rounded-md cursor-pointer h-64 group"
                                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80)` }}>
                                <div
                                    class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                    <div className='flex justify-center gap-4'>
                                        <div className="tooltip" data-tip="Client Side Code">
                                            <a href="https://github.com/Ankan112" rel='noreferrer' target='_blank'>
                                                <div className='h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center'><FaGithub size={24}></FaGithub></div>
                                            </a>
                                        </div>
                                        <div className="tooltip" data-tip="Live Website">
                                            <a href="https://github.com/Ankan112" rel='noreferrer' target='_blank'>
                                                <div className='h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center'><RxOpenInNewWindow size={24}></RxOpenInNewWindow></div>
                                            </a>
                                        </div>
                                        <div className="tooltip" data-tip="Server Side Code">
                                            <a href="https://github.com/Ankan112" rel='noreferrer' target='_blank'>
                                                <div className='h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center'><TfiServer size={24}></TfiServer></div>
                                            </a>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <h2 className='text-2xl ah-color-primary mt-4'>Book House</h2>
                        </div>
                        <div className='ah-bg-secondary rounded-md border-2 border-gray-700 p-6'>
                            <div class="overflow-hidden bg-cover rounded-md cursor-pointer h-64 group"
                                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80)` }}>
                                <div
                                    class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                    <div className='flex justify-center gap-4'>
                                        <div className="tooltip" data-tip="Client Side Code">
                                            <a href="https://github.com/Ankan112" rel='noreferrer' target='_blank'>
                                                <div className='h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center'><FaGithub size={24}></FaGithub></div>
                                            </a>
                                        </div>
                                        <div className="tooltip" data-tip="Live Website">
                                            <a href="https://github.com/Ankan112" rel='noreferrer' target='_blank'>
                                                <div className='h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center'><RxOpenInNewWindow size={24}></RxOpenInNewWindow></div>
                                            </a>
                                        </div>
                                        <div className="tooltip" data-tip="Server Side Code">
                                            <a href="https://github.com/Ankan112" rel='noreferrer' target='_blank'>
                                                <div className='h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center'><TfiServer size={24}></TfiServer></div>
                                            </a>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <h2 className='text-2xl ah-color-primary mt-4'>Book House</h2>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Portfolio;