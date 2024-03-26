'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar/index.js';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  Reservaciones,
  Nosotros,
} from '../components/InfoSection/Data';
import Footer from '../components/Footer';
// import { whatsapp } from '../components/InfoSection/Data';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import CardSlider from '../components/CardSlider';
import Mixology from '../components/Mixology';
import Services from '../components/Services';
import { Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  const [isOpen, setIsOpen] = useState('closed');

  const toggle = () => {
    if (isOpen !== 'closed') setIsOpen('closed');
    else setIsOpen('open');
  };

  const whatsapp = () => {
    window.open("https://wa.me/8129397423", "_blank")
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Gallery />
      <InfoSection {...Nosotros} />
      <CardSlider />
      <Mixology />
      <InfoSection {...Reservaciones} />
      <Location />
      <Footer />
      <button className='fixed-button-l' variant='success' onClick={()=>whatsapp()}><i className="bi bi-whatsapp"></i></button>   
    </>
  );
}
