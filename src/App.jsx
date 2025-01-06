import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Chords from './pages/Chords';
import SelectSong from './pages/SelectSong';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chords" element={<Chords />} />
        <Route path="/songs/:tonalidad" element={<SelectSong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;