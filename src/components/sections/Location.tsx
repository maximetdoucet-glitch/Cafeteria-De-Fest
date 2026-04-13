"use client";

import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Location() {
  const { t } = useLanguage();
  return (
    <section id="location" className="py-24 bg-white text-brand-charcoal relative overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 italic text-shadow-food">
            {t('location.title').split(' ').map((word, i) => (
              i === t('location.title').split(' ').length - 1 ? <span key={i} className="text-brand-red decoration-brand-charcoal underline underline-offset-8">{word}</span> : word + ' '
            ))}
          </h2>
          <p className="text-gray-500 mb-12 text-sm md:text-lg font-bold uppercase tracking-widest leading-none">
            {t('location.subtitle')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-red">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">{t('location.address.title')}</span>
              </div>
              <p className="text-brand-charcoal font-black text-xl leading-tight uppercase">
                Kanunnik Boenenstraat 2-4<br />
                6525 WS Nijmegen
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-red">
                <Clock className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">{t('location.hours.title')}</span>
              </div>
              <p className="text-brand-charcoal font-black text-xl uppercase tracking-tight">
                {t('location.hours.days')}
              </p>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-red">
                  <Phone className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">{t('location.contact.title')}</span>
                </div>
                <p className="text-brand-charcoal font-black text-xl uppercase">
                  024 356 3132
                </p>
            </div>

            <a 
              href="https://www.facebook.com/p/Cafetaria-De-Fest-100036648867206/"
              target="_blank"
              rel="noopener noreferrer"
              className="space-y-4 text-gray-400 hover:text-brand-red transition-colors cursor-pointer group"
            >
               <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-xs font-black uppercase tracking-widest">{t('location.social.title')}</span>
               </div>
               <p className="text-xl font-black group-hover:text-brand-charcoal transition-colors">Facebook</p>
            </a>
          </div>
          
          <div className="mt-16">
             <a 
               href="https://www.google.com/maps/dir/?api=1&destination=Kanunnik+Boenenstraat+2-4+Nijmegen"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block px-10 py-4 border-4 border-brand-charcoal font-black uppercase text-xs tracking-[0.2em] hover:bg-brand-charcoal hover:text-white transition-all shadow-xl"
             >
                {t('location.route')}
             </a>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="relative aspect-square md:aspect-video rounded-none overflow-hidden bg-brand-charcoal shadow-[30px_30px_0px_0px_rgba(229,62,62,1)]">
           <iframe
              title={t('location.maps.title')}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.483935667351!2d5.867962477382436!3d51.815591388147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c709ab82302633%3A0xedb3a62867808381!2sCafetaria%20De%20Fest!5e0!3m2!1snl!2snl!4v1712921000000!5m2!1snl!2snl"
              width="100%"
              height="100%"
              className="map-filter"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
           />
        </div>
      </div>
    </section>
  );
}
