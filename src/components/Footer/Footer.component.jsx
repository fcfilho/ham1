/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Styled from './Footer.styles';

function Footer({ openRegisterDialog }) {
  const currentYear = new Date().getFullYear();

  return (
    <Styled.Footer>
      <div className="inner-wrapper">
        <nav>
          <a 
            href="https://www.google.com/maps/place/R.+Dr.+Vicente+Risola,+325+-+São+Benedito,+Poços+de+Caldas+-+MG,+37701-168/@-21.7906473,-46.5624877,17z/data=!3m1!4b1!4m5!3m4!1s0x94c9dcddf7343b55:0x19a3c1163071305a!8m2!3d-21.7906473!4d-46.560299" 
            className="location-icon"
            target="_blank" 
            rel="noopener noreferrer">
            R. Dr. Vicente Risola, 325<br/>São Benedito<br/>Poços de Caldas - MG<br/>37701-168
          </a>
        </nav>

        <div className="social-media">
          <a
          href="https://api.whatsapp.com/send?phone=5535999068555&text=Olá%20Dr.%20Hélio%20Arcanjo,%20eu%20gostaria%20de%20saber%20se%20seu%20escritório%20atua%20na%20área%20de%20..." 
          className="social-media__icon social-media__icon--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          >
            Whatsapp
          </a>
        
          <a
            href="https://www.facebook.com/helio.arcanjomaximo"
            className="social-media__icon social-media__icon--facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <nav>
            <a href="mailto:arcanjo.adv@live.com">arcanjo.adv@live.com</a>
          </nav>  
        </div>

        <div className="rights-reserved">
          <p className="rights-reserved__text">Hélio Arcanjo Máximo<br/>Advocacia<br/><br/>OAB: MG 69.136<br/><br/>Todos os Direitos Reservados {currentYear}</p>
        </div>

      </div>
    </Styled.Footer>
  );
}

export default Footer;
