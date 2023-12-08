const BookText = ({width, height, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M6.6665 32.4987V7.4987C6.6665 6.39363 7.10549 5.33382 7.88689 4.55242C8.66829 3.77102 9.7281 3.33203 10.8332 3.33203H33.3332V36.6654H10.8332C9.7281 36.6654 8.66829 36.2264 7.88689 35.445C7.10549 34.6636 6.6665 33.6038 6.6665 32.4987ZM6.6665 32.4987C6.6665 31.3936 7.10549 30.3338 7.88689 29.5524C8.66829 28.771 9.7281 28.332 10.8332 28.332H33.3332"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3335 11.666H23.3335"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3335 18.332H26.6668"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BookText;
