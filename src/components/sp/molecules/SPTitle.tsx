import { memo, VFC } from "react";
import styled, { keyframes } from "styled-components";

type TitleProps = {
  title?: string;
};

export const SPTitle: VFC<TitleProps> = memo((props) => {
  const { title } = props;

  return (
    <STitle>
      <SVG width="140" height="140">
        <SCircle cx="70" cy="70" r="65" fill-opacity="0" />
      </SVG>
      <SMainText>{title}</SMainText>
    </STitle>
  );
});

const STitle = styled.div`
  position: fixed;
  top: 50vh;
  left: 50%;
  z-index: 6;
`;

const SVG = styled.svg`
  /* position: fixed; */
  background-color: rgba(244, 244, 244, 0.4);
  border-radius: 50%;
  /* top: 50%; */
  /* left: 50%; */
  transform: translate(-50%, -50%) rotate(-90deg);
  /* z-index: 6; */
`;

const KFCircle = keyframes`
  0% { stroke-dasharray: 0 533; }
  99% { stroke-dasharray: 533 533; }
`;

const SCircle = styled.circle`
  fill: transparent;
  stroke: black;
  stroke-width: 0.3;
  animation: ${KFCircle} 10s infinite ease-out;
`;

const KFMainText = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1; }
`;

const SMainText = styled.p`
  /* z-index: 6; */
  /* position: fixed; */
  /* top: 50%; */
  /* left: 50%; */
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  transform: translate(-50%, -50%);
  font-size: 58px;
  font-family: "Allison", serif;
  opacity: 0;
  animation: ${KFMainText} 0.5s ease-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
`;
