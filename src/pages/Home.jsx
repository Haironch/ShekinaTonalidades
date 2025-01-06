import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Music2, Mic2 } from "lucide-react";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === "musician") {
      navigate("/chords");
    } else if (role === "singer") {
      navigate("/select-song-can");
    }
    setShowModal(false);
  };

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
          onClick={() => setShowModal(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            px-8 py-3 rounded-lg font-semibold
            transform transition-all duration-300
            ${
              isHovered
                ? "bg-blue-400 scale-105 shadow-lg"
                : "bg-blue-500 scale-100"
            }
            text-gray-900 hover:bg-blue-400
          `}
        >
          Comenzar
        </button>
      </div>

      {/* Modal de selección */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-8 rounded-xl shadow-xl max-w-md w-full backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-blue-200 mb-8 text-center">
              Selecciona tu rol
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <button
                onClick={() => handleRoleSelection("musician")}
                className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                <Music2
                  size={48}
                  className="text-blue-200 mb-4 group-hover:scale-110 transition-transform"
                />
                <span className="text-blue-200 font-semibold text-lg">
                  Músico
                </span>
              </button>

              <button
                onClick={() => handleRoleSelection("singer")}
                className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                <Mic2
                  size={48}
                  className="text-blue-200 mb-4 group-hover:scale-110 transition-transform"
                />
                <span className="text-blue-200 font-semibold text-lg">
                  Cantor
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
