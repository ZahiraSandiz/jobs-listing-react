import { css } from "@emotion/react";
import Category from "./Category";

const list = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 1024px) {
    margin-left: auto;
    max-width: 40%;
  }
`;

const CategoriesList = (props) => {
  const { role, level, languages, tools, filters, setFilters } = props;

  return (
    <section css={list}>
      <Category text={role} filters={filters} setFilters={setFilters} />

      <Category text={level} filters={filters} setFilters={setFilters} />

      {languages.map((element, index) => {
        return (
          <Category
            key={index}
            text={element}
            filters={filters}
            setFilters={setFilters}
          />
        );
      })}

      {tools.map((element, index) => {
        return (
          <Category
            key={index}
            text={element}
            filters={filters}
            setFilters={setFilters}
          />
        );
      })}
    </section>
  );
};

export default CategoriesList;
