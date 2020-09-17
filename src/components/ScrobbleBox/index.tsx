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
    <Container className={timePlayed === "Now" ? "now" : ""}>
      <section>
        <img src={albumCover} alt={albumName}/>
        <span>{timePlayed}</span>
      </section>

      <ScrobbleInfo>
        <p>
          <FaMusic />
          <span>{songName}</span>
        </p>

        <p>
          <FaRecordVinyl />
          <span>{albumName}</span>
        </p>

        <p>
          <FaMicrophoneAlt />
          <span>{artistName}</span>
        </p>
      </ScrobbleInfo>
    </Container>
  );
}

export default ScrobbleBox;
