import React from 'react';
import * as Styled from './Associados.styles';
import JunteSeNos from '../Button/Button.component';

const Associados = () => {
  return ( 
    <Styled.Associados>

      <div className='header'>
        <h1>Nossa equipe</h1>
        <JunteSeNos>Junte-se a nós</JunteSeNos>
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
            <p>Proprietário do escritório</p>
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
            <p>Silvianeguesesadv@gmail.com</p>
            <p>Escritório em Campinas - SP</p>
          </box-text>
        </box-member>
      </div>
    </Styled.Associados>  
   );
}
 
export default Associados;