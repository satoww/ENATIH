
import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section id="welcome" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-500/5 rounded-[3rem] blur-2xl transition-all group-hover:bg-emerald-500/10"></div>
            <div className="relative bg-[#002B49] p-10 lg:p-14 rounded-[3rem] text-white shadow-[0_32px_64px_-16px_rgba(0,43,73,0.3)]">
              <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-emerald-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8 border border-white/10">
                Boas-vindas Oficiais
              </div>
              
              <h3 className="text-4xl font-black mb-8 font-heading tracking-tight leading-tight">MENSAGEM DA <br/> PRESIDÊNCIA</h3>
              
              <div className="space-y-6 text-slate-300 leading-relaxed font-medium text-lg">
                <p>
                  É com satisfação que damos as boas-vindas à <strong>10ª edição do ENATIH</strong> e à <strong>1ª edição do Congresso de Medicina Personalizada</strong>, que juntos formam o maior evento científico dedicado à atualização médica e à discussão de excelência sobre Terapia Hormonal e Saúde Integrada.
                </p>
                <p>
                  Neste Manual do Congressista você encontrará informações sobre o evento que solicitamos que sejam lidas com atenção. Desejamos a todos um excelente congresso e uma participação produtiva.
                </p>
              </div>
              
              <div className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center italic font-serif text-3xl text-emerald-400 border border-emerald-500/20 shadow-inner">
                    WP
                  </div>
                  <div>
                    <p className="font-bold text-xl tracking-tight">PROF. DR. WALTER PACE</p>
                    <p className="text-emerald-400 text-xs font-black uppercase tracking-widest">Presidente SBMP</p>
                  </div>
                </div>
                
                {/* SBMP Logo reproduction */}
                <div className="flex flex-col items-center sm:items-end opacity-80 hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-2">
                      <div className="text-right flex flex-col leading-none">
                        <span className="text-[8px] font-bold text-white/60 uppercase">Realização:</span>
                        <span className="text-[10px] font-black text-white uppercase">Sociedade Brasileira de Medicina Personalizada</span>
                      </div>
                      <span className="text-3xl font-black text-white italic">SBMP</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="w-20 h-2 bg-[#49B377] mb-8 rounded-full"></div>
              <h2 className="text-5xl lg:text-6xl font-black text-[#002B49] mb-8 font-heading tracking-tighter leading-none">Ciência e <br className="hidden lg:block"/> Conexões 2026</h2>
              <p className="text-slate-600 text-xl leading-relaxed font-medium">
                Um espaço dedicado à apresentação de soluções, produtos e iniciativas alinhadas à prática médica e à atualização científica, promovendo interação qualificada entre médicos e empresas parceiras.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col gap-6 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <i className="fas fa-microscope text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-2 uppercase text-sm tracking-widest">Inovação Científica</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Painéis com os maiores nomes da medicina integrativa e personalizada do Brasil.</p>
                </div>
              </div>
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col gap-6 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <i className="fas fa-hand-holding-medical text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-2 uppercase text-sm tracking-widest">Ética e Excelência</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Conteúdo rigorosamente pautado pela ética médica e evidências clínicas.</p>
                </div>
              </div>
            </div>
            
            <button className="flex items-center gap-4 text-[#002B49] font-black text-sm uppercase tracking-[0.2em] group">
              Conheça a Sociedade <span className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#002B49] group-hover:text-white transition-all"><i className="fas fa-arrow-right"></i></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
