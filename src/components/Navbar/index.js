'use client'

import React, { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { animateScroll as scroll } from "react-scroll"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements"
import Link from 'next/link'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo class="logo" to="/" onClick={toggleHome}>
              CAPRA
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80} activeClass="active">
                <Link href="#about">Nosotros</Link>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  <Link href="#discover">Tienda</Link>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                <Link href="#services">Blogs & Recetas</Link>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="location" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                <Link href="#location">Ubicaciones</Link>
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Iniciar sesión</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
