import React from 'react';

import { Container, PositionBox, ArtistInfo } from './styles';

interface ArtistProps {
  position: number;
  artistImage: string;
  artistName: string;
  artistScrobbles: number
}

const ArtistCard: React.FC<ArtistProps> = ({
  position,
  artistImage,
  artistName,
  artistScrobbles,
}) => {
  return (
    <Container>
      <PositionBox>{position}</PositionBox>

      <img src={artistImage} alt={artistName}/>

      <ArtistInfo>
        <strong>{artistName}</strong>
        <span>{artistScrobbles} scrobbles</span>
      </ArtistInfo>
    </Container>
  );
}

export default ArtistCard;
