"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { useAuth } from "@/context/AuthContext";
import { User, LogOut, ChevronDown, Settings } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold">
            GM
          </div>
          <span className="text-xl font-display font-bold tracking-tight">
            GadgetMax
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/items"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link
            href="/#benefits"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Benefits
          </Link>
          <Link
            href="/#features"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Features
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/add-item" className="hidden sm:block">
            <Button size="sm" variant="ghost" as="span">
              Sell Item
            </Button>
          </Link>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 pr-3 transition-colors hover:bg-white/10"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <User className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">
                  {user.name.split(" ")[0]}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-foreground/40 transition-transform ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {showDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowDropdown(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 z-50 w-56 origin-top-right rounded-2xl border border-white/10 bg-[#0A0A0B] p-2 shadow-2xl ring-1 ring-black ring-opacity-5"
                    >
                      <div className="px-4 py-3 border-b border-white/5 mb-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                          Signed in as
                        </p>
                        <p className="text-sm font-medium truncate text-white">
                          {user.email}
                        </p>
                      </div>

                      <Link
                        href="/profile"
                        className="flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                        onClick={() => setShowDropdown(false)}
                      >
                        <User className="h-4 w-4" />
                        My Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                        onClick={() => setShowDropdown(false)}
                      >
                        <Settings className="h-4 w-4" />
                        Settings
                      </Link>

                      <div className="my-1 border-t border-white/5" />

                      <button
                        onClick={() => {
                          logout();
                          setShowDropdown(false);
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm" as="span">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" size="sm" as="span">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
