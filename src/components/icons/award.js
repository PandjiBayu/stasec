const Award = ({width, height, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 65 64"
      fill="none"
    >
      <path
        d="M32.25 37.3374C41.0866 37.3374 48.25 30.174 48.25 21.3374C48.25 12.5008 41.0866 5.3374 32.25 5.3374C23.4134 5.3374 16.25 12.5008 16.25 21.3374C16.25 30.174 23.4134 37.3374 32.25 37.3374Z"
        stroke={color}
        strokeWidth="5.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.5215 34.3745L45.5829 58.6678L32.2495 50.6678L18.9162 58.6678L22.9775 34.3745"
        stroke={color}
        strokeWidth="5.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Award;
