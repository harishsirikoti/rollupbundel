import * as React from "react";
import { SVGProps } from "react";

const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <g
      fill="none"
      stroke="#200e32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      data-name="Iconly/Two-tone/Delete"
    >
      <path
        data-name="Stroke 1"
        d="M15.494 8.101s-.407 5.051-.643 7.179a1.678 1.678 0 0 1-1.769 1.63c-1.957.035-3.916.037-5.872 0a1.66 1.66 0 0 1-1.716-1.625c-.238-2.146-.643-7.184-.643-7.184"
        opacity={0.4}
      />
      <path data-name="Stroke 3" d="M16.531 5.68H3.813" />
      <path
        data-name="Stroke 5"
        d="M14.081 5.68a1.236 1.236 0 0 1-1.211-.993l-.182-.912a.96.96 0 0 0-.924-.712H8.585a.96.96 0 0 0-.928.712l-.182.912a1.236 1.236 0 0 1-1.211.993"
      />
    </g>
  </svg>
);

export default SvgDelete;
