import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/index.css';
import { Provider } from 'react-redux';
import BaseLayout from './app/layouts/BaseLayout';
import { store } from './app/appStrore';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BaseLayout />
    </Provider>
  </React.StrictMode>
);

