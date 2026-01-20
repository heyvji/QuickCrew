import React from 'react';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import ServiceOverview from '../components/Services'; // Reusing the specific component
import WhyClients from '../components/WhyClients';
import WhyWorkers from '../components/WhyWorkers';

const Home = () => {
    return (
        <>
            <Hero />
            <Vision />
            <ServiceOverview />
            <WhyClients />
            <WhyWorkers />
        </>
    );
};

export default Home;
