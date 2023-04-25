import * as React from "react";
import { SVGProps } from "react";

const SvgIconDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Iconly/Two-tone/Downlaod"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    {...props}
  >
    <g
      fill="none"
      stroke="#0836c1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path data-name="Stroke 1" d="M8.082 10.29V2.263" />
      <path data-name="Stroke 3" d="m10.026 8.339-1.944 1.952-1.944-1.952" />
      <path
        data-name="Stroke 4"
        d="M11.17 5.418h.622a2.456 2.456 0 0 1 2.456 2.457v3.256a2.45 2.45 0 0 1-2.45 2.45H4.371a2.457 2.457 0 0 1-2.457-2.457V7.867a2.45 2.45 0 0 1 2.451-2.449h.628"
        opacity={0.4}
      />
    </g>
  </svg>
);

export default SvgIconDownload;
