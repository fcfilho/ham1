import React from 'react';
import * as Styled from './Associados.styles';
import JunteSeNos from '../Button/Button.component';

const Associados = () => {
  return ( 
    <Styled.Associados>

      <div className='header'>
        <h1>Nossa equipe</h1>
        <h2>Junte-se a nós</h2>
      </div>

      <div className='inner-wrapper'>
        <box-member> 
          <box-img>
            <img src="./images/associados/helio.jpeg" alt="Hélio" />
          </box-img>
          <box-text>
            <h3>Hélio Arcanjo Máximo</h3>
            <p>OAB: MG 69.136</p>
            <p>Tel: (35) 99906-8555</p>
            <p>arcanjo.adv@live.com</p>
            <p>Escritório Poços de Caldas</p>
          </box-text>
        </box-member>

        <box-member>
          <box-img>
            <img src="./images/associados/silviane.jpeg" alt="Silviane" />
          </box-img>
          <box-text>
            <h3>Silviane Guedes</h3>
            <p>OAB: MG xx.xxx</p>
            <p>Tel: (19) 99929-3303</p>
            <p>silvianeguesesadv@gmail.com</p>
            <p>Escritório Campinas</p>
          </box-text>
        </box-member>
      </div>
    </Styled.Associados>  
   );
}
 
export default Associados;