import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Playlist from './pages/Playlist/Playlist';
import LikedMusics from './pages/LikedMusics/LikedMusics';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/liked-musics" element={<LikedMusics />} />
    </Routes>
  );
}

export default App;