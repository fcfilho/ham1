import React from 'react';

import HeroSobre from '../HeroSobre/HeroSobre.component';
import * as Styled from './Sobre.styles';

const Sobre = () => {
  return ( 
    <Styled.Sobre>
      <HeroSobre />
      <div className='header'>
        <h1>Advogados e Consultores Jurídicos.</h1>
      </div>
      <div className='inner-wrapper'>
        <box>
          <h2>Venha nos conhecer</h2>
        </box>
        <box>
          <p>Com sede na cidade de <strong>Poços de Caldas - MG</strong>,
          Hélio Arcanjo Advocacia é um escritório com experiência, competência e seriedade, 
          com paixão pela profissão e por fazer a diferença na vida de nossos clientes. </p>
          <p>Nos orgulhamos por ter compromissos duradouros com nossos clientes.
          Nossa missão é fornecer soluções econômicas e eficientes para ajudar 
          você ou sua empresa a prosperar.</p>
        </box>
      </div>
    </Styled.Sobre>
   );
}
 
export default Sobre;