import { Shield, FileCheck, Calendar } from "lucide-react";

const values = [
  {
    icon: Shield,
    headline: "First, Secure Your Assets.",
    description: "Protect what you've built with comprehensive legal strategies designed for lasting security.",
  },
  {
    icon: FileCheck,
    headline: "Next, Formalize Your Future.",
    description: "Document your intentions with precision, ensuring your wishes are honored and your legacy preserved.",
  },
  {
    icon: Calendar,
    headline: "Close the Year with Confidence.",
    description: "End each chapter knowing your affairs are in order, with proactive planning that anticipates tomorrow.",
  },
];

const ValueMessaging = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-up">
            Legal Planning That Works For You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up animation-delay-100">
            A methodical approach to protecting your interests, securing your legacy, and ensuring peace of mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.headline}
              className={`group text-center p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover-lift animate-fade-up animation-delay-${(index + 1) * 100}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.headline}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueMessaging;
