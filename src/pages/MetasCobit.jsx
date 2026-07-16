import { useState } from 'react';

export default function MetasCobit() {
  
  const metasEmpresariales = [
    { id: 'EG01', titulo: 'Portafolio de productos y servicios competitivos', descripcion: 'Transición de Toyota hacia vehículos definidos por software (Arene OS) para competir en el mercado de autos conectados.', destacada: true },
    { id: 'EG02', titulo: 'Riesgo de negocio gestionado', descripcion: 'Protección del patrimonio corporativo frente a incidentes operativos.', destacada: false },
    { id: 'EG03', titulo: 'Cumplimiento de las leyes y regulaciones externas', descripcion: 'Adhesión a normativas locales e internacionales.', destacada: false },
    { id: 'EG04', titulo: 'Calidad de la información financiera', descripcion: 'Asegurar que los reportes de ventas y estados contables sean exactos.', destacada: false },
    { id: 'EG05', titulo: 'Cultura de innovación orientada al cliente', descripcion: 'Ofrecer nuevas funcionalidades vehiculares por suscripción OTA, manteniendo el principio Customer-First.', destacada: true },
    { id: 'EG06', titulo: 'Continuidad y disponibilidad del servicio de negocio', descripcion: 'Garantizar que la infraestructura en la nube nunca falle para no interrumpir el funcionamiento de los vehículos.', destacada: true },
    { id: 'EG07', titulo: 'Calidad de la información de gestión', descripcion: 'Precisión en los datos entregados a la junta directiva para la toma de decisiones.', destacada: false },
    { id: 'EG08', titulo: 'Optimización de la funcionalidad de los procesos internos de negocio', descripcion: 'Mejora en la eficiencia operativa interna.', destacada: false },
    { id: 'EG09', titulo: 'Optimización de los costos de los procesos de negocio', descripcion: 'Reducción sistemática del gasto corporativo.', destacada: false },
    { id: 'EG10', titulo: 'Habilidades, motivación y productividad del personal', descripcion: 'Retención de talento y fomento de un ambiente laboral productivo.', destacada: false },
    { id: 'EG11', titulo: 'Cumplimiento de las políticas internas', descripcion: 'Acatamiento de los reglamentos internos de la compañía.', destacada: false },
    { id: 'EG12', titulo: 'Optimización de costos de procesos de negocio', descripcion: 'Reducir el gasto operativo de los talleres físicos arreglando fallos de software de forma remota.', destacada: true },
    { id: 'EG13', titulo: 'Gestión de programas de transformación digital', descripcion: 'Dirección efectiva de las iniciativas de cambio tecnológico.', destacada: false }
  ];

  const metasAlineamiento = [
    { id: 'AG01', titulo: 'Cumplimiento de TI y soporte a la conformidad externa', descripcion: 'Alineación estricta de la infraestructura AWS con la normativa de ciberseguridad automotriz UNECE WP.29.', destacada: true },
    { id: 'AG02', titulo: 'Gestión de riesgos relacionados con I&T', descripcion: 'Mitigación de amenazas informáticas corporativas.', destacada: false },
    { id: 'AG03', titulo: 'Realización de beneficios de inversiones de TI', descripcion: 'Asegurar que la millonaria inversión en la red 5G y Cloud genere un Retorno de Inversión (ROI) positivo.', destacada: true },
    { id: 'AG04', titulo: 'Calidad de la información financiera relacionada con I&T', descripcion: 'Transparencia en el gasto informático.', destacada: false },
    { id: 'AG05', titulo: 'Entrega de servicios de TI acorde a requisitos del negocio', descripcion: 'Despliegue de actualizaciones OTA sin latencia y con cifrado End-to-End para la flota global.', destacada: true },
    { id: 'AG06', titulo: 'Agilidad para convertir los requisitos del negocio en soluciones operativas', descripcion: 'Rapidez en la creación de nuevas plataformas.', destacada: false },
    { id: 'AG07', titulo: 'Seguridad de la información, de la infraestructura de procesamiento y de las aplicaciones', descripcion: 'Protección perimetral de la red informática.', destacada: false },
    { id: 'AG08', titulo: 'Habilitar y dar soporte a procesos de negocio mediante la integración de aplicaciones y tecnología', descripcion: 'Integrar los sistemas de TI con la cadena de concesionarios y operaciones mecánicas tradicionales.', destacada: true },
    { id: 'AG09', titulo: 'Entrega de programas que proporcionen beneficios a tiempo, dentro del presupuesto', descripcion: 'Gestión efectiva de proyectos informáticos.', destacada: false },
    { id: 'AG10', titulo: 'Calidad de la información sobre gestión de I&T', descripcion: 'Datos precisos sobre el rendimiento de TI.', destacada: false },
    { id: 'AG11', titulo: 'Cumplimiento de I&T con las políticas internas', descripcion: 'Alineación de TI con el reglamento corporativo.', destacada: false },
    { id: 'AG12', titulo: 'Personal competente y motivado', descripcion: 'Desarrollo de habilidades en los equipos de tecnología.', destacada: false },
    { id: 'AG13', titulo: 'Conocimiento, experiencia e iniciativas para la innovación en el negocio', descripcion: 'Fomento de la investigación tecnológica.', destacada: false }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 mt-6 animate-[fadeIn_0.4s_ease-in-out]">
      
      <div className="mb-10 border-l-4 border-brand-primary pl-5 py-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-4xl font-bold text-white mb-3 tracking-wide">Cascada de Metas</h2>
          <p className="text-gray-300 text-lg">Diccionario corporativo que traduce las necesidades estratégicas de Toyota en objetivos tecnológicos accionables.</p>
        </div>
        <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
          <p className="text-sm text-gray-400 font-medium flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
            Metas Prioritarias para Toyota Arene OS / OTA
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* COLUMNA: Metas Empresariales (EG) */}
        <div>
          <h3 className="text-2xl font-semibold text-brand-accent mb-6 border-b border-white/10 pb-2 flex items-center gap-3">
            <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            Metas Empresariales (EG)
          </h3>
          <div className="space-y-4">
            {metasEmpresariales.map(eg => (
              <div 
                key={eg.id} 
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  eg.destacada 
                    ? 'bg-brand-card border-brand-primary/50 shadow-lg shadow-brand-primary/10 relative overflow-hidden' 
                    : 'bg-[#1a1f2c]/40 border-white/5 opacity-60 hover:opacity-100 grayscale hover:grayscale-0'
                }`}
              >
                {eg.destacada && <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary"></div>}
                <div className="flex items-center gap-3 mb-2">
                  <span className={`font-bold px-2.5 py-1 rounded shadow-sm border text-sm ${
                    eg.destacada 
                      ? 'bg-brand-primary/20 text-white border-brand-primary/30' 
                      : 'bg-gray-800 text-gray-400 border-gray-700'
                  }`}>
                    {eg.id}
                  </span>
                  <h4 className={`text-base font-medium ${eg.destacada ? 'text-white' : 'text-gray-400'}`}>
                    {eg.titulo}
                  </h4>
                </div>
                <p className={`text-sm leading-relaxed pl-1 ${eg.destacada ? 'text-gray-300' : 'text-gray-500'}`}>
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
          <div className="space-y-4">
            {metasAlineamiento.map(ag => (
              <div 
                key={ag.id} 
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  ag.destacada 
                    ? 'bg-brand-card border-emerald-500/50 shadow-lg shadow-emerald-500/10 relative overflow-hidden' 
                    : 'bg-[#1a1f2c]/40 border-white/5 opacity-60 hover:opacity-100 grayscale hover:grayscale-0'
                }`}
              >
                {ag.destacada && <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>}
                <div className="flex items-center gap-3 mb-2">
                  <span className={`font-bold px-2.5 py-1 rounded shadow-sm border text-sm ${
                    ag.destacada 
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' 
                      : 'bg-gray-800 text-gray-400 border-gray-700'
                  }`}>
                    {ag.id}
                  </span>
                  <h4 className={`text-base font-medium ${ag.destacada ? 'text-white' : 'text-gray-400'}`}>
                    {ag.titulo}
                  </h4>
                </div>
                <p className={`text-sm leading-relaxed pl-1 ${ag.destacada ? 'text-gray-300' : 'text-gray-500'}`}>
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