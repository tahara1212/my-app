import { VFC } from "react";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import history from "../../images/history.jpeg";
import { useInView } from "react-intersection-observer";

import { TitleTextContext } from "../../App";
import { HistoryText } from "../molecules/HistoryText";

export const History: VFC = () => {
  const { setTitle } = useContext(TitleTextContext);

  const { ref, inView } = useInView({
    // オプション
    threshold: [0.5, 1.0],
  });

  useEffect(() => {
    if (inView) {
      setTitle("History");
    }
  }, [inView, setTitle]);

  return (
    <SContainer>
      <SHistory ref={ref}>
        <SHistoryTextBox>
          <HistoryText />
        </SHistoryTextBox>
        <SHistoryImageBox>
          <SHistoryImage></SHistoryImage>
        </SHistoryImageBox>
      </SHistory>
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

const SHistory = styled.div`
  /* width: calc(100% - 80px);
  height: calc(95vh - 90px); */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const SHistoryTextBox = styled.div`
  width: 50%;
  height: 94%;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: whitesmoke;
  }
`;

const SHistoryImageBox = styled.div`
  width: 50%;
`;

const SHistoryImage = styled.div`
  /* width: 50%; */
  height: 80vh;
  opacity: 0.8;
  background-image: url(${history});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
`;
