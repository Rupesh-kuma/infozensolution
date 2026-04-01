import { Code2, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const links = {
  Services: ['Website Development','SEO Optimization','Catalogue Websites','Business Websites','Website Redesign'],
  Company: ['About Us','Portfolio','Process','Testimonials','Contact'],
};

export default function Footer() {
  const year = new Date().getFullYear();
  const goto = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:'smooth'});

  return (
    <footer className="border-t border-white/6 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-80 h-20 rounded-xl flex items-center justify-start">
                <img src="/logo.webp" alt="logo" className='w-60' />
              </div>
              
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              Building high-performance, SEO-optimized websites that help businesses grow online. 
              Based, serving clients across India and worldwide.
            </p>
            <div className="space-y-2">
              {[
                {icon:<Mail size={14}/>, val:'rupesh.kumar.light@gmail.com'},
                {icon:<Phone size={14}/>, val:'+91 96619 11152'},
                {icon:<MapPin size={14}/>, val:'Pocket G, Sector 10 Housing Board Colony, Faridabad, Haryana 121006'},
              ].map(c => (
                <div key={c.val} className="flex items-center gap-2.5 text-xs text-slate-500">
                  <span className="text-primary-400 flex-shrink-0">{c.icon}</span>
                  {c.val}
                </div>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <div className="font-heading font-800 text-white text-sm uppercase tracking-widest mb-5">{group}</div>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <button onClick={() => goto(group === 'Services' ? 'services' : item.toLowerCase())}
                      className="text-sm text-slate-500 hover:text-white transition-colors font-body flex items-center gap-1.5 group">
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-primary-400" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {year} infozen solution. All rights reserved. Made with ❤️ in India.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
