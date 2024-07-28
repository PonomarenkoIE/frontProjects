import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RootStore } from './store/RootStore';

const rootStore = new RootStore()
export const Context = createContext<RootStore>({} as RootStore)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={rootStore}>
    <App />
  </Context.Provider>
);
