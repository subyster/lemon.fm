import React from 'react';
import { FaRecordVinyl, FaStar } from 'react-icons/fa';
import formatValue from '../../utils/formatValue';

import { Container, PositionBox, InfoBox, AlbumSongInfo } from './styles';

interface ArtistCardProps {
  artistImage: string;
  artist: string;
  artistScrobbles: number;
  favAlbum: string;
  favAlbumUrl: string;
  favAlbumScrobbles: number;
  favSong: string;
  favSongCover?: string;
  favSongScrobbles: number;
}

const MainArtistCard: React.FC<ArtistCardProps> = ({
  artistImage,
  artist,
  artistScrobbles,
  favAlbum,
  favAlbumUrl,
  favAlbumScrobbles,
  favSong,
  favSongCover,
  favSongScrobbles,
}) => {
  return (
   <Container>
     <PositionBox>1</PositionBox>

     <img src={artistImage} alt={artist}/>

     <InfoBox>
       <header>
        <strong>{artist}</strong>
        <span>{formatValue(artistScrobbles)} scrobbles</span>
       </header>

       <AlbumSongInfo>
         <header>
          <FaRecordVinyl />
          <strong>Favorite Album</strong>
         </header>

         <div>
           <img src={favAlbumUrl} alt={favAlbum}/>
           <section>
             <span>{favAlbum}</span>
             <span>{formatValue(favAlbumScrobbles)} scrobbles</span>
           </section>
         </div>
       </AlbumSongInfo>

       <AlbumSongInfo>
         <header>
          <FaStar />
          <strong>Favorite Song</strong>
         </header>

         <div>
           {/* <img src={favSongCover} alt={favSong}/> */}
           <section className="fav-song">
             <span>{favSong}</span>
             <span>{formatValue(favSongScrobbles)} scrobbles</span>
           </section>
         </div>
       </AlbumSongInfo>

     </InfoBox>
   </Container>
    );
}

export default MainArtistCard;
