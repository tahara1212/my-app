import { memo, VFC } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";

import { HistoryData } from "../../../data/HistoryData";

export const SPHistoryText: VFC = memo(() => {
  return (
    <Timeline align="left">
      {HistoryData.map((history, index) => (
        <TimelineItem>
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
        </TimelineItem>
      ))}
    </Timeline>
  );
});

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
