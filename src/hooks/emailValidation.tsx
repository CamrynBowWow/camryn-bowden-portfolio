interface EmailInfo {
    email: string;
}

export function EmailValidation(props: EmailInfo) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let emailChecked: boolean;
    let emailMessage: string;

    if(regex.test(props.email) && props.email.length !== 0){
        emailChecked = true;
        emailMessage = 'null';
    } else {
        emailChecked = false;
        emailMessage = regex.test(props.email) ? 'null' : props.email.length === 0 ? 'Email not filled in' : 'Email is not valid';
    }

    return { emailChecked, emailMessage }
}