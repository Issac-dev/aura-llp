import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueMessaging from "@/components/ValueMessaging";
import PracticeAreas from "@/components/PracticeAreas";
import TrustAssurance from "@/components/TrustAssurance";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueMessaging />
        <section id="practice-areas">
          <PracticeAreas />
        </section>
        <TrustAssurance />
        <section id="about">
          <WhyChooseUs />
        </section>
        <ContactForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
