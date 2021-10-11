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

import variable from "../../../css/variables.json";
import { TitleTextContext } from "../../../App";
import { Container } from "../../templates/Container";
import { SkilsData } from "../../../data/SkilsData";

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
          <Chart data={SkilsData}>
            <ArgumentAxis />
            <ValueAxis showLabels={false} />
            <BarSeries
              valueField="level"
              argumentField="skil"
              color={variable.subColor}
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
