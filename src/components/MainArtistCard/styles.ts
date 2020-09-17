import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 256px;
  border: 1px solid var(--primary-dark);
  border-radius: 16px;

  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
    border-bottom: 1px solid var(--primary-dark);
  }

  @media (min-width: 700px) {
    width: 100%;
    height: 280px;

    flex-direction: row;

    > img {
      width: 280px;
      height: 100%;
      border-radius: 16px 0 0 16px;
      border-bottom: 0;
      border-right: 1px solid var(--primary-dark);
    }
  }
`;

export const PositionBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 40px;
  height: 40px;
  background-color: var(--primary-light);
  border-radius: 16px 0 11px;
  border-right: 1px solid var(--primary-dark);
  border-bottom: 1px solid var(--primary-dark);

  font-weight: 700;
  font-size: 24px;
  color: var(--primary-dark);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoBox = styled.div`
  padding: 8px 16px 16px;
  height: 280px;
  width: 100%;
  background-color: var(--secondary);
  border-radius: 0 0 16px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header {
    display: flex;
    flex-direction: column;

    strong {
      font-weight: 700;
      font-size: 24px;
      color: var(--primary-dark);

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    span {
      font-weight: 500;
      font-size: 16px;
    }
  }

  @media (min-width: 700px) {
    padding: 16px 16px 16px 24px;
    height: 100%;
    border-radius: 0 16px 16px 0;
  }
`;

export const AlbumSongInfo = styled.div`
  header {
    margin-bottom: 8px;

    display: flex;
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
      fill: var(--text);
      margin-right: 12px;
    }

    strong {
      font-weight: 500;
      font-size: 20px;
    }
  }

  div {
    display: flex;
    align-items: center;

    img {
      width: 56px;
      height: 56px;
      margin-right: 8px;
    }

    section {
      height: 56px;
      max-width: 166px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      span {
        font-size: 16px;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    @media (min-width: 700px) {
      img {
        margin-right: 16px;
      }

      section {
        max-width: 214px;
      }
    }
  }
`;

