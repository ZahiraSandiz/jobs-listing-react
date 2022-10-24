import { getMessageStyles } from "./styles";

const FeaturedMessage = (props) => {
  const { text, background } = props;

  return <div css={getMessageStyles(background)}>{text}</div>;
};

export default FeaturedMessage;
