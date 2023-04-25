import * as React from "react";
import { SVGProps } from "react";

const SvgIconArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <path
      data-name="Stroke 3"
      d="m6 8 4 4 4-4"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export default SvgIconArrowDown;
