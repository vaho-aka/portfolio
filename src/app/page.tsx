import React from 'react';
import Image from 'next/image';
import me from '@/assets/me.jpg';
import { RiDownload2Line } from 'react-icons/ri';

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <div className="md:w-52 md:h-52 w-32 h-32 mx-auto rounded-full overflow-hidden">
            <Image src={me} alt="my portfolio's image" />
          </div>
          <div className="text-center text-slate-300 flex flex-col gap-2">
            <h2>
              Hi, I am <strong className="text-xl">IRNA</strong>
            </h2>
            <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-text backdrop-filter backdrop-blur-sm bg-opacity-30 bg-clip-text">
              React.JS FRONTEND DEVELOPER.
            </h2>
          </div>
          <a
            href="/me.pdf"
            className="w-fit bg-slate-500 backdrop-filter backdrop-blur-sm bg-opacity-30 text-slate-300/60 font-semibold py-2 gap-2 px-10 flex items-center mx-auto"
          >
            <RiDownload2Line size={28} />
            <span>Resume</span>
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
