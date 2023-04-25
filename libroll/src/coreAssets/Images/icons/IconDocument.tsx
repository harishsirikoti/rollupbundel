import * as React from "react";
import { SVGProps } from "react";

const SvgIconDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16.5} height={19.2} {...props}>
    <g
      fill="none"
      stroke="#164ee2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      data-name="Iconly/Two-tone/Document"
    >
      <path data-name="Stroke 1" d="M11.586 13.774H4.957" opacity={0.4} />
      <path data-name="Stroke 2" d="M11.586 9.68H4.957" opacity={0.4} />
      <path data-name="Stroke 3" d="M7.486 5.596H4.957" opacity={0.4} />
      <path
        data-name="Stroke 4"
        d="M11.762.6H4.7C2.169.621.6 2.4.6 5.1v9c0 2.718 1.581 4.5 4.137 4.5H11.8c2.534-.017 4.1-1.793 4.1-4.5v-9c0-2.718-1.582-4.5-4.138-4.5Z"
      />
    </g>
  </svg>
);

export default SvgIconDocument;
