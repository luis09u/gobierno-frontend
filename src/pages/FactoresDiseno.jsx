import { useState, useEffect } from 'react';

export default function FactoresDiseno() {
  const [factores, setFactores] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('gobierno-backend-production.up.railway.app/api/cobit/factores')
      .then(res => res.json())
      .then(data => { setFactores(data); setCargando(false); })
      .catch(err => { console.error(err); setCargando(false); });
  }, []);

  if (cargando) return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-white">
      <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mb-4 shadow-lg"></div>
      <p className="text-xl tracking-widest animate-pulse">Cargando Factores de Diseño...</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 mt-6 animate-[fadeIn_0.4s_ease-in-out]">
      <div className="mb-10 border-l-4 border-brand-primary pl-5 py-1">
        <h2 className="text-4xl font-bold text-white mb-3 tracking-wide">Factores de Diseño</h2>
        <p className="text-gray-300 text-lg">Parámetros corporativos que justifican la arquitectura de TI para el Proyecto OTA en Toyota.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {factores.map((factor) => (
          <div key={factor.idFactor} className="bg-brand-card rounded-xl border border-white/10 shadow-lg overflow-hidden flex flex-col hover:border-brand-primary/30 transition-colors">
            <div className="bg-brand-dark/80 p-5 border-b border-white/10 flex items-center gap-4">
              <div className="bg-brand-primary text-white font-bold px-3 py-1.5 rounded-md shadow-md">{factor.idFactor}</div>
              <h3 className="text-xl font-semibold text-white">{factor.nombreFactor}</h3>
            </div>
            <div className="p-6 flex-1 flex flex-col gap-5 bg-[#172033]">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1 block">Descripción General</span>
                <p className="text-base text-gray-300 leading-relaxed">{factor.descripcionGeneral}</p>
              </div>
              <div className="bg-brand-card p-4 rounded-lg border border-white/5">
                <span className="text-xs uppercase tracking-wider font-bold text-brand-accent mb-1 block">Dimensión Toyota</span>
                <p className="text-lg font-medium text-white">{factor.dimensionSeleccionada}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-brand-primary mb-1 block">Impacto en Proyecto OTA</span>
                <p className="text-base text-white leading-relaxed border-l-2 border-brand-primary/50 pl-3">{factor.impactoProyectoOTA}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}