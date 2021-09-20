import { memo, useContext, useEffect, VFC } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-bootstrap4";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import { Animation } from "@devexpress/dx-react-chart";

import { TitleTextContext } from "../../App";
import { Container } from "../templates/Container";

const data = [
  { skil: "HTML&CSS", level: 6.382 },
  { skil: "Sass", level: 5.83 },
  { skil: "MySQL", level: 3.882 },
  { skil: "PostgreSQL", level: 3.182 },
  { skil: "AWS", level: 1.44 },
  { skil: "PHP", level: 5.31 },
  { skil: "Swift", level: 0.858 },
  { skil: "Java", level: 1.68 },
  { skil: "JavaScript", level: 6.2 },
  { skil: "JQuery", level: 5.8 },
  { skil: "React.js", level: 4.182 },
  { skil: "TypeScript", level: 2.862 },
  { skil: "Gatsby.js", level: 2.262 },
  { skil: "Node.js", level: 1.82 },
  { skil: "Linux", level: 5.727 },
  { skil: "Apache", level: 5.11 },
  { skil: "Git", level: 4.33 },
  { skil: "Photoshop", level: 1.93 },
  { skil: "Illustrator", level: 0.93 },
];

export const Skils: VFC = memo(() => {
  const { setTitle } = useContext(TitleTextContext);

  const { ref, inView } = useInView({
    // オプション
    threshold: [0.5, 1.0],
  });

  useEffect(() => {
    if (inView) {
      setTitle("Skils");
    }
  }, [inView, setTitle]);

  return (
    <Container id="Skils">
      <SSkils ref={ref}>
        {inView && (
          <Chart data={data}>
            <ArgumentAxis />
            <ValueAxis showLabels={false} />
            <BarSeries
              valueField="level"
              argumentField="skil"
              color="lightgray"
              barWidth={0.5}
            />
            <Animation />
          </Chart>
        )}
      </SSkils>
    </Container>
  );
});

const SSkils = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
`;
