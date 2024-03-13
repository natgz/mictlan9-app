import React from "react"
import './SidebarElements.css'
import { FaTimes } from "react-icons/fa"

const Sidebar = ({ isOpen, toggle }) => {
  const containeropen = (isOpen == "closed") ? 'SidebarContainer containerclosed' : 'SidebarContainer'
  const scrollTo = (e, a) => {
    let element = document.getElementById(a);
    e.preventDefault();
    element &&
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  
  return (
      <div className={containeropen} onClick={toggle}>
        <div className="SidebarWrapper">
        <div className="Icon" onClick={toggle}>
          <FaTimes className="CloseIcon"/>
        </div>
          <ul className="SidebarMenu">
            <div className="SidebarLink" onClick={(e) => scrollTo(e, "nosotros")}>
              Nosotros
            </div>
            <div className="SidebarLink" onClick={(e) => scrollTo(e, "menu")}>
              Menú
            </div>
            <div className="SidebarLink" onClick={(e) => scrollTo(e, "mixologia")}>
              Mixología
            </div>
            <div className="SidebarLink" onClick={(e) => scrollTo(e, "reservaciones")}>
              Reservaciones
            </div>
            <div className="SidebarLink" onClick={(e) => scrollTo(e, "ubicacion")}>
              Ubicación
            </div>
          </ul>
          {/* <div className="SideBtnWrap">
            <div className="SidebarRoute" to="/signin">Iniciar sesión</div>
          </div> */}
        </div>
    </div>
  )
}

export default Sidebar
