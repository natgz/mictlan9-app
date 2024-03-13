'use client'

import React, { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { animateScroll as scroll } from "react-scroll"
import Link from 'next/link'
import './NavbarElements.css'

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
            <div className="NavLogo" onClick={(e) => scrollTo(e, "home")}>
              <img src="/images/NOMBRE-MICTLAN.png" alt="MictlanLogo" />
            </div>
            <div className="MobileIcon" onClick={toggle}>
              <FaBars />
            </div>
            <ul className="NavMenu">
              <li className="NavItem">
                <div className="NavLinks" onClick={(e) => scrollTo(e, "nosotros")}>
                  Nosotros
                </div>
              </li>
              <li className="NavItem">
                <div className="NavLinks" onClick={(e) => scrollTo(e, "menu")}>
                  Menú
                </div>
              </li>
              <li className="NavItem">
                <div className="NavLinks" onClick={(e) => scrollTo(e, "mixologia")}>
                  Mixología
                </div>
              </li>
              <li className="NavItem">
                <div className="NavLinks" onClick={(e) => scrollTo(e, "reservaciones")}>
                  Reservaciones
                </div>
              </li>
              <li className="NavItem">
                <div className="NavLinks" onClick={(e) => scrollTo(e, "ubicacion")}>
                  Ubicación
                </div>
              </li>
            </ul>
            <nav className="NavBtn">
              <button className="NavBtnLink" href="/calavera">Crea tu calavera</button>
            </nav>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
