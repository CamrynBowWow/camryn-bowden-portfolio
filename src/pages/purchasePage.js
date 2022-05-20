import React, { useState } from 'react'
import SubmitButton from '../components/submitButton'

const PurchasePage = () => {

  const [isPhoneNumber, setIsPhoneNumber] = useState(0);

  const [isName, setIsName] = useState("");

  const [isError, setIsError] = useState(false);

  const setNumber = (event) => {
    if(event.target.value.length > 11 || event.target.value.length < 11){
      setIsError(false);
    } else {
      setIsError(true);
      setIsPhoneNumber(event.target.value);
    }
  }

  const setName = (event) => {
    setIsName(event.target.value);
  }

  return (
    <div className="h-screen flex flex-col items-center bg-neutral-50">
      
      <div className="flex flex-col gap-5 items-center cursor-default mt-32 bg-gray-200 py-5 px-10 shadow-gray-700 shadow-lg rounded-md">

        <h1 className="menu-header">Client Information</h1>

        <input type="text" placeholder="NAME" maxLength="20" className="input-purchase" onChange={setName}></input>
        <input type="text" placeHolder="SURNAME" maxLength="20" className="input-purchase"></input>
        <input type="text" placeholder="PHONE NUMBER" maxLength="15" className={isError ? "input-purchase" : "input-purchase bg-red-600"} onChange={setNumber}></input>
        <SubmitButton number={isPhoneNumber} name={isName} active={isError} />
        {/* <p className={isError ? "text-xs font-medium text-red-400 uppercase" : "hidden"}>invalid number</p> */}
        
      </div>
    </div>
  )
}

export default PurchasePage