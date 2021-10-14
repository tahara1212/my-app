import { memo, VFC } from "react";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

// import variable from "../../../css/variables.json";
// import history from "../../../images/history.jpeg";
import { TitleTextContext } from "../../../App";
// import { HistoryText } from "../molecules/HistoryText";
// import { Container } from "../../templates/Container";
import { SPContainer } from "../../templates/SPContainer";
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
  /* height: 100%; */
  /* display: flex; */
  /* justify-content: space-between; */
  margin: 0 auto;
  position: relative;
  /* padding-top: 3vh; */
`;

const SHistoryTextBox = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: auto;
`;

// const SHistoryImageBox = styled.div<StyleProps>`
//   width: 100%;
//   height: 40vh;
//   overflow: hidden;
//   transition: all 1s ease;
//   transform: ${(props) => (props.inView ? "scale(1)" : "scale(0.98)")};
//   opacity: ${(props) => (props.inView ? 1 : 0)};
// `;

// const KFHistoryImage = keyframes`
//   0% {
//     transform: scale(1.7) translate(0,14vh) rotate(0deg);
//   }
//   100% {
//     transform: scale(1.7) translate(-6vw,-14vh) rotate(10deg);
//   }
// `;

// const SHistoryImage = styled.div`
//   height: 40vh;
//   opacity: 0.8;
//   background-image: url(${history});
//   background-position: top 10% right 90%;
//   background-repeat: no-repeat;
//   background-size: cover;
//   border-radius: 5px;
//   transform: scale(1.5);
//   animation: ${KFHistoryImage} 30s infinite alternate;
//   &::before {
//     content: "";
//     background-color: ${variable.maskColor};
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     opacity: 0.1;
//   }
// `;
