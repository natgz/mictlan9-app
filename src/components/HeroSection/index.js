import React, { useState } from "react"
import { Button } from "../ButtonElements"
import './HeroElements.css'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

function HeroSection() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div className="HeroContainer" id="home">
      <div className="HeroBg">
        <video className="VideoBg" autoPlay loop muted src="/videos/bar-video.mp4" type="video/mp4" />
      </div>
      <div className="HeroContent">
        <h1 className="HeroH1">MICTLÁN9</h1>
        <h2 className="HeroH2">Próximamente</h2>
        <p className="HeroP">Sumérgete en la magia de Mitlán: donde cada trago es un viaje místico.</p>
        <div className="HeroBtnWrapper">
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Inicia {hover ? <MdArrowForward className="ArrowForward"/> : <MdKeyboardArrowRight className="ArrowRight"/>}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
