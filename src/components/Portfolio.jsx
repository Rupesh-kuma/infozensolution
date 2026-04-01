import { ExternalLink } from 'lucide-react';

const projects = [
  { name:'Shopkar', url:'http://shopkar.divritin.com/', desc:'E-commerce with modern UI & checkout.', cat:'E-Commerce', img:'/images/shopkart.webp', color:'from-blue-600/40 to-blue-900/60' },
  { name:'Accurate CA India', url:'http://accuratecaindia.com/', desc:'Professional accounting firm site.', cat:'Business', img:'/images/Accurate-Control-Automation.png', color:'from-emerald-600/40 to-emerald-900/60' },
  { name:'Bright Shine Bharat', url:'http://brightshinebharat.com/', desc:'Cleaning services with booking form.', cat:'Corporate', img:'/images/Bright-Shine-Bharat.png', color:'from-orange-600/40 to-orange-900/60' },
  { name:'Aayushi Enterprises', url:'https://aayushienterprises.co.in/', desc:'Wholesale trading product catalogue.', cat:'Catalogue', img:'/images/Aayushi-Enterprises.png', color:'from-rose-600/40 to-rose-900/60' },
  { name:'Divritin', url:'http://divritin.com/', desc:'Lifestyle brand with product showcase.', cat:'Lifestyle', img:'/images/divrit techanology.png', color:'from-violet-600/40 to-violet-900/60' },
  { name:'Tropolite', url:'https://tropolite.vercel.app/', desc:'SaaS landing with animations & CRO.', cat:'SaaS', img:'/images/Tropolite.png', color:'from-cyan-600/40 to-cyan-900/60' },
  { name:'FitMeals', url:'https://fitmeals-sooty.vercel.app/', desc:'Health & nutrition subscription app.', cat:'Health', img:'/images/FITMEALS-APP.png', color:'from-green-600/40 to-green-900/60' },
  { name:'Veto Catalogue', url:'https://veto-catalogue.vercel.app/', desc:'Filterable product catalogue & inquiry.', cat:'Catalogue', img:'/images/veto catalogue.png', color:'from-yellow-600/40 to-yellow-900/60' },
];

const catColors = {
  'E-Commerce':'text-blue-400 bg-blue-500/15 border-blue-500/25',
  'Business':'text-emerald-400 bg-emerald-500/15 border-emerald-500/25',
  'Corporate':'text-orange-400 bg-orange-500/15 border-orange-500/25',
  'Catalogue':'text-yellow-400 bg-yellow-500/15 border-yellow-500/25',
  'Lifestyle':'text-violet-400 bg-violet-500/15 border-violet-500/25',
  'SaaS':'text-cyan-400 bg-cyan-500/15 border-cyan-500/25',
  'Health':'text-green-400 bg-green-500/15 border-green-500/25',
};


export default function Portfolio() {
  return (
    <section id="portfolio" className="py-10 md:py-18 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-badge justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
            Portfolio
          </div>
          <h2 className="font-heading font-900 text-[clamp(2rem,4.5vw,3.2rem)] text-white mb-5 leading-tight">
            Real Work, <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every project is live, tested, and actively delivering value to our clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
              className="group glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/12 flex flex-col cursor-pointer">
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy"
                  className="w-full object-cover transition-transform duration-[1000ms] ease-linear group-hover:translate-y-[-100%]" />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.color}`} />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 glass rounded-xl px-4 py-2.5 flex items-center gap-2 text-white font-heading font-700 text-sm">
                    <ExternalLink size={14} /> View Site
                  </div>
                </div>

                {/* Category */}
                <div className={`absolute top-3 left-3 text-xs font-heading font-700 px-2.5 py-1 rounded-full border ${catColors[p.cat]||'text-slate-400 bg-slate-500/15 border-slate-500/25'}`}>
                  {p.cat}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-heading font-700 text-white text-sm mb-1.5 group-hover:text-primary-300 transition-colors">{p.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-1">{p.desc}</p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-heading font-600 text-primary-400">
                  <ExternalLink size={11} />
                  <span className="truncate">{p.url.replace('https://','').replace('http://','').split('/')[0]}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
