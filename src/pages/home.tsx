import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

const Home = () => {
	return (
		<div className='bg-neutral-50 h-full flex flex-col pt-32 gap-20 justify-content'>
			<Hero />
			<Content />
		</div>
	);
};

export default Home;
