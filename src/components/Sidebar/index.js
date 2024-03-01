import React from "react"
import Link from 'next/link'
import './SidebarElements.css'
import { FaTimes } from "react-icons/fa"

const Sidebar = ({ isOpen, toggle }) => {
  const containeropen = (isOpen == "closed") ? 'SidebarContainer containerclosed' : 'SidebarContainer'
  console.log(isOpen, 'isOpen')
  console.log(toggle, 'toggle')
  return (
    <div>
      <aside className={containeropen} onClick={toggle}>
        <div className="Icon" onClick={toggle}>
          <FaTimes className="CloseIcon"/>
        </div>
        <div className="SidebarWrapper">
          <ul className="SidebarMenu">
            <div className="SidebarLink" to="about" onClick={toggle}>
            <Link href="#about">Nosotros</Link>
            </div>
            <div className="SidebarLink" to="discover" onClick={toggle}>
            <Link href="#discover">Tienda</Link>
            </div>
            <div className="SidebarLink" to="services" onClick={toggle}>
            <Link href="#services">Blogs & Recetas</Link>
            </div>
            <div className="SidebarLink" to="signup" onClick={toggle}>
            <Link href="#location">Ubicaciones</Link>
            </div>
          </ul>
          <div className="SideBtnWrap">
            <div className="SidebarRoute" to="/signin">Iniciar sesión</div>
          </div>
        </div>
    </aside>
  </div>
  )
}

export default Sidebar
