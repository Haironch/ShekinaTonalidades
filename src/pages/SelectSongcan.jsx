import React, { useState } from 'react';

const SelectSongCan = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const songs = {
    'Re Mayor': [
      { title: 'El Poderoso de Israel', ministry: 'Ministerio Ebenezer' }
    ],
    'Fa Menor': [
      { title: 'El Poderoso de Israel (Versión Acústica)', ministry: 'Ministerio Ebenezer' }
    ]
  };

  const filterSongs = () => {
    const filtered = {};
    Object.entries(songs).forEach(([key, songList]) => {
      const filteredSongs = songList.filter(song => 
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.ministry.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredSongs.length > 0) {
        filtered[key] = filteredSongs;
      }
    });
    return filtered;
  };

  const filteredSongs = filterSongs();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-200 mb-8 text-center">
          Alabanzas disponibles
        </h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar alabanza..."
            className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-lg text-blue-100 placeholder-blue-300 border border-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {Object.entries(filteredSongs).map(([key, songList]) => (
          <div key={key} className="mb-12">
            <div className="flex items-center mb-6">
              <div className="flex-grow h-px bg-blue-400/30"></div>
              <h2 className="px-4 text-xl font-semibold text-blue-200">{key}</h2>
              <div className="flex-grow h-px bg-blue-400/30"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {songList.map((song, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-blue-200">{song.title}</h3>
                  <p className="text-blue-100 mt-2">{song.ministry}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectSongCan;