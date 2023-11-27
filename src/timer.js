import React, { useState, useRef } from 'react';

const MyTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);
  const savedTimerRef = useRef(0);

  const startTimer = () => {
    if (!isActive) {
      intervalRef.current = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
      setIsActive(true);
    }
  };

  const pauseTimer = () => {
    if (isActive) {
      clearInterval(intervalRef.current);
      savedTimerRef.current = timer;
      setIsActive(false);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
    savedTimerRef.current = 0;
    setIsActive(false);
  };

  const resumeTimer = () => {
    if (!isActive) {
      setTimer(savedTimerRef.current);
      intervalRef.current = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
      setIsActive(true);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h2>Timer: {formatTime(timer)}</h2>
      <div>
        {/* {!isActive ? ( */}
          <button onClick={startTimer}>Start</button>
        {/* ) : ( */}
          <>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resumeTimer}>Resume</button>
          </>
        {/* )} */}
      </div>
    </div>
  );
};

export default MyTimer;
