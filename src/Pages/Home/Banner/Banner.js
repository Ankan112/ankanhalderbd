import React from 'react';
import img from '../../../img/1.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Ankan Halder</h1>
                    <p className="mb-5">Provident cupiditate voluptat assumenda excepturi exercitationem quasi. In deleniti eaque repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;