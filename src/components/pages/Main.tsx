import { VFC } from "react";
import { useContext } from "react";
import styled from "styled-components";
import bg from "../../images/bg.jpg";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { TitleTextContext } from "../../App";

export const Main: VFC = () => {
  const { setTitle } = useContext(TitleTextContext);

  const { ref, inView } = useInView({
    // オプション
    threshold: [0.5, 1.0],
  });
  return (
    <SContainer>
      <SMain ref={ref}>
        {inView && setTitle("Welcome")}
        <SMainBg
          animate={AnimateDefault}
          transition={TransitionDefault}
        ></SMainBg>
      </SMain>
    </SContainer>
  );
};

const AnimateDefault = {
  scale: 1,
};

const TransitionDefault = {
  from: 1.5,
  repeat: Infinity,
  duration: 10,
  ease: "easeOut",
};

const SContainer = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* background-color: black; */
  display: flex;
  justify-content: center; /*左右中央揃え*/
  align-items: center; /*上下中央揃え*/
  margin-bottom: 10vh;
`;

const SMain = styled.div`
  width: calc(100% - 80px);
  height: calc(95vh - 90px);
  overflow: hidden;
  /* background-color: blue; */
`;

const SMainBg = styled(motion.div)`
  width: calc(100%);
  height: calc(95vh - 90px);
  /* background-color: white; */
  margin: 0 auto;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* transform: scale(1); */
  overflow: hidden;
`;
