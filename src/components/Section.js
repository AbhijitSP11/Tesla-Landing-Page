import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";

function Section({
  model,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  //Check the props passed

  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{model}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <Left>{leftBtnText}</Left>
            {rightBtnText && <Right>{rightBtnText}</Right>}
          </ButtonGroup>
          <WrapperArrow>
            <DownArrow src="/images/down-arrow.svg" />
          </WrapperArrow>
        </Buttons>
      </Fade>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  display: flex;
  width: 256px;
  height: 40px;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const Right = styled(Left)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const WrapperArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
