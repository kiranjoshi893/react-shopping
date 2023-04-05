import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Store} from "./store/Store";
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { FirebaseProvide } from './Firebase';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <React.StrictMode>
  // <BrowserRouter></BrowserRouter>
  <HashRouter>
    <Provider store={Store}>
      <FirebaseProvide>
      <App />
      </FirebaseProvide>
    </Provider>
    </HashRouter>
  // </React.StrictMode>
);
