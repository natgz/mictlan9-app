'use client'

import { useState, useEffect } from "react";
import CreaCalavera from "../../components/CreaCalavera";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CalaveraSection() {
  const [isOpen, setIsOpen] = useState('closed');

  const toggle = () => {
    console.log('toggle');
    if (isOpen !== 'closed') setIsOpen('closed');
    else setIsOpen('open');
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <CreaCalavera />
      <Footer />
    </>
  );
}
