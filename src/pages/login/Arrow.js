import React from "react";

function Arrow(props) {
  return (
    <svg
      width="63"
      height="58"
      viewBox="0 0 63 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.style}>
      <g filter="url(#filter0_d)">
        <path
          d="M28.2486 25.7769L62.5216 30.4865L46.5 40L41.3064 57.813L28.2486 25.7769Z"
          fill={props.color||"#51E5FF"}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="-0.938998"
          y="0.965777"
          width="63.4606"
          height="56.8474"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-16.722" dy="-9.28999" />
          <feGaussianBlur stdDeviation="0.928999" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Arrow;
