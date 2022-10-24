import { wrap, buttonClear, wrapButtons } from "./styles";
import Filter from "../Filter/Filter";

const FilterBar = (props) => {
  const { filters, setFilters } = props;

  if (filters.length < 1) {
    return null;
  }

  return (
    <div css={wrap}>
      <div css={wrapButtons}>
        {filters.map((currentFilter, index) => (
          <Filter
            key={index + currentFilter}
            filters={filters}
            setFilters={setFilters}
            currentFilter={currentFilter}
          />
        ))}
      </div>

      <button
        css={buttonClear}
        onClick={() => {
          setFilters([]);
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default FilterBar;
