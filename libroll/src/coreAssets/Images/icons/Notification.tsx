import * as React from "react";
import { SVGProps } from "react";

const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={124} height={124} {...props}>
    <defs>
      <filter
        id="notification_svg__a"
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
    <g filter="url(#notification_svg__a)" />
    <g
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      data-name="Iconly/Two-tone/Notification"
    >
      <path d="M56 57.014v-.168a2.753 2.753 0 0 1 .46-1.391 3.724 3.724 0 0 0 .913-1.769c0-.51 0-1.027.045-1.536.23-2.45 2.656-4.15 5.052-4.15h.06c2.4 0 4.823 1.7 5.06 4.15.045.51 0 1.027.037 1.536a3.789 3.789 0 0 0 .913 1.777 2.681 2.681 0 0 1 .46 1.383v.16a2.727 2.727 0 0 1-.645 1.827 3.445 3.445 0 0 1-2.181 1.048 34.471 34.471 0 0 1-7.352 0 3.483 3.483 0 0 1-2.183-1.047 2.756 2.756 0 0 1-.639-1.82Z" />
      <path
        d="M60.63 62.416a2.34 2.34 0 0 0 1.558.862 2.361 2.361 0 0 0 1.721-.476 2.207 2.207 0 0 0 .401-.386"
        opacity={0.4}
      />
    </g>
  </svg>
);

export default SvgNotification;
