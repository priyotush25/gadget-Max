"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { toast } from "react-hot-toast";
import {
  PlusCircle,
  Cpu,
  Hash,
  DollarSign,
  Box,
  Image as ImageIcon,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";
import { API_BASE_URL } from "@/lib/constants";

export default function AddItemPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !description) {
      toast.error("DATA_ERROR: Missing required modules");
      return;
    }
    setLoading(true);
    const toastId = toast.loading("INITIALIZING_DEPLOYMENT...");

    try {
      const res = await fetch(`${API_BASE_URL}/api/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, category, description, image }),
      });

      if (res.ok) {
        toast.success("DEPLOYMENT_SUCCESSFUL", { id: toastId });
        router.push("/items");
      } else {
        toast.error("PROTOCOL_FAILURE: Server rejected listing", { id: toastId });
      }
    } catch (err) {
      toast.error("NETWORK_DISRUPTION: Retry sync", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sky-500/10 border border-sky-500/20 text-sky-500 font-mono text-[10px] uppercase tracking-widest mb-4">
                <Terminal className="h-3 w-3" /> System_Input_Active
              </div>
              <h1 className="text-4xl font-black tracking-tighter md:text-6xl text-white uppercase italic">
                Deploy <span className="text-sky-500">Gear</span>
              </h1>
              <p className="mt-4 text-slate-400 font-mono text-sm uppercase tracking-tight">
                Upload hardware specifications to the GadgetMax grid.
              </p>
            </div>

            {/* Form Container */}
            <form
              onSubmit={handleAddItem}
              className="space-y-6 rounded-sm border border-slate-800 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-md relative overflow-hidden"
            >
              {/* Decorative Scanline effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 ml-1">
                    <Hash className="h-3 w-3 text-sky-500" />
                    Product_Identifier
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. RTX 4090 TI"
                    className="w-full rounded-sm border border-slate-800 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition-all focus:border-sky-500/50 font-mono text-sm placeholder:text-slate-700"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 ml-1">
                    <DollarSign className="h-3 w-3 text-sky-500" />
                    Valuation_USD
                  </label>
                  <input
                    type="number"
                    placeholder="1500"
                    className="w-full rounded-sm border border-slate-800 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition-all focus:border-sky-500/50 font-mono text-sm placeholder:text-slate-700"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 ml-1">
                  <Box className="h-3 w-3 text-sky-500" />
                  Category_Class
                </label>
                <select
                  className="w-full rounded-sm border border-slate-800 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition-all focus:border-sky-500/50 font-mono text-sm appearance-none cursor-pointer"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Audio">Audio</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Wearables">Wearables</option>
                  <option value="Components">Components</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 ml-1">
                  <Cpu className="h-3 w-3 text-sky-500" />
                  Technical_Specs
                </label>
                <textarea
                  rows={4}
                  placeholder="Input detailed hardware metrics and condition..."
                  className="w-full rounded-sm border border-slate-800 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition-all focus:border-sky-500/50 font-mono text-sm placeholder:text-slate-700 resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 ml-1">
                  <ImageIcon className="h-3 w-3 text-sky-500" />
                  Visual_Asset_URL
                </label>
                <input
                  type="url"
                  placeholder="https://cdn.gadgetmax.com/assets/..."
                  className="w-full rounded-sm border border-slate-800 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition-all focus:border-sky-500/50 font-mono text-sm placeholder:text-slate-700"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>

              <div className="pt-4">
                <Button
                  disabled={loading}
                  type="submit"
                  className="w-full h-14 rounded-sm bg-sky-600 hover:bg-sky-500 text-white font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(2,132,199,0.3)] gap-2 transition-all active:scale-95"
                >
                  {loading ? (
                    <span className="animate-pulse">SYST_UPLOADING...</span>
                  ) : (
                    <>
                      <PlusCircle className="h-4 w-4" />
                      Execute_Deployment
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}