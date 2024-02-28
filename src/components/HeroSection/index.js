import React, { useState } from "react"
// import Video from "../../videos/bar-video.mp4"
import { Button } from "../ButtonElements"
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from "./HeroElements"

function HeroSection() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src="/videos/bar-video.mp4" type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>CAPRA</HeroH1>
        <HeroH2>WINE BARREL AGED COFFEE</HeroH2>
        <HeroP>Start your day like the G.O.A.T.</HeroP>
        <HeroBtnWrapper>
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
            Inicia {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
