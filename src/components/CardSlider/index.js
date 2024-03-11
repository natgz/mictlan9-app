import React, { useState } from "react"
import { Button } from "../ButtonElements"
import './CardSliderElements.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1246,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1073,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 743,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    {
      name: 'title1',
      title: 'title1',
      description: 'description1',
      img: './images/food1.jpg'
    },
    {
      name: 'title2',
      title: 'title2',
      description: 'description2',
      img: './images/food2.jpg'
    },
    {
      name: 'title3',
      title: 'title3',
      description: 'description3',
      img: './images/food3.jpg'
    },
    {
      name: 'title4',
      title: 'title4',
      description: 'description4',
      img: './images/food4.jpg'
    },
    {
      name: 'title5',
      title: 'title5',
      description: 'description5',
      img: './images/food5.jpg'
    },
    {
      name: 'title5',
      title: 'title5',
      description: 'description5',
      img: './images/food6.jpg'
    },
    {
      name: 'title5',
      title: 'title5',
      description: 'description5',
      img: './images/food7.jpg'
    },
    {
      name: 'title5',
      title: 'title5',
      description: 'description5',
      img: './images/food8.jpg'
    },
    {
      name: 'title5',
      title: 'title5',
      description: 'description5',
      img: './images/food9.jpg'
    },
    {
      name: 'title5',
      title: 'title5',
      description: 'description5',
      img: './images/food10.jpg'
    }
  ]

  return (
    <div className="CardSliderContainer">
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
          exact="true"
          primary='true'
          dark='false'
          dark2='false'
        >
          Ve Nuestro Menú Completo
        </Button>
      </div>
    </div>
  )
}

export default CardSlider