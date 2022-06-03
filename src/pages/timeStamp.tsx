import React from 'react'
import { Countdown } from '../hooks/countdown';

const timeStamp = () => {
    const { days, hours, minutes, seconds } = Countdown();

  return (
    <div className="h-screen flex md:flex-row items-center gap-20 justify-center bg-neutral-50">
        
        <p className="day-p-styling"><span className="span-styling">{days}</span>Days</p>
        <p className="day-p-styling"><span className="span-styling">{hours}</span>Hours</p>
        <p className="day-p-styling"><span className="span-styling">{minutes}</span>Minutes</p>
        <p className="day-p-styling"><span className="span-styling">{seconds}</span>Seconds</p>

    </div>
  )
}

export default timeStamp