"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/home/ProductCard";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { LayoutGrid, Filter, Search } from "lucide-react";
import { API_BASE_URL } from "@/lib/constants";

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
}

export default function ItemsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/items`);
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        } else {
          throw new Error("Failed to fetch");
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <h1 className="text-4xl font-display font-bold md:text-6xl text-white">
                The Gallery
              </h1>
              <p className="mt-4 text-foreground/60 text-lg">
                Explore a curated selection of unique products listed by our
                community.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 focus-within:border-primary/50 transition-all">
                <Search className="h-5 w-5 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Search items..."
                  className="bg-transparent text-sm outline-none placeholder:text-foreground/30 min-w-[200px]"
                />
              </div>
              <Button variant="outline" className="h-12 rounded-2xl gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </motion.div>

          <hr className="my-12 border-white/5" />

          {loading ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 animate-pulse">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[2.5rem] bg-white/5"
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </motion.div>
          )}

          {!loading && products.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="rounded-full bg-white/5 p-6 mb-6">
                <LayoutGrid className="h-12 w-12 text-foreground/20" />
              </div>
              <h3 className="text-xl font-bold">No products found</h3>
              <p className="mt-2 text-foreground/40">
                Be the first to list something amazing!
              </p>
              <Link href="/add-item">
                <Button variant="outline" className="mt-8">
                  List an Item
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
