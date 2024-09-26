import {
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiGithubFill,
  RiMailFill,
} from 'react-icons/ri';

const Navigation = () => {
  return (
    <div className="py-4 sm:px-4 xl:px-0 text-neutral-50 w-full bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
      <nav className="max-w-screen-xl gap-2 md:gap-2 mx-auto flex items-center justify-center md:justify-between">
        <a
          href="mailto:irnarakotoarinirina@gmail.com"
          className="flex items-center gap-2"
        >
          <RiMailFill size={32} className="text-slate-300" />
          <h2 className="text-slate-300 hidden md:block">
            irnarakotoarinirina@gmail.com
          </h2>
        </a>
        <ul className="flex items-center gap-2">
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/vahoaka">
              <RiLinkedinBoxFill size={32} className="text-slate-300" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://web.facebook.com/irna.rakotoarinirina/"
            >
              <RiFacebookBoxFill size={32} className="text-slate-300" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/vaho-aka">
              <RiGithubFill size={32} className="text-slate-300" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
