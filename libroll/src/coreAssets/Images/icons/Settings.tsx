import * as React from "react";
import { SVGProps } from "react";

const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={124} height={124} {...props}>
    <defs>
      <filter
        id="settings_svg__a"
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
    <g filter="url(#settings_svg__a)" />
    <g
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="translate(55.001 48)"
      data-name="Iconly/Two-tone/Setting"
    >
      <path d="m13.586 4.143-.486-.837a1.483 1.483 0 0 0-2.022-.546h0a1.476 1.476 0 0 1-2.018-.525 1.419 1.419 0 0 1-.2-.709h0A1.483 1.483 0 0 0 7.378 0h-.972a1.476 1.476 0 0 0-1.475 1.483h0a1.483 1.483 0 0 1-1.483 1.461 1.419 1.419 0 0 1-.709-.2h0a1.483 1.483 0 0 0-2.022.546L.2 4.143a1.483 1.483 0 0 0 .537 2.022h0a1.483 1.483 0 0 1 .742 1.285 1.483 1.483 0 0 1-.742 1.284h0A1.476 1.476 0 0 0 .2 10.749h0l.49.844a1.483 1.483 0 0 0 2.022.575h0a1.469 1.469 0 0 1 2.015.539 1.419 1.419 0 0 1 .2.709h0A1.483 1.483 0 0 0 6.406 14.9h.972a1.483 1.483 0 0 0 1.483-1.476h0a1.476 1.476 0 0 1 1.483-1.483 1.511 1.511 0 0 1 .709.2h0a1.483 1.483 0 0 0 2.022-.539h0l.511-.851a1.476 1.476 0 0 0-.539-2.022h0a1.476 1.476 0 0 1-.539-2.029 1.454 1.454 0 0 1 .539-.539h0a1.483 1.483 0 0 0 .539-2.015h0Z" />
      <circle
        cx={2.043}
        cy={2.043}
        transform="translate(4.853 5.406)"
        opacity={0.4}
        r={2.043}
      />
    </g>
  </svg>
);

export default SvgSettings;
