import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

import {
  Container,
  Content,
  MainColumn,
  MainColumnHeader,
  ArtistsGrid,
  StatsColumn,
  StatsBox,
  LastScrobbles,
} from './styles';

import Header from '../../components/Header';
import MainArtistCard from '../../components/MainArtistCard';
import ArtistCard from '../../components/ArtistCard';
import ScrobbleBox from '../../components/ScrobbleBox';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <MainColumn>
          <MainColumnHeader>
            <strong>Top Artists</strong>
            <button>
              <span>All time</span>
              <FaCaretDown />
            </button>
          </MainColumnHeader>

          <MainArtistCard
            artist="Green Day"
            artistScrobbles={3532}
            favAlbum="American Idiot"
            favAlbumScrobbles={529}
            favSong="Whatsername"
            favSongScrobbles={73}
          />

          <ArtistsGrid>
            <ArtistCard
              position={2}
              artistImage="https://lastfm.freetls.fastly.net/i/u/770x0/849c3f70b914d9707446a39ec07da82d.webp#849c3f70b914d9707446a39ec07da82d"
              artistName="Avenged Sevenfold"
              artistScrobbles={3355}
            />

            <ArtistCard
              position={3}
              artistImage="https://lastfm.freetls.fastly.net/i/u/770x0/1a5ef2bb4fe3a89ee25f5a592ad5b49e.webp#1a5ef2bb4fe3a89ee25f5a592ad5b49e"
              artistName="Arctic Monkeys"
              artistScrobbles={3347}
            />

            <ArtistCard
              position={4}
              artistImage="https://lastfm.freetls.fastly.net/i/u/770x0/75e7379267c64dd688df97acfe31d344.webp#75e7379267c64dd688df97acfe31d344"
              artistName="The Beatles"
              artistScrobbles={2371}
            />

            <ArtistCard
              position={5}
              artistImage="https://lastfm.freetls.fastly.net/i/u/770x0/cab8b49f9c91da6bbf61ff55cab2fe85.webp#cab8b49f9c91da6bbf61ff55cab2fe85"
              artistName="Panic! at the Disco"
              artistScrobbles={2158}
            />
          </ArtistsGrid>
        </MainColumn>

        <StatsColumn>
          <h1>My stats</h1>

          <p>Scrobbling since 1 May 2011</p>

          <StatsBox>
            <li>
              <strong>Scrobbles</strong>
              <span>106,661</span>
            </li>

            <li>
              <strong>Artists</strong>
              <span>1,048</span>
            </li>

            <li>
              <strong>Loved Tracks</strong>
              <span>648</span>
            </li>
          </StatsBox>

          <LastScrobbles>
            <h1>Last Scrobbles</h1>

            <ScrobbleBox
              albumCover="https://lastfm.freetls.fastly.net/i/u/770x0/d5b5e314af7c4124943582fe3a595543.webp#d5b5e314af7c4124943582fe3a595543"
              timePlayed="Now"
              songName="Letterbomb"
              albumName="American Idiot"
              artistName="Green Day"
            />

            <ScrobbleBox
              albumCover="https://lastfm.freetls.fastly.net/i/u/770x0/d5b5e314af7c4124943582fe3a595543.webp#d5b5e314af7c4124943582fe3a595543"
              timePlayed="Now"
              songName="Letterbomb"
              albumName="American Idiot"
              artistName="Green Day"
            />

            <ScrobbleBox
              albumCover="https://lastfm.freetls.fastly.net/i/u/770x0/d5b5e314af7c4124943582fe3a595543.webp#d5b5e314af7c4124943582fe3a595543"
              timePlayed="Now"
              songName="Letterbomb"
              albumName="American Idiot"
              artistName="Green Day"
            />

            <ScrobbleBox
              albumCover="https://lastfm.freetls.fastly.net/i/u/770x0/d5b5e314af7c4124943582fe3a595543.webp#d5b5e314af7c4124943582fe3a595543"
              timePlayed="Now"
              songName="Letterbomb"
              albumName="American Idiot"
              artistName="Green Day"
            />

            <ScrobbleBox
              albumCover="https://lastfm.freetls.fastly.net/i/u/770x0/d5b5e314af7c4124943582fe3a595543.webp#d5b5e314af7c4124943582fe3a595543"
              timePlayed="Now"
              songName="Letterbomb"
              albumName="American Idiot"
              artistName="Green Day"
            />

          </LastScrobbles>
        </StatsColumn>
      </Content>
    </Container>
    );
}

export default Dashboard;
