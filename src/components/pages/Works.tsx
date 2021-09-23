import { memo, VFC } from "react";
import { useContext, useEffect } from "react";
import styled from "styled-components";

import works01 from "../../images/works01.jpg";
import works02 from "../../images/works02.png";
import works03 from "../../images/works03.jpeg";
import works04 from "../../images/works04.jpeg";
import { useInView } from "react-intersection-observer";
import { TitleTextContext } from "../../App";
import { Container } from "../templates/Container";
import { WorksData } from "../../data/WorksData";

export const Works: VFC = memo(() => {
  const images = [works01, works02, works03, works04];
  const { setTitle } = useContext(TitleTextContext);
  const { ref, inView } = useInView({
    // オプション
    threshold: [0.5, 1.0],
  });

  useEffect(() => {
    if (inView) {
      setTitle("Works");
    }
  }, [inView, setTitle]);

  return (
    <Container id="Works">
      <SWorks ref={ref}>
        {WorksData.map((works, index) => (
          <SFigure>
            <SImg src={images[index]} alt={works.alt} />
            <Sfigcaption>
              <SH2>{works.heading}</SH2>
              <SP>
                {works.text}
                <br />
                {works.lowerText}
              </SP>
            </Sfigcaption>
          </SFigure>
        ))}
      </SWorks>
    </Container>
  );
});

const SFigure = styled.figure`
  position: relative;
  width: 35%;
  height: 40%;
  cursor: pointer;
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    border: 1px solid #fff;
    opacity: 0.2;
    transform: scale(0);
    transition: opacity 0.55s, transform 0.55s;
    z-index: 1;
  }

  &:hover {
    &::before {
      opacity: 1;
      transform: scale(1);
    }
    & img {
      transform: scale(1.2);
    }
    & figcaption {
      /* background-color: rgba(96, 74, 185, 0.6); */
      background-color: rgba(135, 206, 235, 0.9);
    }

    & h2 {
      transform: translate(-50%, -150%);
    }

    & p {
      opacity: 1;
      transform: translate(-50%, -10%) scale(1);
    }
  }
`;

const SImg = styled.img`
  max-width: 100%;
  min-height: 100%;
  transform: scale(1);
  transition: transform 0.55s;
`;

const Sfigcaption = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(62, 53, 97, 0.2); */
  background-color: rgba(135, 206, 235, 0.3);
  backface-visibility: hidden;
  transition: background-color 0.55s;
  color: #fff;
`;

const SH2 = styled.h2`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.55s;
`;

const SP = styled.p`
  opacity: 0;
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.55s, opacity 0.8s;
  font-family: "KleeOne", serif;
`;

const SWorks = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  align-items: center;
`;
