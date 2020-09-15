import React from 'react';
import { FaRecordVinyl, FaMusic } from 'react-icons/fa';

import { Container, PositionBox, InfoBox, AlbumSongInfo } from './styles';

interface ArtistCardProps {
  artist: string;
  artistScrobbles: number;
  favAlbum: string;
  favAlbumScrobbles: number;
  favSong: string;
  favSongScrobbles: number;
}

const MainArtistCard: React.FC<ArtistCardProps> = ({
  artist,
  artistScrobbles,
  favAlbum,
  favAlbumScrobbles,
  favSong,
  favSongScrobbles,
}) => {
  return (
   <Container>
     <PositionBox>1</PositionBox>

     <img src="https://lastfm.freetls.fastly.net/i/u/770x0/63a2f9bdd8fc389123b8b8db8a95cc6d.webp#63a2f9bdd8fc389123b8b8db8a95cc6d" alt="Green Day"/>

     <InfoBox>
       <header>
        <strong>{artist}</strong>
        <span>{artistScrobbles} scrobbles</span>
       </header>

       <AlbumSongInfo>
         <header>
          <FaRecordVinyl />
          <strong>Favorite Album</strong>
         </header>

         <div>
           <img src="https://lastfm.freetls.fastly.net/i/u/770x0/d5b5e314af7c4124943582fe3a595543.webp#d5b5e314af7c4124943582fe3a595543" alt="American Idiot"/>
           <section>
             <span>{favAlbum}</span>
             <span>{favAlbumScrobbles} scrobbles</span>
           </section>
         </div>
       </AlbumSongInfo>

       <AlbumSongInfo>
         <header>
          <FaMusic />
          <strong>Favorite Song</strong>
         </header>

         <div>
           <img src="https://lastfm.freetls.fastly.net/i/u/770x0/d5b5e314af7c4124943582fe3a595543.webp#d5b5e314af7c4124943582fe3a595543" alt="American Idiot"/>
           <section>
             <span>{favSong}</span>
             <span>{favSongScrobbles} scrobbles</span>
           </section>
         </div>
       </AlbumSongInfo>

     </InfoBox>
   </Container>
    );
}

export default MainArtistCard;
