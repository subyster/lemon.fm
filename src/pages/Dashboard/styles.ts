import styled from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.div`
  margin: 50px auto 40px;
  max-width: 1120px;

  display: flex;
  justify-content: space-between;
`;

export const MainColumn = styled.div`
  width: 600px;
`;

export const MainColumnHeader = styled.header`
  margin-bottom: 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

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
    padding: 8px 16px;
    width: 160px;
    background-color: var(--primary-dark);
    border-radius: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      opacity: 0.8;
    }

    span {
      color: var(--primary-light);
      font-weight: 500;
      font-size: 20px;
    }

    svg {
      fill: var(--primary-light);
      width: 20px;
      height: 20px;
    }
  }
`;

export const ArtistsGrid = styled.div`
  margin-top: 40px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 40px;
  grid-column-gap: 88px;
`;

export const StatsColumn = styled.div`
  padding: 16px 24px 24px;
  border: 1px solid var(--primary);
  border-radius: 16px;
  width: 398px;
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
      width: 50%;
      font-weight: 500;
      font-size: 24px;
      color: var(--primary);
    }

    span {
      width: 50%;
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
