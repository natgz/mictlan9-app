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
    <div className="LocationContainer">
      <Row>
        <Col xs={12} xl={6}>
          <Card className="text-center col-md-12" text="light" style={{  width: '400px', maxWidth: "50rem" , textAlign:"center", margin:"70px", padding:"1px", backgroundColor:"#f0f8ff00", fontSize: "20px", fontFamily: "Ubuntu, sans-serif" }}>
            <Card.Body>
              <h3>ENVIANOS UN MENSAJE</h3>
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
        <Col xs={12} xl={6}>
          <div className='MapResponsive'>
          <h3>UBICACIÓN</h3>
            <iframe 
              width="800" 
              height="700" 
              style={{border:"0"}} 
              loading="lazy" 
              allowFullScreen={false}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.201744203533!2d-100.19447651350211!3d25.763899091651933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662ebed10d1258b%3A0xddb899ae0870f576!2sPlaza%20Sendero%20La%20Fe!5e0!3m2!1sen!2smx!4v1709854640273!5m2!1sen!2smxhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.201744203533!2d-100.19447651350211!3d25.763899091651933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662ebed10d1258b%3A0xddb899ae0870f576!2sPlaza%20Sendero%20La%20Fe!5e0!3m2!1sen!2smx!4v1709854640273!5m2!1sen!2smx">
            </iframe>                
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Location