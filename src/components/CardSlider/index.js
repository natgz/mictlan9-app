import ButtonEffect from "../ButtonEffect/ButtonEffect";
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
    slidesToScroll: 4,
    initialSlide: 0,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          style: {width: '200'},
          // infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ],
  };

  const data = [
    {
      name: 'title1',
      title: 'title1',
      description: 'description1',
      img: './images/comida1.jpeg'
    },
    {
      name: 'title2',
      title: 'title2',
      description: 'description2',
      img: './images/comida2.jpeg'
    },
    {
      name: 'title3',
      title: 'title3',
      description: 'description3',
      img: './images/comida3.jpeg'
    },
    {
      name: 'title4',
      title: 'title4',
      description: 'description4',
      img: './images/comida4.jpeg'
    },
    {
      name: 'title5',
      title: 'title5',
      description: 'description5',
      img: './images/comida5.jpeg'
    },
    {
      name: 'title5',
      title: 'title5',
      description: 'description5',
      img: './images/comida6.jpeg'
    },
    {
      name: 'title5',
      title: 'title5',
      description: 'description5',
      img: './images/comida7.jpeg'
    },
    {
      name: 'title5',
      title: 'title5',
      description: 'description5',
      img: './images/comida8.jpeg'
    },
    {
      name: 'title5',
      title: 'title5',
      description: 'description5',
      img: './images/comida9.jpeg'
    }
  ]

  return (
    <div className="CardSliderContainer" id="menu">
      <h1 className="CardSliderTitle">Nuestras Recomendaciones</h1>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.name} className="CardSliderExtra">
            <img src={item.img} alt={item.title} className="img"/>
              {/* <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p> */}
          </div>
        ))}
      </Slider>

      <div className="BtnWrap1">
        <ButtonEffect text="Ver Nuestro Menú Completo" />
      </div>
    </div>
  )
}

export default CardSlider