import React from 'react';
import { useParams } from 'react-router-dom';

const SelectSong = () => {
  const { tonalidad } = useParams();
  
  // Simular lista de PDFs (reemplazar con tus datos reales)
  const pdfList = [
    { title: 'Ejercicio 1', path: `/pdfs/${tonalidad}/ejercicio1.pdf` },
    { title: 'Ejercicio 2', path: `/pdfs/${tonalidad}/ejercicio2.pdf` }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-200 mb-8">
          Partituras en {tonalidad}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfList.map((pdf, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => window.open(pdf.path, '_blank')}
            >
              <h3 className="text-xl font-semibold text-blue-200">{pdf.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectSong;