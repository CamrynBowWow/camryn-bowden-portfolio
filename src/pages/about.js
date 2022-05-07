import React from 'react'
import ImageDoggo from '../images/SadPeenDoggo.png';

const About = () => {
  return (
    <>
        <div className="h-screen flex flex-col justify-center items-center bg-neutral-300">
          <h1 className="text-3xl uppercase font-black mb-16">About Page Of Camryn Bowden</h1>
          <img src={ImageDoggo} alt="" className="h-3/6 w-3/4 rounded-3xl mb-20 shadow"/>
          <p className="text=3xl break-words w-3/4 font-mono italic">
          Hello, Welcome to the contact page. 
          Were if you lucky I would answer you call but 
          most likely reply to your email.
          </p>
        </div>
    </>
  )
}

export default About