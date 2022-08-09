import React from 'react';
import AtuacaoSteps from '../AtuacaoSteps';
import Button from '../Button/Button.component';

import * as Styled from './Atuacao.styles';

const Atuacao = () => {

  return ( 
    <Styled.Atuacao>
    <div className="header">
      <h1>Ramos de atuação</h1>
      <h2>Foco e especialidade</h2>
    </div>
    <AtuacaoSteps bg="./images/atuacao/adv_preventiva.jpeg" size={[665, 666]} inverted>
      <h3 className="thin">Advocacia de Prevenção</h3>
      <p>Sua empresa não pode depender de boa vontade do judiciário. Atecipe-se, minimize perdas e evite prejuízos</p>
      <Button >Contate-nos</Button>
    </AtuacaoSteps>
    <AtuacaoSteps bg="./images/atuacao/jurid_emp.jpeg" size={[665, 666]}>
      <h3 className="thin">Assessoria Empresarial</h3>
      <p>Evite litígios. Assessoramos sua empresa visando minimizar litígios trabalhistas e previnir conflitos. 
      Temos grandes atuações em empresas de trasnsportes e construtoras.</p>
      <Button >Contate-nos</Button>
    </AtuacaoSteps>
    <AtuacaoSteps bg="./images/atuacao/dir_bancario.jpeg" size={[813, 498]} inverted>
      <h3 className="thin">Direito Bancário</h3>
      <p>Ampla experiência na defesa dos interesses da empresa em demandas contra bancos.</p>
      <Button >Contate-nos</Button>
    </AtuacaoSteps>
    <AtuacaoSteps bg="./images/atuacao/dir_consumidor.jpeg" size={[813, 498]}>
      <h3 className="thin">Direito do Consumidor</h3>
      <p>Ampla experiência na defesa dos interesses da empresa em demandas contra bancos.</p>
      <Button >Contate-nos</Button>
    </AtuacaoSteps>
    <AtuacaoSteps bg="./images/atuacao/dir_imobiliario.jpeg" size={[813, 498]} inverted>
    <h3 className="thin">Direito Imobiliário</h3>
    <p>Ampla experiência na defesa dos interesses da empresa em demandas contra bancos.</p>
    <Button >Contate-nos</Button>
  </AtuacaoSteps>
    <AtuacaoSteps bg="./images/atuacao/gest_empr.jpeg" size={[896, 549]} >
      <h3 className="thin">Gestão empresarial</h3>
      <p>Gestão empresarial é uma estratégia de condução de negócios a melhores resultados, partindo de ações que envolvem a organização de processos, o controle das finanças, a administração dos recursos humanos e materiais e tudo aquilo que é essencial para a sua manutenção.</p>
      <Button >Contate-nos</Button>
    </AtuacaoSteps>
    <AtuacaoSteps bg="./images/atuacao/rec_cred.jpeg" size={[813, 498]} inverted>
      <h3 className="thin">Recuperação de crédito</h3>
      <p>O processo de recuperação de crédito é feito por empresas especializadas em conseguir o pagamento de dívidas. Elas podem ser contratadas, por exemplo, por instituições financeiras para fazer a cobrança da pendência. As recuperadoras de crédito também costumam compram dívidas de bancos ou financeiras.</p>
      <Button >Contate-nos</Button>
    </AtuacaoSteps>
    <AtuacaoSteps bg="./images/atuacao/trabalhista.jpeg" size={[896, 549]}>
      <h3 className="thin">Direito trabalhista</h3>
      <p>O direito do trabalho, também chamado de direito trabalhista, é um ramo do direito privado que é responsável por regular a relação jurídica entre trabalhadores e empregadores, baseado nos princípios e leis trabalhistas.</p>
      <Button>Contate-nos</Button>
    </AtuacaoSteps>
    
  </Styled.Atuacao>
  );
}

export default Atuacao;
