import React from 'react';
import Banner from '../Banner/Banner';
import Portfolio from '../Portfolio/Portfolio';
import Service from '../Service/Service';
import Skills from '../Skills/Skills';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Skills></Skills>
            <Review></Review>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;