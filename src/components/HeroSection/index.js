import React, { useState } from "react"
import { Button } from "../ButtonElements"
import { Col, Container, Row } from 'react-bootstrap';
import './HeroElements.css'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import ButtonEffect from "../ButtonEffect/ButtonEffect";

function HeroSection() {
  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  const onHover2 = () => {
    setHover2(!hover2)
  }

  return (
    <div className="HeroContainer" id="home">
      <div className="HeroBg">
        <video className="VideoBg" autoPlay loop muted src="/videos/bar-video.mp4" type="video/mp4" />
      </div>
      <div className="HeroContent">
        <div className="HeroLogo">
          <img src="/images/MICTLAN-TERMINADO.png" alt="MitlánLogo" />
        </div>
        <p className="HeroP">Sumérgete en la magia de Mictlán.</p>
        <Container>
        <Row className="HeroBtnWrapper">
          <Col className="text-center">
            <ButtonEffect text="Ver Menú" /> 
          </Col>
          <Col className="text-center">
            <ButtonEffect text="Reservación" />
          {/* <button 
            class="draw meet button-effect" 
            onMouseEnter={onHover2}
            onMouseLeave={onHover2}
            >
            Reservación {hover2 ? <MdArrowForward className="ArrowForward"/> : <MdKeyboardArrowRight className="ArrowRight"/>}
            </button> */}
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  )
}

export default HeroSection
