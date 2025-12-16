import { Check } from "lucide-react";

const benefits = [
  {
    title: "Transparent Legal Guidance",
    description: "Clear communication at every stage, with no hidden fees or surprises. You'll always know where you stand.",
  },
  {
    title: "Personalized, Collaborative Service",
    description: "We work alongside you, understanding your unique situation and tailoring solutions to your specific needs.",
  },
  {
    title: "Deep Expertise Across Ontario Law",
    description: "Decades of experience navigating Ontario's legal landscape, from family estates to complex commercial matters.",
  },
  {
    title: "Proactive, Detail-Driven Execution",
    description: "We anticipate challenges before they arise, ensuring nothing falls through the cracks in your legal matters.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block animate-fade-up">
              Why Clients Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
              Uncompromising Value, Delivered
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 animate-fade-up animation-delay-200">
              At Aura LLP, we believe exceptional legal service shouldn't come with compromise. Our commitment to your success is reflected in everything we do.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`flex gap-4 animate-fade-up animation-delay-${(index + 2) * 100}`}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-up animation-delay-400">
            <div className="bg-secondary/50 rounded-2xl p-6 text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground text-sm">Years of Experience</div>
            </div>
            <div className="bg-secondary/50 rounded-2xl p-6 text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground text-sm">Clients Served</div>
            </div>
            <div className="bg-secondary/50 rounded-2xl p-6 text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5.0</div>
              <div className="text-muted-foreground text-sm">Google Rating</div>
            </div>
            <div className="bg-secondary/50 rounded-2xl p-6 text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground text-sm">Client Confidentiality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
