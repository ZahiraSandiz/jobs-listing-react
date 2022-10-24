import { css } from "@emotion/react";

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box !important;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  body {
    min-width: 330px;
    font-family: "League Spartan", sans-serif;
    font-weight: 500;
    font-size: 15px;
    background-color: #ffcbcb4d;
    -webkit-font-smoothing: antialiased;
  }
`;

export { styles };
