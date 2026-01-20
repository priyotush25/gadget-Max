"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer, CTA } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PopularItems } from "@/components/home/PopularItems";
import { Benefits } from "@/components/home/Benefits";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <HowItWorks />
        <PopularItems />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
