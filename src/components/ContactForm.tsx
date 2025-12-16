import { useState } from "react";
import { Send, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Consultation Request Received",
      description: "Thank you! A member of our team will contact you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block animate-fade-up">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
              Request Your Confidential Consultation
            </h2>
            <p className="text-muted-foreground text-lg animate-fade-up animation-delay-200">
              Take the first step toward securing your future. Our team will respond within 24 hours.
            </p>
          </div>
          
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border/50 animate-fade-up animation-delay-300"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  How Can We Help?
                </label>
                <Textarea
                  id="message"
                  placeholder="Briefly describe your legal needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="resize-none"
                />
              </div>
              
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Request Consultation
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-border">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <p className="text-xs text-muted-foreground text-center">
                Your information is protected by solicitor-client privilege. We will never share your details.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
