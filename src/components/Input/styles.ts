import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: var(--input);
  padding: 18px 16px;
  width: 100%;
  border-radius: 8px;
  border: 2px solid var(--input);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      border-color: var(--primary-dark);
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: var(--username);

    &::placeholder {
      color: var(--primary);
    }
  }

  svg {
    margin-right: 16px;
    fill: var(--primary);

    ${(props) =>
      props.isFocused &&
      css`
        fill: var(--primary-dark);
      `}

    ${(props) =>
      props.isFilled &&
      css`
        fill: var(--primary-dark);
      `}
  }
`;
