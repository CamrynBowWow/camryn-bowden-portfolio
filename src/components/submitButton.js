import React from 'react'

const SubmitButton = (number, name, active) => {
    const sendEmail = () => {
        console.log(active)
        if(active) {
            console.log('fail')
        } else {
            console.log('works');
        }
    }

  return (
    <>
        <button className="order-button-purchase" onClick={sendEmail}>Order</button>
    </>
  )
}

export default SubmitButton