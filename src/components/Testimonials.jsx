import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name:'Rajesh Sharma', role:'CEO, Accurate CA India',
    text:'The team delivered our website in just 7 days and it looks stunning. Client inquiries literally doubled within the first month. Best investment we made.',
    avatar:'/images/client.webp',
    result:'+100% Inquiries', color:'from-primary-500 to-primary-700',
  },
  {
    name:'Priya Agarwal', role:'Founder, Aayushi Enterprises',
    text:'Professional, fast, and extremely affordable. Our product catalogue looks like it was built by a top agency. We now rank on the first page for our main keywords!',
    avatar:'/images/client.webp',
    result:'Page 1 Google', color:'from-emerald-500 to-teal-600',
  },
  {
    name:'Amit Verma', role:'Marketing Head, Bright Shine Bharat',
    text:'Redesigned our old website and the results were incredible. Mobile responsiveness and loading speed are exceptional. The team was responsive throughout.',
    avatar:'/images/client.webp',
    result:'3x Faster Speed', color:'from-orange-500 to-amber-600',
  },
  {
    name:'Sneha Kapoor', role:'Director, Tropolite',
    text:'Outstanding work on our SaaS landing page. The animations are smooth, design is modern, and our conversions improved by 40% after launch. Truly exceptional!',
    avatar:'/images/client.webp',
    result:'+40% Conversions', color:'from-rose-500 to-pink-600',
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 md:py-18 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-badge justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            Client Reviews
          </div>
          <h2 className="font-heading font-900 text-[clamp(2rem,4.5vw,3.2rem)] text-white mb-5 leading-tight">
            Clients Love <span className="text-gradient">The Results</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Don't just take our word for it — here's what real clients say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-2xl p-7 border border-white/5 hover:border-white/10 shine relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-5 right-6 opacity-5">
                <Quote size={60} className="fill-current text-primary-400" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_,i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
              </div>

              {/* Result chip */}
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${t.color} mb-4`}>
                <span className="text-xs font-heading font-700 text-white">✨ {t.result}</span>
              </div>

              <p className="text-slate-300 text-[15px] leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-white/6">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-primary-500/30" loading="lazy" />
                <div>
                  <div className="font-heading font-700 text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary strip */}
        <div className="glass rounded-2xl border border-white/6 p-6 flex flex-wrap items-center justify-center gap-10">
          {[
            {v:'50+', l:'Happy Clients'},
            {v:'100%', l:'Satisfaction'},
            {v:'5.0 ★', l:'Average Rating'},
            {v:'0', l:'Refund Requests'},
          ].map(s => (
            <div key={s.l} className="text-center">
              <div className="font-heading font-900 text-2xl text-gradient mb-0.5">{s.v}</div>
              <div className="text-xs text-slate-500 font-heading">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
