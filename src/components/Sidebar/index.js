import React from "react"
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
            <a href="#about">Nosotros</a>
            </div>
            <div className="SidebarLink" to="discover" onClick={toggle}>
            <a href="#discover">Tienda</a>
            </div>
            <div className="SidebarLink" to="services" onClick={toggle}>
            <a href="#services">Blogs & Recetas</a>
            </div>
            <div className="SidebarLink" to="signup" onClick={toggle}>
            <a href="#location">Ubicaciones</a>
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
