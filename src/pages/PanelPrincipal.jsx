import { useState } from 'react';
import VistaDetalle from '../components/VistaDetalle';
import { procesosEDM, procesosAPO, procesosBAI, procesosDSS, procesosMEA } from '../data/procesosCobit';
import styles from './PanelPrincipal.module.css';

export default function PanelPrincipal() {
  const [procesoSeleccionado, setProcesoSeleccionado] = useState(null);
  const [reiniciando, setReiniciando] = useState(false);

  const handleLimpiarTodo = async () => {
    const confirmar = window.confirm(
      "⚠ CUIDADO: Estás a punto de iniciar una nueva auditoría desde cero.\n\n¿Estás completamente seguro de querer borrar todas las calificaciones actuales de todos los procesos? Esta acción devolverá todo a N (0%) y no se puede deshacer."
    );

    if (confirmar) {
      setReiniciando(true);
      try {
        const response = await fetch('https://gobierno-backend-production.up.railway.app/api/cobit/procesos/limpiar-todo', {
          method: 'POST'
        });
        if (response.ok) {
          alert("✅ ¡Auditoría global reiniciada con éxito! Todos los procesos están en 0%.");
          window.location.reload();
        } else {
          alert("❌ Hubo un problema de comunicación con el servidor. Inténtalo de nuevo.");
        }
      } catch (error) {
        console.error("Error al limpiar:", error);
        alert("❌ Error de conexión con Railway. Revisa la consola.");
      } finally {
        setReiniciando(false);
      }
    }
  };

  if (procesoSeleccionado) {
    return <VistaDetalle procesoId={procesoSeleccionado} onBack={() => setProcesoSeleccionado(null)} />;
  }

 

  const TarjetaProceso = ({ proc, colorClase }) => {
    const esCritico = proc.esCritico;

    return (
      <div 
        onClick={() => !proc.deshabilitado && setProcesoSeleccionado(proc.id)}
        className={`p-6 rounded-xl transition-all duration-300 group
          ${proc.deshabilitado 
            ? 'bg-brand-card opacity-40 cursor-not-allowed grayscale border border-white/10' 
            : esCritico
              ? `${styles.tarjetaCritica} cursor-pointer`
              : 'bg-brand-card border border-white/10 shadow-xl cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:border-brand-primary/50'
          }
        `}
      >
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-md font-bold text-sm border shadow-sm transition-colors ${proc.deshabilitado ? 'bg-gray-800 text-gray-500 border-gray-700' : colorClase}`}>
            {proc.id}
          </span>
          
          {proc.deshabilitado && <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Próximamente</span>}
          
          {/* Etiqueta animada exclusiva para el núcleo de Internet de las Cosas */}
          {esCritico && !proc.deshabilitado && (
            <span className={styles.etiquetaCritica}>Núcleo OTA</span>
          )}
        </div>
        
        <h4 className={`text-lg font-medium transition-colors ${proc.deshabilitado ? 'text-gray-500' : esCritico ? 'text-sky-200 group-hover:text-white' : 'text-white group-hover:text-brand-accent'}`}>
          {proc.nombre}
        </h4>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6 mt-6 animate-[fadeIn_0.4s_ease-in-out]">
      
      <div className="mb-12 flex flex-col md:flex-row md:items-start justify-between gap-4 border-l-4 border-brand-primary pl-5 py-1">
        <div>
          <h2 className="text-4xl font-bold text-white mb-3 tracking-wide">Panel de Gobierno TI</h2>
          <p className="text-gray-300 text-lg">Seleccione un proceso del marco COBIT 2019 para auditar su nivel de capacidad corporativa. <br/><span className="text-sky-400 font-semibold">Los procesos resaltados representan el núcleo crítico para la actualización telemática de vehículos.</span></p>
        </div>
        <button 
          onClick={handleLimpiarTodo} disabled={reiniciando}
          className={`flex items-center gap-2 font-bold px-5 py-3 rounded-lg border shadow-lg transition-all
            ${reiniciando ? 'bg-gray-700 text-gray-400 border-gray-600 cursor-wait' : 'bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500 hover:text-white hover:border-red-500'}`}
        >
          {reiniciando ? "Borrando Base de Datos..." : "⚠ Iniciar Nueva Auditoría"}
        </button>
      </div>

      {/* DOMINIO EDM */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6 border-b border-amber-600/30 pb-3">
          <div className="bg-amber-600/20 p-2 rounded-lg">
            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
          <h3 className="text-2xl font-semibold text-amber-500 tracking-wide">Evaluar, Dirigir y Monitorizar (EDM)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procesosEDM.map((proc) => (
            <TarjetaProceso key={proc.id} proc={proc} colorClase="bg-amber-500/20 text-amber-400 border-amber-500/30 group-hover:bg-amber-600 group-hover:text-white" />
          ))}
        </div>
      </div>

      {/* DOMINIO APO */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6 border-b border-blue-400/30 pb-3">
          <div className="bg-blue-500/20 p-2 rounded-lg">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          </div>
          <h3 className="text-2xl font-semibold text-blue-400 tracking-wide">Alinear, Planificar y Organizar (APO)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procesosAPO.map((proc) => <TarjetaProceso key={proc.id} proc={proc} colorClase="bg-blue-500/20 text-blue-300 border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white" />)}
        </div>
      </div>

      {/* DOMINIO BAI */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6 border-b border-emerald-400/30 pb-3">
          <div className="bg-emerald-500/20 p-2 rounded-lg">
            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <h3 className="text-2xl font-semibold text-emerald-400 tracking-wide">Construir, Adquirir e Implementar (BAI)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procesosBAI.map((proc) => <TarjetaProceso key={proc.id} proc={proc} colorClase="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 group-hover:bg-emerald-600 group-hover:text-white" />)}
        </div>
      </div>

      {/* DOMINIO DSS */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6 border-b border-purple-400/30 pb-3">
          <div className="bg-purple-500/20 p-2 rounded-lg">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
          <h3 className="text-2xl font-semibold text-purple-400 tracking-wide">Entregar, Dar Servicio y Soporte (DSS)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procesosDSS.map((proc) => <TarjetaProceso key={proc.id} proc={proc} colorClase="bg-purple-500/20 text-purple-300 border-purple-500/30 group-hover:bg-purple-600 group-hover:text-white" />)}
        </div>
      </div>

      {/* DOMINIO MEA */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6 border-b border-rose-400/30 pb-3">
          <div className="bg-rose-500/20 p-2 rounded-lg">
            <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-2xl font-semibold text-rose-400 tracking-wide">Monitorizar, Evaluar y Valorar (MEA)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procesosMEA.map((proc) => <TarjetaProceso key={proc.id} proc={proc} colorClase="bg-rose-500/20 text-rose-300 border-rose-500/30 group-hover:bg-rose-600 group-hover:text-white" />)}
        </div>
      </div>

    </div>
  );
}