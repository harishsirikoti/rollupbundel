import * as React from "react";
import { SVGProps } from "react";

const SvgWave = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
    <path
      fill="#fadddd"
      d="m0 160 48 16c48 16 144 48 240 42.7 96-5.7 192-47.7 288-80 96-31.7 192-53.7 288-32 96 21.3 192 85.3 288 90.6 96 5.7 192-48.3 240-74.6l48-26.7V0H0Z"
    />
  </svg>
);

export default SvgWave;
