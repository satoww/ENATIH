
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destaques', href: '#activities' },
    { name: 'Programação', href: '#schedule' },
    { name: 'Informações', href: '#info' },
    { name: 'Mapa', href: '#map' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#001B2E]/90 backdrop-blur-xl border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          <div 
            className="flex-shrink-0 flex items-center gap-2 sm:gap-4 cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-2xl sm:text-4xl font-light tracking-tighter text-white">enatih</span>
              <div className="bg-[#4eb377] text-white text-[8px] sm:text-[10px] font-bold px-1 py-2 sm:py-3 rounded-sm flex items-center justify-center [writing-mode:vertical-lr] rotate-180">
                2026
              </div>
              <div className="h-8 sm:h-10 w-[1px] bg-white/20 mx-1 sm:mx-2"></div>
              <div className="flex items-center gap-2">
                 <i className="fas fa-dna text-[#4eb377] text-sm sm:text-xl"></i>
                 <div className="flex flex-col justify-center max-w-[100px] sm:max-w-none">
                    <span className="text-[7px] sm:text-[9px] font-black text-white/50 leading-none uppercase tracking-widest">1º Congresso de</span>
                    <span className="text-[9px] sm:text-xs font-black text-white leading-tight uppercase">Medicina Personalizada</span>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-white/70 hover:text-[#4eb377] text-[10px] font-black transition-all uppercase tracking-[0.2em] relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4eb377] transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#4eb377] p-2 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 bg-[#001B2E] z-40 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 pb-12">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-white hover:text-[#4eb377] px-6 py-6 rounded-3xl text-xl font-black bg-white/5 uppercase tracking-[0.2em] border border-white/5 active:scale-95 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-auto border-t border-white/10 pt-8 text-center">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-4">Realização:</p>
            <div className="flex justify-center items-center gap-4">
               <span className="text-3xl font-black text-[#4eb377] italic tracking-tighter">SBMP</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
