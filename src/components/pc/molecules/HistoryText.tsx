import { memo, VFC } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import { HistoryData } from "../../../data/HistoryData";

export const HistoryText: VFC = memo(() => {
  const { ref, inView } = useInView({
    // オプション
    threshold: [0.5, 1.0],
    triggerOnce: true,
  });

  return (
    <Timeline align="left" style={timeline} ref={ref}>
      {HistoryData.map((history, index) => (
        <STimelineItem inView={inView} delay={index / 5}>
          <TimelineOppositeContent style={oppositeContent}>
            <Typography align="left" style={leftTypography}>
              {history.yearMonth}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography color="textSecondary" style={rightTypography}>
              {history.text}
              <br />
              {history.lowerText}
            </Typography>
          </TimelineContent>
        </STimelineItem>
      ))}
    </Timeline>
  );
});

type StyleProps = {
  inView: boolean;
  delay: number;
};

const STimelineItem = styled(TimelineItem)<StyleProps>`
  opacity: 0;
  transition: all 1s ease;
  transition-delay: ${(props) => props.delay}s;
  transform: ${(props) =>
    props.inView ? "translateX(0)" : "translateX(10px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;

const timeline = {
  width: "100%",
};

const oppositeContent = {
  flex: "0",
};

const leftTypography = {
  width: "87px",
  fontSize: "0.8rem",
};

const rightTypography = {
  fontSize: "0.8rem",
};
