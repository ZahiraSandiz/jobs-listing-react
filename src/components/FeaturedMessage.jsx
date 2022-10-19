import { css } from "@emotion/react";

const FeaturedMessage = (props) => {
  const {text, background} = props

  const message = css`
  user-select: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.107692px;
  color: #effafa;
  padding: 7px 8px 3px;
  border-radius: 12px;
  background-color: ${background === "green" ? "#5ca5a5" : "#2b3939"};
`
  return(
    <div css={message}>{text}</div>
  )
}

export default FeaturedMessage