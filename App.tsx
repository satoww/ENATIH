
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import EventInfo from './components/EventInfo';
import EventMap from './components/EventMap';
import ActivitiesBlock from './components/ActivitiesBlock';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#001B2E] flex flex-col selection:bg-[#4eb377] selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* SECTION: HERO (DARK) */}
        <Hero />
        
        {/* SECTION: ACTIVITIES HIGHLIGHTS (LIGHT) */}
        <ActivitiesBlock />
        
        {/* SECTION: PROGRAMAÇÃO (DARK) */}
        <Schedule />
        
        {/* SECTION: MANUAL DO PARTICIPANTE (LIGHT) */}
        <EventInfo />
        
        {/* SECTION: MAPA DO EVENTO (DARK) */}
        <EventMap />
      </main>

      <footer className="bg-[#001424] text-white/60 py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#4eb377]/5 rounded-full blur-[80px] sm:blur-3xl translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-start">
            
            {/* Branding Area with Logos */}
            <div className="flex flex-col gap-8 sm:gap-12 text-center md:text-left">
              <div className="flex flex-col gap-4 items-center md:items-start">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-5xl font-light tracking-tighter text-white">enatih</span>
                  <div className="bg-[#4eb377] text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-3 sm:py-4 rounded-sm flex items-center justify-center [writing-mode:vertical-lr] rotate-180">
                    2026
                  </div>
                </div>
                <div className="flex items-center gap-2">
                   <i className="fas fa-dna text-[#4eb377] text-base sm:text-lg"></i>
                   <p className="text-[8px] sm:text-[10px] font-black text-white/80 uppercase tracking-[0.2em] sm:tracking-[0.3em]">1º Congresso de Medicina Personalizada</p>
                </div>
              </div>
              
              <div className="pt-6 sm:pt-8 border-t border-white/10">
                <p className="text-[8px] sm:text-[10px] font-black text-white/40 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4">Realização:</p>
                <div className="flex justify-center md:justify-start items-center gap-4 group">
                  <div className="flex flex-col leading-tight text-right">
                    <span className="text-[8px] sm:text-[10px] font-medium text-white/60">Sociedade Brasileira</span>
                    <span className="text-[8px] sm:text-[10px] font-medium text-white/60">de Medicina Personalizada</span>
                  </div>
                  <span className="text-3xl sm:text-5xl font-black text-[#4eb377] italic tracking-tighter transition-transform group-hover:scale-105 duration-300">SBMP</span>
                </div>
              </div>
            </div>

            {/* Social & Contact */}
            <div className="space-y-8 sm:space-y-10 text-center md:text-left">
              <div className="space-y-4 sm:space-y-6">
                <h5 className="text-[#4eb377] font-black text-[10px] sm:text-sm uppercase tracking-widest">Redes Sociais</h5>
                <div className="flex justify-center md:justify-start gap-4">
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-[#4eb377] hover:text-white transition-all active:scale-95 border border-white/5">
                    <i className="fab fa-instagram text-lg sm:text-xl text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-[#4eb377] hover:text-white transition-all active:scale-95 border border-white/5">
                    <i className="fab fa-linkedin-in text-lg sm:text-xl text-white"></i>
                  </a>
                </div>
              </div>
              <div className="p-6 sm:p-8 bg-white/5 rounded-2xl sm:rounded-[2rem] border border-white/10">
                <p className="text-[8px] sm:text-[10px] font-black uppercase text-white/40 mb-2 tracking-widest">Contato Produção</p>
                <a href="tel:5571996645967" className="text-white font-bold hover:text-[#4eb377] transition-colors block mb-1 text-sm sm:text-base">(71) 9 9664-5967</a>
                <a href="mailto:contato@enatih.com.br" className="text-[10px] sm:text-sm text-white/60 hover:text-white transition-colors">contato@enatih.com.br</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-24 pt-8 sm:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 text-center md:text-left">
              © 2026 ENATIH | 1º Congresso de Medicina Personalizada. Realização: SBMP.
            </p>
            <div className="flex items-center gap-2 grayscale opacity-40">
              <span className="text-[7px] font-bold uppercase tracking-widest text-white/40">Arandas Marketing</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
