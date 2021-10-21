import { memo, VFC } from "react";
import { useContext, useEffect } from "react";
import styled from "styled-components";

import works01 from "../../../images/works01.png";
import works02 from "../../../images/works02.png";
import works03 from "../../../images/works03.png";
import works04 from "../../../images/works04.png";
import { useInView } from "react-intersection-observer";
import { TitleTextContext } from "../../../App";
import { SPContainer } from "../templates/SPContainer";

import { WorksData } from "../../../data/WorksData";

export const SPWorks: VFC = memo(() => {
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
    <SPContainer id="Works">
      <SWorks ref={ref}>
        {WorksData.map((works, index) => (
          <SFigure inView={inView} delay={index / 5}>
            <SImg src={images[index]} alt={works.alt} />
            <a href={works.link} target="_blank" rel="noreferrer">
              <Sfigcaption>
                <SH2>{works.heading}</SH2>
                <SP>
                  {works.text}
                  <br />
                  {works.lowerText}
                </SP>
              </Sfigcaption>
            </a>
          </SFigure>
        ))}
      </SWorks>
    </SPContainer>
  );
});

type StyleProps = {
  inView: boolean;
  delay: number;
};

const SWorks = styled.div`
  width: 100%;
`;

const SFigure = styled.figure<StyleProps>`
  position: relative;
  width: 100%;
  height: 20vh;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  transition: all 1s ease;
  transition-delay: ${(props) => props.delay}s;
  transform: ${(props) => (props.inView ? "translateY(0)" : "translateY(5vh)")};
  opacity: ${(props) => (props.inView ? 1 : 0)};
  margin-bottom: 1vh;

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
    pointer-events: none;
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
      background-color: rgba(70, 130, 180, 0.8);
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
  background-color: rgba(70, 130, 180, 0.3);
  backface-visibility: hidden;
  transition: background-color 0.55s;
  color: #fff;
  font-size: 11px;
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
