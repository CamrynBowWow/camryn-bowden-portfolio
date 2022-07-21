import { useEffect, useState } from 'react';

export function Countdown() {
	const startDate = +new Date('2020-07-27T00:00:00+00:00');

	const [isCountDate, setIsCountDate] = useState(+new Date() - +startDate);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsCountDate(+new Date() - startDate);
		}, 1000);

		return () => clearInterval(interval);
	}, [startDate]);

	const days = Math.floor(isCountDate / (1000 * 60 * 60 * 24));
	const hours = Math.floor((isCountDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((isCountDate % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((isCountDate % (1000 * 60)) / 1000);

	return { days, hours, minutes, seconds };
}
