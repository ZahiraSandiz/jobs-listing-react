import { css } from "@emotion/react";

const styleCategory = css`
  user-select: none;
  height: 32px;
  color: #132743;
  background-color: #dfedff73;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px 0 0 4px;
  padding: 5px 11px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    color: #ffffff;
    background-color: #143565e3;
  }
`;

const styleCategoryActive = css`
  cursor: default;
  background: #143565e3;
  color: #dfedff;
`;

export { styleCategory, styleCategoryActive };
