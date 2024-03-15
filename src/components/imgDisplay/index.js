import { useState } from 'react';
import ImagesSkull from './imagesSkull.js';
import { Container} from 'react-bootstrap';

export default function ImgDisplay({imgObj}) {

  return (
    <div>
      <Container>
        {imgObj && Object.keys(imgObj).length > 0 && 
          <ImagesSkull 
          imgObject={imgObj}
          controls={false}
          size="100%"
          viewJSON={false}/>}
      </Container>
    </div>
  );

}