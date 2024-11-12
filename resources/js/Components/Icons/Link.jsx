import React from "react";
import PropType from "prop-types";
const Link = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.0245 7.86712C15.3252 6.52459 15.3252 4.34836 14.0245 3.00583C12.7862 1.72779 10.7981 1.65852 9.47892 2.85055L9.33774 2.97955C9.1063 3.18738 9.08316 3.55048 9.28451 3.78937C9.48587 4.02825 9.83766 4.05214 10.0691 3.84431L10.2103 3.71531C11.0898 2.92222 12.4136 2.9676 13.2399 3.82042C14.1055 4.71385 14.1055 6.16388 13.2399 7.05969L10.6176 9.76387C9.75203 10.6573 8.34485 10.6573 7.47925 9.76387C6.653 8.91105 6.60903 7.54463 7.37742 6.63687L7.4862 6.50787C7.68755 6.26899 7.66441 5.90827 7.43296 5.69805C7.20152 5.48783 6.85204 5.51411 6.64837 5.753L6.53959 5.88199C5.38701 7.24364 5.45412 9.29565 6.69235 10.5737C7.99306 11.9162 10.1015 11.9162 11.4022 10.5737L14.0245 7.86712ZM1.97553 7.33202C0.674822 8.67455 0.674822 10.8508 1.97553 12.1933C3.21607 13.4737 5.20417 13.5406 6.52339 12.3486L6.66457 12.2196C6.89602 12.0118 6.91916 11.6487 6.71781 11.4098C6.51645 11.1709 6.16466 11.147 5.93321 11.3548L5.79203 11.4838C4.91255 12.2769 3.58869 12.2315 2.76244 11.3787C1.89684 10.4853 1.89684 9.03527 2.76244 8.13945L5.38469 5.43528C6.25029 4.54185 7.65515 4.54185 8.52306 5.43528C9.34932 6.2881 9.39329 7.65452 8.6249 8.56228L8.49992 8.708C8.29856 8.94688 8.32171 9.3076 8.55315 9.51782C8.78459 9.72803 9.13407 9.70176 9.33774 9.46287L9.46272 9.31715C10.6176 7.95551 10.5505 5.90349 9.31228 4.62307C8.01157 3.28054 5.90312 3.28054 4.60241 4.62307L1.97553 7.33202Z"
                fill="#374151"
            />
        </svg>
    );
};
Link.propTypes = {
    className: PropType.string,
};
export default Link;
