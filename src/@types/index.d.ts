export interface Params {
  username: string;
}

export interface Photo {
  size: string;
  "#text": string;
}

export interface LastScrobble {
  artist: {
    url: string;
    name: string;
  }
  album: {
    "#text": string;
  }
  image: Photo[];
  streamable: boolean;
  date?: {
    uts: number;
  }
  url: string;
  name: string;
  mbid: string;
}

export interface User {
  playcount: number;
  name: string;
  url: string;
  image: Photo[];
  registered: {
    "#text": number;
  }
}

export interface Artist {
  "@attr": {
    rank: number;
  }
  name: string;
  url: string;
  playcount: number;
  image: Photo[];
}

export interface Album {
  artist: {
    url: string;
    name: string;
  }
  "@attr": {
    rank: number;
  }
  image: Photo[];
  name: string;
  url: string;
  playcount: number;
}

export interface Track {
  artist: {
    url: string;
    name: string;
  }
  playcount: number;
  image: Photo[];
  name: string;
}
