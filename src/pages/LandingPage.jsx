import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/landing/Hero';
import Solution from '../components/landing/Solution';
import HowItWorks from '../components/landing/HowItWorks';
import Benefits from '../components/landing/Benefits';
import MVP from '../components/landing/MVP';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <Solution />
                <HowItWorks />
                <Benefits />
                <MVP />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
