import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Star, CheckCircle2, Zap } from 'lucide-react';

const HERO_IMG = '/hero.webp';
const DASH_IMG  = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80&auto=format&fit=crop';

export default function Hero() {
  const lineRef = useRef(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes heroFadeUp {
        from { opacity:0; transform:translateY(36px); }
        to   { opacity:1; transform:translateY(0); }
      }
      .h-line { opacity:0; animation: heroFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
      .h-line:nth-child(1){animation-delay:0.05s}
      .h-line:nth-child(2){animation-delay:0.18s}
      .h-line:nth-child(3){animation-delay:0.3s}
      .h-line:nth-child(4){animation-delay:0.44s}
      .h-line:nth-child(5){animation-delay:0.58s}
      .h-line:nth-child(6){animation-delay:0.70s}

      @keyframes heroImgIn {
        from { opacity:0; transform:translateX(40px) scale(0.96); }
        to   { opacity:1; transform:translateX(0) scale(1); }
      }
      .hero-img-wrap { opacity:0; animation: heroImgIn 1s cubic-bezier(0.16,1,0.3,1) 0.3s forwards; }

      @keyframes floatY {
        0%,100% { transform:translateY(0); }
        50%      { transform:translateY(-14px); }
      }
      .float-card { animation: floatY 5s ease-in-out infinite; }
      .float-card-2 { animation: floatY 7s ease-in-out 1.5s infinite;  position: absolute;
        top: 0;
        height: auto;
        bottom: auto; }

      @keyframes pulseBorder {
        0%,100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
        50%      { box-shadow: 0 0 0 12px rgba(59,130,246,0); }
      }
      .pulse-border { animation: pulseBorder 2.5s ease infinite; }

      @keyframes lineGrow {
        from { transform:scaleX(0); }
        to   { transform:scaleX(1); }
      }
      .line-grow { transform-origin:left; animation: lineGrow 0.8s ease 1s forwards; transform:scaleX(0); }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden dot-grid">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep radial glow left */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full"
          style={{background:'radial-gradient(circle at 30% 40%, rgba(37,99,235,0.18) 0%, transparent 65%)'}} />
        {/* Right side warm glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{background:'radial-gradient(circle at 70% 70%, rgba(234,88,12,0.1) 0%, transparent 65%)'}} />
        {/* Grid lines */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary-500/10 to-transparent" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary-500/8 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-4 sm:pb-4 lg:pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Badge */}
            <div className="h-line">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 sm:mb-4 lg:mb-8 bg-primary-600/10 border border-primary-500/25">
                <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-border" />
                <span className="font-heading font-600 text-xs tracking-widest uppercase text-primary-300">Available for Projects · India & Worldwide</span>
              </div>
            </div>

            {/* Headline */}
            <div className="h-line">
              <h1 className="font-heading font-900 text-[clamp(1.4rem,5.5vw,4rem)] leading-[1.08] tracking-tight text-white mb-2">
                We Build Websites
              </h1>
            </div>
            <div className="h-line">
              <h1 className="font-heading font-900 text-[clamp(1.4rem,5.5vw,4rem)] leading-[1.08] tracking-tight mb-2">
                <span className="text-gradient">That Grow</span>
              </h1>
            </div>
            <div className="h-line">
              <h1 className="font-heading font-900 text-[clamp(1.4rem,5.5vw,4rem)] leading-[1.08] tracking-tight text-white mb-4 sm:mb-4 lg:mb-8">
                Your Business
              </h1>
            </div>

            {/* Horizontal divider */}
            <div className="h-line">
              <div className="h-0.5 w-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-4 sm:mb-4 lg:mb-8 line-grow" />
            </div>

            {/* Sub */}
            <div className="h-line">
              <p className="text-slate-400 text-lg text-sm leading-relaxed max-w-lg mb-4 sm:mb-4 lg:mb-10">
                High-performance, SEO-optimized websites crafted with modern design.
                From <span className="text-primary-400 font-500">₹8,000</span> — delivered in{' '}
                <span className="text-accent-400 font-500">5–10 days</span>.
              </p>
            </div>

            {/* CTAs */}
            <div className="h-line flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
                className="btn-primary text-[15px]">
                <span>Get Your Website</span>
                <ArrowRight size={16} />
              </button>
              <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth'})}
                className="btn-outline text-[15px]">
                <Play size={14} className="fill-current" />
                <span>View Our Work</span>
              </button>
            </div>

            {/* Trust row */}
            <div className="h-line flex flex-wrap items-center gap-6">
              {[
                { icon: <Star size={14} className="fill-yellow-400 text-yellow-400" />, text: '5.0 Rating' },
                { icon: <CheckCircle2 size={14} className="text-emerald-400" />, text: '50+ Projects Done' },
                { icon: <Zap size={14} className="text-accent-400" />, text: '5–10 Day Delivery' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm font-heading font-600 text-slate-400">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Image stack ── */}
          <div className="hero-img-wrap relative hidden lg:block">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)] border border-white/8">
              <img src={HERO_IMG} alt="Web Development" className="w-full h-[460px] object-cover" loading="eager" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
              {/* Bottom tag */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-primary-400" />
                  </div>
                  <div>
                    <div className="font-heading font-700 text-white text-sm">100% Satisfaction</div>
                    <div className="text-xs text-slate-400">Guaranteed delivery</div>
                  </div>
                </div>
                <div className="glass rounded-xl px-4 py-2.5 text-center">
                  <div className="font-heading font-800 text-2xl text-gradient">50+</div>
                  <div className="text-xs text-slate-400 font-500">Live Sites</div>
                </div>
              </div>
            </div>

            {/* Floating card 1 — top right */}
            <div className="float-card absolute -top-6 -right-6 glass rounded-2xl p-4 border border-primary-500/20 shadow-glow-blue w-52">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <Zap size={15} className="text-primary-400" />
                </div>
                <span className="font-heading font-700 text-white text-sm">SEO Optimized</span>
              </div>
              {/* Mini bar chart */}
              <div className="flex items-end gap-1.5 h-10">
                {[40,65,50,80,60,95,75].map((h,i) => (
                  <div key={i} className="flex-1 rounded-sm bg-primary-500/20 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 rounded-sm bg-gradient-to-t from-primary-500 to-primary-400"
                      style={{height:`${h}%`, transition:`height 1s ${i*0.1}s ease`}} />
                  </div>
                ))}
              </div>
              <div className="mt-2 text-xs text-primary-400 font-heading font-600">Google Rankings ↑</div>
            </div>

            {/* Floating card 2 — bottom left */}
            <div className="float-card-2 absolute -bottom-5 -left-6 glass rounded-2xl p-4 border border-accent-500/20 w-48">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-1.5">
                  {['bg-blue-500','bg-emerald-500','bg-orange-500'].map((c,i) => (
                    <div key={i} className={`w-6 h-6 rounded-full ${c} border-2 border-navy-800 flex items-center justify-center text-[9px] font-bold text-white`}>
                      {['R','P','A'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-heading font-500">Happy clients</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_,i) => <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />)}
                <span className="ml-1 text-xs font-heading font-700 text-white">5.0</span>
              </div>
              <div className="mt-1 text-xs text-slate-500">50+ Reviews</div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary-500/8 animate-spin-slow" />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary-500/5" />
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="mt-10 sm:mt-10 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: '50+', label: 'Websites Delivered', color: 'primary' },
            { val: '5★', label: 'Client Rating', color: 'yellow' },
            { val: '3x', label: 'Traffic Increase', color: 'accent' },
            { val: '100%', label: 'On-Time Delivery', color: 'emerald' },
          ].map(s => (
            <div key={s.label} className="glass-card rounded-2xl p-5 text-center shine">
              <div className={`font-heading font-900 text-3xl mb-1 ${
                s.color==='primary'?'text-gradient-blue':
                s.color==='yellow'?'text-yellow-400':
                s.color==='accent'?'text-gradient-orange':
                'text-emerald-400'
              }`}>{s.val}</div>
              <div className="text-xs text-slate-500 font-heading font-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary-400 rounded-full" style={{animation:'scrollDot 1.8s ease infinite'}} />
        </div>
      </div>
      <style>{`@keyframes scrollDot{0%,100%{transform:translateY(0);opacity:1}60%{transform:translateY(8px);opacity:0}}`}</style>
    </section>
  );
}
