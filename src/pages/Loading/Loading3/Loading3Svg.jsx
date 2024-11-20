import * as React from "react";
import { motion } from "framer-motion";

const Loading3Svg = (props) => (
  <svg
    width={1512}
    height={982}
    style={{ backgroundColor: "transparent" }}
    viewBox="0 0 1512 982"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g id="Loading3" clipPath="url(#clip0_267_418)">
      <rect width={1512} height={982} fill="#161616" />
      <g id="Ellipse 316" filter="url(#filter0_f_267_418)">
        <motion.ellipse
          cx={1160} // This will be updated in the animation
          cy={374.5}
          rx={56}
          ry={254.5}
          fill="#1C6BFF"
          initial={{ cx: 756 }} // Starting position
          animate={{ cx: 1156 }} // Follow Rectangle 3279
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "keyframes",
          }}
        />
      </g>

      <g id="Ellipse 317" filter="url(#filter1_f_267_418)">
        <motion.ellipse
          cx={363} // This will be updated in the animation
          cy={375.5}
          rx={46}
          ry={278.5}
          fill="#0075FF"
          initial={{ cx: 756 }} // Starting position
          animate={{ cx: 356 }} // Follow Rectangle 3277
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "keyframes",
          }}
        />
      </g>
      <g id="Rectangle 3276" filter="url(#filter2_f_267_418)">
        <motion.rect
          // x={1156}
          y={134}
          width={6}
          height={498}
          initial={{ x: 756 }}
          animate={{ x: 1156 }}
          transition={{
            times: 1,
            duration: 2,
            ease: "easeInOut",
            type: "keyframes",
          }}
          fill="#1C6BFF"
        />
      </g>
      <motion.rect
        id="Rectangle 3277"
        // x={356}
        y={134}
        width={6}
        height={498}
        initial={{ x: 756 }}
        animate={{ x: 356 }}
        transition={{
          times: 1,
          duration: 2,
          ease: "easeInOut",
          type: "keyframes",
        }}
        fill="#D9D9D9"
      />
      <g id="Rectangle 3278" filter="url(#filter3_f_267_418)">
        <motion.rect
          // x={1156}
          y={134}
          width={6}
          height={498}
          initial={{ x: 756 }}
          animate={{ x: 1156 }}
          transition={{
            times: 1,
            duration: 2,
            ease: "easeInOut",
            type: "keyframes",
          }}
          fill="#0075FF"
        />
      </g>
      <motion.rect
        id="Rectangle 3279"
        // x={1156}
        y={134}
        width={6}
        height={498}
        initial={{ x: 756 }}
        animate={{ x: 1156 }}
        transition={{
          times: 1,
          duration: 2,
          ease: "easeInOut",
          type: "keyframes",
        }}
        fill="#D9D9D9"
      />
      <motion.g
        id="Rectangle 3280"
        filter="url(#filter4_f_267_418)"
        initial={{ x: -356, y: 0 }}
        animate={{ x: 0, rotate: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <path
          d="M1186.85 682.204L1663 919.5L1460.5 1156L1186.85 682.204Z"
          fill="#1C6BFF"
        />
      </motion.g>
      <motion.g
        id="Rectangle 3281"
        filter="url(#filter5_f_267_418)"
        initial={{ x: -356, y: 0 }}
        animate={{ x: 0, rotate: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <path
          d="M1183.58 687.235L1186.85 682.204L1620.68 943.224L1633.67 1009.5L1183.58 687.235Z"
          fill="#1C6BFF"
        />
      </motion.g>
      <motion.g
        id="Rectangle 3282"
        filter="url(#filter6_f_267_418)"
        initial={{ x: 356, y: 0 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "left center", // or adjust as needed to set rotation from endpoint
        }}
      >
        <path
          d="M367.617 654.281L370.434 659.579L204.499 1146L-173.5 852L367.617 654.281Z"
          fill="#0075FF"
        />
      </motion.g>
      <motion.g
        id="Rectangle 3283"
        filter="url(#filter7_f_267_418)"
        initial={{ x: 356, y: 0 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "left center", // or adjust as needed to set rotation from endpoint
        }}
      >
        <path
          d="M367.615 654.28L370.433 659.578L-65.4688 950.224L-91.0442 917.745L367.615 654.28Z"
          fill="#376EF8"
        />
      </motion.g>
      <motion.g
        id="Ellipse 318"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        filter="url(#filter8_f_267_418)"
      >
        <motion.ellipse
          cx={758.5}
          cy={651.5}
          rx={285.5}
          ry={7.5}
          fill="url(#gradient0)"
        />
      </motion.g>

      <motion.g
        id="Ellipse 319"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        filter="url(#filter9_f_267_418)"
      >
        <motion.ellipse
          cx={758.5}
          cy={651.5}
          rx={285.5}
          ry={7.5}
          fill="url(#gradient1)"
        />
      </motion.g>
      <motion.rect
        id="image 18"
        x={592}
        y={361}
        width={327}
        height={180}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, ease: "easeInOut" }}
        fill="url(#pattern0_267_418)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_267_418"
        x={854}
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
          result="effect1_foregroundBlur_267_418"
        />
      </filter>
      <filter
        id="filter1_f_267_418"
        x={104}
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
          result="effect1_foregroundBlur_267_418"
        />
      </filter>
      <filter
        id="filter2_f_267_418"
        x={1119}
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
          result="effect1_foregroundBlur_267_418"
        />
      </filter>
      <filter
        id="filter3_f_267_418"
        x={1092.6}
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
          result="effect1_foregroundBlur_267_418"
        />
      </filter>
      <filter
        id="filter4_f_267_418"
        x={711.85}
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
          result="effect1_foregroundBlur_267_418"
        />
      </filter>
      <filter
        id="filter5_f_267_418"
        x={1133.58}
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
          result="effect1_foregroundBlur_267_418"
        />
      </filter>
      <filter
        id="filter6_f_267_418"
        x={-653.5}
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
          result="effect1_foregroundBlur_267_418"
        />
      </filter>
      <filter
        id="filter7_f_267_418"
        x={-138.044}
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
          result="effect1_foregroundBlur_267_418"
        />
      </filter>
      <filter
        id="filter8_f_267_418"
        x={389}
        y={560}
        width={739}
        height={183}
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
          stdDeviation={42}
          result="effect1_foregroundBlur_267_418"
        />
      </filter>
      <filter
        id="filter9_f_267_418"
        x={328}
        y={499}
        width={861}
        height={305}
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
          stdDeviation={72.5}
          result="effect1_foregroundBlur_267_418"
        />
      </filter>
      <pattern
        id="pattern0_267_418"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_267_418"
          transform="matrix(0.00442478 0 0 0.00803835 0 -0.00239676)"
        />
      </pattern>
      <linearGradient
        id="paint0_linear_267_418"
        x1={473}
        y1={651.2}
        x2={1055}
        y2={651.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0073FF" />
        <stop offset={1} stopColor="#1C6BFF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_267_418"
        x1={473}
        y1={651.2}
        x2={1055}
        y2={651.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0073FF" />
        <stop offset={1} stopColor="#1C6BFF" />
      </linearGradient>
      <clipPath id="clip0_267_418">
        <rect width={1512} height={982} fill="white" />
      </clipPath>
      <image
        id="image0_267_418"
        data-name="image(edit).png"
        width={226}
        height={125}
        xlinkHref="data:image/png;base64,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"
      />
      {/* Gradient for Ellipse 318 */}
      <linearGradient id="gradient0" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1C6BFF" />
        <stop offset="100%" stopColor="#0075FF" />
      </linearGradient>

      {/* Gradient for Ellipse 319 */}
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0075FF" />
        <stop offset="100%" stopColor="#D9D9D9" />
      </linearGradient>
    </defs>
  </svg>
);
export default Loading3Svg;
