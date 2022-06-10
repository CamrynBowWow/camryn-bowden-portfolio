interface ClientInfo {
    name: string;
    surname: string;
    phoneNumber: number;
}

export function ErrorChecking(props: ClientInfo) {
    let error: string[] = [];
    let errorMessage: string = '';

    error.push(props.name.length === 0 ? 'Name not filled in' : 'null');
    error.push(props.surname.length === 0 ? 'Surname not filled in' : 'null');
    error.push(!isNaN(props.phoneNumber) ? props.phoneNumber === 0 || props.phoneNumber.toString().length === 0 ? 'Phone number not filled in' : 'null' : 'Phone number is not valid');

    error = error.filter(function (value) {return value !== 'null'})

    errorMessage = error.join(" and ");

    return { errorMessage };
}