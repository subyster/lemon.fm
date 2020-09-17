import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaHeadphones, FaUser, FaLastfmSquare } from 'react-icons/fa'

import lemon from '../../assets/lemon.svg';
import homeImg from '../../assets/home-image.svg';

import Input from '../../components/Input';

import {
  Container,
  Logo,
  Content,
  LoginMenu,
 } from './styles';

const Login: React.FC = () => {
  const history = useHistory();

  const [user, setUser] = useState("");

  function navigateToLastfm(event: React.FormEvent) {
    event.preventDefault();

    history.push('/lastfm/' + user.trim());
  }

  return (
    <Container>
      <Logo>
        <img src={lemon} alt="logo"/>
        <strong>lemon.fm</strong>
      </Logo>

      <Content>
        <LoginMenu>
          <h1>A new way of scrobbling</h1>
          <span>Enter your Last.fm account and get ready to groove</span>
          <form onSubmit={navigateToLastfm}>
            <Input
              name="username"
              value={user}
              onChange={e => setUser(e.currentTarget.value)}
              icon={FaUser}
              placeholder="username"
            />
            <button type="submit">
              <span>View my</span>
              <FaLastfmSquare />
            </button>
          </form>
          <a href="https://www.last.fm/join" target="_blank" rel="noopener noreferrer">
            <span>Not a member?<br/>Create an account</span>
            <FaHeadphones />
          </a>
        </LoginMenu>

        <img src={homeImg} alt="A place to view your library" className="home-image"/>
      </Content>

    </Container>
  );
}

export default Login;
