import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Store} from "./store/Store";
import App from './App';
import { Provider } from 'react-redux';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  // </React.StrictMode>
);
