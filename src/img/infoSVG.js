import React from "react";

const infoSVG = ({ height = "24px", width = "24px" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <defs />
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Group" fill="#484848">
        <path
          d="M10.704,11.25 C10.491648,11.25 10.32,11.586 10.32,12 C10.32,12.41475 10.491648,12.75 10.704,12.75 L17.616,12.75 C17.828352,12.75 18,12.41475 18,12 C18,11.586 17.828352,11.25 17.616,11.25 L10.704,11.25 Z M7.44,10.5 C6.64512,10.5 6,11.172 6,12 C6,12.828 6.64512,13.5 7.44,13.5 C8.23488,13.5 8.88,12.828 8.88,12 C8.88,11.172 8.23488,10.5 7.44,10.5 L7.44,10.5 Z"
          id="Fill-193"
          transform="translate(12.000000, 12.000000) rotate(90.000000) translate(-12.000000, -12.000000) "
        />
        <path
          d="M12,22.5 C6.201,22.5 1.5,17.7975 1.5,12 C1.5,6.2025 6.201,1.5 12,1.5 C17.799,1.5 22.5,6.2025 22.5,12 C22.5,17.7975 17.799,22.5 12,22.5 L12,22.5 Z M12,0 C5.37225,0 0,5.37 0,12 C0,18.63 5.37225,24 12,24 C18.62775,24 24,18.63 24,12 C24,5.37 18.62775,0 12,0 L12,0 Z"
          id="Fill-25"
        />
      </g>
    </g>
  </svg>
);

export default infoSVG;