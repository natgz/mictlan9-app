'use client'

import React, { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { animateScroll as scroll } from "react-scroll"
import './NavbarElements.css'
import ButtonEffect2 from "../ButtonEffect/ButtonEffect2.js";
import Link from 'next/link';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState("negrito")

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav("negrito")
    } else {
      setScrollNav("transparente")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  const scrollTo = (e, a) => {
    let element = document.getElementById(a);
    e.preventDefault();
    element &&
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const returnHome = () => {
    return <Link href="#"/>
  }

  const activeSection = () => {
    const sections = document.querySelectorAll("InfoWrapper");
    const navLi = document.querySelectorAll("div.NavbarContainer");
    
    window.onscroll = () => {
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLi.forEach(links => {
            links.classList.remove("active");
            document.querySelector("div.NavbarContainer").classList.add("active");
          });
        }
      });
    }
  }

  const navbarBlack = (scrollNav == "negrito") ? 'Nav ScrollNav' : 'Nav'
  

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={navbarBlack}>
          <div className="NavbarContainer">
            <div className="NavLogo" onClick={(e) => {scrollTo(e, "home");returnHome()}}>
              <Link className="LogoLink" href="/"><img src="/images/NOMBRE-MICTLAN.png" alt="MictlanLogo" /></Link>
            </div>
            <div className="MobileIcon" onClick={toggle}>
              <FaBars />
            </div>
            <ul className="NavMenu">
              <li className="NavItem">
                <div className="NavLinks" onClick={(e) => scrollTo(e, "nosotros")}>
                  NOSOTROS
                </div>
              </li>
              <li className="NavItem">
                <div className="NavLinks" onClick={(e) => scrollTo(e, "menu")}>
                  MENÚ
                </div>
              </li>
              <li className="NavItem">
                <div className="NavLinks" onClick={(e) => scrollTo(e, "mixologia")}>
                  MIXOLOGÍA
                </div>
              </li>
              <li className="NavItem">
                <div className="NavLinks" onClick={(e) => scrollTo(e, "reservaciones")}>
                  RESERVACIONES
                </div>
              </li>
              <li className="NavItem">
                <div className="NavLinks" onClick={(e) => scrollTo(e, "ubicacion")}>
                  UBICACIÓN
                </div>
              </li>
            </ul>
            <div className="NavBtn">
              <ButtonEffect2 className="NavBtnLink" text="CREA TU CALAVERA" />
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
