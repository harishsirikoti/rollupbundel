import * as React from "react";
import { SVGProps } from "react";

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <g data-name="Iconly/Two-tone/Search">
      <g
        data-name="Search"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        transform="translate(5.636 5.636)"
      >
        <path d="m10.026 10.4 2.318 2.327" opacity={0.4} />
        <ellipse cx={5.913} cy={5.952} rx={5.913} ry={5.952} />
      </g>
    </g>
  </svg>
);

export default SvgSearch;
