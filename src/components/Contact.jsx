import { useState } from 'react';
import { Send, MessageCircle, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({name:'',email:'',budget:'',message:''});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const budgets = ['Under ₹10,000','₹10,000 – ₹25,000','₹25,000 – ₹50,000','₹50,000+'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  const inputCls = "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm font-body focus:outline-none focus:border-primary-500/60 focus:bg-primary-500/5 transition-all duration-200";

  return (
    <section id="contact" className="py-10 md:py-18 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2 sm:mb-2 lg:mb-16">
          <div className="section-badge justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
            Get In Touch
          </div>
          <h2 className="font-heading font-900 text-[clamp(1.3rem,4.5vw,3.2rem)] text-white sm:mb-2 mb-2 lg:mb-5 leading-tight">
            Let's Build Something <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-sm text-lg max-w-xl mx-auto">
            Drop us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="https://wa.me/919661911152" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 glass-card rounded-2xl p-2 sm:p-2 lg:p-5 border border-emerald-500/15 hover:border-emerald-500/35 shine group">
              <div className="w-5 sm:w-5 lg:w-12 h-5 sm:h-5 lg:h-12 rounded-xl bg-emerald-500/12 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform flex-shrink-0">
                <MessageCircle size={22} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-heading font-600 uppercase tracking-wider mb-1">WhatsApp</div>
                <div className="font-heading font-700 text-white">+91 96619 11152</div>
                <div className="text-xs text-emerald-400 mt-0.5 font-heading">⚡ Replies in minutes</div>
              </div>
            </a>

            <a href="mailto:rupesh.kumar.light@gmail.com"
              className="flex items-center gap-4 glass-card rounded-2xl p-2 sm:p-2 lg:p-5 border border-primary-500/15 hover:border-primary-500/35 shine group">
              <div className="w-5 sm:w-5 lg:w-12 h-5 sm:h-5 lg:h-12 rounded-xl bg-primary-500/12 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-heading font-600 uppercase tracking-wider mb-1">Email</div>
                <div className="font-heading font-700 text-white">rupesh.kumar.light@gmail.com</div>
                <div className="text-xs text-slate-500 mt-0.5">Response within 24 hours</div>
              </div>
            </a>

            <div className="flex items-center gap-4 glass-card rounded-2xl p-2 sm:p-2 lg:p-5 border border-white/5 shine">
              <div className="w-5 sm:w-5 lg:w-12 h-5 sm:h-5 lg:h-12 rounded-xl bg-accent-500/12 flex items-center justify-center text-accent-400 flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-heading font-600 uppercase tracking-wider mb-1">Location</div>
                <div className="font-heading font-700 text-white">Pocket G, Sector 10 Housing Board Colony, Faridabad, Haryana 121006</div>
                <div className="text-xs text-slate-500 mt-0.5">Serving clients globally</div>
              </div>
            </div>

            {/* Social */}
            <div className="glass-card rounded-2xl p-5 border border-white/5">
              <div className="text-xs text-slate-500 font-heading font-700 uppercase tracking-widest mb-4">Follow Us</div>
              <div className="flex gap-3">
                {[{l:'LinkedIn',c:'bg-blue-600/15 text-blue-400 border-blue-600/20 hover:bg-blue-600/25'},{l:'GitHub',c:'bg-slate-700/15 text-slate-300 border-slate-700/20 hover:bg-slate-700/25'},{l:'Instagram',c:'bg-pink-600/15 text-pink-400 border-pink-600/20 hover:bg-pink-600/25'}].map(s => (
                  <a key={s.l} href="#" className={`text-xs font-heading font-700 px-3 py-2 rounded-xl border transition-colors ${s.c}`}>{s.l}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-5 sm:p-5 lg:p-8 border border-white/6">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="font-heading font-800 text-xl text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 max-w-xs mx-auto text-sm leading-relaxed">
                    We'll get back to you within 24 hours. For faster response, WhatsApp us directly.
                  </p>
                  <button onClick={()=>{setSent(false);setForm({name:'',email:'',budget:'',message:''});}}
                    className="mt-6 text-sm text-primary-400 hover:text-primary-300 font-heading font-600 underline underline-offset-4 transition-colors">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-heading font-700 text-slate-400 uppercase tracking-wider mb-2">Your Name *</label>
                      <input type="text" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
                        required placeholder="Rahul Kumar" className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-700 text-slate-400 uppercase tracking-wider mb-2">Email *</label>
                      <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
                        required placeholder="hello@company.com" className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-700 text-slate-400 uppercase tracking-wider mb-2">Budget Range</label>
                    <select value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})}
                      className={`${inputCls} cursor-pointer`}>
                      <option value="" className="bg-navy-800">Select your budget</option>
                      {budgets.map(b => <option key={b} value={b} className="bg-navy-800">{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-700 text-slate-400 uppercase tracking-wider mb-2">Message *</label>
                    <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                      required rows={5} placeholder="Tell us about your project — type of website, target audience, key features needed..."
                      className={`${inputCls} resize-none`} />
                  </div>
                  <button type="submit" disabled={loading}
                    className="btn-primary w-full justify-center text-[15px]">
                    {loading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <><span>Send Message</span><Send size={16}/></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
