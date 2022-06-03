import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages';
import {Routes, Route} from 'react-router-dom';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';
import Contact from './pages/contact';
import OrderPage from './pages/OrderPage';
import PurchasePage from './pages/purchasePage';
import TimeStamp from './pages/timeStamp';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/orderPage" element={<OrderPage/>} />
        <Route path="/purchasePage/:type" element={<PurchasePage />} />
        <Route path="/timeStamp" element={<TimeStamp/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
