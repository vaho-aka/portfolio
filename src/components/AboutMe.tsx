import React from 'react';
import { RiFileListLine } from 'react-icons/ri';

const strongText =
  'hover:rotate-3 transition-all inline-block hover:scale-125 hover:bg-slate-500 hover:px-1 hover:bg-text hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-30';

const AboutMe = () => {
  return (
    <div className="w-full flex items-center rounded-lg relative overflow-hidden">
      <div className="p-8  bg-clip-padding backdrop-filter backdrop-blur-lg bg-slate-500/30 h-full w-full flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          <div className="text-4xl">
            <h1>Hey, I&apos;m Irna,</h1>
            <h1>
              a <strong className={strongText}>JavaScript Developer</strong>
            </h1>
            <h1>with 2 years of experince</h1>
          </div>
          <div>
            <p>
              third year in Compture Science in process of getting my license,
              with 3 years of experience in web development, I specialize in
              creating custom web applications using the MERN STACK.
            </p>
          </div>
        </div>
        <div className="mt-auto pt-6">
          <a
            href="/me.pdf"
            className="w-fit hover:bg-slate-600 transition-colors duration-300 bg-slate-900 text-slate-300/60 font-semibold py-2 gap-2 px-10 flex items-center"
          >
            <RiFileListLine size={28} />
            <span>Abstract</span>
          </a>
        </div>
      </div>
      <div className="absolute -top-14 -right-14 w-96 h-96 rounded-full bg-yellow-500/50 -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-yellow-500/50 -z-10"></div>
    </div>
  );
};

export default AboutMe;
