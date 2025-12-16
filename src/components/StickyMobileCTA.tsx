import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyMobileCTA = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4 safe-area-pb">
      <Button
        onClick={scrollToContact}
        variant="sticky"
        size="lg"
        className="w-full"
      >
        Book Free Consultation
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default StickyMobileCTA;
