import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FullMenu from "@/components/sections/FullMenu";

export const metadata: Metadata = {
  title: "Menukaart | Cafetaria De Fest — Nijmegen",
  description: "Bekijk onze volledige menukaart. Verse friet, snacks, kapsalons, pizza's, burgers en meer. Bestel online of haal af in Brakkenstein.",
};

export default function MenuPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        {/* Menu Page Hero Banner */}
        <section className="bg-brand-charcoal pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <span className="text-brand-red font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 inline-block">
              Cafetaria De Fest • Brakkenstein
            </span>
            <h1 className="font-heading font-black text-5xl md:text-8xl text-white uppercase tracking-tighter leading-none mb-4">
              Onze <span className="text-brand-red">Menukaart</span>
            </h1>
            <p className="text-white/50 font-medium text-sm md:text-base max-w-lg mx-auto">
              Alles vers bereid met de beste ingrediënten. Kies uw favorieten, bestel online en haal af bij onze balie.
            </p>
          </div>
        </section>
        <FullMenu />
      </main>
      <Footer />
    </div>
  );
}
