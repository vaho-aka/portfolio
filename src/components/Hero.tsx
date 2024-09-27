import React from 'react';
import Image from 'next/image';
import me from '@/assets/me.jpg';
import { RiDownload2Line } from 'react-icons/ri';

const Hero = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="md:w-52 md:h-52 w-32 h-32 mx-auto rounded-full overflow-hidden">
        <Image
          src={me}
          alt="my portfolio's image"
          priority
          width={500}
          height={500}
          quality={75}
        />
      </div>
      <div className="text-center text-slate-300 flex flex-col gap-4">
        <h2>
          Hi, I am <strong className="text-xl">IRNA</strong>
        </h2>
        <h2 className="text-2xl py-2 capitalize md:text-3xl lg:text-4xl font-semibold text-transparent bg-text backdrop-filter backdrop-blur-sm bg-opacity-30 bg-clip-text">
          React.JS frontend developer.
        </h2>
      </div>
      <a
        href="/me.pdf"
        className="w-fit hover:bg-slate-600 transition-colors duration-300 bg-slate-500 backdrop-filter backdrop-blur-sm bg-opacity-30 text-slate-300/60 font-semibold py-2 gap-2 px-10 flex items-center mx-auto"
      >
        <RiDownload2Line size={28} />
        <span>Resume</span>
      </a>
    </div>
  );
};

export default Hero;
