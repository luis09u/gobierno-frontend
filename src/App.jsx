
import { useState } from 'react';
import FactoresDiseno from './pages/FactoresDiseno';
import MetasCobit from './pages/MetasCobit';
import PanelPrincipal from './pages/PanelPrincipal';
import MatrizCriticidad from './pages/MatrizCriticidad';

export default function App() {
  const [vistaActual, setVistaActual] = useState('procesos'); 

  return (
    <div className="min-h-screen bg-brand-dark font-sans selection:bg-brand-primary/30 pb-12">
      <nav className="bg-brand-card border-b border-white/10 px-6 flex items-center justify-between sticky top-0 z-20 shadow-xl h-16">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setVistaActual('procesos')}>
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center font-bold text-white tracking-widest shadow-lg">TY</div>
          <h1 className="text-2xl font-semibold text-white tracking-wide">
            Gobierno TI <span className="text-gray-400 font-light text-xl hidden sm:inline">| Toyota Perú</span>
          </h1>
        </div>
        <div className="flex h-full">
          <button onClick={() => setVistaActual('procesos')} className={`px-6 h-full font-medium text-base transition-colors border-b-2 flex items-center ${vistaActual === 'procesos' ? 'border-brand-primary text-white bg-white/5' : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'}`}>
            Panel de Procesos
          </button>
          <button onClick={() => setVistaActual('metas')} className={`px-6 h-full font-medium text-base transition-colors border-b-2 flex items-center ${vistaActual === 'metas' ? 'border-brand-primary text-white bg-white/5' : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'}`}>
            Cascada de Metas
          </button>
          <button onClick={() => setVistaActual('factores')} className={`px-6 h-full font-medium text-base transition-colors border-b-2 flex items-center ${vistaActual === 'factores' ? 'border-brand-primary text-white bg-white/5' : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'}`}>
            Factores de Diseño
          </button>
          <button onClick={() => setVistaActual('matriz')} className={`px-6 h-full font-medium text-base transition-colors border-b-2 flex items-center ${vistaActual === 'matriz' ? 'border-brand-primary text-white bg-white/5' : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'}`}>
            Matriz de Criticidad
          </button>
        </div>
      </nav>

      {/* RENDERIZADO DE PÁGINAS */}
      {vistaActual === 'procesos' && <PanelPrincipal />}
      {vistaActual === 'metas' && <MetasCobit />}
      {vistaActual === 'factores' && <FactoresDiseno />}
      {vistaActual === 'matriz' && <MatrizCriticidad />}
    </div>
  );
}