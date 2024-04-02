'use client'

import { useState, useEffect } from "react";
import "./CreaCalaveraElements.css";
import { Row, Col, Container } from "react-bootstrap";
import { traits } from '../traits.js';
import Form from '../DesignForm';
import ImgDisplay from '../imgDisplay';
import mergeImages from 'merge-images';

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

  // const viewJSON = (nftObject) => {
  //   setJsonObj(nftObject);
  //   setModalOpen(true);
  // };

  const imgArray = Object.keys(traitsSelected)
  
  .filter(v=>{
      try{
        return require(`../../app/images/${v}/${traitsSelected[v]}.png`);
      }catch(e){
        return false;
      }
    })
    .map(e=>{
      return require(`../../app/images/${e}/${traitsSelected[e]}.png`)});

  const download = () => {
    const imgSrcArray = imgArray.map((img, i)=>{
      return img.default.src
    })
    
    mergeImages(imgSrcArray).then((b64) => {
      downloadImg(b64, "image", ".png");
    }).catch((a) => {
      console.log("a", a )
    })
  }
  
  const downloadImg = (b64, fileName, format) =>{
    console.log(b64,fileName, format)
    const a = document.createElement("a");
    a.href = `${b64}`;
    a.download = `${fileName}${format}`;
    a.click();
  }

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
            <div style={{ display: 'contents' }}>
              <button 
                className="button-effect draw meet"
                variant="contained" 
                size="small"
                sx={{ borderRadius: '0px', minWidth: '0px' }}
                onClick={() => {
                  download();
                }}  >
                  Guardar Calavera
              </button>
            </div>
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