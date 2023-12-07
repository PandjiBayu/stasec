const ShieldCheck = ({width, height, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M20.0003 36.6673C20.0003 36.6673 33.3337 30.0007 33.3337 20.0007V8.33398L20.0003 3.33398L6.66699 8.33398V20.0007C6.66699 30.0007 20.0003 36.6673 20.0003 36.6673Z"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 19.9993L18.3333 23.3327L25 16.666"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShieldCheck;
