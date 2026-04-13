import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Star, MessageSquare, Quote, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Recensies | Cafetaria De Fest — De stem van Brakkenstein",
  description: "Lees wat onze gasten zeggen over onze verse friet, beroemde kapsalon en gastvrije service in Nijmegen.",
};

const allReviews = [
  {
    name: "Pieter Bas",
    date: "14 november 2023",
    text: "Dit is echt de leukste snackbar van Nijmegen. Plus ze hebben ook de lekkerste kapsalon van Nijmegen! Ik ging hier sowieso 1x in de week een kapsalon scoren toen ik in de buurt woonde.",
    stars: 5,
    tag: "Geverifieerde Gast"
  },
  {
    name: "Mees Thissen",
    date: "5 juni 2023",
    text: "Geweldige snackbar, vrolijke aardige medewerkers en je betaalt een goede prijs voor het overheerlijke eten. De sfeer is altijd gemoedelijk.",
    stars: 5,
    tag: "Lokale Gids"
  },
  {
    name: "Pim",
    date: "30 juni 2023",
    text: "Zeer vriendelijk en netjes. Zeker een aanrader en volgende keer kom ik weer! De friet is precies goed gebakken.",
    stars: 5,
    tag: "Vaste Klant"
  },
  {
    name: "Ina",
    date: "1 februari 2024",
    text: "Heerlijke friet, goede service en het is er altijd schoon. Kortom goede ervaring. De porties zijn ruim voldoende.",
    stars: 5,
    tag: "Buurtbewoner"
  },
  {
    name: "Lars",
    date: "12 maart 2024",
    text: "Meesterlijk zijn de 'schotels': combi's van friet met veel snacks en wat rauwkost. In tentamenperiodes de perfecte plek voor een snelle hap.",
    stars: 4,
    tag: "Student RU"
  },
  {
    name: "Sandra",
    date: "20 mei 2024",
    text: "Prima friettent, vriendelijke mensen en het eten is altijd warm en vers. De friet speciaal is mijn absolute favoriet.",
    stars: 5,
    tag: "Geverifieerde Gast"
  },
  {
    name: "Jesse",
    date: "15 januari 2024",
    text: "De variëteit aan snacks en hapjes die ze hier aanbieden is werkelijk indrukwekkend. Altijd goede kwaliteit.",
    stars: 4,
    tag: "Vaste Klant"
  },
  {
    name: "Bram",
    date: "3 september 2023",
    text: "Beste snackbar van Nijmegen-Zuid. Snelle service en super aardig personeel. De kapsalon is nergens zo lekker als hier.",
    stars: 5,
    tag: "Lokale Gids"
  }
];

export default function ReviewsPage() {
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
                De Stem van <span className="text-brand-red">Brakkenstein</span>
             </h1>
             <p className="text-white/50 font-medium text-sm md:text-lg max-w-xl mx-auto">
                Met een gemiddelde score van 4.7/5 op basis van honderden beoordelingen, zijn wij trots op de waardering van onze gasten.
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
                    "{review.text}"
                   </p>

                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand-charcoal rounded-full flex items-center justify-center text-white font-black text-sm">
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
               <div className="inline-block bg-brand-charcoal p-12 md:p-20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-red opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                  <div className="relative z-10">
                    <MessageSquare size={48} className="text-brand-red mx-auto mb-6" />
                    <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
                       Heb je zelf genoten?
                    </h2>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-10 max-w-sm mx-auto">
                       Laat een recensie achter op Google en help ons Brakkenstein nog lekkerder te maken.
                    </p>
                    <a 
                      href="https://www.google.com/maps" 
                      target="_blank"
                      className="inline-flex items-center gap-3 px-10 py-5 bg-brand-red text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-brand-charcoal transition-all shadow-2xl"
                    >
                      Laat een recensie achter
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
