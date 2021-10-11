import { memo, VFC } from "react";
import styled, { keyframes } from "styled-components";

export const MainMask: VFC = memo(() => {
  return <SMask></SMask>;
});

const KFMask = keyframes`
    0% {
        opacity:1;
        transform: translateY(0px);
    }
    50% {
        opacity:1;
    }
    100% {
        opacity:0;
        transform: translateY(-100vh);
    }
`;

const SMask = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  animation-name: ${KFMask};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;
