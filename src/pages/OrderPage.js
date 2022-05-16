import React from 'react'
import {Link} from 'react-router-dom';

const OrderPage = () => {
  return (
    <div className="h-screen flex justify-around items-center bg-neutral-50">
        <div className="order-page-purchase">
          <h1 className="header-tags">Mint Condition Peen</h1>
          <img/>
          <p></p>
          <Link to="/mintOrder" className="link-purchase">Purchase</Link>
        </div>

        <div className="order-page-purchase">
          <h1 className="header-tags">Normal Peen</h1>
          <img/>
          <p></p>
          <Link to="/averageOrder" className="link-purchase">Purchase</Link>
        </div>
    </div>
  )
}

export default OrderPage