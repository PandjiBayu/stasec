const DollarSign = ({width, height, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 65 64"
      fill="none"
    >
      <path
        d="M32.7506 58.6629C47.4782 58.6629 59.4173 46.7238 59.4173 31.9963C59.4173 17.2687 47.4782 5.32959 32.7506 5.32959C18.0231 5.32959 6.08398 17.2687 6.08398 31.9963C6.08398 46.7238 18.0231 58.6629 32.7506 58.6629Z"
        stroke={color}
        strokeWidth="5.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.4173 21.3296H27.4173C26.0028 21.3296 24.6463 21.8915 23.6461 22.8917C22.6459 23.8919 22.084 25.2484 22.084 26.6629C22.084 28.0774 22.6459 29.434 23.6461 30.4342C24.6463 31.4344 26.0028 31.9963 27.4173 31.9963H38.084C39.4985 31.9963 40.855 32.5582 41.8552 33.5584C42.8554 34.5585 43.4173 35.9151 43.4173 37.3296C43.4173 38.7441 42.8554 40.1006 41.8552 41.1008C40.855 42.101 39.4985 42.6629 38.084 42.6629H22.084"
        stroke={color}
        strokeWidth="5.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.75 47.9995V15.9995"
        stroke={color}
        strokeWidth="5.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DollarSign;
