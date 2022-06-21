import { useState, useEffect } from 'react';

export const useSetTime = ({ duration, startAt = 0 }) => {
  const [displayTime, setDisplayTime] = useState(startAt);

  const timeLoop = (time) => {
    const timeSec = time / 1000;
    const isCompleted = timeSec >= duration;

    setDisplayTime(isCompleted ? duration : timeSec);

    if (!isCompleted) {
      requestAnimationFrame(timeLoop);
    }
  };

  useEffect(() => {
    requestAnimationFrame(timeLoop);
  }, []);
  return { displayTime };
};
