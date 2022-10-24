import { css } from "@emotion/react";

const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 56px;
  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

export { container };
