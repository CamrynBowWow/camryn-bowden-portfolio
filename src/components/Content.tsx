import React from 'react';
import ImageOne from '../images/Evel_Knievel-Chase.png';
import ImageTwo from '../images/SupportKing.png';
import { collectionData } from '../utils/fetchData';

console.log(collectionData);

const Content = () => {
	return (
		<>
			<div className='menu-card'>
				<img src={ImageOne} alt='' className='h-full rounded mb-20 shadow' />
				<div className='center-content'>
					<h2 className='text-2xl mb-2'>Peen Memes SABUS</h2>
					<p className='mb-2'>Stunts where never the same after this man</p>
					<span>R4500</span>
				</div>
			</div>
			<div className='menu-card'>
				<img src={ImageTwo} alt='' className='h-full rounded mb-20 shadow' />
				<div className='center-content'>
					<h2 className='text-2xl mb-2'>Support King</h2>
					<p className='mb-2'>Support never failed under this man</p>
					<span>R44500</span>
				</div>
			</div>
		</>
	);
};

export default Content;
