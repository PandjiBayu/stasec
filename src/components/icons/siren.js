import React from "react";

const Siren = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M11.6665 19.9993C11.6665 17.7892 12.5445 15.6696 14.1073 14.1068C15.6701 12.544 17.7897 11.666 19.9998 11.666C22.21 11.666 24.3296 12.544 25.8924 14.1068C27.4552 15.6696 28.3332 17.7892 28.3332 19.9993V29.9993H11.6665V19.9993Z"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33331 33.3333C8.33331 32.4493 8.6845 31.6014 9.30962 30.9763C9.93474 30.3512 10.7826 30 11.6666 30H28.3333C29.2174 30 30.0652 30.3512 30.6903 30.9763C31.3155 31.6014 31.6666 32.4493 31.6666 33.3333V36.6667H8.33331V33.3333Z"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 20H36.6667"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.8333 7.5L30 8.33333"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33331 20H4.99998"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 3.33398V5.00065"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.21533 8.2168L9.39367 9.39513"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 20V30"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Siren;
