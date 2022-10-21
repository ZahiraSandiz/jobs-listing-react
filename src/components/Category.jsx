import { css } from "@emotion/react";

const styleCategory = css`
  user-select: none;
  height: 32px;
  color: #5ca5a5;
  background-color: #eff6f6;
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
    background-color: #5ca5a5;
  }
`;

const Category = (props) => {
  const { text, filters, setFilters } = props;

  const active = filters.some((f) => {
    return text === f;
  });

  const styleCategoryActive = css`
    cursor: default;
    background: #5ca5a5;
    color: #eff6f6;
  `;

  const stylesArray = [styleCategory];

  if (active) {
    stylesArray.push(styleCategoryActive);
  }

  return (
    <span
      css={stylesArray}
      onClick={() => {
        if (active) {
          return;
        }
        setFilters([...filters, text]);
      }}
    >
      {text}
    </span>
  );
};

export default Category;
