import React from 'react';

const Portfolio = () => {
    return (
        <div className='my-10 w-11/12 m-auto'>
            <h1 className="text-3xl font-bold text-center mb-2 mt-8">My Projects</h1>
            <p class="mb-5 text-center font-normal text-gray-500 dark:text-gray-400">I always provide my best service to clients <br /> so that they can be happy</p>
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                <div class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80)` }}
                >
                    <div
                        class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                        <h2 class="mt-4 text-2xl font-semibold text-white capitalize">Md Araf</h2>
                        <div className='flex justify-between'>
                            <a href='https://md-araf.web.app/' target='_blank' class="mt-2 text-md tracking-wider text-blue-400 uppercase ">Live Site</a>
                            <a href='https://github.com/Ankan112/md-araf-client' target='_blank' class="mt-2 text-md tracking-wider text-blue-400 uppercase ">Client Site</a>
                            <a href='https://github.com/Ankan112/md-araf-server' target='_blank' class="mt-2 text-md tracking-wider text-blue-400 uppercase ">Server Site</a>
                        </div>
                        <ul className='text-white mt-4'>
                            <li>i. In the front, I used React.JS</li>
                            <li>ii. Authentication handle with firebase</li>
                            <li>iii. Users can book any service from this website & user friendly UI</li>
                        </ul>
                    </div>
                </div>

                <div class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80)` }}>
                    <div
                        class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                        <h2 class="mt-4 text-2xl font-semibold text-white capitalize">Book House</h2>
                        <div className='flex justify-between'>
                            <a href='https://book-house-bd.web.app/' target='_blank' class="mt-2 text-md tracking-wider text-blue-400 uppercase ">Live Site</a>
                            <a href='https://github.com/Ankan112/book-house-client' target='_blank' class="mt-2 text-md tracking-wider text-blue-400 uppercase ">Client Site</a>
                            <a href='https://github.com/Ankan112/book-house-server' target='_blank' class="mt-2 text-md tracking-wider text-blue-400 uppercase ">Server Site</a>
                        </div>
                        <ul className='text-white mt-4'>
                            <li>i. MongoDB has been used for database</li>
                            <li>ii. I used Daisy-UI for the front-end design</li>
                            <li>iii. Server site has been deployed in Vercel</li>
                        </ul>
                    </div>
                </div>

                <div class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80)` }}>
                    <div
                        class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                        <h2 class="mt-4 text-2xl font-semibold text-white capitalize">Dhaka Medical Care</h2>
                        <div className='flex justify-between'>
                            <a href='https://dhaka-medical-care.web.app/' target='_blank' class="mt-2 text-md tracking-wider text-blue-400 uppercase ">Live Site</a>
                            <a href='https://github.com/Ankan112/dhaka-medical-care' target='_blank' class="mt-2 text-md tracking-wider text-blue-400 uppercase ">Client Site</a>
                        </div>
                        <ul className='text-white mt-4'>
                            <li>i. Users will know the medical services price and they can book any kind of service</li>
                            <li>ii. Client site has been deployed in Firebase</li>
                            <li>iii. Unique & Responsive design</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;