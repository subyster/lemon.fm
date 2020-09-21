export const themes = {
  lemon: {
    background: '#F3FFD7',
    primary: '#4CD105',
    'primary-dark': '#1E5003',
    'primary-light': '#DAFE86',
    secondary: '#F9FFEB',
    text: '#081401',

    logo: '#4CD105',
    input: '#DAFE86',
    'scrobble-box': '#F9FFEB',
    'scrobble-border': '#1E5003',
    position: '#1E5003',
    username: '#081401',
    actions: '#4CD105',
  },
  dark: {
    background: '#081401',
    primary: '#4CD105',
    'primary-dark': '#4CD105',
    'primary-light': '#1E5003',
    secondary: '#1E5003',
    text: '#F3FFD7',

    logo: '#4CD105',
    input: '#F3FFD7',
    'scrobble-box': '#081401',
    'scrobble-border': '#1E5003',
    position: '#F3FFD7',
    username: '#4CD105',
    actions: '#F3FFD7'
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.lemon | typeof themes.dark;
