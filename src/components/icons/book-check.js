const BookCheck = ({width, height, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M6.66602 32.4987V7.4987C6.66602 6.39363 7.105 5.33382 7.8864 4.55242C8.66781 3.77102 9.72761 3.33203 10.8327 3.33203H33.3327V36.6654H10.8327C9.72761 36.6654 8.66781 36.2264 7.8864 35.445C7.105 34.6636 6.66602 33.6038 6.66602 32.4987ZM6.66602 32.4987C6.66602 31.3936 7.105 30.3338 7.8864 29.5524C8.66781 28.771 9.72761 28.332 10.8327 28.332H33.3327"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9995 15.8314L18.3328 19.1647L24.9995 12.498"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BookCheck;
