import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Store} from "./store/Store";
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// import styled, { ThemeProvider } from 'styled-components';
// import {theme } from './common/StyleComponent';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <ThemeProvider theme={theme}>
  <HashRouter>
    <Provider store={Store}>
      <App />
    </Provider>
    </HashRouter>
    // </ThemeProvider>
);
