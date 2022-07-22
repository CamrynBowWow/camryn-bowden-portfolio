import { useEffect, useState } from 'react';
import { collectionData } from '../utils/fetchData';
import Card from './Card';

const Content = () => {
	// const [hasData, setHasData] = useState(false);

	// useEffect(() => {
	// 	// if (collectionData.length !== 0) {
	// 	setHasData(true);
	// 	// }
	// }, [hasData]);
	// TODO: need this to reload or find a way to make my functions work in sync

	return (
		<>
			<div className='menu-card'>
				{collectionData.length !== 0
					? collectionData.map((data: any) => (
							<Card key={data.id} url={data.url} title={data.title} desc={data.desc} img={data.img} dateCreated={data.dateCreated} />
					  ))
					: ''}
			</div>
		</>
	);
};

export default Content;
