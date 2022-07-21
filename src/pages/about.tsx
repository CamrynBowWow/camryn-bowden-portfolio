import React from 'react';
import ImageDoggo from '../images/SadPeenDoggo.png';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<>
			<div className='h-full flex flex-col justify-center items-center bg-neutral-50'>
				<h1 className='header-tags p-5 mb-2 md:mb-14'>About Page Of Camryn Bowden</h1>
				<img
					src={ImageDoggo}
					alt='Credit: Gabriel Lopes'
					title='Credit: Samurai Dogo by Gabriel Lopes'
					className='h-52 md:h-3/6 max-w-2xl rounded-3xl mb-20 shadow-md shadow-black hover:animate-spin-slow'
				/>

				<p className='text=3xl break-words w-3/4 font-mono italic'>
					Hello, Welcome to the about page. If you are lucky enough, I will tell you about myself. I started coding in 2020/07/27 and here is how long
					I've been doing it to
					<Link to='/timeStamp' className='hover:text-blue-600 uppercase font-semibold'>
						{' '}
						the Present day
					</Link>
					. These are the languages I know <b>C#</b>, <b>Javascript</b>, <b>C++</b>, <b>Java</b>, <b>SQL</b>, <b>CSS/HTML</b> and <b>Python</b>. You
					can look at my Github repo to see what I have done{' '}
					<a className='link-hover' href='https://github.com/SmallPeenwow'>
						github.com/SmallPeenwow
					</a>
				</p>

				<div className='text=3xl mt-5 mb-12 break-words w-3/4 font-mono italic flex flex-col gap-1'>
					<p className='mb-2'>Additional things I know</p>

					<li>CSS Tailwind</li>
					<li>React</li>
					<li>TypeScript</li>
					<li>Material UI</li>
					<li>Socket.io</li>
					<li>Sass</li>
					<li>Next.js</li>
					<li>Firebase</li>
					<li>GraphQL</li>
				</div>
			</div>
		</>
	);
};

export default About;
