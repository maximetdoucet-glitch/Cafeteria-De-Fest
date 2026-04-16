"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Star, MessageSquare, Quote, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ReviewsContent() {
  const { t } = useLanguage();

  const allReviews = [
    {
      name: "A Wayfarer's Tale, Dipa",
      date: "2 jaar geleden",
      text: t('reviews.item1.text'),
      stars: 5,
      tag: t('reviews.tag.guide')
    },
    {
      name: "Mónica Bernal Montero",
      date: "10 maanden geleden",
      text: t('reviews.item2.text'),
      stars: 5,
      tag: t('reviews.tag.verified')
    },
    {
      name: "Alitha Natriezia",
      date: "3 jaar geleden",
      text: t('reviews.item3.text'),
      stars: 5,
      tag: t('reviews.tag.guide')
    },
    {
      name: "Anna Tőkés",
      date: "8 jaar geleden",
      text: t('reviews.item4.text'),
      stars: 5,
      tag: t('reviews.tag.verified')
    },
    {
      name: "Lynn Le",
      date: "2 jaar geleden",
      text: t('reviews.item5.text'),
      stars: 5,
      tag: t('reviews.tag.verified')
    },
    {
      name: "Csaba Bálint",
      date: "8 jaar geleden",
      text: t('reviews.item6.text'),
      stars: 5,
      tag: t('reviews.tag.verified')
    },
    {
      name: "Jelte Schermer",
      date: "5 jaar geleden",
      text: t('reviews.item7.text'),
      stars: 5,
      tag: t('reviews.tag.verified')
    },
    {
      name: "Bram Thijssen",
      date: "5 jaar geleden",
      text: t('reviews.item8.text'),
      stars: 5,
      tag: t('reviews.tag.verified')
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="bg-white">
        {/* Header Section */}
        <section className="bg-brand-charcoal pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
             <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-brand-red text-brand-red" />
                ))}
             </div>
             <h1 className="font-heading font-black text-5xl md:text-8xl text-white uppercase tracking-tighter leading-none mb-6">
                {t('reviews.hero.title').split(' ').map((word, i) => (
                  i === t('reviews.hero.title').split(' ').length - 1 ? <span key={i} className="text-brand-red">{word}</span> : word + ' '
                ))}
             </h1>
             <p className="text-white/50 font-medium text-sm md:text-lg max-w-xl mx-auto">
                {t('reviews.hero.subtitle')}
             </p>
          </div>
        </section>
 
         {/* Reviews Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {allReviews.map((review, idx) => (
                <div key={idx} className="break-inside-avoid bg-brand-cream/30 border border-gray-100 p-8 md:p-10 relative group hover:bg-white hover:border-brand-red/20 transition-all shadow-sm">
                   <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-1">
                        {[...Array(review.stars)].map((_, i) => (
                          <Star key={i} size={12} className="fill-brand-yellow text-brand-yellow" />
                        ))}
                      </div>
                      <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{review.date}</span>
                   </div>
                   
                   <Quote className="absolute top-10 right-10 text-brand-charcoal/5 group-hover:text-brand-red/10" size={40} />
                   
                   <p className="text-brand-charcoal font-medium italic mb-8 leading-relaxed relative z-10">
                    &quot;{review.text}&quot;
                   </p>

                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand-charcoal rounded-full flex items-center justify-center text-white font-black text-sm overflow-hidden border border-gray-100 shadow-sm">
                         {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-brand-charcoal uppercase tracking-widest text-xs mb-0.5">{review.name}</p>
                        <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-[8px]">{review.tag}</p>
                      </div>
                   </div>
                </div>
              ))}
            </div>

            {/* Google Maps CTA */}
            <div className="mt-24 text-center">
               <div className="inline-block bg-brand-charcoal p-12 md:p-20 relative overflow-hidden rounded-[2.5rem]">
                  <div className="absolute inset-0 bg-brand-red opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                  <div className="relative z-10">
                    <MessageSquare size={48} className="text-brand-red mx-auto mb-6" />
                    <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
                       {t('reviews.cta.title')}
                    </h2>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-10 max-w-sm mx-auto">
                       {t('reviews.cta.subtitle')}
                    </p>
                    <a 
                      href="https://www.google.com/search?q=Cafetaria+De+Fest+Brakkenstein+Nijmegen#lrd=0x47c708e88df7e979:0x848245aab48d30c1,3,1" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-premium-primary shimmer inline-flex items-center gap-3"
                    >
                      {t('reviews.cta.button')}
                      <ExternalLink size={14} />
                    </a>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
