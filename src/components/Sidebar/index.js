import React from "react"
import './SidebarElements.css'
import { FaTimes } from "react-icons/fa"
import Link from 'next/link'
import ButtonEffect2 from "../ButtonEffect/ButtonEffect2.js";

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
            NOSOTROS
          </div>
          <div className="SidebarLink" onClick={(e) => scrollTo(e, "menu")}>
            MENÚ
          </div>
          <div className="SidebarLink" onClick={(e) => scrollTo(e, "mixologia")}>
            MIXOLOGÍA
          </div>
          <div className="SidebarLink" onClick={(e) => scrollTo(e, "reservaciones")}>
            RESERVACIONES
          </div>
          <div className="SidebarLink" onClick={(e) => scrollTo(e, "ubicacion")}>
            UBICACIÓN
          </div>
        </ul>
        <div className="SideBtnWrap">
          <ButtonEffect2 className="SidebarRoute" text="CREA TU CALAVERA" />
        </div>
      </div>
    </div>
  )
}

    

export default Sidebar
