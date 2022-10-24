import { css } from "@emotion/react";

import imageBackground from "../../assets/images/bg-header-mobile.svg";

const header = css`
  @keyframes header {
    0% {
      background-position: 50% 0%;
    }

    100% {
      background-position: 100% 0%;
    }
  }

  height: 156px;
  background-color: #132743;
  background-image: url(${imageBackground});
  animation: 20s linear infinite alternate none running header;
`;

export { header };
