import React from 'react'
import ImageDoggo from '../images/SadPeenDoggo.png';

const About = () => {
  return (
    <>
        <div className="h-screen flex flex-col justify-center items-center bg-neutral-50">
          <h1 className="text-3xl uppercase font-black mb-16">About Page Of Camryn Bowden</h1>
          <img src={ImageDoggo} alt="" className="h-3/6 w-3/4 rounded-3xl mb-20 shadow-md shadow-black hover:animate-spin-slow"/>
          <p className="text=3xl break-words w-3/4 font-mono italic">
          Hello, Welcome to the about page. 
          Were if you lucky I will tell you about myself.
          I've been coding for few about 2 years now to this date 2022/05/07.
          I know few languages like <b>C#</b>, <b>React</b>, <b>Javascript</b>, <b>C++</b> and <b>Java</b>, <b>SQL</b>, <b>CSS/HTML</b>, <b>Python</b>.
          You can look at my Github repo to see what I have done <a href="https://github.com/SmallPeenwow">github.com/SmallPeenwow</a>
          </p>
        </div>
    </>
  )
}

export default About