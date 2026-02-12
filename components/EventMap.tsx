
import React from 'react';

const EventMap: React.FC = () => {
  const points = [
    { id: 1, title: 'Recepção e Memorial', details: 'Check-in e Homenagem Prof. Elsimar' },
    { id: 2, title: 'Restaurante Principal', details: 'Buffet internacional e regional' },
    { id: 3, title: 'Restaurante Piscina', details: 'Opções à la carte e petiscos' },
    { id: 4, title: 'Plenária e Expo Enatih', details: 'Coração científico do evento' },
    { id: 5, title: 'Lazer e Serviços', details: 'Cafeteria e Salão de Jogos' },
  ];

  return (
    <section id="map" className="py-16 sm:py-24 bg-[#001B2E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <div className="w-16 sm:w-20 h-1 bg-[#4eb377] mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tighter leading-tight">Mapa da Experiência</h2>
          <p className="text-white/60 max-w-2xl mx-auto font-medium text-base sm:text-lg">Localize todas as áreas no Sol Grand Premium.</p>
        </div>

        <div className="bg-[#002B49] rounded-[2rem] sm:rounded-[4rem] p-6 sm:p-16 border border-white/5 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-16 items-center">
            
            <div className="lg:col-span-7 relative">
              <div className="bg-[#001B2E] rounded-2xl sm:rounded-[3.5rem] overflow-hidden shadow-2xl border-[6px] sm:border-[12px] border-white/5">
                <img 
                  src="https://raw.githubusercontent.com/antonio-pacileo/assets/main/mapa_enatih.png" 
                  alt="Mapa Enatih" 
                  className="w-full h-auto block opacity-85 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 sm:space-y-10">
              <div className="grid gap-6 sm:gap-10">
                {points.map((point) => (
                  <div key={point.id} className="flex gap-4 sm:gap-8 items-start group">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl border-2 border-[#4eb377] text-[#4eb377] flex items-center justify-center text-lg sm:text-2xl font-black flex-shrink-0 group-hover:bg-[#4eb377] group-hover:text-white transition-all shadow-xl shadow-[#4eb377]/10">
                      {point.id}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-black text-lg sm:text-2xl leading-tight mb-1 sm:mb-2 uppercase tracking-tighter text-[#4eb377] group-hover:text-white transition-colors">
                        {point.title}
                      </h4>
                      <p className="text-white/50 text-[10px] sm:text-sm leading-relaxed font-bold tracking-tight">
                        {point.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-16 p-8 sm:p-12 bg-[#001B2E] rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 text-white shadow-2xl relative group">
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-8 relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-2xl flex items-center justify-center text-[#4eb377] border border-white/5 shadow-2xl">
              <i className="fas fa-location-arrow text-2xl sm:text-3xl"></i>
            </div>
            <div>
              <p className="text-[8px] sm:text-[10px] font-black text-[#4eb377] uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-1 sm:mb-2">Local do Evento</p>
              <p className="text-xl sm:text-3xl font-black tracking-tighter uppercase leading-none">Sol Grand Premium</p>
              <p className="text-xs sm:text-base text-white/30 font-bold mt-1">Costa de Sauípe, Bahia</p>
            </div>
          </div>
          
          <a 
            href="https://maps.google.com/?q=Sol+Grand+Premium+Sauipe" 
            target="_blank" 
            className="w-full sm:w-auto bg-[#4eb377] text-white px-8 sm:px-12 py-5 sm:py-6 rounded-2xl sm:rounded-[2rem] font-black hover:bg-[#3d9664] transition-all flex items-center justify-center gap-4 active:scale-95 shadow-2xl shadow-[#4eb377]/30 uppercase tracking-[0.2em] text-[10px] sm:text-sm"
          >
            TRAÇAR ROTA <i className="fas fa-chevron-right text-[10px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventMap;
