import React from "react";

const Youtube = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M14 12.9526L10.5 14.9526V10.9526L14 12.9526Z"
        fill="white"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 13.66V12.245C2 9.35003 2 7.90203 2.905 6.97103C3.811 6.03903 5.237 5.99903 8.088 5.91803C9.438 5.88003 10.818 5.85303 12 5.85303C13.181 5.85303 14.561 5.88003 15.912 5.91803C18.763 5.99903 20.189 6.03903 21.094 6.97103C22 7.90203 22 9.35103 22 12.245V13.66C22 16.556 22 18.003 21.095 18.935C20.189 19.866 18.764 19.907 15.912 19.987C14.562 20.026 13.182 20.053 12 20.053C10.6958 20.0491 9.39163 20.0271 8.088 19.987C5.237 19.907 3.811 19.867 2.905 18.935C2 18.003 2 16.555 2 13.661V13.66Z"
        stroke="white"
        stroke-width="1.5"
      />
    </svg>
  );
};

export default Youtube;
