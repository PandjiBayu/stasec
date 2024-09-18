import Image from "next/image";
import React from "react";

const Logo = ({ width, height, isSticky }) => {
  const logoPath = isSticky ? '/sticky-logo.png' : '/logo.png';

  return (
    <Image
      src={logoPath}
      alt={isSticky ? 'Sticky Logo' : 'Logo'}
      width={width}
      height={height}
      className="w-[120px] md:w-[160px]"
    />
  );
};

export default Logo;
