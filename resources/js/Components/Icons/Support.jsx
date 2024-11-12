import PropType from "prop-types";

const Support = ({ className }) => {
   return (
      <svg
         width="16"
         height="16"
         viewBox="0 0 16 16"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={className}
      >
         <path
            d="M5.35039 6.25H4.9375C3.97117 6.25 3.1875 7.03367 3.1875 8.00219V9.30895C3.1875 10.2777 3.97227 11.0625 4.9375 11.0625H5.375C5.85789 11.0625 6.25 10.6698 6.25 10.1859L6.22539 7.125C6.22539 6.64102 5.85625 6.25 5.35039 6.25ZM11.0625 6.25H10.625C10.1421 6.25 9.75 6.64211 9.75 7.12609V10.1848C9.75 10.6715 10.141 11.0625 10.625 11.0625H11.0625C12.0288 11.0625 12.8125 10.2777 12.8125 9.30895V8.00273C12.8125 7.03477 12.0277 6.25 11.0625 6.25Z"
            fill="currentColor"
         />
         <path
            opacity="0.4"
            d="M8 1C4.08711 1 1.12532 4.25664 1.00057 8L1 9.09375C1 9.45742 1.29395 9.75 1.63164 9.75C1.96934 9.75 2.3125 9.45742 2.3125 9.09375V8C2.3125 4.86367 4.86477 2.31797 8 2.31797C11.1363 2.31797 13.6875 4.86367 13.6875 8V11.9375C13.6875 12.5415 13.1978 13.0312 12.5938 13.0312H9.5668C9.33984 12.6402 8.92148 12.375 8.4375 12.375H7.61172C6.97707 12.375 6.39492 12.804 6.27543 13.4275C6.11328 14.2672 6.75313 15 7.53789 15H8.4375C8.92203 15 9.34066 14.7345 9.56789 14.3438H12.5938C13.9227 14.3438 15 13.2664 15 11.9375V8C14.8742 4.25664 11.9129 1 8 1Z"
            fill="currentColor"
         />
      </svg>
   );
};

Support.propTypes = {
   className: PropType.string,
};

export default Support;
