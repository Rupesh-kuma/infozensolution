import { Code2, Search, BookOpen, Building2, RefreshCw, Smartphone, ShoppingCart, Palette, Link } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={26} />,
    title: 'Website Development',
    desc: 'Full-stack web apps built with React, Next.js & Node.js. Scalable, secure, and blazing fast.',
    tag: 'Most Popular',
    tagColor: 'bg-primary-500/15 text-primary-300 border-primary-500/25',
    iconBg: 'bg-primary-500/12 text-primary-400',
    accent: 'group-hover:border-primary-500/40',
    img: '/images/Website Development.webp',
  },
  {
    icon: <Search size={26} />,
    title: 'SEO Optimization',
    desc: 'Rank higher on Google with technical SEO, Core Web Vitals, and schema markup.',
    tag: null,
    iconBg: 'bg-emerald-500/12 text-emerald-400',
    accent: 'group-hover:border-emerald-500/40',
    img: '/images/SEO Optimization.webp',
  },
  {
    icon: <BookOpen size={26} />,
    title: 'Catalogue Websites',
    desc: 'Beautiful product catalogues that impress buyers and drive B2B inquiries.',
    tag: null,
    iconBg: 'bg-orange-500/12 text-orange-400',
    accent: 'group-hover:border-orange-500/40',
    img: '/images/Catalogue Websites.webp',
  },
  {
    icon: <Building2 size={26} />,
    title: 'Business Websites',
    desc: 'Professional corporate sites that establish trust and convert visitors to leads.',
    tag: null,
    iconBg: 'bg-blue-500/12 text-blue-400',
    accent: 'group-hover:border-blue-500/40',
    img: '/images/Business Websites.webp',
  },
  {
    icon: <RefreshCw size={26} />,
    title: 'Website Redesign',
    desc: 'Transform your outdated site into a modern, high-converting digital experience.',
    tag: null,
    iconBg: 'bg-rose-500/12 text-rose-400',
    accent: 'group-hover:border-rose-500/40',
    img: '/images/Website Redesign.webp',
  },
  {
    icon: <Smartphone size={26} />,
    title: 'Mobile Responsive',
    desc: 'Every site perfected for every screen — phone, tablet, laptop, ultra-wide.',
    tag: null,
    iconBg: 'bg-violet-500/12 text-violet-400',
    accent: 'group-hover:border-violet-500/40',
    img: '/images/Mobile Responsive.webp',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-10 md:py-18 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-4 lg:mb-16">
          <div className="section-badge justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            Our Services
          </div>
          <h2 className="font-heading font-900 text-[clamp(1.3rem,4.5vw,3.2rem)] text-white mb-1 sm:mb-1 lg:mb-5 leading-tight">
            Everything You Need to <span className="text-gradient">Win Online</span>
          </h2>
          <p className="text-slate-400 text-sm lg:text-lg max-w-2xl mx-auto">
            End-to-end web solutions tailored to your goals — from concept to launch and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className={`group glass-card rounded-2xl overflow-hidden border border-white/5 ${s.accent} shine flex flex-col`}>
              {/* Image thumbnail */}
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/40 to-transparent" />
                {s.tag && (
                  <div className={`absolute top-3 right-3 text-xs font-heading font-700 px-3 py-1 rounded-full border ${s.tagColor}`}>
                    {s.tag}
                  </div>
                )}
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center shadow-lg`}>
                  {s.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-800 text-white text-lg mb-2 group-hover:text-gradient-blue transition-all duration-300">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{s.desc}</p>
                <a href='tel:919661911152' className="mt-5 flex items-center gap-2 text-xs font-heading font-700 text-primary-400 group-hover:gap-3 transition-all duration-300">
                  Contact Us
                 
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
