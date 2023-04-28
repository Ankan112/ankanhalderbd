import React from 'react';
import SectionTitle from '../../../Components/Common/SectionTitle/SectionTitle';
import user1 from '../../../img/user-avatar-1.png';
import user2 from '../../../img/user-avatar-3.png';
import user3 from '../../../img/user-avatar-4.png';

const Review = () => {
    return (
        <div className='container-w pt-20 md:pt-32'>
            <div>
                <SectionTitle title_text={'CLIENT REVIEWS'}></SectionTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center  mt-10'>
                <div className="px-6 py-4 mt-16 ah-bg-secondary rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex -mt-16 justify-end">
                        <img className="object-cover w-28 h-28 border-4 border-[#72E2AE] rounded-full dark:border-blue-400" alt="Testimonial avatar" src={user1} />
                    </div>

                    <h2 className="mt-2 text-2xl font-semibold ah-color-primary dark:text-white md:mt-0">Emma Watson</h2>
                    <p className='mt-2 text-md ah-color-secondary'>Client - Envato.com</p>
                    <div className="rating mt-2 rating-md">
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" checked />
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" />
                    </div>
                    <p className="mt-2 mb-5 text-lg ah-color-secondary dark:text-gray-200">Working with Ankan is very good experience for me. He’s a good person. If I need developer in future, I’ll definately hire him.</p>
                </div>
                <div className="px-6 py-4 mt-16 ah-bg-secondary rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex -mt-16 justify-end">
                        <img className="object-cover w-28 h-28 border-4 border-[#72E2AE] rounded-full dark:border-blue-400" alt="Testimonial avatar" src={user3} />
                    </div>

                    <h2 className="mt-2 text-2xl font-semibold ah-color-primary dark:text-white md:mt-0">David Chester</h2>
                    <p className='mt-2 text-md ah-color-secondary'>Client - Envato.com</p>
                    <div className="rating mt-2 rating-md">
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" checked />
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" />
                    </div>
                    <p className="mt-2 mb-5 text-lg ah-color-secondary dark:text-gray-200">Working with Ankan is very good experience for me. He’s a good person. If I need developer in future, I’ll definately hire him.</p>
                </div>
                <div className="px-6 py-4 mt-16 ah-bg-secondary rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex -mt-16 justify-end">
                        <img className="object-cover w-28 h-28 border-4 border-[#72E2AE] rounded-full dark:border-blue-400" alt="Testimonial avatar" src={user2} />
                    </div>

                    <h2 className="mt-2 text-2xl font-semibold ah-color-primary dark:text-white md:mt-0">Jonathon Doe</h2>
                    <p className='mt-2 text-md ah-color-secondary'>Client - Envato.com</p>
                    <div className="rating mt-2 rating-md">
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" checked />
                        <input type="radio" className="mask mask-star-2 bg-yellow-500" />
                    </div>
                    <p className="mt-2 mb-5 text-lg ah-color-secondary dark:text-gray-200">Working with Ankan is very good experience for me. He’s a good person. If I need developer in future, I’ll definately hire him.</p>
                </div>
            </div>
        </div>
    );
};

export default Review;