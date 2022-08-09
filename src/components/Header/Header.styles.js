import styled from 'styled-components';

export const Header = styled('div')`

  .inner-wrapper {
    align-items: center;
    background-color: #134448;
    display: flex;
    /* height: 90px; */
    justify-content: space-between;
    margin: auto;
    max-width: 1440px;
    padding: 30px 0;

    @media(max-width: 780px) {
      padding: 15px 0;
    }

    a {
      color: none;
      display: flex;
      text-decoration: none;
    }

    logo {
      background-color: #red;
      color: #ccab63;
      flex: 50%;
      font-size: 1.5rem;
      text-align: center;
      padding-left: 112px;

      @media(max-width: 780px) {
        font-size: 0.9rem;
        padding-left: 30px;
      }

    }

    nrContato {
      color: #fff;
      flex: 50%;
      font-size: 2.4rem;
      text-align: center;
      padding-right: 112px;

      @media(max-width: 780px) {
        font-size: 0.99rem;
        padding-right: 30px;
      }
    }
  }

  /* .inner-wrapper {
    align-items: center;
    background-color: #134448;
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 1440px;
    padding: 30px 0;

    @media(max-width: 780px) {
      padding: 15px 0;
    }

    a {
      color: none;
      display: flex;
      text-decoration: none;
    }

    logo {
      color: #ccab63;
      font-size: 1.5rem;
      text-align: center;
      padding-left: 112px;

      @media(max-width: 780px) {
        font-size: 0.9rem;
        padding-left: 30px;
      }

    }

    nrContato {
      color: #fff;
      font-size: 2.4rem;
      text-align: center;
      padding-right: 112px;

      @media(max-width: 780px) {
        font-size: 0.99rem;
        padding-right: 30px;
      }
    }
  } */
  
`;
