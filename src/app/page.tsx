import React from 'react';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('../components/Hero'));
const AboutMe = dynamic(() => import('../components/AboutMe'));

const Home = () => {
  return (
    <div className="text-slate-300 px-4 md:px-0">
      <div className="flex my-4 justify-center items-center">
        <Hero />
      </div>
      <div className="">
        <AboutMe />
      </div>
    </div>
  );
};

export default Home;
