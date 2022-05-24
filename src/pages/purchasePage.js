import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const PurchasePage = () => {

  const [isPhoneNumber, setIsPhoneNumber] = useState(0);

  const [isName, setIsName] = useState("");

  // const [isNameEntered, setIsNameEntered] = useState(true);

  const [isError, setIsError] = useState(true);

  const form = useRef();

  const setName = (event) => {
    setIsName(event.target.value);
  }

  // const checkName = () => {
  //   if(isName.length === 0){
  //     setIsNameEntered(false)
  //   } else {
  //     setIsNameEntered(true)
  //   }
  //   console.log('checkName')
  //   console.log(isNameEntered);
  // }

  const setNumber = (event) => { 
    if(isNaN(event.target.value)){
      setIsError(false);
    } else {
      setIsError(true);
      setIsPhoneNumber(event.target.value);
    }
  }

  const sendEmail = (event) => {
    event.preventDefault();

    if (isPhoneNumber !== 0 && isError && isName.length !== 0){
      console.log('work')
      emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
      });
      event.target.reset();

    } else {
      alert('Invalid request. Please check phone number and name.')
    }
  }

  return (
    <div className="h-screen flex flex-col items-center bg-neutral-50">
      
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 items-center cursor-default mt-32 bg-gray-200 py-5 px-10 shadow-gray-700 shadow-lg rounded-md">

        <h1 className="menu-header border-b-2 border-b-black">Client Information</h1>

          <input type="text" placeholder="NAME" name="userName" maxLength="20" autoComplete="off" className="input-purchase" onChange={setName}></input>
          <input type="text" placeholder="SURNAME" maxLength="20" autoComplete="off" className="input-purchase"></input>
          <input type="text" placeholder="PHONE NUMBER" name="phoneNumber" maxLength="20" autoComplete="off" className={isError ? "input-purchase" : "input-purchase bg-red-600"} onChange={setNumber}></input>
          
          <input type="submit" value="Order" className="order-input-purchase"></input>        
        
      </form>
    </div>
  )
}

export default PurchasePage