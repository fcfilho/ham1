import React from 'react';
import * as Styled from './HeroSobre.styles';

function HeroSobre({ openRegisterDialog }) {
  return (
    <Styled.HeroSobre>
      <div className="inner-wrapper">
        <figure className="featured">
          <img className="featured__image" src="./images/sobre/sobre.png" alt="Sobre" />
        </figure>
      </div> 
    </Styled.HeroSobre>
  );
}

export default HeroSobre;