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

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const navbarBlack = (scrollNav == "negrito") ? 'Nav ScrollNav' : 'Nav'

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={navbarBlack} scrollNav={scrollNav}>
          <div class="NavbarContainer">
            <div className="NavLogo" class="logo" to="/" onClick={toggleHome}>
              MICTLÁN9
            </div>
            <div className="MobileIcon" onClick={toggle}>
              <FaBars />
            </div>
            <ul className="NavMenu">
              <li className="NavItem">
                <div className="NavLinks" >
                <Link href="#about">Nosotros</Link>
                </div>
              </li>
              <li className="NavItem">
                <div className="NavLinks" to="discover" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  <Link href="#discover">Tienda</Link>
                </div>
              </li>
              <li className="NavItem">
                <div className="NavLinks" to="services" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                <Link href="#services">Blogs & Recetas</Link>
                </div>
              </li>
              <li className="NavItem">
                <div className="NavLinks" to="location" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                <Link href="#location">Ubicaciones</Link>
                </div>
              </li>
            </ul>
            <nav className="NavBtn">
              <div className="NavBtnLink" to="/signin">Iniciar sesión</div>
            </nav>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
