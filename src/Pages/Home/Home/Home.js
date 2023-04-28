import React from 'react';
import Banner from '../Banner/Banner';
import Portfolio from '../Portfolio/Portfolio';
import Service from '../Service/Service';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Skills></Skills>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;