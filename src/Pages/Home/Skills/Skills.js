import React from 'react';
import SectionTitle from '../../../Components/Common/SectionTitle/SectionTitle';

const Skills = () => {
    return (
        <div className='container-w pt-20 md:pt-32'>
            <div className=''>
                <SectionTitle title_text={'My Skills'}></SectionTitle>
            </div>
            {/* flex gap-5 flex-col md:flex-row justify-between items-center */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                <div className='p-10 ah-bg-secondary text-center border border-gray-700 rounded-lg'>
                    <div className='flex justify-center items-center'>
                        <div className="radial-progress text-center text-3xl ah-bg-third-transparent ah-color-third" style={{ "--value": "85", "--size": "12rem", "--thickness": "1rem" }}><span className='ah-color-primary'>85%</span> </div>
                    </div>
                    <p className='text-3xl text-center font-medium mt-6 ah-color-primary'>Front-End Development</p>
                </div>
                <div className='p-10 ah-bg-secondary text-center border border-gray-700 rounded-lg'>
                    <div className='flex justify-center items-center'>
                        <div className="radial-progress text-center text-3xl ah-bg-third-transparent ah-color-third" style={{ "--value": "75", "--size": "12rem", "--thickness": "1rem" }}><span className='ah-color-primary'>75%</span> </div>
                    </div>
                    <p className='text-3xl text-center font-medium mt-6 ah-color-primary'>Back-End Development</p>
                </div>
                <div className='p-10 ah-bg-secondary text-center border border-gray-700 rounded-lg'>
                    <div className='flex justify-center items-center'>
                        <div className="radial-progress text-center text-3xl ah-bg-third-transparent ah-color-third" style={{ "--value": "80", "--size": "12rem", "--thickness": "1rem" }}><span className='ah-color-primary'>80%</span> </div>
                    </div>
                    <p className='text-3xl text-center font-medium mt-6 ah-color-primary'>Full-Stack Development</p>
                </div>
            </div>
            <div className='flex flex-col gap-x-10 md:flex-row mt-8'>
                <div className='md:w-1/2 w-full'>
                    <div className='mb-8'>
                        <h2 className='my-2 text-xl ah-color-primary font-medium'>JavaScript - 80%</h2>
                        <progress className="progress h-3 progress-success ah-bg-third-transparent" value="80" max="100"></progress>
                    </div>
                    <div className='mb-8'>
                        <h2 className='my-2 text-xl ah-color-primary font-medium'>React.JS - 85%</h2>
                        <progress className="progress h-3 progress-success ah-bg-third-transparent" value="85" max="100"></progress>
                    </div>
                    <div className='mb-8'>
                        <h2 className='my-2 text-xl ah-color-primary font-medium'>Next.JS - 80%</h2>
                        <progress className="progress h-3 progress-success ah-bg-third-transparent" value="80" max="100"></progress>
                    </div>
                    <div className='mb-8'>
                        <h2 className='my-2 text-xl ah-color-primary font-medium'>HTML - 95%</h2>
                        <progress className="progress h-3 progress-success ah-bg-third-transparent" value="95" max="100"></progress>
                    </div>
                    <div className='mb-8'>
                        <h2 className='my-2 text-xl ah-color-primary font-medium'>CSS - 90%</h2>
                        <progress className="progress h-3 progress-success ah-bg-third-transparent" value="90" max="100"></progress>
                    </div>
                </div>
                <div className='md:w-1/2 w-full'>
                    <div className='mb-8'>
                        <h2 className='my-2 text-xl ah-color-primary font-medium'>Node.JS - 75%</h2>
                        <progress className="progress h-3 progress-success ah-bg-third-transparent" value="75" max="100"></progress>
                    </div>
                    <div className='mb-8'>
                        <h2 className='my-2 text-xl ah-color-primary font-medium'>Express.JS - 80%</h2>
                        <progress className="progress h-3 progress-success ah-bg-third-transparent" value="80" max="100"></progress>
                    </div>
                    <div className='mb-8'>
                        <h2 className='my-2 text-xl ah-color-primary font-medium'>MongoDB - 85%</h2>
                        <progress className="progress h-3 progress-success ah-bg-third-transparent" value="85" max="100"></progress>
                    </div>
                    <div className='mb-8'>
                        <h2 className='my-2 text-xl ah-color-primary font-medium'>Redux - 80%</h2>
                        <progress className="progress h-3 progress-success ah-bg-third-transparent" value="80" max="100"></progress>
                    </div>
                    <div className='mb-8'>
                        <h2 className='my-2 text-xl ah-color-primary font-medium'>TailwindCSS - 85%</h2>
                        <progress className="progress h-3 progress-success ah-bg-third-transparent" value="85" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;