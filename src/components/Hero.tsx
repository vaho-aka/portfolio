import React from 'react';
import Image from 'next/image';
import me from '@/assets/my-image.jpg';

const Hero = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      <Image
        src={me}
        alt="my portfolio's image"
        priority
        width={800}
        height={800}
        quality={75}
      />
    </div>
  );
};

export default Hero;
