import React from 'react'
import SubmitButton from '../components/submitButton'

const PurchasePage = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-neutral-50">
      <input type="text" placeholder="NAME" 
        className="items-center"
      ></input>
      <input type="text" placeHolder="SURNAME"></input>
      <input type="text" placeholder="PHONE NUMBER"></input>
      <SubmitButton />
    </div>
  )
}

export default PurchasePage