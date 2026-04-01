import { CheckCircle2, Award, Users, Clock, TrendingUp } from 'lucide-react';

const DEV_IMG = '/images/about.webp';

const highlights = [
  { icon: <Clock size={18}/>, label: 'Fast Delivery', desc: '5–10 days turnaround, always on time.', color: 'text-primary-400 bg-primary-500/12' },
  { icon: <TrendingUp size={18}/>, label: 'Affordable Pricing', desc: 'Agency quality, freelancer price.', color: 'text-accent-400 bg-accent-500/12' },
  { icon: <Users size={18}/>, label: '100% Satisfaction', desc: 'We iterate until you love it.', color: 'text-emerald-400 bg-emerald-500/12' },
  { icon: <Award size={18}/>, label: '5★ Rated', desc: 'Top-rated by 50+ clients across India.', color: 'text-yellow-400 bg-yellow-500/12' },
];

export default function About() {
  return (
    <section id="about" className="py-2 md:py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main photo */}
              <div className="rounded-2xl overflow-hidden border border-white/8 shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
                <img src={DEV_IMG} alt="Developer working" className="w-full h-[480px] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/10 to-transparent" />
              </div>

              {/* Experience badge */}
              <div className="absolute -top-5 -right-5 glass-card rounded-2xl p-5 text-center border-glow shadow-glow-blue w-36">
                <div className="font-heading font-900 text-4xl text-gradient-blue">5+</div>
                <div className="text-xs text-slate-400 font-heading font-500 mt-1">Years of<br/>Experience</div>
              </div>

              {/* Bottom stats */}
              <div className="absolute -bottom-0 -right-5 glass-card rounded-2xl p-4 flex items-center gap-4 shadow-xl border border-emerald-500/15">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} className="text-emerald-400" />
                </div>
                <div>
                  <div className="font-heading font-800 text-white text-lg">50+ Projects</div>
                  <div className="text-xs text-slate-500">Successfully Delivered</div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -z-10 inset-4 rounded-2xl border border-primary-500/10" />
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <div className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
              About Us
            </div>

            <h2 className="font-heading font-900 text-[clamp(1.4rem,4vw,3rem)] leading-tight text-white mb-6">
              Building Digital Products<br />
              <span className="text-gradient">That Deliver Results</span>
            </h2>

            <p className="text-slate-400 text-justify text-[14px] sm:text-[14px] lg:text-[17px] leading-relaxed mb-6">
            Infozen Solution is a professional freelance web development service provider dedicated to delivering high-quality digital solutions. We specialize in creating responsive, user-friendly, and performance-driven websites tailored to meet your business goals. Our focus is on innovation, reliability, and client satisfaction.
            </p>
            <p className="text-slate-500 text-base lg:text-left text-justify sm:text-justify leading-relaxed mb-10">
              Every website we build is engineered with SEO-first architecture, blazing-fast load times, 
              and conversion-focused design. Your website isn't just a digital presence — 
              it's your most powerful sales tool.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map(h => (
                <div key={h.label} className="glass-card rounded-xl p-2 sm:p-2 lg:p-4 flex flex-col sm:flex-col lg:flex-row items-start gap-3 shine">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${h.color}`}>
                    {h.icon}
                  </div>
                  <div>
                    <div className="font-heading font-700 text-white text-sm">{h.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
              className="btn-primary text-[15px]">
              <span>Start Your Project</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
