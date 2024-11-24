import * as React from "react";
import { motion } from "framer-motion";

const Loading1Svg = (props) => (
  <svg
    width={1512}
    height={982}
    viewBox="0 0 1512 982"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Loading1">
      <rect width={1512} height={982} fill="#161616" />
      <g id="Ellipse 316" filter="url(#filter0_f_267_397)">
        <ellipse cx={758} cy={486.5} rx={17} ry={8.5} fill="#1C6BFF" />
      </g>
      <g id="Ellipse 317" filter="url(#filter1_f_267_397)">
        <ellipse
          cx={758}
          cy={486}
          rx={17}
          ry={9}
          fill="#0049FF"
          fillOpacity={0.1}
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_267_397"
        x={528}
        y={265}
        width={460}
        height={443}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={106.5}
          result="effect1_foregroundBlur_267_397"
        />
      </filter>
      <filter
        id="filter1_f_267_397"
        x={528}
        y={264}
        width={460}
        height={444}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={106.5}
          result="effect1_foregroundBlur_267_397"
        />
      </filter>
    </defs>
  </svg>
);
export default Loading1Svg;
