"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ShoppingCart,
  Share2,
  Heart,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { API_BASE_URL } from "@/lib/constants";

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export default function ItemDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/items/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        } else {
          router.push("/items");
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen animate-pulse">
        <Navbar />
        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="aspect-square rounded-[3rem] bg-white/5" />
            <div className="space-y-6">
              <div className="h-12 w-3/4 rounded-2xl bg-white/5" />
              <div className="h-8 w-1/4 rounded-2xl bg-white/5" />
              <div className="h-32 w-full rounded-2xl bg-white/5" />
            </div>
          </div>
        </main>
      </div>
    );

  if (!product) return null;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/items"
            className="group mb-12 inline-flex items-center gap-2 text-foreground/60 transition-colors hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Back to Items
          </Link>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square overflow-hidden rounded-[3rem] border border-white/10 bg-white/5"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute top-8 right-8 flex flex-col gap-4">
                <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/50 text-white backdrop-blur-xl transition-all hover:bg-primary">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/50 text-white backdrop-blur-xl transition-all hover:bg-primary">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col h-full"
            >
              <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                {product.category}
              </div>
              <h1 className="text-4xl font-display font-bold md:text-6xl truncate leading-tight">
                {product.name}
              </h1>
              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-4xl font-display font-bold text-primary">
                  ${product.price}
                </span>
                <span className="text-foreground/40 line-through text-xl">
                  ${Math.round(parseInt(product.price) * 1.5)}
                </span>
              </div>

              <div className="mt-10 p-8 rounded-4xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-lg mb-4">About this item</h3>
                <p className="text-lg leading-relaxed text-foreground/60">
                  {product.description}
                </p>
              </div>

              <div className="mt-12 space-y-4">
                <Button
                  onClick={() => toast.success("Added to cart!")}
                  size="lg"
                  className="h-16 w-full rounded-3xl text-lg gap-3"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-16 flex-1 rounded-3xl"
                  >
                    Message Seller
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-16 flex-1 rounded-3xl"
                  >
                    Make Offer
                  </Button>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-linear-to-br from-primary to-indigo-600" />
                  <div>
                    <p className="font-bold">Verified Seller</p>
                    <p className="text-xs text-foreground/40">
                      Active since 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-sm font-medium">Safe Payment</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
