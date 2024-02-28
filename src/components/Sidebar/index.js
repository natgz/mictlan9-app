import React from "react"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from "./SidebarElements"
import Link from 'next/link'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
          <Link href="#about">Nosotros</Link>
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
          <Link href="#discover">Tienda</Link>
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
          <Link href="#services">Blogs & Recetas</Link>
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
          <Link href="#location">Ubicaciones</Link>
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Iniciar sesión</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
