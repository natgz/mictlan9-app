import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <section className='gallery'>
      <div>
        <div className='wrapper'>
          <div className='media'>
            <div className='layer-1'>
              <h1>SIN MIEDO</h1>
              <p>¡Mejor ambiente!</p>
              <p className='Inria'>
                Conoce la variedad de bebidas y mixología que tenemos
                especialmente para ti.
              </p>
            </div>
            <img
              className='img-1'
              src='https://images.pexels.com/photos/2078008/pexels-photo-2078008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
          </div>
          <div className='media'>
            <div className='layer-2'>
              <h1>EL MEJOR SABOR</h1>
              <p>¡Prueba las especialidades!</p>
              <p className='Inria'>
                ¡Ufffff! Podrás encontrar todo tipo de platillos y bebidas.
              </p>
            </div>
            <img
              className='img-2'
              src='https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
          </div>
          <div className='media'>
            <div className='layer-1'>
              <h1>LAS INSTALACIONES</h1>
              <p>¡Para todos y con todos!</p>
              <p className='Inria'>
                {' '}
                Te hacemos sentir como en casa. Ven y dsifruta del lugar.{' '}
              </p>
            </div>
            <img
              className='img-1'
              src='https://images.pexels.com/photos/16172402/pexels-photo-16172402/free-photo-of-alcohol-barra-bar-botellas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
          </div>
          <div className='media'>
            <div className='layer-2'>
              <h1>DISFRUTA LOS EVENTOS</h1>
              <p>¡Vive la pasión del deporte!</p>
              <p className='Inria'>
                Disfruta de los mejores partidos y eventos en compañía de tus
                amigos y familia.
              </p>
            </div>
            <img
              className='img-2'
              src='https://pbs.twimg.com/media/FZBHzLLWYAMlwgW?format=jpg&name=large'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
