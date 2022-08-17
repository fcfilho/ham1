import styled from 'styled-components';

export const Atuacao = styled('section')`
  /* background: linear-gradient(180deg, rgba(229,229,229,1) 0%, rgba(229,229,229,0) 15%, rgba(229,229,229,0) 85%, rgba(229,229,229,1) 100%); */
  margin: auto;
  max-width: 1440px;

  .header {
    padding: 15px 0px;
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
        font-size: 5vw;
      }
    }

  }
`;
