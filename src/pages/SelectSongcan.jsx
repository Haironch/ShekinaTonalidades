import React from 'react';

const SelectSongCan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-200 mb-8 text-center">
          Alabanzas disponibles
        </h1>

        {/* Sección Re Mayor */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="flex-grow h-px bg-blue-400/30"></div>
            <h2 className="px-4 text-xl font-semibold text-blue-200">Re Mayor</h2>
            <div className="flex-grow h-px bg-blue-400/30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-blue-200">El Poderoso de Israel</h3>
              <p className="text-blue-100 mt-2">Ministerio Ebenezer</p>
            </div>
            {/* Puedes agregar más alabanzas en Re Mayor aquí */}
          </div>
        </div>

        {/* Sección Fa Menor */}
        <div>
          <div className="flex items-center mb-6">
            <div className="flex-grow h-px bg-blue-400/30"></div>
            <h2 className="px-4 text-xl font-semibold text-blue-200">Fa Menor</h2>
            <div className="flex-grow h-px bg-blue-400/30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-blue-200">El Poderoso de Israel (Versión Acústica)</h3>
              <p className="text-blue-100 mt-2">Ministerio Ebenezer</p>
            </div>
            {/* Puedes agregar más alabanzas en Fa Menor aquí */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSongCan;