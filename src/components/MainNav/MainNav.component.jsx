import React from 'react';
import * as styled from './MainNav.styles';

// function MainNav(props) {
const MainNav = () => {
  return (
    <styled.MainNav>
        <div className="desktop-menu">
          <a href="/">
            Home
          </a>
          <a href="Associados">
            Associados
          </a>
          <a href="Atuacao">
            Atuação
          </a>
          <a href="Sobre">
            Sobre
          </a>
        </div>
      
    </styled.MainNav>
  );
}

export default MainNav;