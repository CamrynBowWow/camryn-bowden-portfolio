import React, { useState } from 'react'

const PurchasePage = () => {

  const [isPhoneNumber, setIsPhoneNumber] = useState(0);

  const [isName, setIsName] = useState("");

  const [isError, setIsError] = useState(true);

  const setNumber = (event) => { 
    if(isNaN(event.target.value)){
      setIsError(false);
    } else {
      setIsError(true);
      setIsPhoneNumber(event.target.value);
    }
  }

  const setName = (event) => {
    setIsName(event.target.value);
  }

  // Emails functionality will go here
  const sendEmail = () => {
    console.log(isError)
    if(!isError) {
      console.log('fails');
    } else {
      console.log(isPhoneNumber)
    }
}

  return (
    <div className="h-screen flex flex-col items-center bg-neutral-50">
      
      <div className="flex flex-col gap-5 items-center cursor-default mt-32 bg-gray-200 py-5 px-10 shadow-gray-700 shadow-lg rounded-md">

        <h1 className="menu-header border-b-2 border-b-black">Client Information</h1>

        <input type="text" placeholder="NAME" maxLength="20" className="input-purchase" onChange={setName}></input>
        <input type="text" placeHolder="SURNAME" maxLength="20" className="input-purchase"></input>
        <input type="text" placeholder="PHONE NUMBER" maxLength="20" className={isError ? "input-purchase" : "input-purchase bg-red-600"} onChange={setNumber}></input>
        <button className="order-button-purchase" onClick={sendEmail}>Order</button>        
        
      </div>
    </div>
  )
}

export default PurchasePage