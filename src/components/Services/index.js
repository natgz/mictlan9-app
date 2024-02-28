import React from "react"
// import Icon1 from "/images/carajillo.jpg"
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
    <ServicesContainer id="services">
      <ServicesH1>Blogs & Recetas</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          {/* <ServicesIcon src={Icon1} /> */}
          <ServicesH2>Carajillos</ServicesH2>
          <ServicesP>Espresso y bebida alcoholica usualmente brandi. </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon2} /> */}
          <ServicesH2>Latte</ServicesH2>
          <ServicesP>Expreso, vapor y espuma de leche a partes iguales.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon3} /> */}
          <ServicesH2>Espresso Tonic</ServicesH2>
          <ServicesP>Deliciosa combinación de café y agua tónica.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
