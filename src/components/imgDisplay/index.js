import { useState } from 'react';
import ImagesSkull from './imagesSkull.js';
import { Col, Container, Row } from 'react-bootstrap';
import './imagesSkullElements.css'

export default function ImgDisplay({imgObj}) {

  return (
    <Container fluid>
      {imgObj && Object.keys(imgObj).length > 0 && 
        <ImagesSkull 
        imgObject={imgObj}
        controls={false}
        size="100%"
        viewJSON={false}/>}
    </Container>
  );

}