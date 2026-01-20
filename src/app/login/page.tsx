"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { toast } from "react-hot-toast";
import { LogIn, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { API_BASE_URL } from "@/lib/constants";

export default function LoginPage() {
  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Logging in...");

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        login(data.user);
        toast.success("Welcome back!", { id: toastId });
        router.push("/items");
        router.refresh();
      } else {
        const error = await res.json();
        toast.error(error.message || "Invalid credentials.", { id: toastId });
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
                <LogIn className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-display font-bold">Welcome Back</h1>
              <p className="mt-2 text-foreground/60">
                Sign in to manage your listings
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground/70 ml-1">
                  <Mail className="h-4 w-4" />
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="demo@example.com"
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
                  {loading ? "Authenticating..." : "Sign In"}
                </Button>
              </div>
            </form>

            <div className="mt-8 rounded-2xl bg-white/5 p-4 text-center text-sm border border-white/5">
              <p className="text-foreground/40">Demo Credentials:</p>
              <p className="font-medium text-foreground/70 mt-1">
                demo@example.com / password
              </p>
            </div>

            <div className="mt-6 text-center text-sm text-foreground/60">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-bold text-primary hover:underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
