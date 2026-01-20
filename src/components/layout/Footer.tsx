"use client";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Terminal, Shield, Cpu, Activity } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-sm border border-sky-500/30 bg-slate-900 px-8 py-20 text-center shadow-[0_0_50px_rgba(14,165,233,0.1)] md:px-16 md:py-28">
          {/* Hexagonal Grid Overlay */}
          <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-[10px] uppercase tracking-widest">
              <Activity className="h-3 w-3 animate-pulse" /> Finalize Deployment
            </div>
            
            <h2 className="text-4xl font-black tracking-tighter text-white md:text-7xl uppercase italic leading-none">
              Liquidate Your <span className="text-sky-500">Hardware.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-400 md:text-xl font-medium max-w-2xl mx-auto">
              Sync with the grid. Turn your legacy gear into credit. GadgetMax provides the high-throughput marketplace for modern enthusiasts.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 justify-center sm:flex-row">
              <Link href="/login">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-sky-600 hover:bg-sky-500 text-white font-mono uppercase tracking-widest text-xs rounded-none shadow-[0_0_20px_rgba(2,132,199,0.3)]"
                >
                  Initialize Setup
                </Button>
              </Link>
              <Link href="/items">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800 font-mono uppercase tracking-widest text-xs rounded-none"
                >
                  Access Mainframe
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-12">
          
          {/* Brand & Status */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-sky-600 text-white font-black italic shadow-lg">
                G
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                Gadget<span className="text-sky-500">Max</span>
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-500 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Network Status: Optimal
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-500 uppercase">
                <Cpu className="h-3 w-3" /> API_v2.04 Active
              </div>
            </div>
          </div>

          {/* System Links */}
          <div className="flex flex-col md:items-center">
             <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                <Link href="#" className="text-xs font-mono uppercase tracking-tighter text-slate-500 hover:text-sky-400 transition-colors">Documentation</Link>
                <Link href="#" className="text-xs font-mono uppercase tracking-tighter text-slate-500 hover:text-sky-400 transition-colors">Protocols</Link>
                <Link href="#" className="text-xs font-mono uppercase tracking-tighter text-slate-500 hover:text-sky-400 transition-colors">Security_SSL</Link>
                <Link href="#" className="text-xs font-mono uppercase tracking-tighter text-slate-500 hover:text-sky-400 transition-colors">Terminals</Link>
             </div>
          </div>

          {/* Social & Legal */}
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-4">
               <div className="h-8 w-8 rounded-sm border border-slate-800 flex items-center justify-center hover:border-sky-500/50 cursor-pointer transition-colors">
                  <Terminal className="h-4 w-4 text-slate-500" />
               </div>
               <div className="h-8 w-8 rounded-sm border border-slate-800 flex items-center justify-center hover:border-sky-500/50 cursor-pointer transition-colors">
                  <Shield className="h-4 w-4 text-slate-500" />
               </div>
            </div>
            <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest text-left md:text-right">
              &copy; {new Date().getFullYear()} Gadgetmax Core Systems. <br />
              All packets encrypted. Authorized access only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};