import React from 'react';
import './GalleryElements.css';
import { Stack, Image, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Gallery() {
  return (
    <Container className='bg-black p-5'>
      <Row>
        <Col>
          <Stack gap={3}>
            <div className='layer-1'>
              <h1>SIN MIEDO</h1>
              <p>¡Mejor ambiente!</p>
              <p className='Inria'>
                Conoce la variedad de bebidas y mixología que tenemos
                especialmente para ti.
              </p>
            </div>
            <Image
              className='rounded text-center'
              src='/images/img-1.webp'
              alt=''
              fluid 
            />
          </Stack>
        </Col>
        <Col>
          <Stack gap={3}>
            <Image
                className='rounded text-center'
                src='/images/img-2.jpeg'
                alt=''
                fluid
              />
            <div className='layer-1'>
              <h1>EL MEJOR SABOR</h1>
              <p>¡Prueba las especialidades!</p>
              <p className='Inria'>
                ¡Ufffff! Podrás encontrar todo tipo de platillos y bebidas.
              </p>
            </div>
          </Stack>
        </Col>
        <Col>
          <Stack gap={3}>
            <div className='layer-1'>
              <h1>LAS INSTALACIONES</h1>
              <p>¡Para todos y con todos!</p>
              <p className='Inria'>
                {' '}
                Te hacemos sentir como en casa. Ven y disfruta del lugar.{' '}
              </p>
            </div>
            <Image
              className='rounded text-center'
              src='/images/img-3.jpeg'
              alt=''
              fluid
            />
          </Stack>
        </Col>
        <Col>
          <Stack gap={3}>
            <Image
                className='rounded text-center'
                src='/images/img-4.jpeg'
                alt=''
                fluid
              />
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
