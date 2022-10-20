import { styleFilter, category, deleteCategory } from "./styles";

const Filter = (props) => {
  const { filter } = props;

  return (
    <div css={styleFilter}>
      <span css={category}>{filter}</span>
      <button css={deleteCategory}></button>
    </div>
  );
};

export default Filter;
