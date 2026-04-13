"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Flame, ChevronRight } from "lucide-react";

const highlights = [
  {
    name: "Friet Speciaal",
    description: "Versgesneden, dubbelgebakken. Met mayo, curry en ui.",
    price: "v.a. €3,00",
    image: "/images/friet-speciaal.png",
    popular: true,
  },
  {
    name: "Kapsalon Shoarma",
    description: "Friet, shoarma, gesmolten kaas, salade en saus. Een klassieker!",
    price: "v.a. €10,50",
    image: "/images/kapsalon.png",
    popular: true,
  },
  {
    name: "De Fest Burger",
    description: "Dubbel vlees, bacon, cheddar en huisgemaakte saus.",
    price: "v.a. €9,50",
    image: "/images/burger-real.png",
    popular: true,
  },
  {
    name: "Pizza De Fest",
    description: "Vers deeg, belegd met champignons, paprika en pepperoni.",
    price: "v.a. €8,50",
    image: "/images/pizza-round.png",
    popular: true,
  },
];

export default function Menu() {
  return (
    <section id="highlights" className="py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-brand-charcoal uppercase tracking-tighter leading-none mb-4">
            Onze <span className="text-brand-red">Toppers</span>
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs max-w-md mx-auto">
            De favorieten van Brakkenstein. Al jaren geliefd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => (
            <div key={item.name} className="group bg-white border border-gray-100 food-card-shadow overflow-hidden relative">
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-brand-red text-white font-black text-[10px] uppercase px-3 py-1.5 shadow-lg">
                <Flame size={12} />
                <span>Favoriet</span>
              </div>

              {/* Food Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-black text-brand-charcoal leading-none group-hover:text-brand-red transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-brand-red font-black italic text-lg">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to full menu */}
        <div className="mt-16 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-6">
            Bestel online voor afhalen in de winkel
          </p>
          <Link
            href="https://www.thuisbezorgd.nl"
            target="_blank"
            className="inline-flex items-center gap-3 px-16 py-6 bg-brand-charcoal text-white font-black uppercase tracking-[0.15em] text-sm hover:bg-brand-red transition-all shadow-2xl group"
          >
            Plaats je bestelling
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
