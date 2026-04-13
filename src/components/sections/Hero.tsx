"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-white">
      {/* Photo on the right, fading into white on the left */}
      <div className="absolute right-0 top-0 w-full lg:w-4/5 h-full z-0 overflow-hidden">
        <Image
          src="/images/shop-real.png"
          alt="Cafetaria De Fest Nijmegen"
          fill
          sizes="100vw"
          quality={100}
          unoptimized
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
      </div>

      {/* Content on the left */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-brand-red font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6">
            Snackbar & Lunchroom • Brakkenstein, Nijmegen
          </span>
          
          <h1 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-6 text-brand-charcoal uppercase tracking-tighter">
            Cafetaria<br />
            <span className="text-brand-red">De Fest</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-charcoal/70 font-medium max-w-lg mb-4 leading-relaxed">
            Al jaren hét adres voor verse friet, ambachtelijke snacks en de lekkerste pizza's in Nijmegen.
          </p>
          <p className="text-xs font-black uppercase tracking-widest text-brand-red mb-10">
            Bestel online • Haal het op in de winkel
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://www.thuisbezorgd.nl" 
              target="_blank"
              className="px-12 py-5 bg-brand-red text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-charcoal transition-all shadow-2xl group"
            >
              Plaats je bestelling
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#menu"
              className="px-12 py-5 border-4 border-brand-charcoal text-brand-charcoal font-black uppercase tracking-widest text-xs hover:bg-brand-charcoal hover:text-white transition-all text-center"
            >
              Bekijk Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
