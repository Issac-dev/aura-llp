import { ArrowRight, ScrollText, Briefcase, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const practiceAreas = [
  {
    icon: ScrollText,
    title: "Wills & Estates",
    description: "Diligent planning to protect your legacy and loved ones.",
    details: ["Estate Planning", "Wills & Trusts", "Power of Attorney", "Probate Services"],
  },
  {
    icon: Briefcase,
    title: "Business Services",
    description: "Clear, strategic legal support for growing and established businesses.",
    details: ["Business Formation", "Commercial Contracts", "Corporate Governance", "Mergers & Acquisitions"],
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description: "Confident guidance for residential and commercial transactions.",
    details: ["Residential Purchases", "Commercial Transactions", "Title Review", "Mortgage Documentation"],
  },
];

const PracticeAreas = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block animate-fade-up">
            Our Practice Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
            Comprehensive Legal Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up animation-delay-200">
            From protecting your personal legacy to navigating complex business transactions, our experienced team delivers results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={area.title}
              className={`group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover-lift border border-border/50 animate-fade-up animation-delay-${(index + 1) * 100}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <area.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {area.details.map((detail) => (
                  <li key={detail} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-3" />
                    {detail}
                  </li>
                ))}
              </ul>
              
              <Button variant="ghost" className="group/btn text-primary hover:text-primary p-0 h-auto">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
