import React from 'react'
import { Countdown } from '../hooks/countdown';

const timeStamp = () => {
  const { days, hours, minutes, seconds } = Countdown();

  const checkTime = (time:number) => {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div className="h-screen flex flex-col gap-2 items-center justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">     
      <h1 className="text-6xl uppercase font-bold">Camryn bowden</h1>
      <h2 className="text-2xl uppercase font-bold mb-10">coding timeline</h2>
      <div className="timestamp-container">
        <p className="day-p-styling"><span className="span-styling">{days}</span>Days</p>
        <p className="day-p-styling"><span className="span-styling">{checkTime(hours)}</span>Hours</p>
        <p className="day-p-styling"><span className="span-styling">{checkTime(minutes)}</span>Minutes</p>
        <p className="day-p-styling"><span className="span-styling">{checkTime(seconds)}</span>Seconds</p>
      </div>    
    </div>
  )
}

export default timeStamp