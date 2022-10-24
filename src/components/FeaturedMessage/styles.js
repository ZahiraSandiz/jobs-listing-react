import { css } from "@emotion/react";

const getMessageStyles = (background) => {
  return css`
    user-select: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.107692px;
    color: #f1f7ff;
    padding: 7px 8px 3px;
    border-radius: 12px;
    background-color: ${background === "new" ? "#93c1fa" : "#132743"};
  `;
};

export { getMessageStyles };
