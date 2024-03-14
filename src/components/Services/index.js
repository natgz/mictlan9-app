import React from "react"
// import photo1 from "/images/carajillo.jpg"
// import Icon2 from "/images/capuccino.jpg"
// import Icon3 from "/images/espresso tonic.jpg"
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from "./ServicesElements"

const Services = () => {
  return (
    <ServicesContainer id="menu">
      <ServicesH1>¡CREA TU CALAVERA!</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src="/images/bebidas.jpg" />
          <ServicesH2>Mixología</ServicesH2>
          <ServicesP>Busca la bebida perfecta para tí.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="/images/entradas.jpg" />
          <ServicesH2>Entradas</ServicesH2>
          <ServicesP>Expreso, vapor y espuma de leche a partes iguales.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="/images/comidas.jpg" />
          <ServicesH2>Especiales</ServicesH2>
          <ServicesP>Deliciosa combinación de café y agua tónica.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
