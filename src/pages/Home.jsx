import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center space-y-8 backdrop-blur-sm bg-white/10 p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-200 mb-6 animate-fade-in">
          Ministerio de Alabanza Ebenezer Shekina
        </h1>
        
        <p className="text-blue-100 text-lg leading-relaxed">
          Este es un proyecto para el ministerio de alabanza de Ebenezer Shekina 
          con el propósito de ver las tonalidades de cada alabanza
        </p>

        <button
          onClick={() => navigate('/chords')}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            px-8 py-3 rounded-lg font-semibold
            transform transition-all duration-300
            ${isHovered 
              ? 'bg-blue-400 scale-105 shadow-lg' 
              : 'bg-blue-500 scale-100'
            }
            text-gray-900 hover:bg-blue-400
          `}
        >
          Ver tonos
        </button>
      </div>
    </div>
  );
};

export default HomePage;