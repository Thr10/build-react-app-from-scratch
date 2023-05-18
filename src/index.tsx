import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './style/index.scss';
import store from './store';
import App from './App';

const rootDom = document.getElementById('root');
const container = createRoot(rootDom!);
container.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
