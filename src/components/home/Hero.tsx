"use client";
import Link from "next/link";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-950 text-white">
      {/* Tech-Focused Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-full -translate-x-1/2 blur-[120px] [background:radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0,transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-400">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-sky-500"></span>
            Next-Gen Tech Hub
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-extrabold tracking-tighter md:text-8xl">
            Maximize Your <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Digital Lifestyle.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-400 md:text-xl leading-relaxed">
            Upgrade to the latest gear at **GadgetMax**. The ultimate marketplace 
            for premium electronics, gaming setups, and cutting-edge innovations.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/shop">
              <Button size="lg" className="w-full sm:w-auto bg-sky-600 hover:bg-sky-500 text-white border-none shadow-[0_0_20px_rgba(2,132,199,0.3)]" as="span">
                Browse Gadgets
              </Button>
            </Link>
            <Link href="/sell">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800"
                as="span"
              >
                Sell Your Gear
              </Button>
            </Link>
          </div>

          {/* Featured Image / Video UI */}
          <div className="mt-16 w-full max-w-6xl relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-1 shadow-2xl backdrop-blur-md">
              <div className="aspect-[21/9] w-full rounded-xl bg-slate-950 overflow-hidden relative">
                <img
                  src="/images/hero.png" 
                  alt="GadgetMax Premium Electronics"
                  className="h-full w-full object-cover opacity-80"
                />
                {/* Decorative UI elements to make it look "Techy" */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                   <div className="text-left">
                      <p className="text-[10px] uppercase tracking-widest text-sky-500 font-mono">System Status: Active</p>
                      <p className="text-xs text-slate-500 font-mono">2,400+ Tech Items Listed Today</p>
                   </div>
                   <div className="h-12 w-12 rounded-full border border-sky-500/20 flex items-center justify-center bg-slate-900">
                      <div className="h-2 w-2 rounded-full bg-sky-500 animate-ping"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};