import React from 'react';
import img1 from '../../../img/service1.png';
import img2 from '../../../img/service2.png';
import img3 from '../../../img/service3.png';
import SectionTitle from '../../../Components/Common/SectionTitle/SectionTitle';

const Service = () => {
    return (
        <div className='container-w pt-20 md:pt-32'>
            <div className=''>
                <SectionTitle title_text={'My Services'}></SectionTitle>
            </div>
            {/* flex gap-5 flex-col md:flex-row justify-between items-center */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center  mt-10'>

                <div class=" p-6 ah-bg-secondary ah-color-primary border border-gray-700 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div>
                        <div>
                            {/* <img className='mx-auto' src={img1} alt="" /> */}
                        </div>
                        <span className='text-6xl text-[#273042]'>
                            01
                        </span>
                    </div>

                    <h5 class="mt-8 mb-4 text-2xl font-semibold tracking-tight ah-color-primary dark:text-white">Font-End Development</h5>

                    <p class="mb-3 font-normal ah-color-secondary dark:text-gray-400">I always provide my best service to clients so that they can be happy.</p>

                </div>
                <div class=" p-6 ah-bg-secondary ah-color-primary border border-gray-700 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div>
                        <div>
                            {/* <img className='mx-auto' src={img1} alt="" /> */}
                        </div>
                        <span className='text-6xl text-[#273042]'>
                            02
                        </span>
                    </div>

                    <h5 class="mt-8 mb-4 text-2xl font-semibold tracking-tight ah-color-primary dark:text-white">Full-Stack Development</h5>

                    <p class="mb-3 font-normal ah-color-secondary dark:text-gray-400">I always provide my best service to clients so that they can be happy.</p>

                </div>
                <div class=" p-6 ah-bg-secondary ah-color-primary border border-gray-700 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div>
                        <div>
                            {/* <img className='mx-auto' src={img1} alt="" /> */}
                        </div>
                        <span className='text-6xl text-[#273042]'>
                            03
                        </span>
                    </div>

                    <h5 class="mt-8 mb-4 text-2xl font-semibold tracking-tight ah-color-primary dark:text-white">Back-End Development</h5>

                    <p class="mb-3 font-normal ah-color-secondary dark:text-gray-400">I always provide my best service to clients so that they can be happy.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;