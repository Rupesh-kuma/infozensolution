const TECHS = ['React.js','Next.js','Node.js','Tailwind CSS','TypeScript','MongoDB','Vite','PostgreSQL','Vercel','Figma','AWS','Firebase','WordPress','SEO','REST APIs','GraphQL'];

export default function TechTicker() {
  const doubled = [...TECHS, ...TECHS];
  return (
    <div className="relative py-5 overflow-hidden border-y border-white/5 bg-navy-800/30">
      <div className="absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-[#020B18] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-[#020B18] to-transparent pointer-events-none" />
      <div className="flex whitespace-nowrap" style={{animation:'marquee 32s linear infinite'}}>
        {doubled.map((t,i) => (
          <span key={i} className="inline-flex items-center gap-2.5 px-6 text-sm font-heading font-600 text-white">
            <span className="w-1 h-1 rounded-full bg-primary-500/50 flex-shrink-0" />
            {t}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
