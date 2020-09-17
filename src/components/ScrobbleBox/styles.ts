import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 140px;
  padding: 24px 16px 24px 24px;
  background-color: var(--secondary);
  border: 1px solid var(--primary-dark);
  border-radius: 16px;

  display: flex;

  & + div {
    margin-top: 16px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
      width: 64px;
      height: 64px;
    }

    span {
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      max-width: 64px;
    }
  }
`;

export const ScrobbleInfo = styled.div`
  margin-left: 24px;
  max-width: 214px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    max-width: inherit;

    svg {
      width: 18px;
      height: 18px;
      margin-right: 16px;
      flex-shrink: 0;
    }

    span {
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;
