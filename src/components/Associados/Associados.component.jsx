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
            <p>
              <a
                href="https://api.whatsapp.com/send?phone=5535999068555&text=Olá%20Dr.%20Hélio,%20eu%20gostaria%20de%20contar%20com%20seus%20serviços%20jurídicos,%20por%20favor!" 
                className="social-media__icon social-media__icon--whatsapp"
                target="_blank"
                rel="noopener noreferrer"> Tel: (35) 99906-8555
              </a>
            </p>

            <p>
              <a href="mailto:arcanjo.adv@live.com">arcanjo.adv@live.com</a>
            </p>
            
            <p>
              <a 
                href="https://www.google.com/maps/place/R.+Dr.+Vicente+Risola,+325+-+São+Benedito,+Poços+de+Caldas+-+MG,+37701-168/@-21.7906473,-46.5624877,17z/data=!3m1!4b1!4m5!3m4!1s0x94c9dcddf7343b55:0x19a3c1163071305a!8m2!3d-21.7906473!4d-46.560299" 
                className="location-icon"
                target="_blank" 
                rel="noopener noreferrer">Escritório Poços de Caldas
              </a>
            </p>
          </box-text>
        </box-member>

        <box-member>
          <box-img>
            <img src="./images/associados/silviane.jpeg" alt="Silviane" />
          </box-img>
          <box-text>
            <h3>Silviane Guedes</h3>
            <p>OAB: MG xx.xxx</p>
            
            <p>
              <a
                href="https://api.whatsapp.com/send?phone=5519999293303&text=Olá%20Dra.%20Silviane,%20eu%20gostaria%20de%20contar%20com%20seus%20serviços%20jurídicos,%20por%20favor!" 
                className="social-media__icon social-media__icon--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Tel: (19) 99929-3303
                </a>
            </p>
            
            <p> 
              <a href="mailto:silvianeguesesadv@gmail.com">silvianeguesesadv@gmail.com</a>
            </p>
            
            <p>
              <a 
                href="https://www.google.com/maps/place/R.+Mal.+Rondon,+700+-+Jardim+Chapadão,+Campinas+-+SP,+13070-173/@-22.8938632,-47.0946318,16z/data=!4m5!3m4!1s0x94c8cfd75353e67f:0x58291dbe79203e5f!8m2!3d-22.893505!4d-47.0883536"
                className="location-icon"
                target="_blank" 
                rel="noopener noreferrer">Escritório Campinas
              </a>
            </p>
          </box-text>
        </box-member>
      </div>
    </Styled.Associados>  
   );
}
 
export default Associados;