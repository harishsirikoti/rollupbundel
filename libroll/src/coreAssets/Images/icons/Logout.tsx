import * as React from "react";
import { SVGProps } from "react";

const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={124} height={124} {...props}>
    <defs>
      <filter
        id="logout_svg__a"
        x={0}
        y={0}
        width={124}
        height={124}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={6} />
        <feGaussianBlur stdDeviation={15} result="blur" />
        <feFlood floodColor="#222b45" floodOpacity={0.102} />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g filter="url(#logout_svg__a)" />
    <g
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      data-name="Iconly/Two-tone/Logout"
    >
      <path
        data-name="Stroke 1"
        d="M64.6 52.62v-.732A2.888 2.888 0 0 0 61.708 49h-3.821A2.888 2.888 0 0 0 55 51.888v8.724a2.888 2.888 0 0 0 2.887 2.888h3.829a2.88 2.88 0 0 0 2.884-2.88v-.739"
      />
      <path data-name="Stroke 3" d="M69.922 56.25h-9.438" opacity={0.4} />
      <path
        data-name="Stroke 5"
        d="m67.626 53.965 2.295 2.285-2.295 2.285"
        opacity={0.4}
      />
    </g>
  </svg>
);

export default SvgLogout;
