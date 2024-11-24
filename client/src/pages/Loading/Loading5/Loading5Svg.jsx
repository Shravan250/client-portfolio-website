import * as React from "react";
import { motion } from "framer-motion";

const Loading5Svg = (props) => (
  <svg
    width={1512}
    height={982}
    viewBox="0 0 1512 982"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Loading4" clipPath="url(#clip0_267_432)">
      <rect width={1512} height={982} fill="#161616" style={{ opacity: 0 }} />
      <g id="Ellipse 316" filter="url(#filter0_f_267_432)">
        <ellipse
          cx={757}
          cy={374.5}
          rx={56}
          ry={254.5}
          fill="#1C6BFF"
          style={{ opacity: 0 }}
        />
      </g>
      <g id="Ellipse 317" filter="url(#filter1_f_267_432)">
        <ellipse
          cx={760}
          cy={375.5}
          rx={46}
          ry={278.5}
          fill="#0075FF"
          style={{ opacity: 0 }}
        />
      </g>
      <g id="Rectangle 3276" filter="url(#filter2_f_267_432)">
        <rect
          x={753}
          y={134}
          width={6}
          height={498}
          fill="#1C6BFF"
          style={{ opacity: 0 }}
        />
      </g>
      {/* White expanding rectangle */}
      <motion.rect
        x={753}
        y={134}
        width={6}
        height={498}
        fill="#FFFFFF"
        initial={{ width: 6, height: 498, scaleX: 1 }}
        animate={{ scaleX: 250, height: 982 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
      />
      <motion.rect
        id="Rectangle 3277"
        x={753}
        y={134}
        width={6}
        height={498}
        fill="#D9D9D9"
        initial={{ x: 0, height: 498, opacity: 1 }}
        animate={{ x: -753, height: 982, opacity: 0 }} // Scale to the left edge and full viewport height
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.rect
        id="Rectangle 3279"
        x={753}
        y={134}
        width={6}
        height={498}
        fill="#D9D9D9"
        initial={{ x: 0, height: 498, opacity: 1 }}
        animate={{ x: 753, height: 982, opacity: 0 }} // Scale to the right edge and full viewport height
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <g
        id="Rectangle 3280"
        filter="url(#filter4_f_267_432)"
        style={{ opacity: 0 }}
      >
        <path
          d="M783.85 682.204L1260 919.5L1057.5 1156L783.85 682.204Z"
          fill="#1C6BFF"
        />
      </g>
      <g
        id="Rectangle 3281"
        filter="url(#filter5_f_267_432)"
        style={{ opacity: 0 }}
      >
        <path
          d="M780.582 687.235L783.851 682.204L1217.68 943.224L1230.67 1009.5L780.582 687.235Z"
          fill="#1C6BFF"
        />
      </g>
      <g
        id="Rectangle 3282"
        filter="url(#filter6_f_267_432)"
        style={{ opacity: 0 }}
      >
        <path
          d="M764.616 654.281L767.434 659.579L601.499 1146L223.5 852L764.616 654.281Z"
          fill="#0075FF"
        />
      </g>
      <g
        id="Rectangle 3283"
        filter="url(#filter7_f_267_432)"
        style={{ opacity: 0 }}
      >
        <path
          d="M764.615 654.28L767.433 659.578L331.531 950.224L305.956 917.745L764.615 654.28Z"
          fill="#376EF8"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_267_432"
        x={451}
        y={-130}
        width={612}
        height={1009}
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
          stdDeviation={125}
          result="effect1_foregroundBlur_267_432"
        />
      </filter>
      <filter
        id="filter1_f_267_432"
        x={501}
        y={-116}
        width={518}
        height={983}
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
          result="effect1_foregroundBlur_267_432"
        />
      </filter>
      <filter
        id="filter2_f_267_432"
        x={716}
        y={97}
        width={80}
        height={572}
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
          stdDeviation={18.5}
          result="effect1_foregroundBlur_267_432"
        />
      </filter>
      <filter
        id="filter3_f_267_432"
        x={689.6}
        y={70.6}
        width={132.8}
        height={624.8}
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
          stdDeviation={31.7}
          result="effect1_foregroundBlur_267_432"
        />
      </filter>
      <filter
        id="filter4_f_267_432"
        x={308.85}
        y={207.204}
        width={1426.15}
        height={1423.8}
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
          stdDeviation={237.5}
          result="effect1_foregroundBlur_267_432"
        />
      </filter>
      <filter
        id="filter5_f_267_432"
        x={730.582}
        y={632.204}
        width={550.087}
        height={427.297}
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
          stdDeviation={25}
          result="effect1_foregroundBlur_267_432"
        />
      </filter>
      <filter
        id="filter6_f_267_432"
        x={-256.5}
        y={174.281}
        width={1503.93}
        height={1451.72}
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
          stdDeviation={240}
          result="effect1_foregroundBlur_267_432"
        />
      </filter>
      <filter
        id="filter7_f_267_432"
        x={258.956}
        y={607.28}
        width={555.477}
        height={389.944}
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
          stdDeviation={23.5}
          result="effect1_foregroundBlur_267_432"
        />
      </filter>
      <clipPath id="clip0_267_432">
        <rect width={1512} height={982} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Loading5Svg;
