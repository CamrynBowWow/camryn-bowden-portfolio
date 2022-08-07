import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { collectionRef } from '../utils/fetchData';
import Card from './Card';

const Content = () => {
	const [domains, setDomains] = useState([]);

	useEffect(() => {
		getDocs(collectionRef)
			.then((snapshot) => {
				let data: any = [];

				snapshot.docs.forEach((doc) => {
					data.push({ ...doc.data(), id: doc.id });
				});

				setDomains(data);
			})
			.catch((err) => {
				console.log('Why did you look here?!');
			});
	}, []);

	return (
		<>
			<div className='menu-card'>
				{domains.length !== 0
					? domains.map((data: any) => (
							<Card key={data.id} url={data.url} title={data.title} desc={data.desc} img={data.img} dateCreated={data.dateCreated} />
					  ))
					: ''}
			</div>
		</>
	);
};

export default Content;
