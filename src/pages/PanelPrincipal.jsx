import { useState } from 'react';
import VistaDetalle from '../components/VistaDetalle';
import { procesosEDM, procesosAPO } from '../data/procesosCobit';

export default function PanelPrincipal() {
  const [procesoSeleccionado, setProcesoSeleccionado] = useState(null);

  if (procesoSeleccionado) {
    return <VistaDetalle procesoId={procesoSeleccionado} onBack={() => setProcesoSeleccionado(null)} />;
  }

  const TarjetaProceso = ({ proc, colorClase }) => (
    <div 
      onClick={() => !proc.deshabilitado && setProcesoSeleccionado(proc.id)}
      className={`bg-brand-card rounded-xl p-6 border border-white/10 shadow-xl transition-all duration-300 group
        ${proc.deshabilitado 
          ? 'opacity-40 cursor-not-allowed grayscale' 
          : 'cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:border-brand-primary/50'
        }
      `}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-md font-bold text-sm border shadow-sm transition-colors ${proc.deshabilitado ? 'bg-gray-800 text-gray-500 border-gray-700' : colorClase}`}>
          {proc.id}
        </span>
        {proc.deshabilitado && <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Próximamente</span>}
      </div>
      <h4 className={`text-lg font-medium transition-colors ${proc.deshabilitado ? 'text-gray-500' : 'text-white group-hover:text-brand-accent'}`}>
        {proc.nombre}
      </h4>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 mt-6 animate-[fadeIn_0.4s_ease-in-out]">
      
      <div className="mb-12 border-l-4 border-brand-primary pl-5 py-1">
        <h2 className="text-4xl font-bold text-white mb-3 tracking-wide">Panel de Gobierno TI</h2>
        <p className="text-gray-300 text-lg">Seleccione un proceso del marco COBIT 2019 para auditar su nivel de capacidad corporativa.</p>
      </div>

      {/* SECCIÓN 1: DOMINIO EDM */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6 border-b border-brand-accent/30 pb-3">
          <div className="bg-brand-accent/20 p-2 rounded-lg">
            <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
          <h3 className="text-2xl font-semibold text-brand-accent tracking-wide">Evaluar, Dirigir y Monitorizar (EDM)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procesosEDM.map((proc) => (
            <TarjetaProceso key={proc.id} proc={proc} colorClase="bg-brand-primary/20 text-brand-accent border-brand-primary/30 group-hover:bg-brand-primary group-hover:text-white" />
          ))}
        </div>
      </div>

      {/* SECCIÓN 2: DOMINIO APO */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6 border-b border-blue-400/30 pb-3">
          <div className="bg-blue-500/20 p-2 rounded-lg">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          </div>
          <h3 className="text-2xl font-semibold text-blue-400 tracking-wide">Alinear, Planificar y Organizar (APO)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procesosAPO.map((proc) => (
            <TarjetaProceso key={proc.id} proc={proc} colorClase="bg-blue-500/20 text-blue-300 border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white" />
          ))}
        </div>
      </div>

    </div>
  );
}