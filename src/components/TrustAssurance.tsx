import { Gift, Shield, Lock, Quote } from "lucide-react";

const TrustAssurance = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-foreground/3 rounded-full blur-3xl translate-y-1/4 translate-x-1/4" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Messaging */}
          <div>
            <span className="text-primary-foreground/70 font-medium text-sm tracking-wider uppercase mb-4 block animate-fade-up">
              Trust & Assurance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up animation-delay-100">
              Your Future, Secured.
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10 animate-fade-up animation-delay-200">
              For over two decades, we've helped Ontario families and businesses navigate complex legal matters with confidence, discretion, and unwavering commitment to their success.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 animate-fade-up animation-delay-300">
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-foreground/10 mb-3">
                  <Gift className="w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-1">The Gift of Certainty</h3>
                <p className="text-sm text-primary-foreground/70">Peace of mind for you and your family</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-foreground/10 mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-1">Legacy Protection</h3>
                <p className="text-sm text-primary-foreground/70">Safeguard what matters most</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-foreground/10 mb-3">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-1">Confidential Service</h3>
                <p className="text-sm text-primary-foreground/70">Discretion in every matter</p>
              </div>
            </div>
          </div>
          
          {/* Right - Testimonial */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 animate-fade-up animation-delay-400">
            <Quote className="w-10 h-10 text-primary-foreground/30 mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
              "Aura LLP provided exceptional guidance through our estate planning. Their attention to detail and genuine care for our family's future gave us true peace of mind."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center text-lg font-semibold">
                M.T.
              </div>
              <div>
                <p className="font-semibold">Margaret T.</p>
                <p className="text-sm text-primary-foreground/70">Wills & Estates Client</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1 mt-6 pt-6 border-t border-primary-foreground/10">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-primary-foreground/70">Google Verified Review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAssurance;
