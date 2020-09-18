import React from 'react';

import lemon from '../../assets/lemon.svg';
import blankAvatar from '../../assets/blank-avatar.svg';
import { User } from '../../@types';

import { Container, Logo, UserBlock } from './styles';

import { useTheme } from '../../styles/theme';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const { changeTheme } = useTheme();

  return (
   <Container>
     <Logo to="/">
        <img src={lemon} alt="logo"/>
        <strong>lemon.fm</strong>
      </Logo>

      <UserBlock>
        <a href={user.url} target="_blank" rel="noopener noreferrer" >{user.name}</a>
        <button type="button" onClick={changeTheme}>
          <img
            src={
              user.image
              ? user.image.filter(image => image.size === "medium")[0]["#text"]
              : blankAvatar
            } alt={user.name}/>
        </button>
      </UserBlock>
   </Container>
    );
}

export default Header;
