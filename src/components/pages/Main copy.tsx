import { memo, VFC } from "react";
import { useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import bg from "../../images/bg.jpeg";
import { motion } from "framer-motion";

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
      <SMain
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1.1 }}
      >
        <SMask></SMask>
        <SMainBg
          animate={AnimateDefault}
          transition={TransitionDefault}
        ></SMainBg>
      </SMain>
    </SContainer>
  );
});

const SMask = styled.div`
  background-color: rgba(0, 153, 255, 0.3);
`;

const AnimateDefault = {
  scale: 1,
};

const TransitionDefault = {
  from: 1.5,
  repeat: Infinity,
  duration: 10,
  ease: "easeOut",
  delay: 1.5,
};

const SContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
`;

const SMain = styled(motion.div)`
  width: calc(100% - 80px);
  height: calc(95vh - 90px);
  overflow: hidden;
`;

const SMainBg = styled(motion.div)`
  width: calc(100%);
  height: calc(95vh - 90px);
  margin: 0 auto;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;
