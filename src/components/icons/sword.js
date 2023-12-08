const Sword = ({width, height, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M24.1659 29.1647L4.99927 9.99805V4.99805H9.99927L29.1659 24.1647"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6658 31.666L31.6658 21.666"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6658 26.666L33.3324 33.3327"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.6658 34.9993L34.9991 31.666"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1658 10.8314L29.9991 4.99805H34.9991V9.99805L29.1658 15.8314"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33252 23.332L14.9992 29.9987"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6658 28.332L6.66577 33.332"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.99927 31.666L8.3326 34.9993"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Sword;
