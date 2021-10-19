import styled, { keyframes } from "styled-components";

import { VFC } from "react";

export const Loader: VFC = () => {
  return (
    <SLoader>
      <STextArea>
        <SPuff>sT</SPuff>
      </STextArea>
    </SLoader>
  );
};

const SLoader = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  /* position: relative; */
  /* overflow: hidden; */
  z-index: 99;
`;

const KFTextArea = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const STextArea = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  /* top: 50vh; */
  left: 50%;
  transform: translate(-50%, -50%);
  color: gray;
  line-height: 60px;
  overflow: hidden;
  animation-name: ${KFTextArea};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

const KFP = keyframes`
  0% {transform: translateY(0);}
  100% {transform: translateY(-100px);}
`;

const SPuff = styled.h1`
  font-size: 56px;
  animation-name: ${KFP};
  animation-duration: 1s;
  animation-delay: 2s;
  position: absolute;
`;
