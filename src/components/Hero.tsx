
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-mrblue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-mrteal-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-mrblue-50 rounded-full blur-xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="mb-6">
            <span className="block font-semibold text-foreground">
              Transform Your Business with
            </span>
            <span className="gradient-text font-bold">
              AI & Workflow Automation
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            MR Labs helps businesses in Melbourne and beyond improve efficiency, 
            cut costs, and increase profits through intelligent automation solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("services")}
              className="bg-gradient-to-r from-mrblue-500 to-mrteal-500 hover:from-mrblue-600 hover:to-mrteal-600 text-white px-8 py-6 text-lg"
            >
              Explore Our Solutions
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-mrblue-300 text-foreground hover:bg-mrblue-50 px-8 py-6 text-lg group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold gradient-text">100+</span>
              <span className="text-sm text-muted-foreground">Happy Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold gradient-text">95%</span>
              <span className="text-sm text-muted-foreground">Client Retention</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold gradient-text">30%</span>
              <span className="text-sm text-muted-foreground">Avg. Cost Reduction</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold gradient-text">10+</span>
              <span className="text-sm text-muted-foreground">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
