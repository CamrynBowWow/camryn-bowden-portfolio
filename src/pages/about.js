import React from 'react'
import ImageDoggo from '../images/SadPeenDoggo.png';

const About = () => {
  return (
    <>
        <div className="h-screen flex flex-col justify-center items-center bg-neutral-50">
          <h1 className="header-tags p-5 mb-16">About Page Of Camryn Bowden</h1>
          <img src={ImageDoggo} alt="" className="md:h-3/6 h-1/3 md:max-w-2xl rounded-3xl mb-20 shadow-md shadow-black hover:animate-spin-slow"/>
          <p className="text=3xl break-words w-3/4 font-mono italic">
          Hello, Welcome to the about page. 
          Were if you lucky I will tell you about myself.
          I've been coding for about less than 2 years now to this day 2022/05/07.
          I know few languages like <b>C#</b>, <b>React</b>, <b>Javascript</b>, <b>C++</b>, <b>Java</b>, <b>SQL</b>, <b>CSS/HTML</b> and <b>Python</b>.
          You can look at my Github repo to see what I have done <a className="link-hover" href="https://github.com/SmallPeenwow">github.com/SmallPeenwow</a>
          </p>

          <div className="text=3xl mt-5 mb-12 break-words w-3/4 font-mono italic flex flex-col gap-1">
            <p className="mb-2">Here are additional things I know</p>
        
            <li>CSS Tailwind</li>
            <li>Material UI</li>
            <li>Socket.io</li>     

          </div>
        </div>
    </>
  )
}

export default About