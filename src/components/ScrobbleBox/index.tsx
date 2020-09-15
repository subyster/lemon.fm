import React from 'react';
import { FaRecordVinyl, FaMusic, FaMicrophoneAlt } from 'react-icons/fa';

import { Container, ScrobbleInfo } from './styles';

interface ScrobbleProps {
  albumCover: string;
  timePlayed: string;
  songName: string;
  albumName: string;
  artistName: string;
}

const ScrobbleBox: React.FC<ScrobbleProps> = ({
  albumCover,
  timePlayed,
  songName,
  albumName,
  artistName,
}) => {
  return (
    <Container>
      <section>
        <img src={albumCover} alt={albumName}/>
        <span>{timePlayed}</span>
      </section>

      <ScrobbleInfo>
        <span>
          <FaMusic />
          {songName}
        </span>

        <span>
          <FaRecordVinyl />
          {albumName}
        </span>

        <span>
          <FaMicrophoneAlt />
          {artistName}
        </span>
      </ScrobbleInfo>
    </Container>
  );
}

export default ScrobbleBox;
