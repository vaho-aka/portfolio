import React from 'react';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('../components/Hero'));
const AboutMe = dynamic(() => import('../components/AboutMe'));

const Home = () => {
  return (
    <div className="text-slate-300">
      <div className="flex-col-reverse items-center lg:items-stretch lg:flex-row flex justify-between gap-5">
        <AboutMe />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
