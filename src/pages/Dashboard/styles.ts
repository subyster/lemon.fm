import styled, { keyframes } from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.div`
  margin: 32px auto 40px;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1180px) {
    padding: 0 40px;
    margin-top: 50px;

    flex-direction: row;
    justify-content: space-between;
    align-items: unset;
  }
`;

const rotateLemon = keyframes`
  0% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(-15deg);
  }
`;

export const LoadingAnimation = styled.div`
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    animation: ${rotateLemon} 1.5s infinite ease-in-out;
  }

  strong {
    margin-top: 16px;
    font-size: 48px;
    color: var(--logo);
  }
`;

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    width: 600px;
  }
`;

export const MainColumnHeader = styled.header`
  margin-bottom: 32px;
  width: 256px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > strong {
    padding: 8px 16px;
    border-radius: 24px;
    font-weight: 700;
    font-size: 32px;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--primary-light);
    }
  }

  > button {
    margin-top: 16px;
    padding: 8px 16px;
    width: 160px;
    background-color: var(--scrobble-border);
    border-radius: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      opacity: 0.8;
    }

    span {
      color: var(--input);
      font-weight: 500;
      font-size: 20px;
    }

    svg {
      fill: var(--input);
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 700px) {
    width: 100%;

    flex-direction: row;
    justify-content: space-between;

    > button {
      margin-top: 0;
    }
  }
`;

export const ArtistsGrid = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div + div {
    margin-top: 32px;
  }

  @media (min-width: 700px) {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 88px;

    > div + div {
      margin-top: 0;
    }
  }
`;

export const StatsColumn = styled.div`
  margin-top: 64px;
  width: min(398px, 90vw);
  padding: 16px 24px 24px;
  border: 1px solid var(--primary);
  border-radius: 16px;
  height: max-content;

  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    margin-bottom: 32px;
  }

  > p {
    font-weight: 500;
  }

  @media (min-width: 700px) {
    width: 398px;
  }

  @media (min-width: 1180px) {
    margin-top: 0;
  }
`;

export const StatsBox = styled.ul`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li {
    display: flex;
    align-items: flex-end;
    width: 100%;

    & + li {
      margin-top: 16px;
    }

    strong {
      width: 60%;
      font-weight: 500;
      font-size: 20px;
      color: var(--primary);

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      @media(min-width: 700px) {
        font-size: 24px;
      }
    }

    span {
      width: 40%;
      font-size: 20px;
    }
  }
`;

export const LastScrobbles = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  > h1 {
      font-weight: 700;
      font-size: 32px;
      text-align: center;
      margin-bottom: 40px;
    }
`;
