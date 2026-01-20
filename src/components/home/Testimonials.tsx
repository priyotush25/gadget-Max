"use client";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rivers",
      role: "E-Sports Competitor",
      text: "GadgetMax is the only place I trust for my rig upgrades. The speed of the marketplace is unmatched.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Hardware Modder",
      text: "Finally, a platform that understands specs. Listing 10 GPUs took me less than five minutes. Pure efficiency.",
      rating: 5
    },
    {
      name: "Jordan Lee",
      role: "Tech Reviewer",
      text: "The UI feels like a command center. Secure transactions and a community that actually knows their tech.",
      rating: 5
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Decorative background grid line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-sm bg-sky-500/10 px-3 py-1 text-[10px] font-mono font-bold tracking-[0.2em] text-sky-500 uppercase">
            User Feedback // Logged
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-white md:text-6xl uppercase italic">
            Verified <span className="text-sky-500">Operators</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative group rounded-none border-l-2 border-sky-500 bg-slate-900/50 p-8 transition-all hover:bg-slate-900"
            >
              {/* Corner accent for a "tech" feel */}
              <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-slate-700 transition-colors group-hover:border-sky-500" />
              
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3 w-3 fill-sky-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed font-medium">
                "{t.text}"
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-800 pt-6">
                <div className="h-10 w-10 rounded-sm bg-gradient-to-br from-sky-500 to-blue-700 shadow-[0_0_10px_rgba(14,165,233,0.3)]" />
                <div>
                  <h4 className="font-mono text-sm font-bold text-white uppercase tracking-tight">
                    {t.name}
                  </h4>
                  <p className="text-[10px] text-sky-500/70 font-mono uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};