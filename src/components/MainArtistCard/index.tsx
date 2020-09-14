import React from 'react';
import { FaRecordVinyl, FaMusic } from 'react-icons/fa';

import { Container, PositionBox, InfoBox, AlbumSongInfo } from './styles';

const MainArtistCard: React.FC = () => {
  return (
   <Container>
     <PositionBox>1</PositionBox>

     <img src="https://lastfm.freetls.fastly.net/i/u/770x0/63a2f9bdd8fc389123b8b8db8a95cc6d.webp#63a2f9bdd8fc389123b8b8db8a95cc6d" alt="Green Day"/>

     <InfoBox>
       <header>
        <strong>Green Day</strong>
        <span>3513 scrobbles</span>
       </header>

       <AlbumSongInfo>
         <header>
          <FaRecordVinyl />
          <strong>Favorite Album</strong>
         </header>

         <div>
           <img src="https://lastfm.freetls.fastly.net/i/u/770x0/d5b5e314af7c4124943582fe3a595543.webp#d5b5e314af7c4124943582fe3a595543" alt="American Idiot"/>
           <section>
             <span>American Idiot</span>
             <span>529 scrobbles</span>
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
             <span>Whatsername</span>
             <span>73 scrobbles</span>
           </section>
         </div>
       </AlbumSongInfo>

     </InfoBox>
   </Container>
    );
}

export default MainArtistCard;
