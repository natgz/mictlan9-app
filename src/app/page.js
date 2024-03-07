'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '../components/Navbar/index.js';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  Menu,
  Reservaciones,
  Nosotros,
  Historia,
  EquipoHumano,
  Contacto,
  Ubicacion,
} from '../components/InfoSection/Data';
import Footer from '../components/Footer';
import { whatsapp } from '../components/InfoSection/Data';
import Gallery from '@/components/Gallery/Gallery';
import CardSlider from '../components/CardSlider';
import { Button } from 'react-bootstrap';

export default function Home() {
  const [isOpen, setIsOpen] = useState('closed');

  const toggle = () => {
    console.log('toggle');
    if (isOpen !== 'closed') setIsOpen('closed');
    else setIsOpen('open');
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...Nosotros} />
      <CardSlider />
      <InfoSection {...Reservaciones} />
      <Gallery />
      {/* <InfoSection {...Ubicacion} /> */}
      <InfoSection {...Contacto} />
      <Footer />
      <Button
        className='fixed-button-l'
        variant='success'
        onClick={() => whatsapp()}
      >
        <i className='bi bi-whatsapp'></i>
      </Button>
    </>
  );
}
