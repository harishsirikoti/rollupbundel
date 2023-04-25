import * as React from "react";
import { SVGProps } from "react";

const SvgPopout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Icon/Pop out"
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    {...props}
  >
    <g
      fill="none"
      stroke="#222"
      strokeLinecap="round"
      strokeWidth={1.5}
      data-name="Iconly-Two-tone-Pop out"
    >
      <path
        d="M9.977 4H7.188A3.093 3.093 0 0 0 4 7.362v5.282A3.076 3.076 0 0 0 7.188 16h5.623A3.089 3.089 0 0 0 16 12.644V10"
        strokeLinejoin="round"
      />
      <g data-name="Group 4642" opacity={0.4}>
        <path
          data-name="Path 6162"
          d="M13.32 4.002H16v2.689"
          strokeLinejoin="round"
        />
        <path data-name="Path 6163" d="M10.456 9.467 16 4.001" />
      </g>
    </g>
  </svg>
);

export default SvgPopout;
