import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"
import "./FooterElements.css"

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
        <div className="FooterLinksContainer">
          <div className="FooterLinksWrapper">
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">Enlaces</h1>
              <div className="FooterLink" to="/signin">Nosotros</div>
              <div className="FooterLink" to="/signin">Menú</div>
              <div className="FooterLink" to="/signin">Reservaciones</div>
              <div className="FooterLink" to="/signin">Ubicación</div>
              <div className="FooterLink" to="/signin">Contacto</div>
            </div>
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">Contact Us</h1>
              <div className="FooterLink" to="/">Contact</div>
              <div className="FooterLink" to="/">Support</div>
              <div className="FooterLink" to="/">Destinations</div>
              <div className="FooterLink" to="/">Sponsorships</div>
            </div>
          </div>
          {/* <div className="FooterLinksWrapper">
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">Social Media</h1>
              <div className="FooterLink" to="https://www.facebook.com/mictlan9lafe/">Instagram</div>
              <div className="FooterLink" to="#">Facebook</div>
            </div>
          </div> */}
        </div>
        <section className="SocialMedia">
          <div className="SocialMediaWrap">
            <div className="SocialLogo" to="/" onClick={(e) => scrollTo(e, "home")}>
              MICTLÁN9
            </div>
            <small className="WebsiteRights">
              Copyright &copy;
              <a href="/" className="text-muted">
                {new Date().getFullYear()} MICTLÁN9. All rights reserved.
              </a>
            </small>
            <div className="SocialIcons">
              {/* poner los links */}
              <a className="SocialIconLink" href="https://www.facebook.com/mictlan9lafe/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a className="SocialIconLink" href="#" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
