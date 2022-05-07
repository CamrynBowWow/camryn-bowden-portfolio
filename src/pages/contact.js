import React from 'react'
import WeGotThem from '../images/monster.png';

const Contact = () => {
  return (  
    <div className="flex flex-col bg-neutral-50 gap-10 items-center text-center h-screen font-mono">
      <h1 className="mt-8 font-semibold">Camryn Brian Bowden</h1>
      <img src={WeGotThem} alt="" className="h-2/6 w-2/4 rounded mb-20 shadow-md shadow-black md:h-2/6 sm:h-1/4 sm:w-1/2"/>
      <p className="w-2/4 italic">
        If you able to reach me then clearly I wasn't busy.
        Just know I could be busy with important work. Which is "VERY" important.
      </p>
      <h2 className="font-bold text-3xl">On a side note here is my Email Address:</h2>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="underline hover:text-blue-600">bowdencamryn@gmail.com</a>
    </div>  
  )
}

export default Contact