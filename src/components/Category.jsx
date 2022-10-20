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
// Si la categoria fue clickeada (seleccionada) ahi van estos estilos...
// .categories-list > .category--selected {
//   cursor: default;
//   background: #5ca5a5;
//   color: #eff6f6;
// }

const Category = (props) => {
  const { text, filters, setFilters } = props;
  return (
    <span
      css={styleCategory}
      onClick={() => {
        setFilters([...filters, text]);
      }}
    >
      {text}
    </span>
  );
};

export default Category;
