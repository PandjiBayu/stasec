const CheckCircle = ({width, height, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M36.6661 18.4671V20.0004C36.6641 23.5945 35.5003 27.0916 33.3483 29.9701C31.1964 32.8487 28.1716 34.9546 24.725 35.9736C21.2785 36.9926 17.5949 36.8703 14.2235 35.6247C10.8522 34.3792 7.97385 32.0773 6.0177 29.0622C4.06154 26.0472 3.13242 22.4805 3.36889 18.8943C3.60537 15.308 4.99478 11.8943 7.3299 9.16221C9.66502 6.43012 12.8207 4.52606 16.3264 3.734C19.8321 2.94194 23.4999 3.30432 26.7828 4.76709"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9995 18.3346L19.9995 23.3346L36.6662 6.66797"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckCircle;
