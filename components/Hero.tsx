
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 sm:pt-40 sm:pb-32 lg:pt-56 lg:pb-64 overflow-hidden bg-[#001B2E]">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-[#4eb377]/10 rounded-full blur-[80px] sm:blur-[160px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-[#D4AF37]/5 rounded-full blur-[80px] sm:blur-[160px] -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 sm:opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-white/5 text-[#4eb377] border border-white/10 mb-8 sm:mb-12 animate-fade-in backdrop-blur-md shadow-2xl">
          <span className="relative flex h-2 sm:h-3 w-2 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4eb377] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 sm:h-3 w-2 sm:w-3 bg-[#4eb377]"></span>
          </span>
          <span className="text-[10px] sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.5em]">ENATIH 2026</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-[8.5rem] font-extrabold text-white tracking-tighter mb-6 sm:mb-10 leading-[0.9] font-heading drop-shadow-2xl">
          ENATIH <span className="text-[#4eb377]">2026</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4eb377] via-white to-white/90 text-2xl sm:text-4xl lg:text-7xl font-bold mt-2 sm:mt-4 block">1º Congresso de <br className="hidden sm:block"/> Medicina Personalizada</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-3xl text-white/80 mb-12 sm:mb-20 leading-relaxed font-medium px-4">
          A atualização científica de excelência em <span className="text-[#4eb377] font-bold">Terapia Hormonal</span> e <span className="text-[#D4AF37] font-bold">Saúde Integrada</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
          <div className="w-full sm:w-auto flex items-center gap-4 sm:gap-6 px-6 sm:px-12 py-5 sm:py-8 bg-white/5 rounded-[2rem] sm:rounded-[3rem] backdrop-blur-xl border border-white/10 transition-all hover:bg-white/10 group">
            <div className="w-12 h-12 sm:w-16 h-16 bg-[#4eb377]/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-[#4eb377] border border-[#4eb377]/20 transition-all">
              <i className="far fa-calendar-alt text-xl sm:text-3xl"></i>
            </div>
            <div className="text-left">
              <p className="text-[8px] sm:text-[10px] text-white/40 font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1">Data Oficial</p>
              <p className="font-black text-white text-base sm:text-2xl">11 a 15 de Março</p>
            </div>
          </div>
          
          <div className="w-full sm:w-auto flex items-center gap-4 sm:gap-6 px-6 sm:px-12 py-5 sm:py-8 bg-white/5 rounded-[2rem] sm:rounded-[3rem] backdrop-blur-xl border border-white/10 transition-all hover:bg-white/10 group">
            <div className="w-12 h-12 sm:w-16 h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-white border border-white/10 transition-all">
              <i className="fas fa-map-marker-alt text-xl sm:text-3xl"></i>
            </div>
            <div className="text-left">
              <p className="text-[8px] sm:text-[10px] text-white/40 font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1">Localização</p>
              <p className="font-black text-white text-base sm:text-2xl">Sauípe, Bahia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
