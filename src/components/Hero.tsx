import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.webp";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-green-dark/85" />
      
      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up leading-tight">
            Uncompromising Peace of Mind.
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 animate-fade-up animation-delay-100 max-w-2xl leading-relaxed">
            Expert legal guidance in Wills & Estates, Business Services, and Real Estate — delivered with clarity, diligence, and transparency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-200">
            <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/95 group">
              Book a Free Confidential Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="heroOutline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50">
              <Phone className="w-5 h-5" />
              (416) 900-0389
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-primary-foreground/10 animate-fade-up animation-delay-300">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-primary-foreground/80 text-sm font-medium">5.0 Google Rating</span>
            </div>
            <div className="h-4 w-px bg-primary-foreground/20" />
            <span className="text-primary-foreground/80 text-sm">20+ Years of Experience</span>
            <div className="h-4 w-px bg-primary-foreground/20" />
            <span className="text-primary-foreground/80 text-sm">Ontario-Based Legal Experts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
