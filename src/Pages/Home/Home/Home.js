import React from 'react';
import Banner from '../Banner/Banner';
import Portfolio from '../Portfolio/Portfolio';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;