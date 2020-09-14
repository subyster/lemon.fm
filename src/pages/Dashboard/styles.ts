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

export const StatsColumn = styled.div``;
