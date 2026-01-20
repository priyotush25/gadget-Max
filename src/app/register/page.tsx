"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { toast } from "react-hot-toast";
import { UserPlus, Mail, Lock, User } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { API_BASE_URL } from "@/lib/constants";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Creating your account...");

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password, name }),
      });

      if (res.ok) {
        const data = await res.json();
        login(data.user);
        toast.success("Account created! Welcome to ShopLite.", { id: toastId });
        router.push("/items");
        router.refresh();
      } else {
        const error = await res.json();
        toast.error(error.message || "Failed to create account.", {
          id: toastId,
        });
      }
    } catch (err) {
      toast.error("Network error. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex items-center justify-center pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="rounded-[2.5rem] border border-white/5 bg-white/2 p-10 shadow-2xl backdrop-blur-xl">
            <div className="text-center mb-10">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/20 text-primary">
                <UserPlus className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-display font-bold">
                Create Account
              </h1>
              <p className="mt-2 text-foreground/60">
                Join our premium community today
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground/70 ml-1">
                  <User className="h-4 w-4" />
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition-all focus:border-primary/50 focus:bg-white/10"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground/70 ml-1">
                  <Mail className="h-4 w-4" />
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition-all focus:border-primary/50 focus:bg-white/10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground/70 ml-1">
                  <Lock className="h-4 w-4" />
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition-all focus:border-primary/50 focus:bg-white/10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="pt-4">
                <Button
                  disabled={loading}
                  type="submit"
                  size="lg"
                  className="w-full"
                >
                  {loading ? "Creating account..." : "Create Account"}
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-foreground/60">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-primary hover:underline"
              >
                Sign in
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
