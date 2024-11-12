import React from "react";
import PropType from "prop-types";

const TalkingPoints = ({ className }) => {
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
                d="M3.08605 5.34141C3.0073 5.43711 2.89273 5.49453 2.76969 5.47539C2.64691 5.50547 2.52742 5.45899 2.44074 5.37149L1.12813 4.05899C0.957289 3.88945 0.957289 3.61164 1.12813 3.44074C1.29887 3.26984 1.57586 3.26984 1.74676 3.44074L2.72047 4.41445L4.60117 2.1575C4.75703 1.97184 5.0332 1.94668 5.21641 2.10145C5.40234 2.25621 5.42695 2.53184 5.27383 2.7175L3.08605 5.34141ZM3.08605 9.71641C3.0073 9.81211 2.89273 9.86953 2.76969 9.85039C2.64691 9.88047 2.52742 9.83398 2.44074 9.74648L1.12813 8.43398C0.957289 8.26445 0.957289 7.98555 1.12813 7.81602C1.29887 7.64375 1.57586 7.64375 1.74676 7.81602L2.72047 8.78945L4.60117 6.53359C4.75703 6.32305 5.0332 6.32305 5.21641 6.47617C5.40234 6.63203 5.42695 6.9082 5.27383 7.09141L3.08605 9.71641ZM6.22539 3.75C6.22539 3.50828 6.44688 3.3125 6.66289 3.3125H14.5625C14.8031 3.3125 15 3.50828 15 3.75C15 3.99063 14.8031 4.1875 14.5625 4.1875H6.66289C6.44688 4.1875 6.22539 3.99063 6.22539 3.75ZM6.22539 8.125C6.22539 7.88438 6.44688 7.6875 6.66289 7.6875H14.5625C14.8031 7.6875 15 7.88438 15 8.125C15 8.36563 14.8031 8.5625 14.5625 8.5625H6.66289C6.44688 8.5625 6.22539 8.36563 6.22539 8.125ZM5.35039 12.5C5.35039 12.2594 5.57188 12.0625 5.78789 12.0625H14.5625C14.8031 12.0625 15 12.2594 15 12.5C15 12.7406 14.8031 12.9375 14.5625 12.9375H5.78789C5.57188 12.9375 5.35039 12.7406 5.35039 12.5ZM2.72539 13.375C2.26684 13.375 1.85039 12.984 1.85039 12.5C1.85039 12.016 2.26684 11.625 2.72539 11.625C3.23316 11.625 3.60039 12.016 3.60039 12.5C3.60039 12.984 3.23316 13.375 2.72539 13.375Z"
                fill="currentColor"
            />
        </svg>
    );
};

TalkingPoints.propTypes = {
    className: PropType.string,
};

export default TalkingPoints;
