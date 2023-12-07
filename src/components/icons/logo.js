import Image from "next/image";
import React from "react";

const Logo = ({ width, height, isSticky }) => {
  const logoPath = isSticky ? 'sticky-logo.svg' : 'logo.svg';

  return (
    <Image
      src={logoPath}
      alt={isSticky ? 'Sticky Logo' : 'Logo'}
      width={width}
      height={height}
    />
  );
};

export default Logo;
