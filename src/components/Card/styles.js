import { css } from "@emotion/react";

const image = css`
  user-select: none;
  width: 48px;
  height: 48px;
  position: absolute;
  top: -24px;
  margin-bottom: 8px;

  @media (min-width: 1024px) {
    width: 88px;
    height: 88px;
    position: static;
    margin-bottom: 0;
    margin-right: 24px;
  }
`;

const wrapInformation = css`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-right: 48px;

  @media (min-width: 1024px) {
    gap: 7px;
    margin: 0;
  }
`;

const headerCard = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const companyName = css`
  color: #132743;
  font-weight: 700;
  font-size: 13px;
  line-height: 12px;
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 17px;
  }
`;

const wrapFeaturedMessages = css`
  gap: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const stylePosition = css`
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  color: #143565e3;
  transition: all 0.3s;

  &:hover {
    color: #132743;
  }

  @media (min-width: 1024px) {
    margin-top: 3px;
    font-size: 22px;
  }
`;

const moreInformation = css`
  font-family: "League Spartan";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.123077px;
  color: #566377;
  padding-right: 25px;
  min-width: 215px;
  max-width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    font-size: 18px;
    letter-spacing: -0.138462px;
    min-width: unset;
    max-width: unset;
    padding-right: 0px;
    gap: 16px;
  }
`;

const point = css`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #8f9bae;
`;

const line = css`
  margin: 15px 0 16px;
  height: 1px;
  background-color: #8f9bae;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const getJobCardStyles = (featured) => {
  return css`
    border-left: ${featured === true ? "5px solid #132743" : ""};
    padding: 32px 24px 24px;
    position: relative;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
    border-radius: 5px;

    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      padding: 31px 3.6%;
      align-items: center;
    }

    @keyframes flipInX {
      from {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 80deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 20deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
      }

      40% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -10deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -10deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }

      60% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 5deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 5deg);
        opacity: 1;
      }

      to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
      }
    }
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipInX;
    animation-duration: 1s;
    animation-name: flipInX;
  `;
};

export {
  image,
  wrapInformation,
  headerCard,
  companyName,
  wrapFeaturedMessages,
  stylePosition,
  moreInformation,
  point,
  line,
  getJobCardStyles,
};
