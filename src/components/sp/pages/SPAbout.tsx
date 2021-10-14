import { memo, VFC, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

import variable from "../../../css/variables.json";
import { TitleTextContext } from "../../../App";
import about from "../../../images/about.jpeg";
// import { Container } from "../../templates/Container";
import { SPContainer } from "../../templates/SPContainer";

export const SPAbout: VFC = memo(() => {
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
    <SPContainer id="About">
      <SAbout ref={ref}>
        <SAboutImageBox inView={inView}>
          <SAboutImage></SAboutImage>
        </SAboutImageBox>
        <SAboutTextBox ref={ref}>
          <SAboutText>
            <SAboutTitle inView={inView}>
              田原 隼併 / Shunpei Tahara
            </SAboutTitle>
            <SAboutSpan inView={inView}>1991年兵庫県生まれ</SAboutSpan>
          </SAboutText>
        </SAboutTextBox>
      </SAbout>
    </SPContainer>
  );
});

type StyleProps = {
  inView: boolean;
};

const SAbout = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  margin: 0 auto;
  position: relative;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

const SAboutTextBox = styled.div`
  /* width: 50%; */
  position: relative;
  width: 100%;
  height: 40vh;
  /* background-color: lightblue; */
  /* text-align: center; */
`;

const SAboutTitle = styled.h3<StyleProps>`
  font-size: 20px;
  font-weight: 400;
  transition: all 1s ease;
  transition-delay: 0.2s;
  transform: ${(props) => (props.inView ? "translateX(0)" : "translate(50px)")};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;

const SAboutSpan = styled.span<StyleProps>`
  display: inline-block;
  transition: all 1.1s ease;
  transition-delay: 0.2s;
  transform: ${(props) =>
    props.inView ? "translateX(0px)" : "translate(70px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;

const SAboutText = styled.p`
  font-size: 16px;
  overflow-wrap: break-word;
  width: 90%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SAboutImageBox = styled.div<StyleProps>`
  /* width: 50%; */
  height: 40vh;
  overflow: hidden;
  transition: all 1s ease;
  transform: ${(props) => (props.inView ? "scale(1)" : "scale(0.98)")};
  opacity: ${(props) => (props.inView ? 1 : 0)};
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
  height: 60vh;
  opacity: 0.8;
  background-image: url(${about});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* border-radius: 5px; */
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
