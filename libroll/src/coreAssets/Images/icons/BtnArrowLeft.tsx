import * as React from "react";
import { SVGProps } from "react";

const SvgBtnArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Btn/Arrow/Left"
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    {...props}
  >
    <g data-name="Iconly/Light/Arrow - Left 2">
      <g data-name="Arrow - Left 2">
        <path
          data-name="Stroke 1"
          d="M11.042 14.084 6.959 10l4.083-4.083"
          fill="none"
          stroke="#222"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </g>
    </g>
  </svg>
);

export default SvgBtnArrowLeft;
