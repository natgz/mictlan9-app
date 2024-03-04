// import photo1 from "/images/carajillo.jpg"
// import Icon2 from "/images/capuccino.jpg"
// import Icon3 from "/images/espresso tonic.jpg"
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from "./LocationElements"

import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import GenericToast from './genericToast.js'
import ContactForm from './contactForm.js';
import './LocationElements.css'

const Services = (
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
) => {
  const [toastShow, setToastShow] = useState(false);

  return (
    <div className={theme} id={id}>
        <div className="InfoWrapper">
          <Row className="rowp">
            <div className="Column1">
              <div className="TextWrapper">
              <h4>CONTÁCTANOS</h4>
              <ContactForm />
            </div>
            </div>
            <div className="Column2">
              <h4 >UBICACIÓN</h4>
              <div className='map-responsive'>
                <iframe 
                className="border-0"
                  width="500" 
                  height="350" 
                  loading="lazy" 
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZ2WR08YBzoURhpPlYaZoETQ&key=AIzaSyAwwYa-zGaBoc26FPWMOnH7ozTXTB-xASk">
                </iframe>                
              </div>
            </div>
          </Row>
        </div>
      </div>
    // <div id="contacto">
    //       {/* <GenericToast show={toastShow} setShow={setToastShow} title={''} body={'¡Correo Enviado!'}  />  */}
    //       <Container>
    //         <Fade cascade>
    //           <Row className="justify-content-md-center">
    //             <Col xs={6}>
    //               <h4>CONTÁCTANOS</h4>
    //               <ContactForm setShow={setToastShow} />                                  
    //             </Col>
    //           </Row>
    //           <Row className="justify-content-md-center">
    //             <Col>
    //               <h4 >UBICACIÓN</h4>
    //               <div className='map-responsive'>
    //                 <iframe 
    //                 className="border-0"
    //                   width="500" 
    //                   height="350" 
    //                   loading="lazy" 
    //                   src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZ2WR08YBzoURhpPlYaZoETQ&key=AIzaSyAwwYa-zGaBoc26FPWMOnH7ozTXTB-xASk">
    //                 </iframe>                
    //               </div>
    //             </Col>
    //           </Row>
    //         </Fade>   
    //       </Container>                  
    //     </div>
  )
}

export default Services
