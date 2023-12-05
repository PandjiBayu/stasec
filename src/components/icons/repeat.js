import React from "react";

const Repeat = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M28.3335 3.33398L35.0002 10.0007L28.3335 16.6673"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18.3333V16.6667C5 14.8986 5.70238 13.2029 6.95262 11.9526C8.20286 10.7024 9.89856 10 11.6667 10H35"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 36.6673L5 30.0007L11.6667 23.334"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 21.666V23.3327C35 25.1008 34.2976 26.7965 33.0474 28.0467C31.7971 29.297 30.1014 29.9993 28.3333 29.9993H5"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Repeat;
