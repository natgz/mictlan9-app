import React, { useState } from "react"
import './LocationElements.css'
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Location() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(()=>{
      setFormData({
        name: '',
        email: '',
        message: '',
        phone: '',
      });
      setEnviado(false)
    }, 2000);
    const payload = {...formData, contacto: true};
    const res = await fetch(`${import.meta.env.VITE_API_FRONT}/crear-cita?obj=${encodeURIComponent(JSON.stringify(payload))}`)
    const response = await res.json();
    // if(response) props.setShow(true);
    setEnviado(false);    
  };

  return (
    <div className="LocationContainer" id="ubicacion">
      <div className="LocationTitle">
        <h1>MICTLAN9</h1>
        <h2>Te esperamos</h2>
        <h2>Envianos un Mensaje</h2>
      </div>
      <Row>
        <Col xs={12} md={6} xl={6}>
          <Card className="text-center col-md-12" text="light" style={{ backgroundColor:"#f0f8ff00", fontSize: "20px", fontFamily: "Ubuntu, sans-serif" }}>
            <Card.Body>
              <Form>
                <Form.Group xs={12} className="mb-3">
                  <Form.Label htmlFor="name">Nombre:</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group  xs={12} md={6} className="mb-3">
                  <Form.Label htmlFor="email">Correo:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group  xs={12} md={6} className="mb-3">
                  <Form.Label htmlFor="email">Teléfono:</Form.Label>
                  <Form.Control
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group xs={12} className="mb-3">
                  <Form.Label htmlFor="message">Comentarios:</Form.Label>
                  <Form.Control
                    name="message"
                    as="textarea" rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                {enviado ?             
                  <Button>Enviado</Button>
                :             
                  <Button variant="danger" type="submit" onClick={(e)=>handleSubmit(e)}>Enviar</Button>
                }
              </Form>      
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={6}>
          <div className='MapArea'>
            <div className="MapResponsive">
              <iframe className="responsive-iframe"
                width="660" 
                height="420" 
                style={{border:"0"}} 
                loading="lazy" 
                allowFullScreen={false}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.201744203533!2d-100.19447651350211!3d25.763899091651933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662ebed10d1258b%3A0xddb899ae0870f576!2sPlaza%20Sendero%20La%20Fe!5e0!3m2!1sen!2smx!4v1709854640273!5m2!1sen!2smxhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.201744203533!2d-100.19447651350211!3d25.763899091651933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662ebed10d1258b%3A0xddb899ae0870f576!2sPlaza%20Sendero%20La%20Fe!5e0!3m2!1sen!2smx!4v1709854640273!5m2!1sen!2smx">
              </iframe>  
            </div> 
            <Row className="MapTextArea">
              <Col xs={12} md={6}>
                <div className="MapText">
                  <h5>Plaza Sendero La Fe</h5>
                  <p>Av. Miguel Alemán 1, La Fe, 66600 Cd Apodaca, N.L.</p>
                </div>
              </Col>
              <Col xs={12} md={6} border color="blue">
                <div className="MapText">
                  <h5>Horario</h5>
                  <p>Lunes a Domingo de 11:00 a 21:00 hrs</p>
                </div>
              </Col>
            </Row>         
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Location