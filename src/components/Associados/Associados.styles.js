import styled from 'styled-components';

export const Associados = styled('section')`
  /* background: linear-gradient(180deg, rgba(229,229,229,1) 0%, rgba(229,229,229,0) 15%, rgba(229,229,229,0) 85%, rgba(229,229,229,1) 100%); */
  margin: auto;
  max-width: 1440px;

  .header {
    align-items: center;
    padding: 30px 0px;
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
        font-size: 4vw;
      }
    }

  }

  .inner-wrapper {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
    max-width: 1440px;
    min-height: 600px;
    padding: 30px 0px;
    
  
    @media(max-width: 768px) {
      padding: 6px 0px;
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

    box-member {
      align-items: center;
      
      display: flex;
      justify-content: space-around;
      margin: auto;
      padding: 15px;
      width: 420px;

      @media(max-width: 768px) {
        flex-wrap: wrap;
        padding: 6px 0px;      
      }

      box-img {
        align-items: center;
        padding: 6px;

        @media(max-width: 768px) {
          padding: 3px 0px;
        }

      }

      box-text {
        align-items: center;
        font-size: 15px;
        margin: auto;
        padding: 6px 0px;

        h3{
          color: #ccab63;
        }

        @media(max-width: 768px) {
          padding: 3px 0px;
        }

      }
      
    }

  }

`;
