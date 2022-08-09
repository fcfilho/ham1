import React from 'react';
import * as Styled from './Hero.styles';

const Hero = () => {
  return (
    <Styled.Hero>
      <div className="inner-wrapper">
        <figure className="featured">
          <img className="featured__image" src="./images/hero/hero3.jpg" alt="HAM Advocacia" />
        </figure>
      </div>
    </Styled.Hero>
  );
}

export default Hero;