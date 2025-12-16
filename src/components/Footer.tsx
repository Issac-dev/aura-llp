import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold tracking-tight mb-4">
              Aura<span className="font-light">LLP</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-md">
              Ontario's trusted legal partner for Wills & Estates, Business Services, and Real Estate. Uncompromising value, delivered with clarity and care.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-primary-foreground/70">5.0 on Google</span>
            </div>
          </div>
          
          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Wills & Estates</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Business Services</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Residential Real Estate</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Commercial Real Estate</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Bay Street, Suite 400<br />Toronto, ON M5J 2T3</span>
              </li>
              <li>
                <a href="tel:4165550123" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  (416) 555-0123
                </a>
              </li>
              <li>
                <a href="mailto:info@aurallp.ca" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  info@aurallp.ca
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
            <p>© 2024 Aura LLP — Demo. This is a conversion optimization demonstration, not a real law firm website.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground/70 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground/70 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground/70 transition-colors">Accessibility</a>
            </div>
          </div>
          <p className="text-xs text-primary-foreground/40 mt-4 text-center md:text-left">
            The information on this website is for general informational purposes only and does not constitute legal advice. Please consult with a qualified lawyer for advice on specific legal issues.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
