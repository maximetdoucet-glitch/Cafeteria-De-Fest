"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Utensils, Users, History, Heart, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center bg-brand-charcoal overflow-hidden pt-20">
          <div className="absolute inset-0 opacity-40">
             <Image 
               src="/images/shop-real.png" 
               alt={t('about.meta.title')} 
               fill 
               className="object-cover grayscale"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-transparent to-brand-charcoal" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-6 inline-block">
               {t('about.hero.since')}
            </span>
            <h1 className="font-heading font-black text-6xl md:text-9xl text-white uppercase tracking-tighter leading-[0.85] mb-6">
               {t('about.hero.title').split(' ').map((word, i) => (
                 i >= t('about.hero.title').split(' ').length - 2 ? <span key={i} className="text-brand-red">{word} </span> : word + ' '
               ))}
            </h1>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-3xl font-black text-brand-charcoal uppercase tracking-tighter mb-8 flex items-center gap-3">
                    <History className="text-brand-red" />
                    {t('about.origins.title')}
                  </h2>
                  <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
                    <p>
                      {t('about.origins.text1')}
                    </p>
                    <p>
                      {t('about.origins.text2')}
                    </p>
                  </div>
                </div>

                <div>
                   <h2 className="text-3xl font-black text-brand-charcoal uppercase tracking-tighter mb-8 flex items-center gap-3">
                    <Users className="text-brand-red" />
                    {t('about.livingroom.title')}
                  </h2>
                  <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
                    <p>
                      {t('about.livingroom.text1')}
                    </p>
                    <p>
                      {t('about.livingroom.text2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-brand-cream">
           <div className="container mx-auto px-4 text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-brand-charcoal uppercase tracking-tighter mb-4 md:whitespace-nowrap">
                 {t('about.values.title')}
              </h2>
           </div>
           <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Utensils, title: t('about.value1.title'), text: t('about.value1.desc') },
                { icon: Heart, title: t('about.value2.title'), text: t('about.value2.desc') },
                { icon: Users, title: t('about.value3.title'), text: t('about.value3.desc') }
              ].map((v, i) => (
                <div key={i} className="bg-white p-12 text-center border border-gray-100 shadow-sm">
                   <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-8">
                      <v.icon className="text-white" size={32} />
                   </div>
                   <h3 className="text-2xl font-black text-brand-charcoal uppercase tracking-tighter mb-4">{v.title}</h3>
                   <p className="text-gray-500 font-medium leading-relaxed">{v.text}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Vision CTA */}
        <section className="py-32 bg-brand-charcoal relative overflow-hidden">
           <div className="absolute inset-0 bg-brand-red opacity-5 mix-blend-overlay" />
           <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                 {t('about.cta.title').split(' ').map((word, i) => (
                   word.toLowerCase() === 'de' || word.toLowerCase() === 'fest' || word.toLowerCase() === 'atmosphere' || word.toLowerCase() === 'atmosphäre' ? <span key={i} className="text-brand-red">{word} </span> : word + ' '
                 ))}
              </h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                 <a 
                   href="https://www.google.com/search?q=Cafetaria+De+Fest+Brakkenstein+Nijmegen#lrd=0x47c708e88df7e979:0x848245aab48d30c1,3,1"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs border-b-2 border-brand-red pb-1 hover:text-brand-red transition-all group"
                 >
                   {t('reviews.cta.button')}
                   <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </a>
                 <a href="#location" className="px-12 py-5 border-2 border-white/20 text-white font-black uppercase tracking-widest text-xs hover:border-brand-red transition-all">
                    {t('about.cta.location')}
                 </a>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
