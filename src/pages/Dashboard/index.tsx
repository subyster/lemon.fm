import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaTelegram, FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';
import { format, formatDistanceStrict, fromUnixTime } from 'date-fns';
import { FacebookShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import api from '../../services/api';

import lemonImg from '../../assets/lemon.svg';
import formatValue from '../../utils/formatValue';

import {
  Container,
  Content,
  LoadingAnimation,
  MainColumn,
  MainColumnHeader,
  ArtistsGrid,
  Share,
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
  const [isTopArtistsLoading, setIsTopArtistsLoading] = useState(false);
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

  const loadTopArtists = useCallback(async (listeningPeriod: string) => {
    api.get(
      `?method=user.gettopartists
        &user=${username}
        &limit=5
        &period=${listeningPeriod}
        &api_key=05dca2effc7744bec63ee4bf14bfa310
        &format=json
      `
    ).then(async response => {
      if(response.data.topartists['@attr'].total === 0) {
        return;
      }

      const firstPlace: Artist = response.data.topartists.artist[0];

      setTopArtist(firstPlace);

      const otherArtists = await response.data.topartists.artist.slice(1, 5);

      setTopArtists(otherArtists);

      api.get(
        `?method=user.gettopalbums
          &user=${username}
          &period=${listeningPeriod}
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
          &period=${listeningPeriod}
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
        setIsTopArtistsLoading(false);
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
      loadTopArtists("1month");
      loadLastScrobbles();
  }, [loadUser, loadLovedTracks, loadTotalArtists, loadTopArtists, loadLastScrobbles]);

  const updateTopArtists = useCallback((updatedPeriod: string) => {
    setIsTopArtistsLoading(true);
    loadTopArtists(updatedPeriod);
  }, [loadTopArtists]);

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
              <div>
                <select
                  defaultValue="1month"
                  onChange={(e) => updateTopArtists(e.target.value)}
                >
                  <option value="7day">Last 7 days</option>
                  <option value="1month">Last month</option>
                  <option value="3month">Last 3 months</option>
                  <option value="6month">Last 6 months</option>
                  <option value="12month">Last 12 months</option>
                  <option value="overall">All time</option>
                </select>
              </div>
            </MainColumnHeader>

            {isTopArtistsLoading && (
              <LoadingAnimation>
                <img src={lemonImg} alt="lemon.fm"/>
                <strong>Loading...</strong>
              </LoadingAnimation>
            )}

            {(!isTopArtistsLoading && topArtist === undefined) && (
              <span>
                <strong>{user.name}</strong> hasn't listened to any music in the selected date range.
              </span>
            )}

            {(!isTopArtistsLoading && topArtist !== undefined) && (
              <MainArtistCard
                artistImage={
                  topArtist?.image
                    ? topArtist.image.filter(image => image.size === "mega")[0]["#text"]
                    : ""
                }
                artist={topArtist?.name}
                artistScrobbles={topArtist?.playcount}
                favAlbum={topArtistFirstAlbum ? topArtistFirstAlbum.name : "Carregando"}
                favAlbumUrl={topArtistFirstAlbum?.image
                  ? topArtistFirstAlbum.image.filter(image => image.size === "medium")[0]["#text"]
                  : ""
                }
                favAlbumScrobbles={topArtistFirstAlbum ? topArtistFirstAlbum.playcount : 0}
                favSong={topArtistFirstTrack ? topArtistFirstTrack.name : "Carregando"}
                favSongCover={topArtistFirstTrack?.image
                  ? topArtistFirstTrack.image.filter(image => image.size === "medium")[0]["#text"]
                  : ""
                }
                favSongScrobbles={topArtistFirstTrack ? topArtistFirstTrack.playcount : 0}
              />
            )}

            {(!isTopArtistsLoading && topArtists !== undefined) && (
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
            )}

            {!isTopArtistsLoading && (
              <Share>
                <h1>Share on:</h1>
                <div>
                  <TwitterShareButton
                    title="Hey there! Check what I've been listening lately on:"
                    url={`https://lemonfm.herokuapp.com/lastfm/${user.name}`}
                  >
                    <FaTwitter size={24}/>
                  </TwitterShareButton>

                  <FacebookShareButton
                    quote="Hey there! Check what I've been listening lately on:"
                    url={`https://lemonfm.herokuapp.com/lastfm/${user.name}`}
                    style={{ marginLeft: 16 }}
                  >
                    <FaFacebook size={24}/>
                  </FacebookShareButton>

                  <WhatsappShareButton
                    title="Hey there! Check what I've been listening lately on:"
                    url={`https://lemonfm.herokuapp.com/lastfm/${user.name}`}
                    style={{ marginLeft: 16 }}
                  >
                    <FaWhatsapp size={24}/>
                  </WhatsappShareButton>

                  <TelegramShareButton
                    title="Hey there! Check what I've been listening lately on:"
                    url={`https://lemonfm.herokuapp.com/lastfm/${user.name}`}
                    style={{ marginLeft: 16 }}
                  >
                    <FaTelegram size={24}/>
                  </TelegramShareButton>
                </div>
              </Share>
            )}
          </MainColumn>

          <StatsColumn>
            <h1>My stats</h1>

              <p>Scrobbling since {user.registered && userStartDate(user.registered["#text"])}</p>

            <StatsBox>
              <li>
                <strong>Scrobbles</strong>
                <span>{formatValue(user.playcount)}</span>
              </li>

              <li>
                <strong>Artists</strong>
                <span>{formatValue(totalArtists)}</span>
              </li>

              <li>
                <strong>Loved Tracks</strong>
                <span>{formatValue(totalLovedTracks)}</span>
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
