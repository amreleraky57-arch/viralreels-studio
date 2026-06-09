import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { VideoShowcase } from "@/components/site/VideoShowcase";
import { Stats } from "@/components/site/Stats";
import { Results } from "@/components/site/Results";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <VideoShowcase />
          <Results />
          <About />
          <CTA />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LanguageProvider>
  );
}
