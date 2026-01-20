"use client";
import { Check, Activity, Zap, Shield } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      title: "0% Commission Protocol",
      description: "Retain 100% of your hardware value. We provide the grid; you keep the profit.",
      icon: <Zap className="w-4 h-4" />
    },
    {
      title: "Peer-to-Peer Network",
      description: "Direct-link transactions with local tech enthusiasts. Build your community rating.",
      icon: <Activity className="w-4 h-4" />
    },
    {
      title: "Mobile Command Center",
      description: "Fully optimized mobile interface for managing your inventory from any device.",
      icon: <Shield className="w-4 h-4" />
    },
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Tech Pulse */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-sky-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Content */}
          <div>
            <div className="inline-block rounded-sm bg-sky-500/10 px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-sky-400 uppercase mb-6 border border-sky-500/20">
              Platform Advantages // 0.4ms
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white md:text-6xl uppercase italic leading-[0.9]">
              Engineered for <br />
              <span className="text-sky-500 underline decoration-slate-800 underline-offset-8">Sellers</span>
            </h2>
            <p className="mt-8 text-lg text-slate-400 leading-relaxed font-medium">
              We’ve bypassed the bloat of traditional e-commerce. No hidden fees, no data throttling—just high-speed hardware deployment.
            </p>

            <dl className="mt-12 space-y-10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-slate-900 border border-slate-700 text-sky-500 transition-all group-hover:border-sky-500 group-hover:bg-sky-500/10">
                    {benefit.icon}
                  </div>
                  <div>
                    <dt className="font-bold text-xl text-white tracking-tight uppercase italic">{benefit.title}</dt>
                    <dd className="mt-1 text-slate-400 leading-relaxed">
                      {benefit.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Right Column: Pure CSS/SVG Tech Visualization */}
          <div className="relative aspect-square lg:aspect-[4/5] flex items-center justify-center group">
            
            {/* The "Core" - Rotating Wireframe Globe/Structure */}
            <div className="relative h-80 w-80 flex items-center justify-center">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-500/20 animate-[spin_20s_linear_infinite]" />
              {/* Inner Glow */}
              <div className="absolute h-40 w-40 rounded-full bg-sky-500/10 blur-3xl animate-pulse" />
              
              {/* Geometric Core (SVG) */}
              <svg viewBox="0 0 200 200" className="h-full w-full opacity-40 group-hover:opacity-80 transition-opacity duration-700">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path 
                  d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z" 
                  fill="none" 
                  stroke="url(#grad1)" 
                  strokeWidth="0.5"
                  className="animate-[pulse_4s_ease-in-out_infinite]"
                />
                <circle cx="100" cy="100" r="40" fill="none" stroke="#0ea5e9" strokeWidth="0.2" strokeDasharray="4 2" />
                <path d="M100 20 L100 180 M30 60 L170 140 M170 60 L30 140" stroke="#0ea5e9" strokeWidth="0.1" />
              </svg>
            </div>

            {/* Floating HUD Elements (Updated to be purely text/code based) */}
            
            {/* HUD 1: System Status */}
            <div className="absolute top-4 left-0 rounded-sm border-l-2 border-sky-500 bg-slate-900/80 p-4 backdrop-blur-md transition-all duration-700 group-hover:translate-x-4">
              <p className="font-mono text-[10px] text-sky-500 font-bold uppercase tracking-widest mb-1">System_Status</p>
              <p className="text-xl font-black text-white italic tracking-tighter uppercase">Operational</p>
              <div className="mt-2 h-1 w-24 bg-slate-800 overflow-hidden">
                <div className="h-full w-2/3 bg-sky-500 animate-[loading_2s_infinite]" />
              </div>
            </div>

            {/* HUD 2: Global Nodes */}
            <div className="absolute bottom-1/3 -right-4 rounded-sm border border-slate-800 bg-slate-900/80 p-5 backdrop-blur-md transition-all duration-700 group-hover:-translate-x-8">
              <div className="space-y-3">
                <div className="flex justify-between items-center gap-8">
                  <span className="font-mono text-[10px] text-slate-500 uppercase">Throughput</span>
                  <span className="font-mono text-[10px] text-sky-500 font-bold">MAX</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`h-3 w-[3px] ${i < 9 ? 'bg-sky-500' : 'bg-slate-700'}`} />
                  ))}
                </div>
                <p className="text-[10px] font-mono text-slate-400">ENCRYPTING_SSL_LAYER_V2...</p>
              </div>
            </div>

            {/* HUD 3: Performance Metrics */}
            <div className="absolute bottom-10 left-10 right-10 rounded-sm border border-sky-500/20 bg-slate-950/90 p-6 backdrop-blur-md">
              <div className="grid grid-cols-2 gap-4 divide-x divide-slate-800">
                <div className="px-2 text-center">
                  <p className="text-[9px] font-mono text-slate-500 uppercase mb-1">Uptime</p>
                  <p className="text-2xl font-black text-white tabular-nums">99.99%</p>
                </div>
                <div className="px-2 text-center">
                  <p className="text-[9px] font-mono text-slate-500 uppercase mb-1">Global Users</p>
                  <p className="text-2xl font-black text-white tabular-nums">2,840+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
};