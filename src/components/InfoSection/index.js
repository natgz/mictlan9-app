import React from "react"
import { Button } from "../ButtonElements"
import './InfoElements.css'

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
      <div className="InfoContainer" lightBg={lightBg} id={id}>
        <div className="InfoWrapper">
          <div className="InfoRow" imgStart={imgStart}>
            <div className="Column1">
              <div className="TextWrapper">
                <p className="TopLine">{topLine}</p>
                <h1 className="Heading" lightText={lightText}>{headline}</h1>
                <p className="Subtitle" darkText={darkText}>{description}</p>
                <div className="BtnWrap">
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </div>
              </div>
            </div>
            <div className="Column2">
              <div className="ImgWrap">
                <img className="Img" src={img} alt={alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoSection
