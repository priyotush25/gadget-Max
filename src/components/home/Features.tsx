"use client";
import { Zap, ShieldCheck, Cpu, HardDrive } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Overclocked Speed",
      description:
        "Submission latency is near-zero. Deploy your hardware to the grid in under 60 seconds.",
      icon: <Zap className="w-6 h-6 text-sky-400" />,
    },
    {
      title: "Encrypted Auth",
      description:
        "Military-grade session management ensuring your seller dashboard stays strictly yours.",
      icon: <ShieldCheck className="w-6 h-6 text-sky-400" />,
    },
    {
      title: "Open Protocol",
      description:
        "No login walls. Your inventory is indexed and accessible to the global tech community.",
      icon: <Cpu className="w-6 h-6 text-sky-400" />,
    },
    {
      title: "Detail Architecture",
      description:
        "Optimized product renders and metadata support to highlight every technical spec.",
      icon: <HardDrive className="w-6 h-6 text-sky-400" />,
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Structural accent: Diagonal background stripe */}
      <div className="absolute top-0 left-0 h-full w-full opacity-10 [background:repeating-linear-gradient(45deg,transparent,transparent_20px,#334155_20px,#334155_21px)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-black tracking-tighter text-white md:text-6xl uppercase italic">
            Core <span className="text-sky-500">Modules</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400 font-medium">
            GadgetMax is engineered with a focus on high-throughput selling and 
            low-friction browsing for the modern enthusiast.
          </p>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:border-sky-500/50"
            >
              {/* Hover Glow Effect */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl transition-all group-hover:bg-sky-500/20" />
              
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 border border-slate-800 group-hover:border-sky-500/50 transition-colors shadow-inner">
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white tracking-tight uppercase">
                {feature.title}
              </h3>
              
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>

              {/* Decorative Scanline */}
              <div className="mt-6 h-1 w-8 bg-slate-800 group-hover:w-full group-hover:bg-sky-500 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};