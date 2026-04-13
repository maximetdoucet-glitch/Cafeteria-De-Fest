"use client";

import React from "react";
import { Star, Quote, ChevronRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Pieter Bas",
    text: "Dit is echt de leukste snackbar van Nijmegen. Plus ze hebben ook de lekkerste kapsalon van Nijmegen! De sfeer is altijd top.",
    stars: 5,
    tag: "Geverifieerde Gast"
  },
  {
    name: "Mees Thissen",
    text: "Geweldige snackbar, vrolijke aardige medewerkers en je betaalt een goede prijs voor het overheerlijke eten. Een aanrader voor iedereen in Brakkenstein.",
    stars: 5,
    tag: "Lokale Gids"
  },
  {
    name: "Pim",
    text: "Zodra de vriendelijke eigenaar je begroet, voel je je meteen welkom. De 'schotels' zijn meesterlijk en altijd vers bereid.",
    stars: 5,
    tag: "Vaste Klant"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-8 text-center lg:text-left">
          <div className="max-w-4xl">
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-charcoal uppercase tracking-tighter leading-none mb-4 whitespace-nowrap">
                Wat onze <span className="text-brand-red">Gasten zeggen</span>
             </h2>
             <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                De stem van Brakkenstein. Al jaren een begrip in de wijk.
             </p>
          </div>
          <Link 
            href="/reviews"
            className="flex items-center gap-2 text-brand-charcoal font-black uppercase tracking-widest text-[10px] border-b-2 border-brand-red pb-1 hover:text-brand-red transition-all group"
          >
            Bekijk alle Recensies
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 border border-gray-100 relative group hover:border-brand-red/20 transition-all shadow-sm hover:shadow-xl">
              <Quote className="absolute top-8 right-8 text-gray-50 group-hover:text-brand-red/10 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>

              <p className="text-brand-charcoal font-medium italic text-lg mb-8 leading-relaxed relative z-10">
                "{t.text}"
              </p>

              <div>
                <p className="font-black text-brand-charcoal uppercase tracking-widest text-[13px] mb-1">{t.name}</p>
                <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-[9px]">{t.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
