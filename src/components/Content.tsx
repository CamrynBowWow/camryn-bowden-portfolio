import { collectionData } from '../utils/fetchData';
import Card from './Card';

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
