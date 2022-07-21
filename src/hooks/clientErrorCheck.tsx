import { EmailValidation } from '../hooks/emailValidation';

interface ClientInfo {
	name: string;
	surname: string;
	phoneNumber: number;
	errorCheck: boolean;
	email: string;
}

export function ErrorChecking(props: ClientInfo) {
	let error: string[] = [];
	let errorMessage: string = '';

	const { emailChecked, emailMessage } = EmailValidation({ email: props.email });

	error.push(props.name.length === 0 ? 'Name not filled in' : 'null');
	error.push(props.surname.length === 0 ? 'Surname not filled in' : 'null');
	error.push(
		!isNaN(props.phoneNumber)
			? props.phoneNumber === 0 || props.phoneNumber.toString().length === 0
				? 'Phone number not filled in'
				: 'null'
			: 'Phone number is not valid'
	);
	error.push(emailMessage);

	error = error.filter(function (value) {
		return value !== 'null';
	});

	errorMessage = error.join(' and ');

	// If error would be true and if not error would be false
	// That is why errorCheck must equal false
	let checkedInfo = error.length === 0 && props.errorCheck === false && emailChecked ? true : false;

	return { errorMessage, checkedInfo, emailChecked };
}
