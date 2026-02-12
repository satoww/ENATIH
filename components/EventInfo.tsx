
import React from 'react';
import { IMPORTANT_INFO, GASTRONOMY_DATA } from '../constants';

const EventInfo: React.FC = () => {
  return (
    <section id="info" className="py-20 sm:py-32 light-section relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4eb377]/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="w-16 sm:w-20 h-1 bg-[#4eb377] mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001B2E] mb-4 sm:mb-6 uppercase tracking-tighter leading-tight">Manual do Participante</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-base sm:text-lg">Informações cruciais para sua conveniência e conforto no Sol Grand Premium.</p>
        </div>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16 sm:mb-24">
          {IMPORTANT_INFO.map((item, index) => (
            <div key={index} className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-[3rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col gap-4 sm:gap-6 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-[#4eb377] border border-slate-100 group-hover:bg-[#4eb377] group-hover:text-white transition-all">
                <i className={`fas ${item.icon} text-xl sm:text-2xl`}></i>
              </div>
              <div>
                <h4 className="font-black text-[#001B2E] mb-2 sm:mb-3 uppercase tracking-tighter text-base sm:text-lg">{item.question}</h4>
                <p className="text-slate-500 text-[11px] sm:text-sm leading-relaxed font-medium">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Attention Box */}
        <div className="mb-16 sm:mb-24 p-8 sm:p-12 bg-[#4eb377] rounded-2xl sm:rounded-[3.5rem] flex flex-col md:flex-row items-center gap-6 sm:gap-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white text-[#4eb377] rounded-2xl sm:rounded-[2.5rem] flex items-center justify-center text-3xl sm:text-5xl shadow-xl">
                <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="flex-grow text-center md:text-left relative z-10 text-white">
                <h4 className="text-xl sm:text-3xl font-black mb-2 uppercase tracking-tighter">Fique Atento!</h4>
                <p className="text-white/90 text-base sm:text-xl font-medium leading-relaxed">
                Recomendamos que a saída para o aeroporto ocorra com no mínimo <span className="font-black underline decoration-white/50 underline-offset-8">4 HORAS DE ANTECEDÊNCIA</span>.
                </p>
            </div>
        </div>

        {/* Gastronomy Section - Light Sub-version */}
        <div className="bg-[#001B2E] rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#4eb377]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 sm:gap-12 mb-12 sm:mb-20">
              <div className="flex items-center gap-6 sm:gap-8">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/5 rounded-2xl sm:rounded-3xl flex items-center justify-center border border-white/10 shadow-2xl backdrop-blur-md">
                  <i className="fas fa-utensils text-3xl sm:text-5xl text-[#4eb377]"></i>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-5xl font-black font-heading mb-1 sm:mb-2 uppercase tracking-tighter">Experiência Gastronômica</h3>
                  <p className="text-white/40 text-sm sm:text-xl font-medium italic">All Inclusive Premium Costa de Sauípe</p>
                </div>
              </div>
              <div className="bg-[#4eb377] text-white px-8 py-3 sm:px-10 sm:py-5 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] shadow-xl shadow-[#4eb377]/20">
                Opções 24 horas
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 sm:gap-20">
              {GASTRONOMY_DATA.map((group, idx) => (
                <div key={idx}>
                  <h4 className="text-lg sm:text-2xl font-black mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-white/10 flex items-center gap-3 sm:gap-4 text-[#4eb377] uppercase tracking-tighter">
                    <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#4eb377]"></span>
                    {group.title}
                  </h4>
                  <div className="grid gap-4 sm:gap-6">
                    {group.items.map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-white/5 hover:bg-white/10 transition-all border border-white/5 shadow-lg group backdrop-blur-sm">
                        <div className="flex-grow">
                          <p className="font-black text-lg sm:text-xl text-white group-hover:text-[#4eb377] transition-colors uppercase tracking-tight">{item.label}</p>
                          {item.details && <p className="text-[10px] sm:text-xs text-white/40 mt-1 sm:mt-2 font-bold leading-relaxed tracking-wide">{item.details}</p>}
                        </div>
                        <div className="w-full sm:w-auto text-center sm:text-left bg-white/10 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-[10px] sm:text-sm font-black text-white border border-white/5 whitespace-nowrap">
                          {item.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
