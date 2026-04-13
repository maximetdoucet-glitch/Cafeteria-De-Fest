import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Utensils, Users, History, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Over Ons | Cafetaria De Fest — Het hart van Brakkenstein",
  description: "Ontdek het verhaal achter Cafetaria De Fest. Van het historische looppad in Brakkenstein tot de favoriete snackbar van Nijmegen sinds 2012.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center bg-brand-charcoal overflow-hidden pt-20">
          <div className="absolute inset-0 opacity-40">
             <Image 
               src="/images/shop-real.png" 
               alt="Cafetaria De Fest Historie" 
               fill 
               className="object-cover grayscale"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-transparent to-brand-charcoal" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs mb-6 inline-block">
               Sinds 2012 in Brakkenstein
            </span>
            <h1 className="font-heading font-black text-6xl md:text-9xl text-white uppercase tracking-tighter leading-none mb-6">
               Het Verhaal van <br/><span className="text-brand-red">De Fest</span>
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
                    Onze Oorsprong
                  </h2>
                  <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
                    <p>
                      De naam <span className="text-brand-charcoal font-bold">"De Fest"</span> is diep geworteld in de historie van de Nijmeegse wijk Brakkenstein. Het verwijst naar het oude looppad dat vroeger door de wijk liep, leidend naar de karakteristieke dorpskerk die inmiddels is afgebroken.
                    </p>
                    <p>
                      Toen wij de zaak overnamen, wilden we deze lokale historie eer aandoen. De Fest is meer dan alleen een naam; het is een symbool voor de verbinding in onze wijk.
                    </p>
                  </div>
                </div>

                <div>
                   <h2 className="text-3xl font-black text-brand-charcoal uppercase tracking-tighter mb-8 flex items-center gap-3">
                    <Users className="text-brand-red" />
                    De Huiskamerfunctie
                  </h2>
                  <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
                    <p>
                      Sinds 2012 wordt de zaak gerund door ons team, met <span className="text-brand-charcoal font-bold">Celal Yilmaz</span> en zijn partners aan het roer. Onze missie was vanaf dag één duidelijk: een plek creëren waar iedereen zich thuis voelt.
                    </p>
                    <p>
                      Van studenten van de nabijgelegen Radboud Universiteit die even snel een kapsalon scoren, tot buurtbewoners die hier al decennia komen voor hun wekelijkse frietje. Wij zijn de huiskamer van de buurt.
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
              <h2 className="text-4xl md:text-6xl font-black text-brand-charcoal uppercase tracking-tighter mb-4">
                 Waar wij voor <span className="text-brand-red">staan</span>
              </h2>
           </div>
           <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Utensils, title: "Kwaliteit", text: "Alleen de beste aardappelen en snacks komen onze keuken in. Wij geloven in ambacht." },
                { icon: Heart, title: "Gastvrijheid", text: "Een brede glimlach en een hartelijk welkom voor iedere gast, elke dag weer." },
                { icon: Users, title: "Verbinding", text: "Wij steunen lokale verenigingen en zijn een trots onderdeel van Brakkenstein." }
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
                 Kom langs en ervaar <br/><span className="text-brand-red">De Fest Sfeer</span>
              </h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                 <a href="/menu" className="px-12 py-5 bg-white text-brand-charcoal font-black uppercase tracking-widest text-xs hover:bg-brand-red hover:text-white transition-all">
                    Bekijk de Menukaart
                 </a>
                 <a href="#location" className="px-12 py-5 border-2 border-white/20 text-white font-black uppercase tracking-widest text-xs hover:border-brand-red transition-all">
                    Onze Locatie
                 </a>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
