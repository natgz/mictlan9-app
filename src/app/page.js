'use client'

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar/index.js"
import Sidebar from "../components/Sidebar"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/InfoSection/Data"
import Services from "../components/Services"
import Footer from "../components/Footer"

export default function Home() {
  const [isOpen, setIsOpen] = useState("closed");

  const toggle = () => {
    console.log('toggle')
    if (isOpen !== "closed") setIsOpen("closed");
    else setIsOpen("open");
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}
