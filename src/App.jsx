import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Chords from './pages/Chords';
import SelectSong from './pages/SelectSong';
import SelectSongCan from './pages/SelectSongcan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chords" element={<Chords />} />
        <Route path="/songs/:tonalidad" element={<SelectSong />} />
        <Route path="/select-song-can" element={<SelectSongCan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;