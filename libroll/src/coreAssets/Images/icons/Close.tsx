import * as React from "react";
import { SVGProps } from "react";

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} {...props}>
    <rect
      data-name="Rectangle 479"
      width={22}
      height={22}
      rx={11}
      fill="#f1f3f4"
    />
    <g
      data-name="Group 1067"
      transform="translate(7.15 7.15)"
      fill="rgba(68,68,68,0.98)"
    >
      <rect
        data-name="Rectangle 787"
        width={9.899}
        height={0.99}
        rx={0.495}
        transform="rotate(45 .35 .845)"
      />
      <rect
        data-name="Rectangle 794"
        width={9.899}
        height={0.99}
        rx={0.495}
        transform="rotate(135 3.705 1.945)"
      />
    </g>
  </svg>
);

export default SvgClose;
