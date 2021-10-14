import { memo, useContext, useEffect, VFC } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// import variable from "../../../css/variables.json";
import { TitleTextContext } from "../../../App";
// import { Container } from "../../templates/Container";
// import { SkilsData } from "../../../data/SkilsData";
import { SPContainer } from "../../templates/SPContainer";

//表示させたいデータ群
const dataRadar = [
  { rank: "Markup", value: 75 },
  { rank: "FrontEnd", value: 70 },
  { rank: "BackEnd", value: 65 },
  { rank: "ServerSide", value: 50 },
  { rank: "Design", value: 35 },
];

export const SPSkils: VFC = memo(() => {
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
    <SPContainer id="Skils">
      <SSkils ref={ref}>
        {inView && (
          <ResponsiveContainer>
            <RadarChart // レーダーチャートのサイズや位置、データを指定
              height={400} //レーダーチャートの全体の高さを指定
              width={500} //レーダーチャートの全体の幅を指定
              cx="50%" //要素の左を基準に全体の50%移動
              cy="50%" //要素の上を基準に全体の50%移動
              data={dataRadar} //ここにArray型のデータを指定
            >
              <PolarGrid />
              <PolarAngleAxis
                dataKey="rank" //Array型のデータの、数値を表示したい値のキーを指定
              />
              <Radar //レーダーの色や各パラメーターのタイトルを指定
                name="ability" //hoverした時に表示される名前を指定
                dataKey="value" //Array型のデータのパラメータータイトルを指定
                stroke="#8884d8" //レーダーの線の色を指定
                fill="#8884d8" //レーダーの中身の色を指定
                fillOpacity={0.6} //レーダーの中身の色の薄さを指定
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        )}
      </SSkils>
    </SPContainer>
  );
});

const SSkils = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -56%);
  font-size: 1.8vw;
`;
