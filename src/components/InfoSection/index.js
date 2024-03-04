import React from "react"
import { Button } from "../ButtonElements"
import './InfoElements.css'

const InfoSection = ({
  theme,
  heading,
  text,
  id,
  rows,
  topLine,
  headline,
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
      <div className={theme} id={id}>
        <div className="InfoContainer">
        <div className="InfoWrapper">
          <div className={rows}>
            <div className="Column1">
              <div className="TextWrapper">
                <p className="TopLine">{topLine}</p>
                <h1 className={heading}>{headline}</h1>
                <p className={text}>{description}</p>
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
      </div>
    </>
  )
}

export default InfoSection
