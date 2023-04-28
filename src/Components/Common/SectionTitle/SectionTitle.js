import React from 'react';

const SectionTitle = ({ title_text }) => {

    return (
        <div className=''>
            <h1 className=" text-5xl font-bold ah-color-primary uppercase text-center mb-2">{title_text}</h1>
            <div className='horizontal-line'>

            </div>
            {/* <hr className='w-1/2 text-center' /> */}
            {/* <span className='relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20'></span> */}
            {/* pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-[120px] font-bold uppercase  opacity-5 bg-section-text */}
            {/* <h1 className='text-[80px] color-primary text-center left-6'>SERVICE</h1> */}
        </div>
    );
};

export default SectionTitle;