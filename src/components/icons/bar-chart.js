const BarChart = ({width, height, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 41"
      fill="none"
    >
      <path
        d="M5 5.50195V35.502H35"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.667 17.168H13.3337C12.4132 17.168 11.667 17.9142 11.667 18.8346V27.168C11.667 28.0884 12.4132 28.8346 13.3337 28.8346H16.667C17.5875 28.8346 18.3337 28.0884 18.3337 27.168V18.8346C18.3337 17.9142 17.5875 17.168 16.667 17.168Z"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 8.83398H26.6667C25.7462 8.83398 25 9.58018 25 10.5007V27.1673C25 28.0878 25.7462 28.834 26.6667 28.834H30C30.9205 28.834 31.6667 28.0878 31.6667 27.1673V10.5007C31.6667 9.58018 30.9205 8.83398 30 8.83398Z"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BarChart;
