import { styleFilter, category, deleteCategory } from "./styles";

const Filter = (props) => {
  const { filters, setFilters, currentFilter } = props;

  return (
    <div css={styleFilter}>
      <span css={category}>{currentFilter}</span>
      <button
        css={deleteCategory}
        onClick={() => {
          const result = filters.filter((f) => f !== currentFilter);
          setFilters(result);
        }}
      ></button>
    </div>
  );
};

export default Filter;
