import { VFC } from "react";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import { TitleTextContext } from "../../App";
import about from "../../images/about.jpeg";

export const About: VFC = () => {
  // console.log("about");
  const { setTitle } = useContext(TitleTextContext);

  const { ref, inView } = useInView({
    // オプション
    // rootMargin: "-400px", // ref要素が現れてから50px過ぎたら
    threshold: [0.5, 1.0],
  });

  useEffect(() => {
    if (inView) {
      setTitle("About");
    }
  }, [inView, setTitle]);

  return (
    <SContainer>
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
    </SContainer>
  );
};

const SContainer = styled.div`
  /* width: 100%;
  height: 1800px; */
  width: calc(100% - 80px);
  height: calc(95vh - 90px);
  background-color: whitesmoke;
  margin: 0 auto;
  position: relative;
  margin-bottom: 10vh;
`;

const SAbout = styled.div`
  /* width: calc(100% - 80px);
  height: calc(95vh - 90px); */
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
`;

const SAboutImage = styled.div`
  /* width: 50%; */
  height: 80vh;
  opacity: 0.8;
  background-image: url(${about});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
`;
