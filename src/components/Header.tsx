import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              Aura<span className="font-light">LLP</span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#practice-areas"
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Practice Areas
            </a>
            <a
              href="#about"
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Contact
            </a>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:4165550123"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              (416) 555-0123
            </a>
            <Button
              onClick={scrollToContact}
              variant={isScrolled ? "default" : "hero"}
              size="sm"
              className={!isScrolled ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : ""}
            >
              Book Consultation
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-elevated border-t border-border animate-fade-in">
            <div className="container py-6 space-y-4">
              <a
                href="#practice-areas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground font-medium py-2"
              >
                Practice Areas
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground font-medium py-2"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground font-medium py-2"
              >
                Contact
              </a>
              <div className="pt-4 border-t border-border">
                <a
                  href="tel:4165550123"
                  className="flex items-center gap-2 text-foreground font-medium py-2"
                >
                  <Phone className="w-4 h-4" />
                  (416) 555-0123
                </a>
                <Button onClick={scrollToContact} variant="default" size="lg" className="w-full mt-4">
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
