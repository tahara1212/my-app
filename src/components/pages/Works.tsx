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

export const Works: VFC = memo(() => {
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
    <Container>
      <SWorks ref={ref}>
        <SFigure>
          <SImg src={works01} alt="work1" />
          <Sfigcaption>
            <SH2>React + Gatsby</SH2>
            <SP>
              Gatsby.jsを使用したポートフォリオサイト。
              <br />
              HTML5 UPのテンプレートを使用。
            </SP>
          </Sfigcaption>
        </SFigure>
        <SFigure>
          <SImg src={works02} alt="work2" />
          <Sfigcaption>
            <SH2>React + TypeScript</SH2>
            <SP>
              TypeScriptを使用したユーザー管理アプリ。
              <br />
              フロントのみの実装。ID1~10でログイン。
            </SP>
          </Sfigcaption>
        </SFigure>
        <SFigure>
          <SImg src={works03} alt="work3" />
          <Sfigcaption>
            <SH2>Framer Motion & React Reveal</SH2>
            <SP>
              Gatsby.jsを使用したポートフォリオサイト。
              <br />
              HTML5 UPのテンプレートを使用。
            </SP>
          </Sfigcaption>
        </SFigure>
        <SFigure>
          <SImg src={works04} alt="work4" />
          <Sfigcaption>
            <SH2>React + Gatsby</SH2>
            <SP>
              Gatsby.jsを使用したポートフォリオサイト。
              <br />
              HTML5 UPのテンプレートを使用。
            </SP>
          </Sfigcaption>
        </SFigure>
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
      background-color: rgba(46, 28, 117, 0.5);
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
  background-color: rgba(46, 28, 117, 0.2);
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
