import React from 'react'
import {Link} from 'react-router-dom';
import MintPeen from '../images/mintPeenCrop.png';
import NormalPeen from '../images/normalPeenCrop.png';

const OrderPage = () => {
  return (
    <div className="h-screen flex flex-col justify-around md:flex-row items-center bg-neutral-50">
        <div className="order-page-purchase">
          <h1 className="header-tags">Mint Condition Peen</h1>
          <img src={MintPeen} alt="" className="order-page-img "/>
          <p className="text-2xl bold">R35 000 Monthly</p>
          <p>Good man peen</p>
          <Link to="/purchasePage" className="link-purchase">Purchase</Link>
        </div>

        <div className="order-page-purchase">
          <h1 className="header-tags">Normal Peen</h1>
          <img src={NormalPeen} alt="" className="order-page-img"/>
          <p className="text-2xl bold">R10 000 Monthly</p>
          <p>Doesn't do much</p>
          <Link to="/purchasePage" className="link-purchase">Purchase</Link>
        </div>
    </div>
  )
}

export default OrderPage