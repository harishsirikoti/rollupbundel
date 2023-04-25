import * as React from "react";
import { SVGProps } from "react";

const SvgBtnArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Btn/Arrow/Right"
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    {...props}
  >
    <g data-name="Iconly/Light/Arrow - Right 2">
      <g data-name="Arrow - Right 2">
        <path
          data-name="Stroke 1"
          d="M8.958 5.916 13.041 10l-4.083 4.083"
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

export default SvgBtnArrowRight;
