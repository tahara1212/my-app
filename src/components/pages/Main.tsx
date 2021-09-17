import { memo, VFC } from "react";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import bg from "../../images/bg.jpg";
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
    <SContainer>
      <SMain ref={ref}>
        <SMainBg
          animate={AnimateDefault}
          transition={TransitionDefault}
        ></SMainBg>
      </SMain>
    </SContainer>
  );
});

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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
`;

const SMain = styled.div`
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
