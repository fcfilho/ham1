import styled from 'styled-components';

export const Footer = styled('footer')`
  background-color: #134448;
  max-width: 1440px;
  margin: auto;
  position: relative;

  .inner-wrapper {
    text-align: center;
    color: #e1cda2;
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 1440px;
    padding: 60px;

    @media(max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px;
    }

    hr { 
        background-color: #000; 
        border: 0;
        height: 1px;
      }

    nav {
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;

      @media(max-width:768px) {
        padding: 18px 0;
      }

      a {
        color: #e1cda2;
        text-decoration: none;
        line-height: 30px;
        margin-bottom: 16px;
        min-width: 170px;

        @media(max-width: 768px) {
          margin-bottom: 7px;
        }

        &:last-child {
          margin-bottom: 0;
        }
        
        &:hover {
          text-decoration: underline;
        }
      }
    }

  .menu-nav {
    text-transform: lowercase;
  }

  
  .social-media {

      &__icon {
        align-items: center;
        background-color: rgba(255, 255, 255, 0.0);
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
        display: inline-flex;
        height: 33px;
        margin-right: 15px;
        justify-content: center;
        overflow: hidden;
        width: 33px;
        transition: background-color .15s ease-in-out;
        text-indent: -1000px;

        @media(max-width: 768px) {
          margin-left: 24;
          margin-right: 24px;
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.6);
        }

        &--whatsapp {
          background-image: url(/images/icons/icon_wapp.png);
          background-size: 28px;
        }
        
        &--facebook {
          background-image: url(/images/icons/icon_face.png);
          background-size: 25px;
        }

      }
    }


    .rights-reserved {
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;

      hr { 
        background-color: #000; 
        border: 0;
        height: 1px;
      }

      &__text {
        font-size: 1.2rem;
        margin: 0;
        text-align: center;

        @media(max-width: 768px) {
          display: flex;
          padding: 30px 0;
        }
      }

      &--mobile {
        display: flex;
        
        @media(max-width: 768px) {
          display: flex

          &__text {
            //font-size: 24px;
            margin-top: 9px;
            text-align: center;
          }
        }
      }
    }

  }

`;