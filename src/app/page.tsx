import { Hero } from "@/components/dashboard/Hero";
import { Pillars } from "@/components/dashboard/Pillars";
import { ProfessionalBackground } from "@/components/dashboard/ProfessionalBackground";
import { Testimonials } from "@/components/dashboard/Testimonials";
import { Toolkit } from "@/components/dashboard/Toolkit";
import { Footer } from "@/components/dashboard/Footer";

export default function Home() {
  return (
    <div className="relative min-h-full bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] bg-[radial-gradient(closest-side,theme(colors.blue.50),transparent)] opacity-80"
      />
      <Hero />
      <Pillars />
      <ProfessionalBackground />
      <Testimonials />
      <Toolkit />
      <Footer />
    </div>
  );
}