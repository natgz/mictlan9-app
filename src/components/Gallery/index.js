import React from 'react';
import './GalleryElements.css';
import { Stack, Image, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Gallery() {
  return (
    <Container className='bg-black p-5'>
      <div className='galleryTitle'>
        <h1>Experiencia Mictlán</h1>
      </div>
      <Row>
        <Col xs={12} sm={6} md={6} xl={3} className='px-0'>
          <Stack gap={1}>
            <div className='layer-1'>
              <h1>SIN MIEDO</h1>
              <p>¡Mejor ambiente!</p>
              <p className='Inria'>
                Conoce la variedad de bebidas y mixología que tenemos
                especialmente para ti.
              </p>
            </div>
            <div className='galleryImg'>
              <Image
                className='galleryImg rounded text-center'
                src='/images/img-1.webp'
                alt=''
                fluid 
              />
            </div>
          </Stack>
        </Col>
        <Col xs={12} sm={6} md={6} xl={3} className='px-0'>
          <Stack gap={1} className='stackUp'>
          <div className='galleryImg'>
              <Image
                className='galleryImg rounded text-center flex-center'
                src='/images/img-2.jpeg'
                alt=''
                fluid 
              />
            </div>
            <div className='layer-1'>
              <h1>EL MEJOR SABOR</h1>
              <p>¡Prueba las especialidades!</p>
              <p className='Inria'>
                ¡Ufffff! Podrás encontrar todo tipo de platillos y bebidas.
              </p>
            </div>
          </Stack>
        </Col>
        <Col xs={12} sm={6} md={6} xl={3} className='px-0'>
          <Stack gap={1}>
            <div className='layer-1'>
              <h1>LAS INSTALACIONES</h1>
              <p>¡Para todos y con todos!</p>
              <p className='Inria'>
                {' '}
                Te hacemos sentir como en casa. Ven y disfruta del lugar.{' '}
              </p>
            </div>
            <div className='galleryImg'>
              <Image
                className='galleryImg rounded text-center'
                src='/images/img-3.jpeg'
                alt=''
                fluid 
              />
            </div>
          </Stack>
        </Col>
        <Col xs={12} sm={6} md={6} xl={3} className='px-0'>
          <Stack gap={1} className='stackUp'>
          <div className='galleryImg'>
              <Image
                className='galleryImg rounded text-center'
                src='/images/img-4.jpeg'
                alt=''
                fluid 
              />
            </div>
            <div className='layer-1'>
              <h1>DISFRUTA LOS EVENTOS</h1>
              <p>¡Vive la pasión del deporte!</p>
              <p className='Inria'>
                Disfruta de los mejores partidos y eventos en compañía de tus
                amigos y familia.
              </p>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
