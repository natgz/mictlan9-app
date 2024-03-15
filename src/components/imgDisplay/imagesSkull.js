import mergeImages from 'merge-images';
import { useState } from 'react';

export default function Images({ imgObject, controls, size, viewJSON }) {

  const imgArray = Object.keys(imgObject)
    .filter(v=>{
      try{
        return require(`${process.env.REACT_APP_IMG_PATH}/${v}/${nftObject[v]}.png`);
      }catch(e){
        return false;
      }
    })
    .map(e=>{return require(`${process.env.REACT_APP_IMG_PATH}/${e}/${nftObject[e]}.png`)});

  const download = () => {
    mergeImages(imgArray).then((b64) => {
      downloadImg(b64, "image", ".png");
    });
  }

  const downloadImg = (b64, fileName, format) =>{
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
          endIcon={<DownloadIcon />}
          onClick={() => {
            download();
          }} />
        <Button 
          variant="contained"
          size="small"
          sx={{ borderRadius: '0px', minWidth: '0px' }}
          endIcon={<RemoveRedEyeIcon />}
          onClick={() => {
            viewJSON(imgObject);
          }} />
      </div>
    )
  }

  return (
    <div className="nft-box" style={{ width: size }}>
      { controls && <Controls /> }
      { imgArray.map((img, i)=>{
        return (
          <img className="nft-img" key={i} src={img} alt="not found" />
        );
      })}
    </div>
  );
}