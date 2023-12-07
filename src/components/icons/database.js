const Database = ({width, height, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M19.9993 13.332C28.2835 13.332 34.9993 11.0935 34.9993 8.33203C34.9993 5.57061 28.2835 3.33203 19.9993 3.33203C11.715 3.33203 4.99927 5.57061 4.99927 8.33203C4.99927 11.0935 11.715 13.332 19.9993 13.332Z"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.99927 8.33203V31.6654C4.99927 32.9914 6.57962 34.2632 9.39267 35.2009C12.2057 36.1386 16.021 36.6654 19.9993 36.6654C23.9775 36.6654 27.7928 36.1386 30.6059 35.2009C33.4189 34.2632 34.9993 32.9914 34.9993 31.6654V8.33203"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.99951 19.998C4.99951 21.3241 6.57986 22.5959 9.39291 23.5336C12.206 24.4713 16.0213 24.998 19.9995 24.998C23.9778 24.998 27.7931 24.4713 30.6061 23.5336C33.4192 22.5959 34.9995 21.3241 34.9995 19.998"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Database;
