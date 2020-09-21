import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FaHeadphones, FaUser, FaLastfmSquare } from 'react-icons/fa';
import getValidationErrors from '../../utils/getValidationErrors';

import lemon from '../../assets/lemon.svg';
import homeImg from '../../assets/home-image.svg';

import Input from '../../components/Input';

import {
  Container,
  Logo,
  Content,
  LoginMenu,
 } from './styles';
import api from '../../services/api';

 interface LastfmLinkData {
   username: string;
 }

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const navigateToLastfm = useCallback(async (data: LastfmLinkData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('Required field'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.get(
        `?method=user.getinfo
        &user=${data.username}
        &api_key=05dca2effc7744bec63ee4bf14bfa310
        &format=json
        `
      );

      history.push('/lastfm/' + data.username.trim());
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      alert("Error: User not found.");
    }

  }, [history]);

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
          <Form onSubmit={navigateToLastfm}>
            <Input
              name="username"
              icon={FaUser}
              placeholder="username"
            />
            <button type="submit">
              <span>View my</span>
              <FaLastfmSquare />
            </button>
          </Form>
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
