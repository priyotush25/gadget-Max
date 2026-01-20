"use client";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sync Your Profile",
      description:
        "Initialize your GadgetMax account to unlock pro-level listing tools and analytics.",
    },
    {
      number: "02",
      title: "Upload Tech Specs",
      description:
        "Input your gadget's DNA. Add high-res renders and detailed specs to stand out.",
    },
    {
      number: "03",
      title: "Deploy Globally",
      description:
        "Hit the marketplace with instant visibility. Connect with tech enthusiasts worldwide.",
    },
  ];

  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-600/10 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-black tracking-tighter text-white md:text-5xl uppercase italic">
            Engineered for <span className="text-sky-500">Speed</span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-400">
            Our streamlined deployment pipeline gets your gear from your desk to the 
            global marketplace in record time.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition-all hover:border-sky-500/50 hover:bg-slate-900/60"
            >
              {/* Animated number badge */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/10 text-xl font-black text-sky-500 ring-1 ring-sky-500/20 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-slate-400 leading-relaxed">
                {step.description}
              </p>

              {/* Connecting line for Desktop */}
              {idx < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 hidden h-px w-8 bg-gradient-to-r from-sky-500/50 to-transparent lg:block" />
              )}
              
              {/* Bottom "Glow" Bar */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-500 transition-all duration-500 group-hover:w-full rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};