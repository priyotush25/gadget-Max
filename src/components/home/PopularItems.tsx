"use client";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ProductCard } from "./ProductCard";

export const PopularItems = () => {
  const dummyProducts = [
    {
      id: "1",
      name: "Mechanical Keyboard G-Pro",
      price: "159",
      category: "Peripherals",
      image: "/images/keyboard.png",
    },
    {
      id: "2",
      name: "4K Curved Monitor 144Hz",
      price: "499",
      category: "Displays",
      image: "/images/monitor.png",
    },
    {
      id: "3",
      name: "Wireless ANC Headphones",
      price: "349",
      category: "Audio",
      image: "/images/headphones.png",
    },
    {
      id: "4",
      name: "Smart Watch Ultra-Max",
      price: "299",
      category: "Wearables",
      image: "/images/smartwatch.png",
    },
  ];

  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-64 w-64 bg-blue-600/10 blur-[100px] -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-sky-500 uppercase">
                Trending Loadouts
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white md:text-6xl">
              TOP RATED <span className="italic text-slate-500">GEAR</span>
            </h2>
            <p className="mt-4 text-slate-400">
              The most sought-after tech upgrades currently moving through the
              GadgetMax network.
            </p>
          </div>
          
          <Link href="/items" className="hidden sm:block">
            <Button 
              variant="outline" 
              className="border-slate-800 text-white hover:bg-slate-800 hover:border-sky-500/50 transition-all" 
              as="span"
            >
              Expand Inventory →
            </Button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dummyProducts.map((product) => (
            <div key={product.id} className="group relative">
              {/* Subtle card glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-sky-500 to-blue-600 rounded-xl opacity-0 transition duration-300 group-hover:opacity-20 blur-sm"></div>
              
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                image={product.image}
              />
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-12 flex justify-center sm:hidden">
          <Link href="/items" className="w-full">
            <Button variant="outline" className="w-full text-white border-slate-800" as="span">
              View All Inventory
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};