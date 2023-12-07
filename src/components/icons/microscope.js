const Microscope = ({width, height, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M10.0002 30.002H23.3336"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.00024 36.668H35.0002"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3334 36.6673C26.4276 36.6673 29.3951 35.4382 31.583 33.2502C33.7709 31.0623 35.0001 28.0948 35.0001 25.0007C35.0001 21.9065 33.7709 18.939 31.583 16.7511C29.3951 14.5631 26.4276 13.334 23.3334 13.334H21.6667"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0002 23.334H18.3336"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0001 20.002C14.116 20.002 13.2682 19.6508 12.6431 19.0256C12.0179 18.4005 11.6667 17.5527 11.6667 16.6686V10.002H21.6667V16.6686C21.6667 17.5527 21.3156 18.4005 20.6904 19.0256C20.0653 19.6508 19.2175 20.002 18.3334 20.002H15.0001Z"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0004 10.0007V5.00065C20.0004 4.55862 19.8248 4.1347 19.5123 3.82214C19.1997 3.50958 18.7758 3.33398 18.3337 3.33398H15.0004C14.5584 3.33398 14.1345 3.50958 13.8219 3.82214C13.5093 4.1347 13.3337 4.55862 13.3337 5.00065V10.0007"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Microscope;
