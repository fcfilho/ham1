import styled from 'styled-components';

export const Associados = styled('section')`
  background: radial-gradient(51% 51% at 33% 43%, #faf7f0 45%, #e5e5e5 99%);
  margin: auto;
  max-width: 1440px;

  .header {
    align-items: center;
    padding: 30px 0px;
    width: 100%;
    text-align: center;
    
    * {
      margin: 0;
    }
    
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
        font-size: 3vw;
      }
    }

  }

  .inner-wrapper {
    display: flex;
    margin: auto;
    max-width: 1440px;
    padding: 90px 0px;
    width: 100%;
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
        font-size: 3vw;
      }
    }

    box-member {
      background-color: transparent;
      display: flex;
      justify-content: space-around;
      margin: auto;
      padding: 0px 9px;
      width: 30%;

      box-img {
        align-items: left;
        margin-right: 9px;
      }

      box-text {
        text-align: left;
        font-size: 16px;
        vertical-align: top;

        h3{
          color: #ccab63;
        }
      }
      
    }

  }

`;
