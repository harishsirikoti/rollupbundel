import * as React from "react";
import { SVGProps } from "react";

const SvgIconSlider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={44} height={38} {...props}>
    <defs>
      <filter
        id="IconSlider_svg__a"
        x={0}
        y={0}
        width={44}
        height={38}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={-2} />
        <feGaussianBlur stdDeviation={3} result="blur" />
        <feFlood floodOpacity={0.161} />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g data-name="Icon Slider">
      <g filter="url(#IconSlider_svg__a)">
        <rect
          data-name="Rectangle 1245"
          width={26}
          height={20}
          rx={10}
          transform="translate(11 9)"
          fill="#fff"
        />
      </g>
      <g data-name="Iconly/Light/Arrow - Left 2">
        <g data-name="Arrow - Left 2">
          <path
            data-name="Stroke 1"
            d="m20.75 22.5-3.5-3.5 3.5-3.5"
            fill="none"
            stroke="#222"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
        </g>
      </g>
      <g data-name="Iconly/Light/Arrow - Left 2">
        <g data-name="Arrow - Left 2">
          <path
            data-name="Stroke 1"
            d="m27.25 15.5 3.5 3.5-3.5 3.5"
            fill="none"
            stroke="#222"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgIconSlider;
