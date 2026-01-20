"use client";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { Button } from "../ui/Button";
import { ScanEye, ShoppingCart, Zap } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  category,
}: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-sm border border-slate-800 bg-slate-900/40 p-2 transition-all hover:border-sky-500/50 hover:bg-slate-900/80 shadow-2xl">
      
      {/* Product Image Section */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-950 rounded-sm">
        {/* Mock Image Placeholder with Tech Overlay */}
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
           <Zap className="h-12 w-12 text-slate-800 transition-colors group-hover:text-sky-500/20" />
        </div>
        
        {/* Status Overlay */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded-sm bg-slate-950/80 px-2 py-1 border border-slate-800 backdrop-blur-sm">
          <div className="h-1 w-1 rounded-full bg-sky-500 animate-pulse" />
          <span className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-tighter">
            {category}
          </span>
        </div>

        {/* Scanline Effect on Hover */}
        <div className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
           <div className="h-[2px] w-full bg-sky-500/50 shadow-[0_0_15px_rgba(14,165,233,0.8)] animate-[scan_2s_linear_infinite]" />
        </div>
      </div>

      {/* Product Info Section */}
      <div className="p-4 pt-5">
        <div className="mb-4">
          <h3 className="truncate text-sm font-bold text-white uppercase tracking-tight group-hover:text-sky-400 transition-colors">
            {name}
          </h3>
          <div className="mt-1 flex items-baseline gap-1">
             <span className="font-mono text-[10px] text-slate-500 uppercase">Valuation:</span>
             <span className="font-mono font-black text-lg text-sky-500 tabular-nums">
               ${price}
             </span>
          </div>
        </div>

        {/* Tactical Action Buttons */}
        <div className="flex gap-2">
          <Link href={`/items/${id}`} className="flex-1">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full h-9 border-slate-700 bg-transparent text-[10px] font-mono uppercase tracking-widest text-slate-400 hover:bg-slate-800 hover:text-white rounded-none"
            >
              <ScanEye className="mr-2 h-3.5 w-3.5" />
              Specs
            </Button>
          </Link>
          <Button
            size="sm"
            className="h-9 px-4 bg-sky-600 hover:bg-sky-500 text-white rounded-none transition-all active:scale-95"
            onClick={() => toast.success("ITEM_LOCKED: Added to local cache")}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Decorative Corner Notch */}
      <div className="absolute top-0 right-0 h-4 w-4 bg-slate-950 [clip-path:polygon(100%_0,0_0,100%_100%)] border-l border-b border-slate-800" />
      
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
      `}</style>
    </div>
  );
};