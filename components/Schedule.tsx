
import React, { useState, useRef, useEffect } from 'react';
import { EVENT_DAYS } from '../constants';

const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const currentDay = EVENT_DAYS[activeTab];

  // Auto-center active tab in mobile horizontal scroll
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.children[activeTab] as HTMLElement;
      if (activeElement) {
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const elementWidth = activeElement.offsetWidth;
        const elementOffset = activeElement.offsetLeft;
        
        scrollContainerRef.current.scrollTo({
          left: elementOffset - (containerWidth / 2) + (elementWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    // Smooth scroll back to top of schedule section when changing days on mobile
    if (window.innerWidth < 768 && sectionRef.current) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = sectionRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="schedule" ref={sectionRef} className="py-16 sm:py-24 bg-[#001B2E] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <div className="w-16 sm:w-20 h-1 bg-[#4eb377] mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tighter">Agenda Científica</h2>
          <p className="text-white/60 max-w-2xl mx-auto font-medium text-base sm:text-lg px-4">
            Toque nas datas para alternar a programação de cada dia.
          </p>
        </div>

        {/* Improved Tabs Navigation */}
        <div className="sticky top-[80px] z-30 -mx-4 px-4 py-4 mb-10 md:static md:mb-20 bg-[#001B2E]/95 backdrop-blur-sm md:bg-transparent">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap justify-start sm:justify-center gap-3 sm:gap-4 scrollbar-hide"
          >
            {EVENT_DAYS.map((day, index) => (
              <button
                key={day.date}
                onClick={() => handleTabClick(index)}
                className={`flex-shrink-0 px-6 sm:px-10 py-4 sm:py-6 rounded-2xl sm:rounded-[2.5rem] font-black transition-all flex flex-col items-center border select-none active:scale-95 ${
                  activeTab === index 
                  ? 'bg-[#4eb377] text-white border-[#4eb377] shadow-xl sm:scale-105' 
                  : 'bg-[#002B49] text-white/40 border-white/5 hover:text-white'
                }`}
              >
                <span className="text-[8px] sm:text-[10px] uppercase opacity-60 mb-1 tracking-widest font-black">{day.dayLabel}</span>
                <span className="text-lg sm:text-2xl">{day.date}</span>
              </button>
            ))}
          </div>
          {/* Subtle scroll indicator for mobile */}
          <div className="md:hidden flex justify-center mt-3 gap-1">
            {EVENT_DAYS.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-300 ${activeTab === i ? 'w-4 bg-[#4eb377]' : 'w-1 bg-white/10'}`}
              />
            ))}
          </div>
        </div>

        {/* Day Theme Header */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-16 p-6 sm:p-10 bg-[#002B49] rounded-2xl sm:rounded-[3rem] border border-white/5 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4eb377]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <p className="text-[8px] sm:text-[10px] font-black text-[#4eb377] uppercase tracking-[0.3em] mb-2 sm:mb-4">Eixo Temático</p>
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight leading-tight relative z-10">
                {currentDay.theme}
            </h3>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
             {/* Timeline central line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2"></div>
            
            <div className="space-y-6 sm:space-y-12">
              {currentDay.activities.map((activity, idx) => (
                <div 
                  key={idx} 
                  className={`relative flex flex-col md:flex-row gap-4 sm:gap-8 items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot - Visible on mobile now too, aligned left */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#4eb377] rounded-full border-4 border-[#001B2E] z-10 top-6 md:top-10"></div>
                  
                  <div className="pl-12 md:pl-0 md:w-1/2 w-full">
                    <div className={`p-6 sm:p-10 rounded-2xl sm:rounded-[3rem] bg-[#002B49] border border-white/5 hover:border-[#4eb377]/40 transition-all shadow-xl group h-full flex flex-col animate-fade-in`}>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6">
                        <span className="text-xl sm:text-3xl font-black text-white group-hover:text-[#4eb377] transition-colors">{activity.time}</span>
                        <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest border border-white/5 ${
                            activity.type === 'Break' ? 'bg-white/5 text-white/40' : 'bg-[#4eb377]/10 text-[#4eb377]'
                        }`}>
                          {activity.type}
                        </span>
                      </div>
                      
                      <h4 className="text-base sm:text-2xl font-black text-white mb-3 sm:mb-4 leading-tight tracking-tighter uppercase group-hover:text-[#4eb377] transition-colors">
                        {activity.title}
                      </h4>
                      
                      <p className="text-white/60 text-xs sm:text-base mb-6 sm:mb-8 leading-relaxed font-medium">
                        {activity.description}
                      </p>

                      <div className="mt-auto space-y-3 sm:space-y-4">
                        {activity.speaker && (
                            <div className="bg-white/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5 group-hover:bg-white/[0.08] transition-colors">
                                <p className="text-[7px] sm:text-[9px] font-black text-[#4eb377] uppercase tracking-widest mb-1">Palestrante(s)</p>
                                <p className="text-[11px] sm:text-sm font-bold text-white leading-snug">{activity.speaker}</p>
                            </div>
                        )}
                        {activity.moderator && (
                            <div className="bg-white/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5 group-hover:bg-white/[0.08] transition-colors">
                                <p className="text-[7px] sm:text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Moderador(a)</p>
                                <p className="text-[11px] sm:text-sm font-bold text-white/80">{activity.moderator}</p>
                            </div>
                        )}
                        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-sm text-white/40 font-bold border-t border-white/5 pt-4 sm:pt-6 group-hover:text-white/60 transition-colors">
                            <i className="fas fa-map-marker-alt text-[#4eb377]"></i>
                            <span className="uppercase tracking-widest">{activity.location}</span>
                        </div>
                      </div>
                    </div>
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

export default Schedule;
