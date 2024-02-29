import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"
import "./FooterElements.css"

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <footer className="FooterContainer">
      <div className="FooterWrap">
        <div className="FooterLinksContainer">
          <div className="FooterLinksWrapper">
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">About Us</h1>
              <div className="FooterLink" to="/signin">How it works</div>
              <div className="FooterLink" to="/signin">Testimonials</div>
              <div className="FooterLink" to="/signin">Careers</div>
              <div className="FooterLink" to="/signin">Investors</div>
              <div className="FooterLink" to="/signin">Terms of Services</div>
            </div>
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">Contact Us</h1>
              <div className="FooterLink" to="/">Contact</div>
              <div className="FooterLink" to="/">Support</div>
              <div className="FooterLink" to="/">Destinations</div>
              <div className="FooterLink" to="/">Sponsorships</div>
            </div>
          </div>
          <div className="FooterLinksWrapper">
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">Social Media</h1>
              <div className="FooterLink" to="https://www.facebook.com/mictlan9lafe/">Instagram</div>
              <div className="FooterLink" to="#">Facebook</div>
            </div>
          </div>
        </div>
        <section className="SocialMedia">
          <div className="SocialMediaWrap">
            <div className="SocialLogo" to="/" onClick={toggleHome}>
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
