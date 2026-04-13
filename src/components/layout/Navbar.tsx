"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white py-3 shadow-md border-b border-gray-100" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-white font-heading font-black text-2xl tracking-tighter italic">F</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-black text-2xl leading-none uppercase tracking-tighter ${
              isScrolled ? "text-brand-charcoal" : "text-white"
            }`}>
              Cafetaria <span className="text-brand-red">De Fest</span>
            </span>
            <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${
              isScrolled ? "text-gray-400" : "text-white/60"
            }`}>
              Brakkenstein • Nijmegen
            </span>
          </div>
        </Link>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/menu" className={`text-sm font-black uppercase tracking-widest hover:text-brand-red transition-colors ${
            isScrolled ? "text-brand-charcoal" : "text-white text-shadow-food"
          }`}>
            Menukaart
          </Link>
          <Link href="/about" className={`text-sm font-black uppercase tracking-widest hover:text-brand-red transition-colors ${
            isScrolled ? "text-brand-charcoal" : "text-white text-shadow-food"
          }`}>
            Over ons
          </Link>
          <Link href="/reviews" className={`text-sm font-black uppercase tracking-widest hover:text-brand-red transition-colors ${
            isScrolled ? "text-brand-charcoal" : "text-white text-shadow-food"
          }`}>
            Recensies
          </Link>
          <Link href="/#location" className={`text-sm font-black uppercase tracking-widest hover:text-brand-red transition-colors ${
            isScrolled ? "text-brand-charcoal" : "text-white text-shadow-food"
          }`}>
            Locatie
          </Link>
          <Link 
            href="https://www.thuisbezorgd.nl" 
            target="_blank"
            className="flex items-center space-x-2 bg-brand-red px-8 py-3.5 text-white font-black uppercase tracking-[0.15em] text-xs shadow-xl hover:bg-brand-charcoal hover:scale-105 transition-all"
          >
            <ShoppingCart size={16} />
            <span>Bestel Online</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-full ${isScrolled ? "text-brand-charcoal" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-charcoal z-[60] flex flex-col p-8 space-y-8">
           <div className="flex justify-between items-center">
              <span className="text-white font-heading font-bold italic">DE FEST.</span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X className="text-white" size={32} /></button>
           </div>
           <div className="flex flex-col space-y-6">
              <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-white hover:text-brand-red transition-colors capitalize">Menukaart</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-white hover:text-brand-red transition-colors capitalize">Over ons</Link>
              <Link href="/reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-white hover:text-brand-red transition-colors capitalize">Recensies</Link>
              <Link href="/#location" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-white hover:text-brand-red transition-colors capitalize">Locatie & Contact</Link>
              <Link 
                href="https://www.thuisbezorgd.nl" 
                className="w-full bg-brand-red py-6 text-white font-black uppercase text-center text-lg shadow-2xl"
              >
                Bestel Nu
              </Link>
           </div>
        </div>
      )}
    </nav>
  );
}
