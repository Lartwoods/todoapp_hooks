import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const handleStartPause = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
    setIsRunning((prevState) => !prevState);
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const formattedTime = `${hrs < 10 ? '0' + hrs : hrs}:${
      mins < 10 ? '0' + mins : mins
    }:${secs < 10 ? '0' + secs : secs}`;

    return formattedTime;
  };

  const formattedTime = formatTime(elapsedTime);

  return (
    <span className="timer-wrapper">
      <button
        className="icon icon-play"
        onClick={(event) => {
          event.stopPropagation();
          handleStartPause();
        }}
      >
        {isRunning ? '⏸' : '▶'}
      </button>
      {formattedTime}
    </span>
  );
}

export default Timer;
