
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted pt-20">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <img src="/lovable-uploads/cf3c985c-d4e7-494c-bd29-3572cb1560f8.png" alt="MR Labs Logo" className="w-32 h-32" />
          </div>
          
          <h1 className="mb-8">
            <span className="block text-foreground">
              Supercharge Your Business with
            </span>
            <span className="gradient-text">
              AI & Automation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">Making businesses work smarter, cut costs, save time, boost profits.</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button onClick={() => scrollToSection("services")} className="bg-gradient-to-r from-mrblue-500 to-mrteal-500 hover:from-mrblue-600 hover:to-mrteal-600 text-white px-8 py-6 text-xl">
              See What We Do
            </Button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" className="border-mrblue-500 text-foreground hover:bg-mrblue-900/50 px-8 py-6 text-xl group">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold gradient-text">3+</span>
              <span className="text-base text-muted-foreground mt-2">Happy Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold gradient-text">95%</span>
              <span className="text-base text-muted-foreground mt-2">Stay With Us</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold gradient-text">$10k</span>
              <span className="text-base text-muted-foreground mt-2">Cost Saved</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold gradient-text">3+</span>
              <span className="text-base text-muted-foreground mt-2">Years Doing This</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
