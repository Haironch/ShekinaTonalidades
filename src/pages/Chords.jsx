import React, { useState } from 'react';

const Chords = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const majorChords = [
    { name: 'Do mayor', notation: 'C Major' },
    { name: 'Re mayor', notation: 'D Major' },
    { name: 'Mi mayor', notation: 'E Major' },
    { name: 'Fa mayor', notation: 'F Major' },
    { name: 'Sol mayor', notation: 'G Major' },
    { name: 'La mayor', notation: 'A Major' },
    { name: 'Si mayor', notation: 'B Major' },
    { name: 'Do# mayor', notation: 'C# Major' },
    { name: 'Re# mayor', notation: 'D# Major' },
    { name: 'Fa# mayor', notation: 'F# Major' },
    { name: 'Sol# mayor', notation: 'G# Major' },
    { name: 'La# mayor', notation: 'A# Major' },
  ];

  const minorChords = [
    { name: 'La menor', notation: 'A Minor' },
    { name: 'Mi menor', notation: 'E Minor' },
    { name: 'Si menor', notation: 'B Minor' },
    { name: 'Fa# menor', notation: 'F# Minor' },
    { name: 'Do# menor', notation: 'C# Minor' },
    { name: 'Sol# menor', notation: 'G# Minor' },
    { name: 'Re menor', notation: 'D Minor' },
    { name: 'Sol menor', notation: 'G Minor' },
    { name: 'Do menor', notation: 'C Minor' },
    { name: 'Fa menor', notation: 'F Minor' },
    { name: 'Sib menor', notation: 'Bb Minor' },
    { name: 'Mib menor', notation: 'Eb Minor' },
  ];

  const filteredMajorChords = majorChords.filter(chord => 
    chord.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chord.notation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMinorChords = minorChords.filter(chord => 
    chord.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chord.notation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar tonalidad..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg bg-white/20 text-blue-100 placeholder-blue-300 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {(filteredMajorChords.length > 0) && (
          <>
            <h2 className="text-3xl font-bold text-blue-200 mb-8">Tonalidades Mayores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredMajorChords.map((chord, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => console.log(`Navigate to songs in ${chord.name}`)}
                >
                  <h3 className="text-xl font-semibold text-blue-200">{chord.name}</h3>
                  <p className="text-blue-100 mt-2">{chord.notation}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {(filteredMinorChords.length > 0) && (
          <>
            <h2 className="text-3xl font-bold text-blue-200 mb-8">Tonalidades Menores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMinorChords.map((chord, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => console.log(`Navigate to songs in ${chord.name}`)}
                >
                  <h3 className="text-xl font-semibold text-blue-200">{chord.name}</h3>
                  <p className="text-blue-100 mt-2">{chord.notation}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chords;