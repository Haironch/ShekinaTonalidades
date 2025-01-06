import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Chords from './pages/Chords';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chords" element={<Chords />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;