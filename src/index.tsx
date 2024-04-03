import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/index.css';
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import { store } from './app/appStrore';
import { appRouter } from './app/appRouter';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

