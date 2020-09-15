import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 256px;
  height: 336px;
  border: 1px solid var(--primary-dark);
  border-radius: 16px;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 256px;
    object-fit: cover;
    border-bottom: 1px solid var(--primary-dark);
    border-radius: 16px 16px 0 0;
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

export const ArtistInfo = styled.div`
  height: 80px;
  padding: 8px 16px 16px;
  background-color: var(--secondary);
  border-radius: 0 0 16px 16px;
  border-top: 1px solid var(--primary-dark);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

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
`;
