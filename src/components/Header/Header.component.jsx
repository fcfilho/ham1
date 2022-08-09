import React from 'react';
import * as Styled from './Header.styles.js'

const Header = () => {
  return (
    <Styled.Header>
      <div className="inner-wrapper">
        <a
        href="https://hamaximo.herokuapp.com" 
        target="_self"
        rel="noopener noreferrer"
        >
          <logo>HÉLIO ARCANJO MÁXIMO<br /><hr />ADVOCACIA</logo>
        </a>
        
        <a
          href="https://api.whatsapp.com/send?phone=5535999068555&text=Olá%20Dr.%20Hélio%20Arcanjo,%20eu%20gostaria%20de%20saber%20se%20seu%20escritório%20atua%20na%20área%20de%20..." 
          target="_blank"
          rel="noopener noreferrer"
        >
          <nrContato>+55 (35) 99906-8555</nrContato>
        </a>
      </div>
    </Styled.Header>
  );
};

export default Header;
