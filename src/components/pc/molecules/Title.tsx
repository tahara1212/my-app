import { memo, VFC } from "react";
import styled, { keyframes } from "styled-components";

type TitleProps = {
  title?: string;
};

export const Title: VFC<TitleProps> = memo((props) => {
  const { title } = props;

  return (
    <>
      <SVG width="280" height="280">
        <SCircle cx="140" cy="140" r="135" fill-opacity="0" />
      </SVG>
      <SMainText>{title}</SMainText>
    </>
  );
});

const SVG = styled.svg`
  position: fixed;
  background-color: rgba(244, 244, 244, 0.4);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 6;
`;

const KFCircle = keyframes`
  0% { stroke-dasharray: 0 848; }
  99% { stroke-dasharray: 848 848; }
`;

const SCircle = styled.circle`
  fill: transparent;
  stroke: black;
  stroke-width: 0.3;
  animation: ${KFCircle} 10s infinite ease-out;
`;

const KFMainText = keyframes`
  0% { opacity: 0;}
  100% { opacity: 0.9; }
`;

const SMainText = styled.p`
  z-index: 6;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: translate(-50%, -50%);
  font-size: 110px;
  font-family: "Allison", serif;
  opacity: 0;
  animation: ${KFMainText} 0.5s ease-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
`;
