import { useState, useEffect } from 'react';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';
import logo from '/logo.webp';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2 bg-navy-900/95 backdrop-blur-2xl border-b border-white/5 shadow-xl shadow-black/50'
          : 'py-4 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button onClick={() => goto('home')} className="flex items-center gap-3 group">
              <img src={logo} alt="logo" className='w-52' />
              {/* <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-glow-blue group-hover:shadow-lg transition-all duration-300">
                  <Code2 size={18} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent-500 border-2 border-navy-900" />
              </div>
              <div className="text-left"> */}
                {/* <div className="font-heading font-800 text-white text-[17px] leading-none">WebDev</div> */}
                {/* <div className="font-heading font-500 text-primary-400 text-[11px] tracking-widest uppercase leading-none mt-0.5">Studio</div> */}
              {/* </div> */}
            </button>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => goto(id)}
                    className={`relative px-4 py-2.5 font-heading font-600 text-[14px] rounded-lg transition-all duration-200
                      ${active === id
                        ? 'text-white bg-primary-600/15 border border-primary-500/25'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="https://wa.me/919661911152" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-heading font-600 text-slate-300 hover:text-white transition-colors px-3 py-2">
                <svg className="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <button onClick={() => goto('contact')} className="btn-primary text-sm py-2.5 px-5">
                <span>Get a Quote</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg glass text-slate-300 hover:text-white transition-colors">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${open ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-400 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)} />
        <div className={`absolute top-0 right-0 bottom-0 w-72 bg-navy-800 border-l border-white/8 shadow-2xl transition-transform duration-400 ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
          <div className="flex items-center justify-between p-5 border-b border-white/8">
            <span className="font-heading font-700 text-white">Menu</span>
            <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg hover:bg-white/8 text-slate-400 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-1">
            {navLinks.map(({ label, id }) => (
              <button key={id} onClick={() => goto(id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-heading font-600 text-[15px] transition-all duration-200
                  ${active === id ? 'text-white bg-primary-600/20 border border-primary-500/30' : 'text-slate-400 hover:text-white hover:bg-white/6'}`}>
                {label}
              </button>
            ))}
          </div>
          <div className="p-5 border-t border-white/8 space-y-3">
            <button onClick={() => goto('contact')} className="btn-primary w-full justify-center text-sm">
              <span>Get Free Quote</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
