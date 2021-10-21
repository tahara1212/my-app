import { memo, VFC } from "react";
import styled, { keyframes } from "styled-components";

type TitleProps = {
  title?: string;
};

export const SPTitle: VFC<TitleProps> = memo((props) => {
  const { title } = props;

  return (
    <STitle>
      <SVG width="120" height="120">
        <SCircle cx="60" cy="60" r="55" fill-opacity="0" />
      </SVG>
      <SMainText>{title}</SMainText>
    </STitle>
  );
});

const STitle = styled.div`
  position: fixed;
  top: 50vh;
  left: 50%;
  z-index: 3;
`;

const SVG = styled.svg`
  background-color: rgba(244, 244, 244, 0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
`;

const KFCircle = keyframes`
  0% { stroke-dasharray: 0 338; }
  99% { stroke-dasharray: 338 338; }
`;

const SCircle = styled.circle`
  fill: transparent;
  stroke: black;
  stroke-width: 0.3;
  animation: ${KFCircle} 10s infinite linear;
`;

const KFMainText = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1; }
`;

const SMainText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-family: "Allison", serif;
  opacity: 0;
  animation: ${KFMainText} 0.5s ease-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
`;
