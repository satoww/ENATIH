
import React from 'react';

const ActivitiesBlock: React.FC = () => {
  const highlights = [
    {
      title: 'Celebração de Abertura',
      location: 'Auditório da Plenária',
      when: 'Quarta-feira 11/03',
      time: '21h às 00h',
      content: 'Abertura Especial + Show Bruno Galba',
      dressCode: 'Traje Social Leve',
      icon: 'fa-glass-cheers',
    },
    {
      title: 'Conteúdo Científico',
      location: 'Auditório da Plenária',
      when: '12/03 a 14/03',
      time: 'Qui/Sex (08h30-17h30) | Sáb (08h30-13h30)',
      content: 'Atualização científica de alto nível em Terapia Hormonal.',
      dressCode: 'Business Casual',
      icon: 'fa-user-md',
    },
    {
      title: 'Expo Enatih',
      location: 'Ao lado da plenária',
      when: '12/03 a 14/03',
      time: 'Simultâneo às aulas',
      content: 'Espaço de networking qualificado com empresas do setor.',
      icon: 'fa-briefcase-medical',
    },
    {
      title: 'Encerramento',
      location: 'Auditório da Plenária',
      when: 'Sábado 14/03',
      time: '21h às 02h',
      content: 'Shows Negra Cor/Adelmo Cazé + DJ Papau',
      dressCode: 'Azul e Branco / Resort Chic',
      icon: 'fa-moon',
    }
  ];

  return (
    <section id="activities" className="py-20 sm:py-32 light-section relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4eb377]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="w-16 sm:w-20 h-1 bg-[#4eb377] mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001B2E] mb-4 sm:mb-6 uppercase tracking-tighter leading-tight">Destaques do Evento</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-base sm:text-lg">Experiências exclusivas integrando ciência, inovação e networking.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all flex flex-col h-full group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#4eb377]/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-[#4eb377] text-2xl sm:text-3xl mb-6 sm:mb-10 group-hover:bg-[#4eb377] group-hover:text-white transition-all duration-300">
                <i className={`fas ${item.icon}`}></i>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-[#001B2E] mb-4 sm:mb-6 leading-tight uppercase tracking-tighter group-hover:text-[#4eb377] transition-colors">{item.title}</h3>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                <div className="flex items-start gap-3 text-sm">
                  <i className="fas fa-calendar-alt text-[#4eb377] mt-1"></i>
                  <span className="text-slate-700 font-bold">{item.when}</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <i className="fas fa-clock text-[#4eb377] mt-1"></i>
                  <span className="text-slate-500 font-medium">{item.time}</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <i className="fas fa-map-marker-alt text-[#4eb377] mt-1"></i>
                  <span className="text-slate-500 italic font-medium">{item.location}</span>
                </div>
              </div>

              {item.dressCode && (
                <div className="mt-auto p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100">
                  <p className="text-[8px] sm:text-[10px] uppercase font-black text-[#4eb377] tracking-widest mb-1">Dress Code</p>
                  <p className="text-[10px] sm:text-xs font-bold text-[#001B2E]">{item.dressCode}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesBlock;
