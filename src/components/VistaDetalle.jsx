import { useState, useEffect } from 'react';

const AcordeonSeccion = ({ titulo, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-brand-card rounded-xl border border-white/10 shadow-2xl overflow-hidden mb-6">
      <div className="p-6 flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-xl font-semibold text-white">{titulo}</h3>
        <div className="text-brand-accent text-sm bg-brand-primary/10 hover:bg-brand-primary/20 px-4 py-2 rounded-md border border-brand-primary/20 transition-colors shadow-sm">
          {isOpen ? 'Ocultar Detalle ▲' : 'Desplegar ▼'}
        </div>
      </div>
      {isOpen && <div className="border-t border-white/10 bg-[#172033] p-6 animate-[fadeIn_0.3s_ease-in-out] shadow-inner">{children}</div>}
    </div>
  );
};

const ActividadRow = ({ actividad }) => {
  const [calificacion, setCalificacion] = useState(actividad.calificacionActual || 'N');
  const [guardando, setGuardando] = useState(false);

  const handleCambio = (e) => {
    const nuevoValor = e.target.value;
    setCalificacion(nuevoValor);
    setGuardando(true);

    // Guardado en tiempo real
    fetch(`https://gobierno-backend-production.up.railway.app/api/cobit/actividades/${actividad.idActividad}/calificar?valor=${nuevoValor}`, {
      method: 'PUT'
    }).then(() => setGuardando(false))
      .catch(err => { console.error(err); setGuardando(false); });
  };

  //metricas de auditoria
  const getBadgeColor = (val) => {
    switch (val) {
      case 'N': return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'P': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'L': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'F': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  return (
    <div className="flex items-start justify-between p-5 hover:bg-white/5 transition-colors gap-6">
      <div className="flex-1">
        <p className="text-base text-white leading-relaxed">{actividad.descripcionActividad}</p>
        <span className="text-sm text-gray-400 mt-2 block">Meta: Nivel <span className="font-bold text-brand-accent px-1">{actividad.nivelCapacidadEsperado}</span></span>
      </div>
      <div className="flex items-center gap-3 mt-1">
        {guardando && <span className="text-xs text-brand-primary animate-pulse">Guardando...</span>}
        <select value={calificacion} onChange={handleCambio} className="bg-brand-dark border border-gray-600 text-white text-base rounded-md focus:ring-brand-primary outline-none cursor-pointer w-28 p-2">
          <option value="N">N (0-15%)</option><option value="P">P (15-50%)</option><option value="L">L (50-85%)</option><option value="F">F (85-100%)</option>
        </select>
        <div className={`w-10 h-10 flex items-center justify-center rounded border font-bold text-base ${getBadgeColor(calificacion)}`}>{calificacion}</div>
      </div>
    </div>
  );
};
export default function VistaDetalle({ procesoId, onBack }) {
  const [proceso, setProceso] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const handleLimpiarProceso = () => {
  if(window.confirm(`¿Estás seguro de reiniciar la auditoría del proceso ${procesoId}?`)) {
    fetch(`https://gobierno-backend-production.up.railway.app/api/cobit/procesos/${procesoId}/limpiar`, { method: 'POST' })
      .then(() => {
        alert('Proceso reiniciado. Recargando datos...');
        window.location.reload(); // Recarga para ver los 'N' nuevamente
      });
  }
};

  useEffect(() => {
    fetch(`https://gobierno-backend-production.up.railway.app/api/cobit/procesos/${procesoId}`)
      .then(response => {
        if (!response.ok) throw new Error('No se encontraron datos para este proceso.');
        return response.json();
      })
      .then(data => { setProceso(data); setCargando(false); })
      .catch(err => { setError(err.message); setCargando(false); });
  }, [procesoId]);

  if (cargando) return <div className="min-h-[70vh] flex justify-center items-center text-white"><div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div></div>;
  if (error) return <div className="min-h-[70vh] flex flex-col justify-center items-center"><p className="text-red-400 text-xl">{error}</p><button onClick={onBack} className="mt-4 text-brand-accent">← Volver</button></div>;

  return (
    <div className="max-w-6xl mx-auto p-6 mt-6 animate-[fadeIn_0.4s_ease-in-out]">
     <div className="flex justify-between items-center mb-6">
  <button onClick={onBack} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-base font-medium bg-brand-card py-2 px-4 rounded-lg border border-white/10 shadow-md hover:border-brand-accent/50">
    ← Volver al Panel
  </button>
  <button onClick={handleLimpiarProceso} className="text-red-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium bg-red-500/10 hover:bg-red-500/30 py-2 px-4 rounded-lg border border-red-500/30 shadow-md">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
    Limpiar Auditoría
  </button>
</div>

      <div className="bg-brand-card p-8 rounded-xl border border-brand-primary/40 shadow-2xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-brand-primary/20 text-brand-accent px-4 py-1 rounded-bl-lg text-sm font-bold tracking-widest uppercase shadow-sm">
          {proceso.areaPrioritaria}
        </div>
        <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
          <span className="text-brand-primary mr-3">{proceso.idProceso}</span> {proceso.nombreProceso}
        </h2>
        <p className="text-brand-accent mb-5 font-semibold text-lg">{proceso.dominio}</p>
        <div className="text-white text-base leading-relaxed space-y-4 bg-[#172033] p-5 rounded-lg border border-white/5 shadow-inner">
          <p><strong className="text-brand-accent">Descripción:</strong> {proceso.descripcionProceso}</p>
          <p><strong className="text-brand-accent">Propósito:</strong> {proceso.propositoProceso}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-brand-card p-6 rounded-xl border border-white/10 shadow-lg">
          <h4 className="text-brand-accent font-bold mb-4 uppercase text-sm tracking-wider border-b border-white/10 pb-2">Metas de Alineamiento</h4>
          <p className="text-base text-white whitespace-pre-line leading-relaxed">{proceso.metasAlineamiento}</p>
        </div>
        <div className="bg-brand-card p-6 rounded-xl border border-white/10 shadow-lg">
          <h4 className="text-brand-accent font-bold mb-4 uppercase text-sm tracking-wider border-b border-white/10 pb-2">Metas Empresariales</h4>
          <p className="text-base text-white whitespace-pre-line leading-relaxed">{proceso.metasEmpresariales}</p>
        </div>
        <div className="bg-brand-card p-6 rounded-xl border border-white/10 shadow-lg">
          <h4 className="text-brand-accent font-bold mb-4 uppercase text-sm tracking-wider border-b border-white/10 pb-2">Métricas Modelo</h4>
          <p className="text-base text-white whitespace-pre-line leading-relaxed">{proceso.metricasModelo}</p>
        </div>
      </div>

      {/* COMPONENTE A */}
      <AcordeonSeccion titulo="Componente A: Procesos">
        {proceso.componenteA_Procesos?.map((compA, idx) => (
          <div key={idx} className="space-y-6">
            {compA.practicas.map((practica, pIdx) => (
              <div key={pIdx} className="bg-brand-card rounded-lg border border-white/10 overflow-hidden shadow-lg">
                <div className="bg-brand-dark/80 p-5 border-b border-white/10"><h4 className="text-xl font-medium text-white"><span className="text-brand-primary mr-2">{practica.idPractica}</span> {practica.nombrePractica}</h4></div>
                <div className="divide-y divide-white/10">{practica.actividades.map((act) => <ActividadRow key={act.idActividad} actividad={act} />)}</div>
              </div>
            ))}
          </div>
        ))}
      </AcordeonSeccion>

      {/* COMPONENTE B: RACI ESTILIZADO */}
      <AcordeonSeccion titulo="Componente B: Estructuras Organizativas">
        <div className="bg-brand-card rounded-lg border border-white/10 overflow-hidden shadow-lg">
          <table className="w-full text-left text-base text-white">
            <thead className="bg-brand-dark text-brand-accent border-b border-brand-primary/30">
              <tr><th className="px-6 py-4">Práctica</th><th className="px-6 py-4">Rol</th><th className="px-6 py-4 text-center">RACI</th></tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {proceso.componenteB_Raci?.map((raci, idx) => (
                <tr key={idx} className="hover:bg-white/5">
                  <td className="px-6 py-4 font-medium">{raci.practicaGestion}</td>
                  <td className="px-6 py-4">{raci.rolOrganizacional}</td>
                  <td className="px-6 py-4 text-center">
                    {/* Estilo recuperado */}
                    <span className={`px-4 py-2 rounded text-sm font-bold shadow-sm ${raci.nivelResponsabilidad === 'R' || raci.nivelResponsabilidad === 'A' ? 'bg-brand-primary/20 text-brand-accent border border-brand-primary/40' : 'bg-gray-700/50 text-white border border-gray-500/50'}`}>
                      {raci.nivelResponsabilidad}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AcordeonSeccion>

      {/* COMPONENTE C: FLUJOS ESTILIZADOS */}
      <AcordeonSeccion titulo="Componente C: Flujos y Elementos de Información">
        <div className="bg-brand-card rounded-lg border border-white/10 overflow-hidden shadow-lg">
          <table className="w-full text-left text-base text-white">
            <thead className="bg-brand-dark text-brand-accent border-b border-brand-primary/30">
              <tr><th className="px-6 py-4">Práctica</th><th className="px-6 py-4">Tipo</th><th className="px-6 py-4">Descripción</th><th className="px-6 py-4">Origen/Destino</th></tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {proceso.componenteC_Flujos?.map((flujo, idx) => (
                <tr key={idx} className="hover:bg-white/5">
                  <td className="px-6 py-4 font-medium">{flujo.practicaGestion}</td>
                  <td className="px-6 py-4">
                    {/* Estilo recuperado */}
                    <span className={`text-sm font-bold px-3 py-1.5 rounded shadow-sm ${flujo.tipoFlujo === 'ENTRADA' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'}`}>
                      {flujo.tipoFlujo}
                    </span>
                  </td>
                  <td className="px-6 py-4 leading-relaxed">{flujo.descripcion}</td>
                  <td className="px-6 py-4 text-brand-accent font-mono text-sm bg-brand-dark/30 border-l border-white/5">{flujo.origenDestino}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AcordeonSeccion>

      {/* COMPONENTES D, E, F, G */}
      <AcordeonSeccion titulo="Componente D: Personas, Habilidades y Competencias">
        <div className="bg-brand-card rounded-lg border border-white/10 overflow-hidden shadow-lg">
          <table className="w-full text-left text-base text-white">
            <thead className="bg-brand-dark text-brand-accent border-b border-brand-primary/30">
              <tr><th className="px-6 py-4">Habilidad</th><th className="px-6 py-4">Documentación</th><th className="px-6 py-4">Referencia</th></tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {proceso.componenteD_Habilidades?.map((hab, idx) => (
                <tr key={idx} className="hover:bg-white/5"><td className="px-6 py-4 font-medium">{hab.nombreHabilidad}</td><td className="px-6 py-4 text-gray-300">{hab.documentacionRelacionada}</td><td className="px-6 py-4 text-brand-accent font-mono text-sm bg-brand-dark/30 border-l border-white/5">{hab.referenciaEspecifica}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </AcordeonSeccion>

      <AcordeonSeccion titulo="Componente E: Políticas y Procedimientos">
        <div className="bg-brand-card rounded-lg border border-white/10 overflow-hidden shadow-lg">
          <table className="w-full text-left text-base text-white">
            <thead className="bg-brand-dark text-brand-accent border-b border-brand-primary/30">
              <tr><th className="px-6 py-4 w-1/4">Política</th><th className="px-6 py-4 w-2/4">Descripción</th><th className="px-6 py-4 w-1/4">Referencia</th></tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {proceso.componenteE_Politicas?.map((pol, idx) => (
                <tr key={idx} className="hover:bg-white/5"><td className="px-6 py-4 font-medium">{pol.tituloPolitica}</td><td className="px-6 py-4 leading-relaxed text-gray-300">{pol.descripcionPolitica}</td><td className="px-6 py-4 text-brand-accent font-mono text-sm bg-brand-dark/30 border-l border-white/5">{pol.documentacionRelacionada} <br/> <span className="text-gray-400 mt-2 block">{pol.referenciaEspecifica}</span></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </AcordeonSeccion>

      <AcordeonSeccion titulo="Componente F: Cultura, Ética y Comportamiento">
        <div className="bg-brand-card rounded-lg border border-white/10 overflow-hidden shadow-lg">
          <table className="w-full text-left text-base text-white">
            <thead className="bg-brand-dark text-brand-accent border-b border-brand-primary/30">
              <tr><th className="px-6 py-4">Elemento Cultural</th><th className="px-6 py-4">Documentación</th><th className="px-6 py-4">Referencia</th></tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {proceso.componenteF_Cultura?.map((cult, idx) => (
                <tr key={idx} className="hover:bg-white/5"><td className="px-6 py-4 font-medium">{cult.elementoCultural}</td><td className="px-6 py-4 text-gray-300">{cult.documentacionRelacionada}</td><td className="px-6 py-4 text-brand-accent font-mono text-sm bg-brand-dark/30 border-l border-white/5">{cult.referenciaEspecifica}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </AcordeonSeccion>

      <AcordeonSeccion titulo="Componente G: Servicios e Infraestructura">
        <ul className="list-disc list-inside space-y-2 p-6 text-white text-base">
            {proceso.componenteG_Servicios?.map((serv, idx) => (
              <li key={idx} className="py-2 border-b border-white/5 last:border-0 flex items-center gap-4">
                 <svg className="w-6 h-6 text-brand-primary drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                 {serv.nombreServicioHerramienta}
              </li>
            ))}
        </ul>
      </AcordeonSeccion>

    </div>
  );
}