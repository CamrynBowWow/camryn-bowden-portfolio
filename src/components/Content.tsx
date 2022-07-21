import { collectionData } from '../utils/fetchData';
import Card from './Card';

console.log(
	collectionData.forEach((t: any) => {
		console.log(t.img, t.dateCreated);
	})
);

const Content = () => {
	return (
		<>
			<div className='menu-card'>
				{collectionData.map((data: any) => (
					<Card key={data.id} url={data.url} title={data.title} desc={data.desc} img={data.img} dateCreated={data.dateCreated} />
				))}
			</div>
		</>
	);
};

export default Content;
