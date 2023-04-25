import * as React from "react";
import { SVGProps } from "react";

const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={77} height={62} {...props}>
    <g data-name="Group 2" transform="translate(-740 -499)">
      <path data-name="Polygon 1" d="m778.5 499 38.5 62h-77Z" fill="#f9d2d2" />
      <circle
        data-name="Ellipse 2"
        cx={18}
        cy={18}
        r={18}
        transform="translate(761 520)"
        fill="#fce8e8"
      />
      <g
        data-name="Group 1"
        transform="translate(778.497 524.17)"
        fill="#e02020"
      >
        <rect
          data-name="Rectangle 1"
          width={2}
          height={21}
          rx={1}
          transform="translate(-.497 -.17)"
        />
        <rect
          data-name="Rectangle 2"
          width={2}
          height={3}
          rx={1}
          transform="translate(-.497 21.83)"
        />
      </g>
    </g>
  </svg>
);

export default SvgWarning;
