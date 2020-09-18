import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { AppThemeProvider } from './styles/theme';

const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <Router>
        <Routes />

        <GlobalStyles />
      </ Router>
    </AppThemeProvider>
  );
}

export default App;
