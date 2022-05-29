import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       serviceId: process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
//       templateId: process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
//       publicKey: process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY,
//     }, // will be passed to the page component as props
//   }
// }

const PurchasePage = (props:any) => {
  console.log(props.location.state);
  const [isPhoneNumber, setIsPhoneNumber] = useState(0);

  const [isName, setIsName] = useState("");

  const [isError, setIsError] = useState(true);

  const form = useRef<HTMLFormElement>(null);

  const setName = (event:any) => {
    setIsName(event.target.value);
  }

  console.log(props.publicKey)

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
    
    if (isPhoneNumber !== 0 && isError && isName.length !== 0){
      console.log('work')
      emailjs.sendForm(props.serviceId, props.templateId, form.current, props.publicKey)
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

          <input type="text" placeholder="NAME" name="userName" maxLength={20} autoComplete="off" className="input-purchase" onChange={setName}></input>
          <input type="text" placeholder="SURNAME" name="surName" maxLength={20} autoComplete="off" className="input-purchase"></input>
          <input type="text" placeholder="PHONE NUMBER" name="phoneNumber" maxLength={20} autoComplete="off" className={isError ? "input-purchase" : "input-purchase bg-red-600"} onChange={setNumber}></input>
          
          {/* <input type="text" name="peen" className="hidden" value={}></input> */}

          <input type="submit" value="Order" className="order-input-purchase"></input>        

      </form>
    </div>
  )
}

export default PurchasePage