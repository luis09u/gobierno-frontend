import { useState } from 'react';

export default function MetasCobit() {
  // Diccionario de Metas COBIT aplicadas al caso Toyota OTA
  const metasEmpresariales = [
    { id: 'EG01', titulo: 'Portafolio de productos y servicios competitivos', descripcion: 'Transición de Toyota hacia vehículos definidos por software (Arene OS) para competir en el mercado de autos conectados.' },
    { id: 'EG05', titulo: 'Cultura de innovación orientada al cliente', descripcion: 'Ofrecer nuevas funcionalidades vehiculares por suscripción OTA, manteniendo el principio Customer-First.' },
    { id: 'EG06', titulo: 'Continuidad y disponibilidad del servicio de negocio', descripcion: 'Garantizar que la infraestructura en la nube nunca falle para no interrumpir el funcionamiento de los vehículos.' },
    { id: 'EG12', titulo: 'Optimización de costos de procesos de negocio', descripcion: 'Reducir el gasto operativo de los talleres físicos arreglando fallos de software de forma remota.' }
  ];

  const metasAlineamiento = [
    { id: 'AG01', titulo: 'Cumplimiento de TI y soporte a la conformidad externa', descripcion: 'Alineación estricta de la infraestructura AWS con la normativa de ciberseguridad automotriz UNECE WP.29.' },
    { id: 'AG03', titulo: 'Realización de beneficios de inversiones de TI', descripcion: 'Asegurar que la millonaria inversión en la red 5G y Cloud genere un Retorno de Inversión (ROI) positivo.' },
    { id: 'AG05', titulo: 'Entrega de servicios de TI acorde a requisitos del negocio', descripcion: 'Despliegue de actualizaciones OTA sin latencia y con cifrado End-to-End para la flota global.' },
    { id: 'AG08', titulo: 'Habilitar y dar soporte a procesos de negocio', descripcion: 'Integrar los sistemas de TI con la cadena de concesionarios y operaciones mecánicas tradicionales.' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 mt-6 animate-[fadeIn_0.4s_ease-in-out]">
      
      <div className="mb-10 border-l-4 border-brand-primary pl-5 py-1">
        <h2 className="text-4xl font-bold text-white mb-3 tracking-wide">Cascada de Metas</h2>
        <p className="text-gray-300 text-lg">Diccionario corporativo que traduce las necesidades estratégicas de Toyota en objetivos tecnológicos accionables.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* COLUMNA: Metas Empresariales (EG) */}
        <div>
          <h3 className="text-2xl font-semibold text-brand-accent mb-6 border-b border-white/10 pb-2 flex items-center gap-3">
            <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            Metas Empresariales (EG)
          </h3>
          <div className="space-y-5">
            {metasEmpresariales.map(eg => (
              <div key={eg.id} className="bg-brand-card p-5 rounded-xl border border-white/10 shadow-lg hover:border-brand-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-brand-primary/20 text-white font-bold px-3 py-1 rounded shadow-sm border border-brand-primary/30">{eg.id}</span>
                  <h4 className="text-lg font-medium text-white">{eg.titulo}</h4>
                </div>
                <p className="text-base text-gray-300 leading-relaxed border-l-2 border-brand-primary/30 pl-3 ml-2">
                  {eg.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA: Metas de Alineamiento (AG) */}
        <div>
          <h3 className="text-2xl font-semibold text-emerald-400 mb-6 border-b border-white/10 pb-2 flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
            Metas de Alineamiento de TI (AG)
          </h3>
          <div className="space-y-5">
            {metasAlineamiento.map(ag => (
              <div key={ag.id} className="bg-brand-card p-5 rounded-xl border border-white/10 shadow-lg hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-emerald-500/10 text-emerald-300 font-bold px-3 py-1 rounded shadow-sm border border-emerald-500/30">{ag.id}</span>
                  <h4 className="text-lg font-medium text-white">{ag.titulo}</h4>
                </div>
                <p className="text-base text-gray-300 leading-relaxed border-l-2 border-emerald-500/30 pl-3 ml-2">
                  {ag.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}