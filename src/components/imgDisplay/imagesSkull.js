import mergeImages from 'merge-images';
import { useState } from 'react';
import './imagesSkullElements.css';
import { Button } from 'react-bootstrap';

export default function Images({ imgObject, controls, size, viewJSON }) {

  const imgArray = Object.keys(imgObject)
  
  .filter(v=>{
      try{
        return require(`../../app/images/${v}/${imgObject[v]}.png`);
      }catch(e){
        return false;
      }
    })
    .map(e=>{
      return require(`../../app/images/${e}/${imgObject[e]}.png`)});

  const download = () => {
    console.log(imgArray)

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

  const Controls = () => {
    return (
      <div style={{ display: 'contents' }}>
        <Button 
          variant="contained" 
          size="small"
          sx={{ borderRadius: '0px', minWidth: '0px' }}
          onClick={() => {
            download();
          }} />
        {/* <Button 
          variant="contained"
          size="small"
          sx={{ borderRadius: '0px', minWidth: '0px' }}
          onClick={() => {
            viewJSON(imgObject);
          }} /> */}
      </div>
    )
  }

  return (
    <div className="img-box" style={{ width: size }}>
      { controls && <Controls /> }
      { imgArray.map((img, i)=>{
        const s = img.default.src;
        return (
          <img className="calavera-img" key={i} src={s} alt="not found" />
        );
      })}
    </div>
  );
}