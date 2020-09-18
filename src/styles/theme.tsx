import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeName, themes } from './themes';

interface ThemeContextData {
  theme: ThemeName;
  changeTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const AppThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const appTheme = localStorage.getItem('@lemon.fm:theme');

    if (appTheme === "lemon" || appTheme === "dark") {
      return appTheme;
    }

    return "lemon";
  });

  const changeTheme = useCallback(() => {
    const newTheme = theme === "lemon" ? "dark" : "lemon";

    localStorage.setItem('@lemon.fm:theme', newTheme);

    setTheme(newTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme }}>
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const theme = useContext(ThemeContext);

  return theme;
}


export { AppThemeProvider, useTheme };
