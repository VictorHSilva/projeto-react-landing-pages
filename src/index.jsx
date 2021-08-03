import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './styles/global-styles';
import Home from './templates/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}></ThemeProvider>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
