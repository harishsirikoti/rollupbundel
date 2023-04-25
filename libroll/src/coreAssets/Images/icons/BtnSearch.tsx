import * as React from "react";
import { SVGProps } from "react";

const SvgBtnSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <g
      transform="translate(3.386 3.386)"
      fill="none"
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      data-name="Iconly/Two-tone/Search"
    >
      <circle cx={6.101} cy={6.101} r={6.101} />
      <path d="m10.345 10.662 2.392 2.386" opacity={0.4} />
    </g>
  </svg>
);

export default SvgBtnSearch;
