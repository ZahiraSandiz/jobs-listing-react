import { css } from "@emotion/react";

const styleFilter = css`
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  display: flex;
  animation-duration: 0.6s;
  animation-name: fadeInDown;
`;

const category = css`
  user-select: none;
  height: 32px;
  color: #132743;
  background-color: #dfedff73;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px 0 0 4px;
  padding: 5px 11px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const deleteCategory = css`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border: none;
  background-color: #143565e3;
  border-radius: 0 4px 4px 0;
  position: relative;
  transition: all 0.3s;

  &:hover {
    background: #132743;
  }

  :before,
  :after {
    content: "";
    position: absolute;
    width: 16px;
    height: 3px;
    background-color: white;
    top: 15px;
  }
  :before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    left: 8px;
  }
  :after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
    right: 8px;
  }
`;

export { styleFilter, deleteCategory, category };
