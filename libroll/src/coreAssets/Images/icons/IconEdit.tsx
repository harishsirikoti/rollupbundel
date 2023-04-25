import * as React from "react";
import { SVGProps } from "react";

const SvgIconEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <g
      fill="none"
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-name="Iconly/Two-tone/Edit"
    >
      <path data-name="Stroke 1" d="M11.165 15H16" opacity={0.4} />
      <path
        data-name="Stroke 3"
        d="M10.524 3.541a1.465 1.465 0 0 1 2.176-.117l1.054.836a1.5 1.5 0 0 1 .406 2.163l-6.285 8.11a1.118 1.118 0 0 1-.875.435L4.578 15l-.549-2.389a1.15 1.15 0 0 1 .21-.96Z"
      />
      <path data-name="Stroke 5" d="m9.347 5.06 3.635 2.882" opacity={0.4} />
    </g>
  </svg>
);

export default SvgIconEdit;
