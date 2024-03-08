import React, { useState } from "react"
import { Button } from "../ButtonElements"
import './CardSliderElements.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  const data = [
    {
      title: 'title1',
      description: 'description1',
      img: './images/img1.jpeg'
    },
    {
      title: 'title2',
      description: 'description2',
      img: './images/img2.jpeg'
    },
    {
      title: 'title3',
      description: 'description3',
      img: './images/img3.jpeg'
    },
    {
      title: 'title4',
      description: 'description4',
      img: './images/vato.jpg'
    },
    {
      title: 'title5',
      description: 'description5',
      img: './images/bebidas.jpg'
    }
  ]

  return (
    <div className="CardSliderContainer">
      <div className="CardSliderWrapper">
        <h1 className="CardSliderTitle">Nuestras Recomendaciones</h1>
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.name} className="CardSliderExtra">
              <div className="CardSliderSpace">
                <img src={item.img} alt={item.title} className="img"/>
              </div>

              <div className="CardSliderInfo">
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="BtnWrap">
          <Button
            to="home"
            smooth='true'
            duration='500'
            spy='true'
            exact="true"
            offset='-80'
            primary='true'
            dark='false'
            dark2='false'
          >
            Ve Nuestro Menú Completo
          </Button>
        </div>
      </div>
      
    </div>
  )
}

export default CardSlider