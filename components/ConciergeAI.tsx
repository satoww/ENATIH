
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';

const ConciergeAI: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([
    {role: 'bot', content: 'Olá! Sou o assistente virtual do ENATIH 2026. Como posso te ajudar com a programação ou logística no Sol Grand Premium?'}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', content: userMsg}]);
    setIsLoading(true);

    const botMsg = await getAIResponse(userMsg);
    setMessages(prev => [...prev, {role: 'bot', content: botMsg}]);
    setIsLoading(false);
  };

  return (
    <section id="concierge" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-black text-xs uppercase tracking-widest mb-6">
              Powered by Gemini AI
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight font-heading">Assistente <br className="hidden lg:block"/> ENATIH 2026</h2>
            <p className="text-slate-400 text-xl mb-10 leading-relaxed font-medium">
              Dúvidas sobre o horário de uma palestra? Quer saber onde almoçar ou como retirar seu crachá?
              Pergunte ao nosso concierge virtual e receba respostas instantâneas.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-5 items-center p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-900/40">
                  <i className="fas fa-magic text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">Guia da Programação</h4>
                  <p className="text-sm text-slate-400">Toda a agenda científica em tempo real.</p>
                </div>
              </div>
              <div className="flex gap-5 items-center p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-900/40">
                  <i className="fas fa-brain text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">Logística e Resort</h4>
                  <p className="text-sm text-slate-400">Dicas sobre o Sol Grand Premium e Sauípe.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-[3rem] border border-slate-700 shadow-2xl flex flex-col h-[600px] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-transparent pointer-events-none"></div>
            
            <div className="p-6 bg-slate-700/50 border-b border-slate-700 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="font-black text-sm uppercase tracking-widest text-slate-300">Concierge Online</span>
              </div>
              <i className="fas fa-robot text-slate-500"></i>
            </div>
            
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-6 relative z-10 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-2xl text-base font-medium shadow-sm ${
                    m.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-br-none' 
                    : 'bg-slate-700 text-slate-100 rounded-bl-none'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-700 p-5 rounded-2xl rounded-bl-none flex gap-1.5">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6 bg-slate-900/50 border-t border-slate-700 relative z-10">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ex: Qual o horário do almoço?"
                  className="flex-grow bg-slate-900 border border-slate-600 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors shadow-inner"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white w-14 h-14 rounded-2xl transition-all disabled:opacity-50 flex items-center justify-center shadow-lg active:scale-90"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConciergeAI;
