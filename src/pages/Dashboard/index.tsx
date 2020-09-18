import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import { format, formatDistanceStrict, fromUnixTime } from 'date-fns';
import api from '../../services/api';

import lemonImg from '../../assets/lemon.svg';

import {
  Container,
  Content,
  LoadingAnimation,
  MainColumn,
  MainColumnHeader,
  ArtistsGrid,
  StatsColumn,
  StatsBox,
  LastScrobbles,
} from './styles';

import { Params, User, LastScrobble, Artist, Album, Track } from '../../@types';

import Header from '../../components/Header';
import MainArtistCard from '../../components/MainArtistCard';
import ArtistCard from '../../components/ArtistCard';
import ScrobbleBox from '../../components/ScrobbleBox';

const Dashboard: React.FC = () => {
  const { username } = useParams<Params>();

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>({} as User);
  const [totalLovedTracks, setTotalLovedTracks] = useState(0);
  const [totalArtists, setTotalArtists] = useState(0);
  const [topArtist, setTopArtist] = useState<Artist>({} as Artist);
  const [topArtists, setTopArtists] = useState<Artist[]>();
  const [topArtistFirstAlbum, setTopArtistFirstAlbum] = useState<Album>({} as Album);
  const [topArtistFirstTrack, setTopArtistFirstTrack] = useState<Track>({} as Track);
  const [lastScrobbles, setLastScrobbles] = useState<LastScrobble[]>([]);

  const userStartDate = useCallback((uts: number) => {
      const startAccount = fromUnixTime(uts);

      const formatDate = format(startAccount, "d MMM 'of' yyyy");

      return formatDate;
  }, []);

  const loadUser = useCallback(async () => {
    api.get(
      `?method=user.getinfo
        &user=${username}
        &api_key=05dca2effc7744bec63ee4bf14bfa310
        &format=json
      `
    ).then(response => {
      setUser(response.data.user);
    })
  }, [username]);

  const loadLovedTracks = useCallback(async () => {
    api.get(
      `?method=user.getlovedtracks
        &user=${username}
        &api_key=05dca2effc7744bec63ee4bf14bfa310
        &format=json
      `
    ).then(response => {
      setTotalLovedTracks(response.data.lovedtracks["@attr"].total);
    })
  }, [username]);

  const loadTotalArtists = useCallback(async () => {
    api.get(
      `?method=user.gettopartists
        &user=${username}
        &limit=1
        &api_key=05dca2effc7744bec63ee4bf14bfa310
        &format=json
      `
    ).then(response => setTotalArtists(response.data.topartists["@attr"].total));
  }, [username]);

  const loadTopArtists = useCallback(async () => {
    api.get(
      `?method=user.gettopartists
        &user=${username}
        &limit=5
        &api_key=05dca2effc7744bec63ee4bf14bfa310
        &format=json
      `
    ).then(async response => {
      const firstPlace: Artist = response.data.topartists.artist[0];

      setTopArtist(firstPlace);

      const otherArtists = await response.data.topartists.artist.slice(1, 5);

      setTopArtists(otherArtists);

      api.get(
        `?method=user.gettopalbums
          &user=${username}
          &api_key=05dca2effc7744bec63ee4bf14bfa310
          &format=json
        `
      ).then(response => {
        const topArtistAlbum: Album = response.data.topalbums.album.find(
          (album: Album) => album.artist.name === firstPlace.name
        );

        setTopArtistFirstAlbum(topArtistAlbum);
      });

      api.get(
        `?method=user.gettoptracks
          &user=${username}
          &limit=400
          &api_key=05dca2effc7744bec63ee4bf14bfa310
          &format=json
        `
      ).then(response => {
        const topArtistTrack: Track = response.data.toptracks.track.find(
          (track: Track) => track.artist.name === firstPlace.name
        );

        setTopArtistFirstTrack(topArtistTrack);
        setIsLoading(false);
      })
    });
  }, [username]);

  const loadLastScrobbles = useCallback(async () => {
    api.get(
      `?method=user.getrecenttracks
        &user=${username}
        &limit=5&extended=1
        &api_key=05dca2effc7744bec63ee4bf14bfa310
        &format=json
      `
    ).then(response => {
      setLastScrobbles(response.data.recenttracks.track);
    });
  }, [username]);

  useEffect(() => {
      loadUser();
      loadLovedTracks();
      loadTotalArtists();
      loadTopArtists();
      loadLastScrobbles();
  }, [loadUser, loadLovedTracks, loadTotalArtists, loadTopArtists, loadLastScrobbles]);

  return (
    <Container>
      <Header user={user} />

      {isLoading && (
        <Content>
          <LoadingAnimation>
            <img src={lemonImg} alt="lemon.fm"/>
            <strong>Loading...</strong>
          </LoadingAnimation>
        </Content>
      )}

      {!isLoading && (
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
              artistImage={
                topArtist.image
                  ? topArtist.image.filter(image => image.size === "mega")[0]["#text"]
                  : ""
              }
              artist={topArtist.name}
              artistScrobbles={topArtist.playcount}
              favAlbum={topArtistFirstAlbum ? topArtistFirstAlbum.name : "Carregando"}
              favAlbumUrl={topArtistFirstAlbum.image
                ? topArtistFirstAlbum.image.filter(image => image.size === "medium")[0]["#text"]
                : ""
              }
              favAlbumScrobbles={topArtistFirstAlbum ? topArtistFirstAlbum.playcount : 0}
              favSong={topArtistFirstTrack ? topArtistFirstTrack.name : "Carregando"}
              favSongCover={topArtistFirstTrack.image
                ? topArtistFirstTrack.image.filter(image => image.size === "medium")[0]["#text"]
                : ""
              }
              favSongScrobbles={topArtistFirstTrack ? topArtistFirstTrack.playcount : 0}
            />

            <ArtistsGrid>
              {topArtists?.map(artist => (
                <ArtistCard
                  key={artist.url}
                  position={artist["@attr"].rank}
                  artistImage={artist.image.filter(image => image.size === "extralarge")[0]["#text"]}
                  artistName={artist.name}
                  artistScrobbles={artist.playcount}
                />
              ))}
            </ArtistsGrid>
          </MainColumn>

          <StatsColumn>
            <h1>My stats</h1>

              <p>Scrobbling since {user.registered && userStartDate(user.registered["#text"])}</p>

            <StatsBox>
              <li>
                <strong>Scrobbles</strong>
                <span>{user.playcount}</span>
              </li>

              <li>
                <strong>Artists</strong>
                <span>{totalArtists}</span>
              </li>

              <li>
                <strong>Loved Tracks</strong>
                <span>{totalLovedTracks}</span>
              </li>
            </StatsBox>

            <LastScrobbles>
              <h1>Last Scrobbles</h1>

              {lastScrobbles.map(scrobble => (
                <ScrobbleBox
                  key={scrobble.date ? scrobble.date.uts : 0}
                  albumCover={scrobble.image.filter(image => image.size === "medium")[0]["#text"]}
                  timePlayed={
                    scrobble.date?.uts
                      ? formatDistanceStrict(new Date(), fromUnixTime(scrobble.date.uts))
                      : "Now"
                  }
                  songName={scrobble.name}
                  albumName={scrobble.album["#text"]}
                  artistName={scrobble.artist.name}
                />
              ))}

            </LastScrobbles>
          </StatsColumn>
        </Content>
      )}
    </Container>
    );
}

export default Dashboard;
