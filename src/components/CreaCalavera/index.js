'use client'

import { useState, useEffect } from "react";
import "./CreaCalaveraElements.css";
import { Row, Col, Container } from "react-bootstrap";
import { traits } from '../traits.js';
import Form from '../DesignForm';
import ImgDisplay from '../imgDisplay';
import ButtonEffect from "../ButtonEffect/ButtonEffect";

export default function CreaCalavera() {
  const [selected, setSelected] = useState("closed");
  const [traitsSelected, setTraitsSelected] = useState({});

  const LocalStoragee = () => {
    localStorage.setItem('calavera', "{isOpen: 'closed'}")
    localStorage.getItem('calavera')
  };

  useEffect(()=>{
    let defaultValues = {};
    Object.keys(traits.options).forEach(trait => {
      defaultValues[trait] = traits.options[trait][0];
    })
    setTraitsSelected(defaultValues);
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTraitsSelected({
        ...traitsSelected,
        [name]: value,
    });
  };

  const handleTextChange = (e) => {
    let obj = traitsSelected;
    try{
      obj = JSON.parse(e.target.value);
    }catch(e){
    }
    setTraitsSelected(obj);
  };


  useEffect(() => {
    LocalStoragee()
  }, [selected]);

  return (
    <Container fluid className="main">
      <Row  className="rowcontainer">
        <Col className="formCol">
          <Form 
            handleInputChange={handleInputChange}
            handleTextChange={handleTextChange}
            values={traitsSelected}
            traits={traits} />
          <Container className="BtnContainer">
            <ButtonEffect text="Guardar Calavera" linkBtn="https://github.com/natgz/mictlan9-app/commits/main/"/>
          </Container>
        </Col>
        <Col className="imgCol">
          <ImgDisplay imgObj={traitsSelected} />
        </Col>
      </Row>
      <Row  className="rowcontainer2">
        <Col className="imgCol2">
          <ImgDisplay imgObj={traitsSelected} />
        </Col>
      </Row>
    </Container>
  );
}