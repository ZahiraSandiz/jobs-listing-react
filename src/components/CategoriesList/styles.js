import { css } from "@emotion/react";

const list = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 1024px) {
    margin-left: auto;
    max-width: 40%;
  }
`;

export { list };
