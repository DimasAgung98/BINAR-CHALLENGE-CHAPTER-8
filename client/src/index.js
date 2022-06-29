import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import GetAllPlayers from './pages/GetAllPlayer';
import EditPlayer from './pages/EditPlayer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/api/v1/players" element={<GetAllPlayers/>}/>
      <Route path="/api/v1/players/exp/:id" element={<EditPlayer/>}/>
    </Routes>
  </BrowserRouter>
);
