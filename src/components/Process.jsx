const steps = [
  { num:'01', title:'Discovery Call', desc:'Free 30-min consultation to understand your goals, audience, and vision.', icon:'💬', color:'border-primary-500/25 hover:border-primary-500/50' },
  { num:'02', title:'Design & Plan', desc:'Wireframes, tech stack selection, and project roadmap tailored to you.', icon:'📐', color:'border-accent-500/25 hover:border-accent-500/50' },
  { num:'03', title:'Build & Develop', desc:'Clean, fast code with React/Next.js — progress updates throughout.', icon:'⚙️', color:'border-emerald-500/25 hover:border-emerald-500/50' },
  { num:'04', title:'Launch & Grow', desc:'Go live, SEO setup, analytics, and ongoing support included.', icon:'🚀', color:'border-violet-500/25 hover:border-violet-500/50' },
];

export default function Process() {
  return (
    <section className="py-0 md:py-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3 sm:mb-2 lg:mb-14">
          <div className="section-badge justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            How It Works
          </div>
          <h2 className="font-heading font-900 text-[clamp(1.4rem,4.5vw,3.2rem)] text-white mb-1 sm:mb-1 lg:mb-4 leading-tight">
            Simple <span className="text-gradient">4-Step</span> Process
          </h2>
          <p className="text-slate-400 max-w-sm sm:max-w-sm lg:max-w-xl mx-auto">From first message to live website — streamlined and stress-free.</p>
        </div>

        {/* Connector line desktop */}
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent z-0" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((s, i) => (
              <div key={s.num} className={`glass-card rounded-2xl p-7 border shine ${s.color} group`}>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-heading font-900 text-5xl text-gradient opacity-20 leading-none">{s.num}</span>
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{s.icon}</span>
                </div>
                <h3 className="font-heading font-800 text-white text-lg mb-2 group-hover:text-gradient-blue transition-all">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
