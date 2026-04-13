"use client";

import React from "react";
import { MousePointerClick, ShoppingBag, Utensils } from "lucide-react";

const steps = [
  {
    icon: <MousePointerClick size={40} />,
    title: "1. Kies uw eten",
    description: "Blader door onze menukaart en kies uw favoriete gerechten.",
  },
  {
    icon: <ShoppingBag size={40} />,
    title: "2. Bestel Online",
    description: "Bestel eenvoudig via Thuisbezorgd voor een snelle afhandeling.",
  },
  {
    icon: <Utensils size={40} />,
    title: "3. Afhalen & Genieten",
    description: "Uw bestelling staat warm voor u klaar bij onze balie in Brakkenstein.",
  },
];

export default function PickupProcess() {
  return (
    <section className="py-24 bg-brand-charcoal text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tighter italic">
          HOE HET <span className="text-brand-red">WERKT</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[20%] left-[20%] right-[20%] h-1 border-t-4 border-dashed border-white/5" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-brand-red rounded-full flex items-center justify-center mb-6 shadow-2xl border-4 border-white/10 group hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight italic">{step.title}</h3>
              <p className="text-white/50 text-sm font-medium leading-relaxed max-w-xs mx-auto uppercase tracking-wide">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
           <a 
             href="https://www.thuisbezorgd.nl"
             target="_blank"
             className="px-16 py-6 bg-white text-brand-charcoal font-black uppercase tracking-[0.2em] text-sm hover:bg-brand-red hover:text-white transition-all shadow-xl"
           >
             Begin nu met bestellen
           </a>
        </div>
      </div>
    </section>
  );
}
