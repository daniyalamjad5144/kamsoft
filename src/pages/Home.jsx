import React from 'react';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import WorkSlider from '../components/WorkSlider';
import GamingProjects from '../components/GamingProjects';
import ProductAnimation from '../components/ProductAnimation';
import AnimationTypes from '../components/AnimationTypes';
import ProlificStudio from '../components/ProlificStudio';

const Home = () => {
    return (
        <main>
            <Hero />
            <Showcase />
            <WorkSlider />
            <GamingProjects />
            <ProductAnimation />
            <AnimationTypes />
            <ProlificStudio />
        </main>
    );
};

export default Home;
