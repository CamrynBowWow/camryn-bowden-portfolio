import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const PurchasePage = (props:any) => {

  const [isPhoneNumber, setIsPhoneNumber] = useState(0);

  const [isName, setIsName] = useState("");

  const [isSurname, setIsSurname] = useState("");

  const [isError, setIsError] = useState(true);

  const {type} = useParams();

  const navigate = useNavigate();

  const form = useRef<HTMLFormElement>(null);

  const publicKey : string = (process.env.REACT_APP_YOUR_PUBLIC_KEY as string);
  const templateId : string = (process.env.REACT_APP_YOUR_TEMPLATE_ID as string);
  const serviceId : string = (process.env.REACT_APP_YOUR_SERVICE_ID as string);

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

  const sendEmail = (event:any) => {
    event.preventDefault();

    if(!form.current) {
      return;
    }
    
    if (isPhoneNumber !== 0 && isError && isName.length !== 0 && isSurname.length !== 0){
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
      });
      event.target.reset();

      alert(`You have ordered ${type}`)

      navigate("/");

    } else {
      alert('Invalid request. Please check phone number, name or surname.')
    }
  }

  return (
    <div className="h-screen flex flex-col items-center bg-neutral-50">
      
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 items-center cursor-default mt-32 bg-gray-200 py-5 px-10 shadow-gray-700 shadow-lg rounded-md">

        <h1 className="menu-header border-b-2 border-b-black">Client Information</h1>

          <input type="text" placeholder="NAME" name="userName" maxLength={20} autoComplete="off" className="input-purchase" onChange={setName}></input>
          <input type="text" placeholder="SURNAME" name="surName" maxLength={20} autoComplete="off" className="input-purchase" onChange={setSurname}></input>
          <input type="text" placeholder="PHONE NUMBER" name="phoneNumber" maxLength={20} autoComplete="off" className={isError ? "input-purchase" : "input-purchase bg-red-600"} onChange={setNumber}></input>
          
          <input type="text" name="peen" className="hidden" defaultValue={type}></input>

          <input type="submit" value="Order" className="order-input-purchase"></input>        

      </form>
    </div>
  )
}

export default PurchasePage