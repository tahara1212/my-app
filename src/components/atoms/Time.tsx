import { memo, useEffect, useState, VFC } from "react";

export const Time: VFC = memo(() => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(time + 10);
    }, 10000);
    return () => clearInterval(id);
  }, [time]);

  return (
    <div>
      <p>{time}s</p>
    </div>
  );
});
