import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from "./FooterElements"

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="https://www.instagram.com/capracoffeemx/">Instagram</FooterLink>
              <FooterLink to="https://www.facebook.com/capracoffeemx">Facebook</FooterLink>
              <FooterLink to="https://www.linkedin.com/company/capracoffeemx/">LinkedIn</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              CAPRA
            </SocialLogo>
            <WebsiteRights>
              Copyright &copy;
              <a href="/" className="text-muted">
                {new Date().getFullYear()} CapraCoffee. All rights reserved.
              </a>
            </WebsiteRights>
            <SocialIcons>
              {/* poner los links */}
              <SocialIconLink href="https://www.facebook.com/capracoffeemx" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/capracoffeemx/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/capracoffeemx/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
