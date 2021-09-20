import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function useWatchs(interval: number) {
  const [time, updateTime] = useState(Date.now());

  useEffect(() => {
    const times = setTimeout(() => updateTime(Date.now()), interval);
    return () => {
      clearTimeout(times);
    };
  }, [time]); // eslint-disable-line react-hooks/exhaustive-deps

  return time;
}

export const Time = () => {
  const time = useWatchs(1000);

  return (
    <div>
      <p>{dayjs(time).format("ss")}</p>
    </div>
  );
};
