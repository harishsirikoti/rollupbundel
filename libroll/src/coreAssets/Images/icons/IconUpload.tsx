import * as React from "react";
import { SVGProps } from "react";

const SvgIconUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <g data-name="Icon/Upload">
      <g data-name="Iconly/Two-tone/Paper Upload">
        <g
          data-name="Paper Upload"
          stroke="#222"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
        >
          <path
            data-name="Stroke 1"
            d="M7.947 16.928h4.989a2.865 2.865 0 0 0 2.876-2.8V6.075a2.854 2.854 0 0 0-2.876-2.915h-5.99a2.9 2.9 0 0 0-2.8 2.915v6.896Z"
            fill="none"
          />
          <path
            data-name="Stroke 3"
            d="M8.145 16.937v-2.182a1.931 1.931 0 0 0-1.927-1.931H4.152"
            fill="none"
          />
          <path
            data-name="Combined Shape"
            d="M10.27 9.782h2.128L10.27 11.92 8.14 9.782h2.13Z"
            fill="#222"
            opacity={0.4}
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgIconUpload;
