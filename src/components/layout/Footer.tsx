"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                   <span className="text-white font-heading font-black text-xl italic">F</span>
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase text-white">
                  De <span className="text-brand-red">Fest</span>
                </span>
             </div>
             <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Brakkenstein • Nijmegen</p>
             <p className="text-white/30 text-xs leading-relaxed max-w-xs text-center md:text-left">
               Al meer dan 10 jaar de huiskamer van Brakkenstein. Vers bereid, altijd welkom.
             </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
             <h4 className="text-white font-black uppercase tracking-widest text-[11px] mb-6">Navigatie</h4>
             <div className="flex flex-col gap-3">
                {[
                  { name: "Menukaart", href: "/menu" },
                  { name: "Over ons", href: "/about" },
                  { name: "Recensies", href: "/reviews" },
                  { name: "Bestel Online", href: "https://www.thuisbezorgd.nl" }
                ].map(item => (
                   <Link key={item.name} href={item.href} className="font-bold text-xs text-white/40 hover:text-brand-red transition-colors">
                      {item.name}
                   </Link>
                ))}
             </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
             <h4 className="text-white font-black uppercase tracking-widest text-[11px] mb-6">Contact</h4>
             <div className="flex flex-col gap-4">
                <a href="tel:024-3563132" className="flex items-center gap-3 text-white/40 hover:text-brand-red transition-colors">
                   <Phone size={14} className="text-brand-red" />
                   <span className="text-xs font-bold">024 - 356 3132</span>
                </a>
                <a href="mailto:info@cafetariadefest.nl" className="flex items-center gap-3 text-white/40 hover:text-brand-red transition-colors">
                   <Mail size={14} className="text-brand-red" />
                   <span className="text-xs font-bold">info@cafetariadefest.nl</span>
                </a>
                <div className="flex items-start gap-3 text-white/40">
                   <MapPin size={14} className="text-brand-red mt-0.5 flex-shrink-0" />
                   <span className="text-xs font-bold leading-relaxed">
                     Kanunnik Boenenstraat 22-24<br/>
                     6525 WK, Nijmegen
                   </span>
                </div>
             </div>
          </div>

          {/* Social & Hours */}
          <div className="flex flex-col items-center md:items-start">
             <h4 className="text-white font-black uppercase tracking-widest text-[11px] mb-6">Volg ons</h4>
             <a 
               href="https://www.facebook.com/p/Cafetaria-De-Fest-100036648867206/" 
               target="_blank"
               className="flex items-center gap-3 text-white/40 hover:text-brand-red transition-colors mb-6"
             >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-brand-red" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-xs font-bold">Facebook</span>
             </a>
             <div className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold space-y-1">
                <p>Ma - Zo: 12:00 - 22:00</p>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
              © {new Date().getFullYear()} Cafetaria De Fest. Alle rechten voorbehouden.
           </div>
           <div className="text-[8px] font-black uppercase tracking-[0.6em] text-white/10">
              Vers • Heet • Snel
           </div>
        </div>
      </div>
    </footer>
  );
}
