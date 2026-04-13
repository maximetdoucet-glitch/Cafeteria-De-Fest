import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "Over Ons | Cafetaria De Fest — Het hart van Brakkenstein",
  description: "Ontdek het verhaal achter Cafetaria De Fest. Van het historische looppad in Brakkenstein tot de favoriete snackbar van Nijmegen sinds 2012.",
};

export default function AboutPage() {
  return <AboutContent />;
}
