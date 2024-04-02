import React from "react"
import ButtonEffect from "../ButtonEffect/ButtonEffect";
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
  linkBtn
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
                  {/* <ButtonEffect  text={buttonLabel} linkBtn={linkBtn}/> */}
                </div>
              </div>
            </div>
            <div className="Column2">
              <div className="ImgWrap">
                <img className="infoImg" src={img} alt={alt} />
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
