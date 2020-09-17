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
        <div>
          <FaMusic />
          <span>{songName}</span>
        </div>

        <div>
          <FaRecordVinyl />
          <span>{albumName}</span>
        </div>

        <div>
          <FaMicrophoneAlt />
          <span>{artistName}</span>
        </div>
      </ScrobbleInfo>
    </Container>
  );
}

export default ScrobbleBox;
