import React from 'react'
import WeGotThem from '../images/monster.png';

const Contact = () => {
  return (  
    <div className="flex flex-col bg-neutral-50 gap-10 items-center text-center h-screen">
      <h1 className="mt-8 header-tags">Camryn Brian Bowden</h1>
      <img src={WeGotThem} alt="" className="md:h-2/6 h-1/6 md:max-w-md rounded mb-20 shadow-md shadow-black"/>
      <p className="w-2/4 font-mono italic">
        If you able to reach me then clearly I wasn't busy.
        Just know I could be busy with important work. Which is "VERY" important.
      </p>
      <h2 className="font-bold text-3xl">On a side note here is my Email Address:</h2>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="link-hover">Gmail account coming soon</a>
    </div>  
  )
}

export default Contact