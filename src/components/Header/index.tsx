import React from 'react';

import lemon from '../../assets/lemon.svg';

import { Container, Logo, UserBlock } from './styles';

const Header: React.FC = () => {
  return (
   <Container>
     <Logo>
        <img src={lemon} alt="logo"/>
        <strong>lemon.fm</strong>
      </Logo>

      <UserBlock>
        <strong>arthursub</strong>
        <button type="button">
          <img src="https://avatars1.githubusercontent.com/u/62660107?s=460&u=8fe8ae772a121483adb2dac988393391f5d652ac&v=4" alt="user-avatar"/>
        </button>
      </UserBlock>
   </Container>
    );
}

export default Header;
