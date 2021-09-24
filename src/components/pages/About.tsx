import { memo, VFC, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

import variable from "../../css/variables.json";
import { TitleTextContext } from "../../App";
import about from "../../images/about.jpeg";
import { Container } from "../templates/Container";

export const About: VFC = memo(() => {
  const { setTitle } = useContext(TitleTextContext);

  const { ref, inView } = useInView({
    // オプション
    threshold: [0.5, 1.0],
  });

  useEffect(() => {
    if (inView) {
      setTitle("About");
    }
  }, [inView, setTitle]);

  return (
    <Container id="About">
      <SAbout ref={ref}>
        <SAboutImageBox>
          <SAboutImage></SAboutImage>
        </SAboutImageBox>
        <SAboutTextBox>
          <SAboutText>
            <SAboutTitle>田原 隼併 / Shunpei Tahara</SAboutTitle>
            <br />
            1991年兵庫県生まれ
          </SAboutText>
        </SAboutTextBox>
      </SAbout>
    </Container>
  );
});

const SAbout = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
`;

const SAboutTextBox = styled.div`
  width: 50%;
  position: relative;
`;

const SAboutTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

const SAboutText = styled.p`
  font-size: 18px;
  overflow-wrap: break-word;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -50%);
`;

const SAboutImageBox = styled.div`
  width: 50%;
  height: 80vh;
  overflow: hidden;
`;

const KFAboutImage = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  100% {
    transform: scale(1.5) rotate(20deg);
  }
`;

const SAboutImage = styled.div`
  height: 80vh;
  opacity: 0.8;
  background-image: url(${about});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  position: relative;
  /* animation: ${KFAboutImage} 13s infinite; */
  &::before {
    content: "";
    background-color: ${variable.maskColor};
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.1;
  }
`;
