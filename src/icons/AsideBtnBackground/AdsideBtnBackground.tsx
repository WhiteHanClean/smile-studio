import React from "react";

const AdsideBtnBackground = () => {
  return (
    <svg
      width="92"
      height="92"
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Ellipse 279" filter="url(#filter0_d_193_1615)">
        <circle cx="46" cy="46" r="36" fill="url(#paint0_linear_193_1615)" />
      </g>
      <defs>
        <filter
          id="filter0_d_193_1615"
          x="0"
          y="0"
          width="92"
          height="92"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.327457 0 0 0 0 0.28816 0 0 0 0 0.358333 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_193_1615"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_193_1615"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_193_1615"
          x1="46"
          y1="10"
          x2="46"
          y2="82"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#39CCA9" />
          <stop offset="1" stopColor="#69BBE2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AdsideBtnBackground;