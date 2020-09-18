import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 112px;
  padding: 16px 8px 16px 16px;
  background-color: var(--scrobble-box);
  border: 1px solid var(--scrobble-border);
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
      width: 48px;
      height: 48px;
      object-fit: cover;
    }

    span {
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      font-size: 12px;
      max-width: 48px;
    }
  }

  @media(min-width: 600px) {
    padding: 24px 16px 24px 24px;
    height: 140px;

    section {
      img {
        width: 64px;
        height: 64px;
      }

      span {
        font-size: 16px;
        max-width: 64px;
      }
    }
  }
`;

export const ScrobbleInfo = styled.div`
  margin-left: 16px;
  max-width: min(258px, calc(90vw - 136px));

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    max-width: inherit;

    svg {
      width: 14px;
      height: 14px;
      margin-right: 8px;
      flex-shrink: 0;
    }

    span {
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media(min-width: 600px) {
    margin-left: 24px;
    max-width: 214px;

    div {
      svg {
        width: 18px;
        height: 18px;
        margin-right: 16px;
      }

      span {
        font-size: 16px;
      }
    }
  }
`;
