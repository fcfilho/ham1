import styled from 'styled-components';

export const Atuacao = styled('section')`
  background: radial-gradient(51% 51% at 33% 43%, #f5f9fa 45%, #e5e5e5 99%);
  margin: auto;
  max-width: 1440px;

  .header {
    padding: 30px 0px;
    text-align: center;
    
    
    h1 {
      color: #0e5c60;
      font-size: 39px;
      line-height: 51px;
      margin-bottom: 6px;

      @media(max-width: 768px) {
        font-size: 6vw;
      }
    }

    h2 {
      color: #ccab63;
      font-size: 27px;

      @media(max-width: 768px) {
        font-size: 6vw;
      }
    }

  }
`;
