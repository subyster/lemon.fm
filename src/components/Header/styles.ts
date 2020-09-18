import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 600px) {
    padding: 16px 24px;
  }

  @media (min-width: 1180px) {
    padding: 28px 0;
    max-width: 1120px;
    margin: 0 auto;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.3s;

  img {
    width: 32px;
    height: 32px;
  }

  strong {
    margin-left: 14px;
    font-weight: 700;
    font-size: 24px;
    color: var(--logo);
  }

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 600px) {
    img {
      width: 48px;
      height: 48px;
    }

    strong {
      font-size: 32px;
    }
  }
`;

export const UserBlock = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--username);
    display: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    margin-left: 24px;
    height: 48px;
    background: transparent;

    img {
      width: 48px;
      height: 48px;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid var(--primary-dark);
    }
  }

  @media (min-width: 600px) {
    a {
      display: unset;
      font-weight: 500;
      font-size: 20px;
    }
  }

  @media (min-width: 1180px) {
    a {
      font-size: 24px;
    }

    button {
      height: 64px;

      img {
        width: 64px;
        height: 64px;
      }
    }
  }
`;
