import React from 'react';
import * as Styled from './Home.styles';

import Hero from '../Hero/Hero.component';

const Home = () => {
  return (
    <Styled.Home>
      <Hero />
      <div className='header'>
        <h1>Práticas legislativas e seriedade</h1>
      </div>
      <div className='inner-wrapper'>
        <box>
          <h2>Para Empresas & Profissionais</h2>
        </box>
        <box>
          <p>Oferecemos soluções jurídicas para empresas e pessoas físicas através de serviços nas Áreas do 
          Contencioso Judicial e Consultoria Jurídica, abrangendo Assessoria Jurídico Empresarial, Direito bancário, 
          Direito do Consumidor,  Direito Imobiliário, Direito Trabalhista, Gestão empresarial e Recuperação de crédito.</p>

          <p>Atuação direta no desenvolvimento e análise de minutas contratuais de natureza diversa, 
          bem como elaboração de pareceres e defesas administrativas.</p>
        </box>
      </div>
    </Styled.Home>  
  );
}

export default Home;
