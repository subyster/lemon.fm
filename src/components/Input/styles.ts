import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--input);
  padding: 18px 16px;
  width: 100%;
  border-radius: 8px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: var(--text);

    &::placeholder {
      color: var(--primary);
    }
  }

  svg {
    margin-right: 16px;
    fill: var(--primary);
  }
`;
