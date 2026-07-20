import { useState } from 'react';

export default function MatrizCriticidad() {
  const [filtro, setFiltro] = useState('TODOS');

  const matrizProcesos = [
    // ==========================================
    // DOMINIO: EVALUAR, DIRIGIR Y MONITORIZAR (EDM) - 5 Procesos
    // ==========================================
    { 
      id: 'EDM01', 
      dominio: 'EDM', 
      nombre: 'Asegurar el establecimiento y mantenimiento del marco de gobierno', 
      nivel: 'MEDIO', 
      objetivo: 'Proporcionar un enfoque coherente e integrado alineado con el enfoque de gobierno empresarial.',
      justificacion: 'Establece los cimientos legales y define las responsabilidades del Comité de Estrategia Digital sin intervenir directamente en el código vehicular.' 
    },
    { 
      id: 'EDM02', 
      dominio: 'EDM', 
      nombre: 'Asegurar la entrega de beneficios', 
      nivel: 'ALTO', 
      objetivo: 'Optimizar el valor que las soluciones y servicios tecnológicos aportan al negocio.',
      justificacion: 'Pilar financiero. Valida que el modelo OTA y las suscripciones en Arene OS generen retorno de inversión y reduzcan costos de garantía en talleres.' 
    },
    { 
      id: 'EDM03', 
      dominio: 'EDM', 
      nombre: 'Asegurar la optimización del riesgo', 
      nivel: 'ALTO', 
      objetivo: 'Asegurar que el apetito y la tolerancia al riesgo de la empresa sean entendidos, articulados y comunicados.',
      justificacion: 'El directorio debe definir formalmente el apetito de riesgo cibernético ante la posibilidad de fallas lógicas que comprometan la seguridad de conductores.' 
    },
    { 
      id: 'EDM04', 
      dominio: 'EDM', 
      nombre: 'Asegurar la optimización de los recursos', 
      nivel: 'MEDIO', 
      objetivo: 'Asegurar que se disponga de las capacidades adecuadas de I&T para alcanzar los objetivos empresariales.',
      justificacion: 'Regula la asignación de presupuestos y la contratación de talento especializado en DevSecOps necesario para el desarrollo de software.' 
    },
    { 
      id: 'EDM05', 
      dominio: 'EDM', 
      nombre: 'Asegurar la transparencia hacia las partes interesadas', 
      nivel: 'BAJO', 
      objetivo: 'Asegurar que la medición y realización de informes sobre el rendimiento y conformidad de I&T sea transparente.',
      justificacion: 'Proceso de comunicación corporativa hacia accionistas; no posee impacto técnico ni interviene en el ecosistema informático vehicular.' 
    },

    // ==========================================
    // DOMINIO: ALINEAR, PLANIFICAR Y ORGANIZAR (APO) - 14 Procesos
    // ==========================================
    { 
      id: 'APO01', 
      dominio: 'APO', 
      nombre: 'Gestionar el marco de gestión de I&T', 
      nivel: 'MEDIO', 
      objetivo: 'Aclarar y mantener la estructura de gobierno corporativo y los enfoques de gestión de I&T.',
      justificacion: 'Estandariza los flujos de trabajo en el departamento de sistemas, definiendo las políticas base para las fases de diseño técnico.' 
    },
    { 
      id: 'APO02', 
      dominio: 'APO', 
      nombre: 'Gestionar la estrategia', 
      nivel: 'MEDIO', 
      objetivo: 'Proporcionar una visión holística de la dirección futura y las iniciativas requeridas para migrar hacia ella.',
      justificacion: 'Establece la hoja de ruta (Roadmap) de transformación digital a largo plazo y guía la migración de la empresa hacia la infraestructura de AWS.' 
    },
    { 
      id: 'APO03', 
      dominio: 'APO', 
      nombre: 'Gestionar la arquitectura empresarial', 
      nivel: 'ALTO', 
      objetivo: 'Establecer una arquitectura compuesta por procesos, información, aplicaciones y tecnología.',
      justificacion: 'Es el plano de ingeniería maestro. Mapea la interconexión entre la nube, las redes 5G y las unidades electrónicas (ECU) de los automóviles.' 
    },
    { 
      id: 'APO04', 
      dominio: 'APO', 
      nombre: 'Gestionar la innovación', 
      nivel: 'BAJO', 
      objetivo: 'Mantener conciencia sobre las tendencias tecnológicas para identificar oportunidades de innovación.',
      justificacion: 'Fase de investigación de tecnologías futuras a largo plazo. No tiene criticidad en la operación segura e inmediata de los vehículos.' 
    },
    { 
      id: 'APO05', 
      dominio: 'APO', 
      nombre: 'Gestionar el portafolio', 
      nivel: 'BAJO', 
      objetivo: 'Optimizar el rendimiento del portafolio de programas, alineado con las prioridades de inversión.',
      justificacion: 'Administración gerencial de inversiones generales de TI de la empresa, secundario al núcleo crítico operativo de actualizaciones.' 
    },
    { 
      id: 'APO06', 
      dominio: 'APO', 
      nombre: 'Gestionar el presupuesto y los costes', 
      nivel: 'MEDIO', 
      objetivo: 'Gestionar las actividades relacionadas con los recursos financieros para garantizar el uso óptimo de fondos.',
      justificacion: 'Ejerce control sobre la facturación de consumo en la nube (AWS FinOps), vital para la sostenibilidad, pero sin riesgo técnico directo.' 
    },
    { 
      id: 'APO07', 
      dominio: 'APO', 
      nombre: 'Gestionar los recursos humanos', 
      nivel: 'MEDIO', 
      objetivo: 'Proporcionar el enfoque y el talento adecuados para lograr los objetivos empresariales.',
      justificacion: 'Opera la matriz de habilidades, coordinando capacitaciones sobre metodologías de desarrollo, aunque con impacto operativo indirecto.' 
    },
    { 
      id: 'APO08', 
      dominio: 'APO', 
      nombre: 'Gestionar las relaciones', 
      nivel: 'BAJO', 
      objetivo: 'Construir y mantener relaciones adecuadas entre el negocio y la función de I&T.',
      justificacion: 'Proceso organizativo para mantener expectativas claras entre gerencias corporativas; no interviene en la plataforma vehicular.' 
    },
    { 
      id: 'APO09', 
      dominio: 'APO', 
      nombre: 'Gestionar los acuerdos de nivel de servicio', 
      nivel: 'BAJO', 
      objetivo: 'Alinear los servicios y los niveles de servicio de I&T con las necesidades y expectativas de la empresa.',
      justificacion: 'Seguimiento administrativo de los SLA internos de la compañía y servicios a concesionarios.' 
    },
    { 
      id: 'APO10', 
      dominio: 'APO', 
      nombre: 'Gestionar los proveedores', 
      nivel: 'BAJO', 
      objetivo: 'Gestionar los servicios y productos proporcionados por terceros para asegurar que cumplan los requisitos.',
      justificacion: 'Trámite comercial de renovación de contratos tecnológicos de la compañía. Se delega en gran medida al área de compras.' 
    },
    { 
      id: 'APO11', 
      dominio: 'APO', 
      nombre: 'Gestionar la calidad', 
      nivel: 'ALTO', 
      objetivo: 'Definir, comunicar y gestionar los requisitos de calidad en todos los procesos, procedimientos y resultados.',
      justificacion: 'Guardián del código fuente. Define las pruebas de estrés obligatorias (ISO 25010) que debe pasar un parche de software antes de distribuirse.' 
    },
    { 
      id: 'APO12', 
      dominio: 'APO', 
      nombre: 'Gestionar el riesgo', 
      nivel: 'ALTO', 
      objetivo: 'Identificar, evaluar y reducir continuamente los riesgos relacionados con la I&T.',
      justificacion: 'Traduce las directrices ejecutivas en mapas de calor de ciberseguridad, modelando impactos de sabotaje o infiltración en la flota conectada.' 
    },
    { 
      id: 'APO13', 
      dominio: 'APO', 
      nombre: 'Gestionar la seguridad', 
      nivel: 'ALTO', 
      objetivo: 'Definir, operar y monitorizar un sistema de gestión de seguridad de la información (SGSI).',
      justificacion: 'Diseña y gobierna el marco normativo de confianza cero (Zero Trust) y cifrado criptográfico contra intentos de intrusión perimetral.' 
    },
    { 
      id: 'APO14', 
      dominio: 'APO', 
      nombre: 'Gestionar los datos', 
      nivel: 'BAJO', 
      objetivo: 'Optimizar y controlar los activos de datos en toda la organización para crear y preservar valor.',
      justificacion: 'Proceso de administración y curación de bases de datos maestras corporativas; sin influencia directa sobre las operaciones en tiempo real OTA.' 
    },

    // ==========================================
    // DOMINIO: CONSTRUIR, ADQUIRIR E IMPLEMENTAR (BAI) - 11 Procesos
    // ==========================================
    { 
      id: 'BAI01', 
      dominio: 'BAI', 
      nombre: 'Gestionar los programas', 
      nivel: 'MEDIO', 
      objetivo: 'Gestionar todos los programas del portafolio en consonancia con la estrategia empresarial.',
      justificacion: 'Mantiene la gobernanza sobre los cronogramas ágiles y control de dependencias durante el ciclo de creación de nuevas herramientas.' 
    },
    { 
      id: 'BAI02', 
      dominio: 'BAI', 
      nombre: 'Gestionar la definición de requerimientos', 
      nivel: 'BAJO', 
      objetivo: 'Identificar soluciones y analizar los requerimientos antes de adquirir o crear el sistema.',
      justificacion: 'Etapa inicial de levantamiento de requisitos de negocio; la falta de completitud retrasa el desarrollo pero no tumba sistemas en producción.' 
    },
    { 
      id: 'BAI03', 
      dominio: 'BAI', 
      nombre: 'Gestionar la identificación y construcción de soluciones', 
      nivel: 'ALTO', 
      objetivo: 'Establecer y mantener en la I&T las soluciones identificadas conforme a los requerimientos de la empresa.',
      justificacion: 'Fábrica del software. Aplica controles estrictos sobre la programación, análisis de vulnerabilidades del código y repositorios de las unidades vehiculares.' 
    },
    { 
      id: 'BAI04', 
      dominio: 'BAI', 
      nombre: 'Gestionar la disponibilidad y la capacidad', 
      nivel: 'BAJO', 
      objetivo: 'Asegurar que los servicios de I&T estén disponibles y ofrezcan un rendimiento óptimo de manera constante.',
      justificacion: 'Dimensionamiento técnico de ancho de banda y métricas de desempeño de servidores tradicionales.' 
    },
    { 
      id: 'BAI05', 
      dominio: 'BAI', 
      nombre: 'Gestionar los cambios organizativos', 
      nivel: 'BAJO', 
      objetivo: 'Maximizar la probabilidad de implementar con éxito el cambio organizacional en toda la empresa.',
      justificacion: 'Gestiona la cultura y resistencia del personal humano frente a la adopción de nuevas herramientas de escritorio corporativas.' 
    },
    { 
      id: 'BAI06', 
      dominio: 'BAI', 
      nombre: 'Gestionar los cambios de TI', 
      nivel: 'ALTO', 
      objetivo: 'Gestionar todos los cambios de forma controlada, incluyendo el mantenimiento de emergencia.',
      justificacion: 'Regula las aprobaciones a través del Comité de Cambios, bloqueando tajantemente que un desarrollador introduzca código no verificado a la calle.' 
    },
    { 
      id: 'BAI07', 
      dominio: 'BAI', 
      nombre: 'Gestionar la aceptación y transición de los cambios de TI', 
      nivel: 'ALTO', 
      objetivo: 'Aceptar formalmente y poner en funcionamiento las nuevas soluciones operativas.',
      justificacion: 'Exige que toda funcionalidad vehicular nueva sea ensayada en simuladores realistas y probada en fases antes de transmitirse masivamente.' 
    },
    { 
      id: 'BAI08', 
      dominio: 'BAI', 
      nombre: 'Gestionar el conocimiento', 
      nivel: 'BAJO', 
      objetivo: 'Mantener la disponibilidad de conocimientos relevantes y actualizados para el personal y procesos.',
      justificacion: 'Maneja repositorios tipo Wiki, manuales de usuario y lecciones aprendidas institucionales.' 
    },
    { 
      id: 'BAI09', 
      dominio: 'BAI', 
      nombre: 'Gestionar los activos', 
      nivel: 'MEDIO', 
      objetivo: 'Gestionar los activos de I&T a lo largo de su ciclo de vida para optimizar el valor y gestionar costos.',
      justificacion: 'Controla el inventario, amortización y renovación de licencias de las plataformas utilizadas para el diseño y compilación del código.' 
    },
    { 
      id: 'BAI10', 
      dominio: 'BAI', 
      nombre: 'Gestionar la configuración', 
      nivel: 'ALTO', 
      objetivo: 'Definir y mantener descripciones y relaciones entre los recursos requeridos para los servicios de I&T.',
      justificacion: 'Mantiene la base de datos de hardware instalada en cada auto real para garantizar que los parches informáticos enviados sean 100% compatibles.' 
    },
    { 
      id: 'BAI11', 
      dominio: 'BAI', 
      nombre: 'Gestionar los proyectos', 
      nivel: 'BAJO', 
      objetivo: 'Gestionar todos los proyectos de TI asegurando que entreguen los resultados dentro de las restricciones acordadas.',
      justificacion: 'Trata de la logística administrativa, costos y diagrama de Gantt de proyectos individuales.' 
    },

    // ==========================================
    // DOMINIO: ENTREGAR, DAR SERVICIO Y SOPORTE (DSS) - 6 Procesos
    // ==========================================
    { 
      id: 'DSS01', 
      dominio: 'DSS', 
      nombre: 'Gestionar las operaciones', 
      nivel: 'ALTO', 
      objetivo: 'Coordinar y ejecutar los procedimientos operativos requeridos para entregar servicios estables de I&T.',
      justificacion: 'Ejecuta las rutinas diarias ininterrumpidas de respaldos y monitorización en los centros de cómputo donde se alojan las plataformas de nube (AWS).' 
    },
    { 
      id: 'DSS02', 
      dominio: 'DSS', 
      nombre: 'Gestionar las peticiones y los incidentes', 
      nivel: 'MEDIO', 
      objetivo: 'Proporcionar una respuesta rápida y eficaz para restaurar el servicio informático a la normalidad.',
      justificacion: 'Gestión de la mesa de ayuda (Help Desk). Resuelve los tickets y fallas menores de sistemas presentadas por operarios o red de concesionarios.' 
    },
    { 
      id: 'DSS03', 
      dominio: 'DSS', 
      nombre: 'Gestionar los problemas', 
      nivel: 'BAJO', 
      objetivo: 'Identificar y clasificar los problemas subyacentes y analizar sus causas fundamentales.',
      justificacion: 'Análisis forense post-mortem para documentar por qué ocurrieron errores previos. Actividad de escritorio de baja criticidad operacional inmediata.' 
    },
    { 
      id: 'DSS04', 
      dominio: 'DSS', 
      nombre: 'Gestionar la continuidad', 
      nivel: 'ALTO', 
      objetivo: 'Mantener un plan para responder a incidentes disruptivos y permitir la continuidad operativa.',
      justificacion: 'Establece los sistemas redundantes que toman el control si el data center primario colapsa, garantizando que los autos nunca queden sin servicio base.' 
    },
    { 
      id: 'DSS05', 
      dominio: 'DSS', 
      nombre: 'Gestionar los servicios de seguridad', 
      nivel: 'ALTO', 
      objetivo: 'Proteger la información para mantener el riesgo de seguridad en un nivel aceptable.',
      justificacion: 'Defensa activa en tiempo real contra infiltraciones en servidores. Administra firewalls, detecta intromisiones en tráfico de red y revoca credenciales.' 
    },
    { 
      id: 'DSS06', 
      dominio: 'DSS', 
      nombre: 'Gestionar los controles de los procesos de negocio', 
      nivel: 'BAJO', 
      objetivo: 'Garantizar el cumplimiento de controles aplicables para que los datos transaccionales se procesen debidamente.',
      justificacion: 'Validaciones contables, flujos de firmas administrativas y conciliación financiera ajena a la plataforma telemática.' 
    },

    // ==========================================
    // DOMINIO: MONITORIZAR, EVALUAR Y VALORAR (MEA) - 4 Procesos
    // ==========================================
    { 
      id: 'MEA01', 
      dominio: 'MEA', 
      nombre: 'Gestionar la monitorización del rendimiento y la conformidad', 
      nivel: 'ALTO', 
      objetivo: 'Recopilar, validar y evaluar las metas y métricas del negocio y procesos de I&T.',
      justificacion: 'Eje de evaluación del Cuadro de Mando (Dashboard). Consigue telemetría del nivel de madurez real en procesos operativos y envía reportes objetivos a los directivos.' 
    },
    { 
      id: 'MEA02', 
      dominio: 'MEA', 
      nombre: 'Gestionar el sistema de control interno', 
      nivel: 'MEDIO', 
      objetivo: 'Obtener información sobre la eficacia y eficiencia del control de procesos y garantizar su corrección.',
      justificacion: 'Inspecciona a nivel institucional que todos los controles informáticos internos antifraude operen satisfactoriamente.' 
    },
    { 
      id: 'MEA03', 
      dominio: 'MEA', 
      nombre: 'Gestionar el cumplimiento de los requerimientos externos', 
      nivel: 'ALTO', 
      objetivo: 'Evaluar que los procesos y sistemas cumplen con leyes, regulaciones y requisitos aplicables.',
      justificacion: 'Blinda jurídicamente las operaciones, certificando que los despliegues inalámbricos respetan la privacidad de los datos (GDPR) y normas vehiculares (WP.29).' 
    },
    { 
      id: 'MEA04', 
      dominio: 'MEA', 
      nombre: 'Gestionar el aseguramiento', 
      nivel: 'BAJO', 
      objetivo: 'Planificar, establecer y mantener iniciativas de aseguramiento independientes sobre el entorno I&T.',
      justificacion: 'Organización y planificación de auditorías externas periódicas. Es un proceso logístico, sin influencia directa en la estabilidad estructural.' 
    }
  ];

  const procesosFiltrados = matrizProcesos.filter(p => filtro === 'TODOS' || p.nivel === filtro);

  return (
    <div className="max-w-7xl mx-auto p-6 mt-6 animate-[fadeIn_0.4s_ease-in-out]">
      <div className="mb-10 border-l-4 border-brand-primary pl-5 py-1">
        <h2 className="text-4xl font-bold text-white mb-3 tracking-wide">Matriz de Criticidad de Procesos</h2>
        <p className="text-gray-300 text-lg">Evaluación oficial y ordenamiento de los 40 procesos COBIT 2019 según su impacto estratégico sobre el ecosistema automotriz conectado (OTA).</p>
      </div>

      {/* Filtros */}
      <div className="flex gap-4 mb-6">
        {['TODOS', 'ALTO', 'MEDIO', 'BAJO'].map(nivel => (
          <button
            key={nivel}
            onClick={() => setFiltro(nivel)}
            className={`px-4 py-2 rounded-lg font-bold border transition-colors ${
              filtro === nivel 
                ? 'bg-brand-primary text-white border-brand-primary' 
                : 'bg-brand-card text-gray-400 border-gray-700 hover:text-white'
            }`}
          >
            {nivel === 'ALTO' ? 'Alta Criticidad (Núcleo OTA)' : nivel === 'TODOS' ? 'Todos los Procesos' : `Criticidad ${nivel}`}
          </button>
        ))}
      </div>

      {/* Tabla Ejecutiva */}
      <div className="overflow-x-auto bg-brand-card rounded-xl border border-white/10 shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-800/80 text-gray-300 uppercase text-xs tracking-wider">
              <th className="p-4 border-b border-gray-700 font-semibold w-24">ID</th>
              <th className="p-4 border-b border-gray-700 font-semibold w-64">Proceso COBIT 2019</th>
              <th className="p-4 border-b border-gray-700 font-semibold w-32">Criticidad</th>
              <th className="p-4 border-b border-gray-700 font-semibold w-80">Objetivo Oficial (COBIT 2019)</th>
              <th className="p-4 border-b border-gray-700 font-semibold">Justificación en el Modelo Vehicular (OTA)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/60">
            {procesosFiltrados.map((proc, index) => (
              <tr key={index} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white whitespace-nowrap align-top">
                  <span className={`px-2 py-1 rounded text-xs border ${
                    proc.dominio === 'EDM' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                    proc.dominio === 'APO' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                    proc.dominio === 'BAI' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                    proc.dominio === 'DSS' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                    'bg-rose-500/20 text-rose-400 border-rose-500/30'
                  }`}>
                    {proc.id}
                  </span>
                </td>
                <td className="p-4 text-gray-200 font-medium text-sm align-top">{proc.nombre}</td>
                <td className="p-4 align-top">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    proc.nivel === 'ALTO' ? 'bg-red-500/20 text-red-400 border border-red-500/30 shadow-[0_0_8px_rgba(239,68,68,0.3)]' :
                    proc.nivel === 'MEDIO' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-gray-700/60 text-gray-400 border border-gray-600/50'
                  }`}>
                    {proc.nivel}
                  </span>
                </td>
                <td className="p-4 text-gray-400 text-xs leading-relaxed align-top font-sans">{proc.objetivo}</td>
                <td className="p-4 text-gray-300 text-sm leading-relaxed align-top">{proc.justificacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}