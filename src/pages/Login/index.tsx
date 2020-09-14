import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosMail } from 'react-icons/io'
import { FaHeadphones, FaKey, FaLastfmSquare } from 'react-icons/fa'

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

  return (
    <Container>
      <Logo>
        <img src={lemon} alt="logo"/>
        <strong>lemon.fm</strong>
      </Logo>

      <Content>
        <LoginMenu>
          <h1>A new way of scrobbling</h1>
          <span>Sign-in with your Last.fm account and get ready to rock</span>
          <form action="#">
            <Input name="email" icon={IoIosMail} placeholder="Email" />
            <Input name="password" icon={FaKey} placeholder="Password" />
            <button type="button" onClick={() => history.push('/dashboard')}>
              <span>Sign-in with</span>
              <FaLastfmSquare />
            </button>
          </form>
          <a href="/">
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
