import React from 'react'
import {Link} from 'react-router-dom';
import MintPeen from '../images/mintPeenCrop.png';
import NormalPeen from '../images/normalPeenCrop.png';
import ChillPeen from '../images/chillPeen.png';
import ProfessorP from '../images/professorP.png';

const OrderPage = () => {
  return (
    <div className="h-full grid justify-around pb-36 sm:gap-24 px-2 md:gap-2 pt-16 md:grid-cols-2 items-center bg-neutral-50">
        <div className="order-page-purchase">
          <h1 className="header-tags-menu">Mint Condition Peen</h1>
          <img src={MintPeen} alt="" className="order-page-img "/>
          <p className="text-2xl font-bold">R35 000 Monthly</p>
          <p>Good man peen</p>
          <Link to="/purchasePage/Mint Condition Peen" className="link-purchase">Purchase</Link>
        </div>

        <div className="order-page-purchase">
          <h1 className="header-tags-menu">Normal Peen</h1>
          <img src={NormalPeen} alt="" className="order-page-img"/>
          <p className="text-2xl font-bold">R10 000 Monthly</p>
          <p>Doesn't do much</p>
          <Link to="/purchasePage/Normal Peen" className="link-purchase">Purchase</Link>
        </div>

        <div className="order-page-purchase">
          <h1 className="header-tags-menu md:mt-20 lg:mt-36">Chill Peen</h1>
          <img src={ChillPeen} alt="" className="order-page-img"/>
          <p className="text-2xl font-bold">R5 000 Monthly</p>
          <p>Always fun in the sun</p>
          <Link to="/purchasePage/Chill Peen" className="link-purchase">Purchase</Link>
        </div>

        <div className="order-page-purchase">
          <h1 className="header-tags-menu md:mt-20 lg:mt-36">Professor-P</h1>
          <img src={ProfessorP} alt="" className="order-page-img"/>
          <p className="text-2xl font-bold">R50 000 Monthly</p>
          <p>Who dos summon thee</p>
          <Link to="/purchasePage/Professor-P" className="link-purchase">Purchase</Link>
        </div>
        
    </div>
  )
}

export default OrderPage