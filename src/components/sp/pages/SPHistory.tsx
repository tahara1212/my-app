import { memo, VFC } from "react";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import { TitleTextContext } from "../../../App";
import { SPContainer } from "../templates/SPContainer";
import { SPHistoryText } from "../molecules/SPHistoryText";

export const SPHistory: VFC = memo(() => {
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
    <SPContainer id="History">
      <SHistory ref={ref}>
        <SHistoryTextBox>
          <SPHistoryText />
        </SHistoryTextBox>
      </SHistory>
    </SPContainer>
  );
});

const SHistory = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const SHistoryTextBox = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: auto;
`;
