import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useParams, useNavigate } from 'react-router-dom';
import { useSnackbar } from '../hooks/useSnackbar';
import { Snackbar } from '../components/Snackbar';
import { PUBLIC_ID, SERVICE_ID, TEMPLATE_ID } from '../envValues';

const PurchasePage = (props:any) => {

  const { isActive, message, openSnackBar } = useSnackbar();

  const [isPhoneNumber, setIsPhoneNumber] = useState(0);

  const [isName, setIsName] = useState("");

  const [isSurname, setIsSurname] = useState("");

  const [isError, setIsError] = useState(true);

  const {type} = useParams();

  const navigate = useNavigate();

  const form = useRef<HTMLFormElement>(null);

  const setName = (event:any) => {
    setIsName(event.target.value);
  }

  const setSurname = (event:any) => {
    setIsSurname(event.target.value);
  }

  const setNumber = (event:any) => { 
    if(isNaN(event.target.value)){
      setIsError(false);
    } else {
      setIsError(true);
      setIsPhoneNumber(event.target.value);
    }
  }

  const showSnackbar = (prop:string) => {
    openSnackBar(prop);
  }

  const sendEmail = (event:any) => {
    event.preventDefault();

    if(!form.current) {
      return;
    }
    
    if (isPhoneNumber !== 0 && isError && isName.length !== 0 && isSurname.length !== 0){
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_ID)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
      });
      event.target.reset();
      showSnackbar(`You ordered ${type}`);
      setIsSurname('');
      setIsName('');
      setIsPhoneNumber(0);

    } else {
      showSnackbar('Invalid request. Please check phone number, name or surname.')
    }
  }

  return (
    <div className="h-screen flex flex-col items-center bg-neutral-50">

      <Snackbar isActive={isActive} message={message} />
      
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 items-center cursor-default mt-32 bg-gray-200 py-5 px-10 shadow-gray-700 shadow-lg rounded-md">

        <h1 className="menu-header border-b-2 border-b-black">Client Information</h1>

          <input type="text" placeholder="NAME" name="userName" maxLength={20} autoComplete="off" className="input-purchase" onChange={setName}></input>
          <input type="text" placeholder="SURNAME" name="surName" maxLength={20} autoComplete="off" className="input-purchase" onChange={setSurname}></input>
          <input type="text" placeholder="PHONE NUMBER" name="phoneNumber" maxLength={20} autoComplete="off" className={isError ? "input-purchase" : "input-purchase-invalid"} onChange={setNumber}></input>
          
          <input type="text" name="peen" className="hidden" defaultValue={type}></input>

          <input type="submit" value="Order" className="order-input-purchase"></input>        

      </form>

    </div>
  )
}

export default PurchasePage