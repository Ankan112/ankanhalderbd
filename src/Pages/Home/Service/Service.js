import React from 'react';
import img1 from '../../../img/service1.png';
import img2 from '../../../img/service2.png';
import img3 from '../../../img/service3.png';

const Service = () => {
    return (
        <div className='my-10 w-11/12 m-auto'>
            <h1 className="text-3xl font-bold text-center mb-2 mt-8">My Services</h1>
            <p class="mb-5 text-center font-normal text-gray-500 dark:text-gray-400">I always provide my best service to clients <br /> so that they can be happy</p>
            <div className='grid gap-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                <div class="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className='mx-auto' src={img1} alt="" />

                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Web Design</h5>

                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                </div>
                <div class="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className='mx-auto' src={img2} alt="" />

                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">MERN Stack Development</h5>

                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                </div>
                <div class="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className='mx-auto' src={img3} alt="" />

                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Web Development</h5>

                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                </div>

            </div>
        </div>
    );
};

export default Service;