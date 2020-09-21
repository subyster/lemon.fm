import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Logo = styled.div`
  position: absolute;
  top: 32px;
  display: flex;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
  }

  strong {
    margin-left: 14px;
    font-weight: 700;
    font-size: 32px;
    color: var(--logo);
  }

  @media (min-width: 1180px) {
    top: 32px;

    img {
      width: 80px;
      height: 80px;
    }

    strong {
      margin-left: 24px;
      font-size: 54px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  .home-image {
    display: none;
  }

  @media (min-width: 1180px) {
    width: 100%;
    justify-content: space-between;

    .home-image {
      display: unset;
      width: 70%;
    }
  }
`;

export const LoginMenu = styled.div`
  width: 256px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: var(--primary-dark);
    text-align: center;
  }

  > span {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: center;

    width: 224px;
    margin-top: 8px;
  }

  form {
    margin-top: 24px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 24px;
      background-color: var(--primary-dark);
      width: 100%;
      height: 56px;
      border-radius: 8px;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.9;
      }

      span {
        font-weight: 700;
        font-size: 24px;
        color: var(--primary-light);
      }

      svg {
        margin-left: 8px;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        fill: var(--primary-light);
      }
    }
  }

  > a {
    margin-top: 16px;
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
      font-size: 12px;
      line-height: 14px;
      text-align: center;
    }

    svg {
      margin-left: 8px;
      width: 24px;
      height: 24px;
    }
  }
`;

export const HomeImage = styled.div`
  display: none;


  @media (min-width: 1180px) {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      text-decoration: none;
      font-size: 8px;
    }

    .home-image {
      width: 100%;
    }
  }
`;
