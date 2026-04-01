import { Zap, Search, Smartphone, DollarSign, Palette, HeadphonesIcon } from 'lucide-react';

const reasons = [
  { icon:<Zap size={22}/>, title:'Fast Delivery', desc:'5–10 day turnaround. We respect deadlines — always.', stat:'5–10d', statLabel:'Avg. Delivery', color:'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
  { icon:<Search size={22}/>, title:'SEO Friendly', desc:'Built on Core Web Vitals, structured data & semantic HTML.', stat:'90+', statLabel:'PageSpeed Score', color:'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  { icon:<Smartphone size={22}/>, title:'Mobile Responsive', desc:'Flawless on every device — phone to ultra-wide.', stat:'100%', statLabel:'Responsive', color:'text-primary-400 bg-primary-500/10 border-primary-500/20' },
  { icon:<DollarSign size={22}/>, title:'Affordable Pricing', desc:'Agency quality without the agency price tag.', stat:'₹8K+', statLabel:'Starting Price', color:'text-accent-400 bg-accent-500/10 border-accent-500/20' },
  { icon:<Palette size={22}/>, title:'Modern Design', desc:'Cutting-edge aesthetics that make your brand look premium.', stat:'50+', statLabel:'Projects Done', color:'text-violet-400 bg-violet-500/10 border-violet-500/20' },
  { icon:<HeadphonesIcon size={22}/>, title:'Ongoing Support', desc:'Post-launch support & updates included.', stat:'24/7', statLabel:'Support', color:'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
];

export default function WhyChooseMe() {
  return (
    <section className="py-10 md:py-18 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="section-badge justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Why Choose Us
          </div>
          <h2 className="font-heading font-900 text-[clamp(2rem,4.5vw,3.2rem)] text-white mb-5 leading-tight">
            The Edge You Get <span className="text-gradient">Working With Us</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Not just a developer — a growth partner committed to your success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div key={r.title} className={`group glass-card rounded-2xl p-6 border ${r.color.split(' ')[2]} hover:shadow-card shine flex gap-5 items-start`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${r.color.split(' ')[0]} ${r.color.split(' ')[1]} group-hover:scale-110 transition-transform duration-300`}>
                {r.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading font-700 text-white text-[15px]">{r.title}</h3>
                  <div className="text-right flex-shrink-0 ml-2">
                    <div className={`font-heading font-900 text-sm ${r.color.split(' ')[0]}`}>{r.stat}</div>
                    <div className="text-[10px] text-slate-600 font-heading">{r.statLabel}</div>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 relative overflow-hidden rounded-2xl border border-primary-500/20 p-10 md:p-14">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 via-navy-700/60 to-primary-900/60" />
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="font-heading font-900 text-3xl md:text-4xl text-white mb-3">
                Ready to Go <span className="text-gradient">Live?</span>
              </h3>
              <p className="text-slate-400 max-w-md">Join 50+ businesses that trust us to build their digital presence — on time and on budget.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
                className="btn-primary">
                <span>Start Project</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
              <a href="https://wa.me/919661911152" target="_blank" rel="noopener noreferrer" className="btn-orange">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
