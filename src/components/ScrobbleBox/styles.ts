import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 160px;
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
  }
`;

export const ScrobbleInfo = styled.div`
  margin-left: 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;

    font-size: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    svg {
      width: 20px;
      height: 20px;
      margin-right: 16px;
    }
  }
`;
