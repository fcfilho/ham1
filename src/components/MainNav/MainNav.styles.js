import styled from 'styled-components';

export const MainNav = styled.div`
  background-color: #0e5c60;
  color: #ccab63;
  margin: auto;
  max-width: 1440px;
  padding: 3px 0;
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-right: 6px;
    padding: 3px 0;
  }

  .desktop-menu {
    align-items: center;
    display: flex;
    justify-content: space-around;
    
    a, button {
      background-color: transparent;
      border: none;
      box-sizing: border-box;
      color: var(--alternativeBlue);
      cursor: pointer;
      font-size: 14px;
      margin-right: 24px;
      text-decoration: none;
      text-transform: uppercase;

      &:last-child {
        margin-right: 0;
      }
      
      &:hover {
        background-color: var(--white);
        /* border-bottom: 3px solid #ccab63; */
        color: #fff;
      }
      
      &:active {
        color: #fff;
      }
      
      @media screen and (max-width: 768px) {
        font-size: 12px;
        margin-right: 0px;
        padding: 6px 0;
      } 
    }
  }
`
