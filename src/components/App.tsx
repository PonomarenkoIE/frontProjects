import React from 'react';
import '../style/css/App.css';
import { routes } from '../routes';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        {routes.map(({path, element}) => <Route path={path} element={element} key={path} />)}
      </Routes>
    </div>
  );
}

export default App;