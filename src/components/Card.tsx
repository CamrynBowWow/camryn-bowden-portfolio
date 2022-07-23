import { Timestamp } from 'firebase/firestore';

type CardProps = {
	url: string;
	title: string;
	desc: string;
	img: string;
	dateCreated: Timestamp;
};

const Card = ({ url, title, desc, img, dateCreated }: CardProps) => {
	return (
		<div className='flex flex-col gap-5 justify-center items-center'>
			<h2 className='text-5xl cursor-default mb-5 font-semibold'>{title}</h2>
			<img src={img} alt={img} className='lg:w-3/6 w-3/4 object-cover rounded mb-2 shadow-black shadow-lg' />
			<a className='capitalize text-xl font-semibold hover:text-blue-600' href={url} target='_blank' rel='noreferrer'>
				link to project!
			</a>
			<div className='center-content'>
				<p className=' w-2/3 '>{desc}</p>
				<span className='text-sm border-b-2 border-black border-solid'>Date Project Was Created: {dateCreated.toDate().toLocaleString()}</span>
			</div>
		</div>
	);
};

export default Card;
