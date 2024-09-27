import React from 'react';

const strongText =
  'hover:rotate-3 transition-all inline-block hover:scale-125 hover:bg-slate-500 hover:px-1 hover:bg-text hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-30';

const AboutMe = () => {
  return (
    <>
      <h2 className="text-2xl py-2 font-semibold md:text-3xl lg:text-4xl">
        About me ?
      </h2>
      <p className="text-justify leading-loose">
        I&apos;m a{' '}
        <strong className={`${strongText}`}>Computer Science student</strong>{' '}
        with a strong passion for designing and developing efficient web
        applications. Throughout my academic journey, I&apos;ve honed my
        expertise in{' '}
        <strong className={`${strongText}`}>MERN stack development</strong>,
        <strong className={`${strongText}`}>creating responsive</strong>,{' '}
        <strong className={`${strongText}`}>scalable</strong>, and{' '}
        <strong className={`${strongText}`}>user-friendly solutions</strong> for
        both personal and client projects. My experience spans from{' '}
        <strong className={`${strongText}`}>
          front-end design to back-end architecture
        </strong>
        , where I integrate <strong className={`${strongText}`}>React</strong> ,{' '}
        <strong className={`${strongText}`}>Node.js</strong>,{' '}
        <strong className={`${strongText}`}>Express</strong>, and{' '}
        <strong className={`${strongText}`}>MongoDB</strong> to deliver dynamic
        web apps. I enjoy tackling challenges that allow me to combine
        creativity with{' '}
        <strong className={`${strongText}`}>problem-solving</strong>, whether
        it&apos;s{' '}
        <strong className={`${strongText}`}>optimizing performance</strong>,{' '}
        <strong className={`${strongText}`}>enhancing user experiences</strong>,
        or{' '}
        <strong className={`${strongText}`}>
          streamlining application workflows
        </strong>
        . My goal is to continue{' '}
        <strong className={`${strongText}`}>building impactful</strong>,{' '}
        <strong className={`${strongText}`}>
          high-performance web applications
        </strong>{' '}
        while continuously learning and improving my skills in{' '}
        <strong className={`${strongText}`}>web development</strong>,
        <strong className={`${strongText}`}>computer science</strong>,{' '}
        <strong className={`${strongText}`}>software engineering</strong>, and{' '}
        <strong className={`${strongText}`}>algorithms</strong>. Feel free to
        explore my portfolio to see the various projects from{' '}
        <a target="_blank" href="https://github.com/vaho-aka">
          GitHub
        </a>{' '}
        including my contributions to e-commerce platforms, APIs, and full-stack
        applications.
      </p>
    </>
  );
};

export default AboutMe;
