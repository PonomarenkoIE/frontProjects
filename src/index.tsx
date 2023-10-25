import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './style/css/index.css';
import { Provider } from 'react-redux';
import storePosts from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={storePosts}>
    <App />
  </Provider>
);