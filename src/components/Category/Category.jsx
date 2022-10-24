import { css } from "@emotion/react";

import { styleCategory, styleCategoryActive } from "./styles";

const Category = (props) => {
  const { text, filters, setFilters } = props;

  const active = filters.some((f) => {
    return text === f;
  });
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
