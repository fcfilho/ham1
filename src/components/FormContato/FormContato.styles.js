import styled from 'styled-components';

export const FormContato = styled.FormContato`
  background: radial-gradient(51% 51% at 33% 43%, #faf7f0 45%, #e5e5e5 99%);

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
      padding: 30px 0;
      width: 40%;

      @media(max-width: 768px) {
        height: 200px;
        width: 96%;
      }

      h2 {
        color: #ccab63;
        font-size: 27px;
        text-align: center;

        @media(max-width: 768px) {
          font-size: 6vw;
        }
      }
      
      p {
        color: #000;
        font-size: 18px;
        text-align: justify;
        line-height: 36px;
      }
      
    }
  }
`;
