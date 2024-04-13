import React, { useState } from "react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"
import "./FooterElements.css"
import { Col, Row, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  const scrollTo = (e, a) => {
    let element = document.getElementById(a);
    e.preventDefault();
    element &&
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <footer className="FooterContainer">
        <div className="FooterWrap">
          <Col className="footerLogo">
            <Stack direction="vertical" gap={0}>
              <img src="/images/MICTLAN-TERMINADO.png" alt="MictlanLogo" onClick={(e) => scrollTo(e, "home")}/>
              <p>Viaja por los 9 niveles y sumérgete en la magia de Mictlán.</p>
            </Stack>
          </Col>

          <Col className="footerLinks align-self-center">
            <div className="footerLinkItems">
              <Stack direction="vertical" gap={0} >
                <a href="/" onClick={(e) => scrollTo(e, "nosotros")}>Nosotros</a>
                <a href="/" onClick={(e) => scrollTo(e, "menu")}>Menú</a>
                <a href="/" onClick={(e) => scrollTo(e, "mixologia")}>Mixología</a>
                <a href="/" onClick={(e) => scrollTo(e, "reservaciones")}>Reservaciones</a>
                <a href="/" onClick={(e) => scrollTo(e, "ubicacion")}>Ubicación</a>
              </Stack>
            </div>
          </Col>

          <Col className="footerSocial">
            <h4>¡Siguenos en nuestras redes sociales!</h4>
            <div className="footerSocialItems hstack gap-3">
              <a href="https://www.facebook.com/MictlanCantina" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/mictlancantina/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/mictlancantina" target="_blank">
                <FaLinkedin />
              </a>
            </div>
            <div className="footerContacto">
              <p>Contactanos al +51 81 1183 2550 ó haz click en el icono de whatsapp.</p>
            </div>
          </Col>

        </div>
        <div className="FooterBottom">
            <small className="WebsiteRights">
              Copyright &copy;
              <a>
                {new Date().getFullYear()} MICTLÁN9 Restaurante y Mixología. Todos los derechos reservados.
              </a>
            </small>
        </div>
    </footer>
  )
}

export default Footer