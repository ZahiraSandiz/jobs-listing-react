import { css } from "@emotion/react";

const wrap = css`
  margin-top: -36px;
  padding: 20px 19px;
  background-color: #ffffff;
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* display: none !important; */
  @media (min-width: 1024px) {
    padding: 4px 20px 4px 40px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  animation-duration: 0.5s;
`;

const buttonClear = css`
  user-select: none;
  font-family: "League Spartan", sans-serif;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #7c8f8f;
  padding: 10px 6px 10px 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.123077px;
  text-decoration: none;
  text-decoration-color: transparent;
  transition: all 0.6s;

  &:hover {
    color: #5ca5a5;
    text-decoration: underline;
  }

  @media (min-width: 1024px) {
    padding: 20px;
  }
`;

const wrapButtons = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export { wrap, buttonClear, wrapButtons };
