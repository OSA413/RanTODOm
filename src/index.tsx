import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';

import { DataProvider } from './app/DataProvider';
DataProvider.Init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
