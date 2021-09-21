import { memo, VFC } from "react";
import { useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import bg from "../../images/bg.jpeg";

import { useInView } from "react-intersection-observer";
import { TitleTextContext } from "../../App";

export const Main: VFC = memo(() => {
  const { setTitle } = useContext(TitleTextContext);

  const { ref, inView } = useInView({
    // オプション
    threshold: [0.5, 1.0],
  });

  useEffect(() => {
    if (inView) {
      setTitle("Welcome");
    }
  }, [inView, setTitle]);

  return (
    <SContainer id="Main">
      <SMain ref={ref}>
        <SMask></SMask>
        <SMainBg></SMainBg>
      </SMain>
    </SContainer>
  );
});

const SMask = styled.div`
  background-color: rgba(0, 153, 255, 0.3);
`;

const SContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
  overflow: hidden;
`;

const KFMain = keyframes`
0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.1% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    /* transform: scale(1); */
  }
`;

const SMain = styled.div`
  width: calc(100% - 80px);
  height: calc(95vh - 90px);
  overflow: hidden;
  animation-name: ${KFMain};
  animation-duration: 0.8s;
  /* animation-timing-function: ease-out; */
  /* animation-delay: 2s; */
`;

const KFMainBg = keyframes`
  0% {transform: scale(1) rotate(0deg);}
  100% {transform: scale(1.5) rotate(15deg);}
`;

const SMainBg = styled.div`
  width: calc(100%);
  height: calc(95vh - 90px);
  margin: 0 auto;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  animation: ${KFMainBg};
  animation-duration: 10s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
`;
