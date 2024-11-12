import React from "react";
import PropType from "prop-types";
const Underline = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.5 1.75C1.5 1.33437 1.83437 1 2.25 1H5.25C5.66563 1 6 1.33437 6 1.75C6 2.16563 5.66563 2.5 5.25 2.5H4.5V7C4.5 8.93438 6.06562 10.5 8 10.5C9.93438 10.5 11.5 8.93438 11.5 7V2.5H10.75C10.3344 2.5 10 2.16563 10 1.75C10 1.33437 10.3344 1 10.75 1H13.75C14.1656 1 14.5 1.33437 14.5 1.75C14.5 2.16563 14.1656 2.5 13.75 2.5H13V7C13 9.7625 10.7625 12 8 12C5.2375 12 3 9.7625 3 7V2.5H2.25C1.83437 2.5 1.5 2.16563 1.5 1.75ZM1 14.25C1 13.8344 1.33437 13.5 1.75 13.5H14.25C14.6656 13.5 15 13.8344 15 14.25C15 14.6656 14.6656 15 14.25 15H1.75C1.33437 15 1 14.6656 1 14.25Z"
                fill="#374151"
            />
        </svg>
    );
};
Underline.propTypes = {
    className: PropType.string,
};
export default Underline;
