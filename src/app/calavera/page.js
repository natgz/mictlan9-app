'use client'

import { useState, useEffect } from "react";
import "./calaveraElements.css";
import { Row, Col } from "react-bootstrap";
import { traits } from '../../components/traits.js';
import Form from '../../components/DesignForm/index.js';
import ImgDisplay from '../../components/imgDisplay/index.js';

export default function Home() {
  const [selected, setSelected] = useState("closed");
  const [LocalStorage, setLocalStorage] = useState({});
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
    <Row>
      <Col>
        <Form 
          handleInputChange={handleInputChange}
          handleTextChange={handleTextChange}
          values={traitsSelected}
          traits={traits} />
      </Col>
      <Col>
        <ImgDisplay className="imgDisplay"
          imgObj={traitsSelected} />
      </Col>

    </Row>
  );
}
