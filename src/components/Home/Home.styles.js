import styled from 'styled-components';

export const Home = styled('section')`
  /* background: linear-gradient(180deg, rgba(229,229,229,1) 0%, rgba(229,229,229,0) 15%, rgba(229,229,229,0) 85%, rgba(229,229,229,1) 100%); */
  margin: auto;
  max-width: 1440px;

  @media(max-width: 780px) {
    min-height: initial;
  }

  .header {
    align-items: center;
    margin: auto;
    max-width: 1440px;
    padding: 30px 0;
    text-align: center;  
    width: 100%;

    @media(max-width: 780px) {
      padding-top: 18px;
      min-height: initial;
    }

    * {
      margin: 0;
    }
    
    h1 {
      color: #0e5c60;
      font-size: 39px;
      line-height: 45px;

      @media(max-width: 768px) {
        font-size: 6vw;
      }
    }
  }
  

  .inner-wrapper {
    align-items: center;
    display: flex;
    max-width: 1440px;
    margin: 0px auto;

    @media(max-width: 768px) {
      flex-direction: column;
    }

    box {
      background-color: transparent;
      height: auto;
      justify-content: space-around;
      margin: auto;
      padding: 15px 0;
      width: 40%;

      @media(max-width: 768px) {
        padding: 6px 0;
        width: 96%;
      }

      h2 {
        color: #ccab63;
        font-size: 4vw;
        text-align: center;

        @media(max-width: 768px) {
          font-size: 6vw;
        }
      }
      
      p {
        color: #000;
        font-size: 3vw;
        text-align: justify;
        line-height: 36px;
        margin: 9px 15px;

      }
    }
  }
`
