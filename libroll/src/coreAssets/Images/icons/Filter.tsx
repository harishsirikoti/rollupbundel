import * as React from "react";
import { SVGProps } from "react";

const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} {...props}>
    <g data-name="Iconly/Two-tone/Filter">
      <g
        data-name="Filter"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path data-name="Stroke 1" d="M14.191 19.472h-5.52" opacity={0.4} />
        <path
          data-name="Stroke 3"
          d="M22.59 19.475a2.2 2.2 0 1 1-2.2-2.2 2.2 2.2 0 0 1 2.2 2.2Z"
        />
        <path data-name="Stroke 5" d="M17.064 10.526h5.521" opacity={0.4} />
        <path
          data-name="Stroke 7"
          d="M8.671 10.529a2.2 2.2 0 1 0 2.2-2.2 2.2 2.2 0 0 0-2.2 2.2Z"
        />
      </g>
    </g>
  </svg>
);

export default SvgFilter;
