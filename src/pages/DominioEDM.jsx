import { useState } from 'react';
import VistaDetalle from '../components/VistaDetalle';

export default function DominioEDM() {
  const [procesoSeleccionado, setProcesoSeleccionado] = useState(null);

  const procesosEDM = [
    { id: 'EDM01', nombre: 'Asegurar el establecimiento y mantenimiento del marco de gobierno' },
    { id: 'EDM02', nombre: 'Asegurar la entrega de beneficios' },
    { id: 'EDM03', nombre: 'Asegurar la optimización del riesgo' },
    { id: 'EDM04', nombre: 'Asegurar la optimización de recursos' },
    { id: 'EDM05', nombre: 'Asegurar la transparencia hacia las partes interesadas' }
  ];

  // Si hay un proceso seleccionado, renderiza el componente VistaDetalle
  if (procesoSeleccionado) {
    return <VistaDetalle procesoId={procesoSeleccionado} onBack={() => setProcesoSeleccionado(null)} />;
  }

  // Si no, renderiza la grilla de opciones
  return (
    <div className="max-w-7xl mx-auto p-6 mt-6 animate-[fadeIn_0.4s_ease-in-out]">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-3 tracking-wide">Panel de Gobierno TI</h2>
        <p className="text-gray-300 text-lg">Seleccione un proceso para auditar su nivel de capacidad.</p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-brand-accent mb-6 border-b border-brand-accent/30 pb-2 inline-block shadow-sm">
          Dominio: Evaluar, Dirigir y Monitorizar (EDM)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procesosEDM.map((proc) => (
            <div 
              key={proc.id}
              onClick={() => setProcesoSeleccionado(proc.id)}
              className="bg-brand-card rounded-xl p-6 border border-white/10 shadow-xl cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:border-brand-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-brand-primary/20 text-brand-accent px-3 py-1 rounded-md font-bold border border-brand-primary/30 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {proc.id}
                </span>
              </div>
              <h4 className="text-lg font-medium text-white group-hover:text-brand-accent transition-colors">
                {proc.nombre}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}