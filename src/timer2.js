//import React, { useState, useRef } from 'react';
import React, { useState, useRef } from 'react';


const MyTimer1 = () => {

    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [intervalRef] = useRef(null);
    const [savedTImeRef] = useRef(0)
  
  
    const startTimer = () =>{
      intervalRef.current = setInterval( ()=>{
        setTimer(prevTimer => prevTimer + 1);
      },10000)
      setIsActive(true);
    }
  
    const pauseTimer = ()=>{
      clearInterval(intervalRef.current);
      savedTImeRef.current = timer;
      setIsActive(false);
    }
    const resumeTimer = ()=>{
      setTimer(intervalRef.current);
      intervalRef.current = setInterval( ()=>{
        setTimer(prevTimer => prevTimer + 1);
      },1000);
  
      setIsActive(true);
    }
  
    const stopTimer = ()=>{
      clearInterval(intervalRef.current);
      setTimer = 0;
      savedTImeRef.current = 0;
      setIsActive(false)
    }

  return(<div><div>Timer {timer}</div><br></br>

      <div>
        <button onClick={startTimer}>Start</button>
      </div>

      <div>
        <button onClick={pauseTimer}>Pause</button>
      </div>

      <div>
        <button onClick={resumeTimer}>Resume</button>
      </div>

      <div>
        <button onClick={stopTimer}>Stop</button>
      </div></div>);
};

export default MyTimer1;
