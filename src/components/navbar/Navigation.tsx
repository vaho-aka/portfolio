import { RiDownload2Line } from 'react-icons/ri';
import Image from 'next/image';
import me from '@/assets/me.jpg';

const Navigation = () => {
  return (
    <div className=" py-4 md:py-2 px-4 text-neutral-50 flex items-center gap-5 md:flex-row flex-col w-full bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-30">
      <a href="/" className="w-32 h-32 rounded-full overflow-hidden">
        <Image src={me} alt={`My portfolio's image`} width={128} height={128} />
      </a>
      <div className="flex h-fit flex-col text-center md:text-start">
        <h2 className="font-semibold h-fit">
          IRNA RAKOTOARINIRINA Zo Tojoarivahoaka
        </h2>
        <span className="font-thin h-fit">MERN Stack Developer</span>
      </div>
      <button className="flex items-center gap-2 bg-white/20 px-4 py-1 md:ms-auto rounded-sm backdrop-blur-md">
        <RiDownload2Line />
        <span>RESUME</span>
      </button>
    </div>
  );
};

export default Navigation;
