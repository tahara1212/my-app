import { memo, useEffect, useState, VFC } from "react";
import styled from "styled-components";

export const Time: VFC = memo(() => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(time + 10);
    }, 10000);
    return () => clearInterval(id);
  }, [time]);

  return (
    <STime>
      <p>{time}s</p>
    </STime>
  );
});

const STime = styled.div`
  width: 5%;
  text-align: right;
`;
