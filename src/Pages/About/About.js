import React from 'react';
import img from '../../img/ankan1.jpg'

const About = () => {
    return (
        <div>
            <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                            About Me
                        </h1>

                        <div class="mt-8 space-y-5">
                            {/* <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span class="mx-2">Clean and Simple Layout</span>
                            </p> */}

                            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> */}

                                <span class="mx-2">Hi, I'm a web developer with good knowledge of different technologies & enough experience in creating & designing super responsive websites. <br /> <br /> I am always trying to disclosure something new every single day to become a High-Level programmer.</span>
                            </p>


                        </div>
                    </div>


                </div>

                <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={img} alt="glasses photo" />
                </div>
            </div>
        </div>
    );
};

export default About;