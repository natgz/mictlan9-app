import { Button } from "../ButtonElements"
import './MixologyElements.css';
import { Stack, Image, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Mixology() {
  return (
    <Container className='bg-black p-5' id="mixologia">
      <div className='MixologyTitle'>
        <h1>Mixología</h1>
      </div>
      <Row>
        <Col xs={12} sm={6} md={6} xl={3} className='px-0'>
          <Stack gap={1}>
            <div className='MixologyImg'>
              <Image
                className='MixologyImg rounded text-center'
                src='/images/mix1.webp'
                alt=''
                fluid 
              />
            </div>
            <div className='mixologyText'>
              <h1>Bebida Nombre</h1>
              <h3>Tequila - etc - etc</h3>
              <p>
                Descripción de bebida, ingredientes, preparación, etc.
              </p>
            </div>
          </Stack>
        </Col>
        <Col xs={12} sm={6} md={6} xl={3} className='px-0'>
          <Stack gap={1} className='stackUp'>
            <div className='mixologyText'>
            <h1>Bebida Nombre</h1>
              <h3>Tequila - etc - etc</h3>
              <p>
                Descripción de bebida, ingredientes, preparación, etc.
              </p>
            </div>
          <div className='MixologyImg'>
              <Image
                className='MixologyImg rounded text-center flex-center'
                src='/images/mix2.webp'
                alt=''
                fluid 
              />
            </div>
          </Stack>
        </Col>
        <Col xs={12} sm={6} md={6} xl={3} className='px-0'>
          <Stack gap={1}>
            <div className='MixologyImg'>
              <Image
                className='MixologyImg rounded text-center'
                src='/images/mix3.webp'
                alt=''
                fluid 
              />
            </div>
            <div className='mixologyText'>
            <h1>Bebida Nombre</h1>
              <h3>Tequila - etc - etc</h3>
              <p>
                Descripción de bebida, ingredientes, preparación, etc.
              </p>
            </div>
          </Stack>
        </Col>
        <Col xs={12} sm={6} md={6} xl={3} className='px-0'>
          <Stack gap={1} className='stackUp'>
            <div className='mixologyText'>
            <h1>Bebida Nombre</h1>
              <h3>contenido ej. Tequila - etc - etc</h3>
              <p>
                Descripción de bebida, ingredientes, preparación, etc.
              </p>
            </div>
          <div className='MixologyImg'>
              <Image
                className='MixologyImg rounded text-center'
                src='/images/mix4.webp'
                alt=''
                fluid 
              />
            </div>
          </Stack>
        </Col>
      </Row>

      <div className="BtnWrap1">
        <Button
          to="home"
          smooth='true'
          exact="true"
          primary='true'
          dark='false'
          dark2='false'
        >
          Ve menu de mixologías
        </Button>
      </div>
    </Container>
  );
}

export default Mixology;
