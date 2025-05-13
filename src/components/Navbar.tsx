
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold flex items-center">
            <img 
              src="/lovable-uploads/cf3c985c-d4e7-494c-bd29-3572cb1560f8.png" 
              alt="MR Labs Logo" 
              className={`h-10 w-10 mr-2 ${isScrolled ? "invert" : ""}`} 
            />
            <span className={`gradient-text ${isScrolled ? "text-xl" : "text-2xl"} transition-all duration-300`}>MR Labs</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-mrblue-400 transition-colors text-lg"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-mrblue-400 transition-colors text-lg"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-foreground hover:text-mrblue-400 transition-colors text-lg"
          >
            Our Work
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-mrblue-500 to-mrteal-500 hover:from-mrblue-600 hover:to-mrteal-600 text-white text-lg"
          >
            Talk to Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-foreground p-2"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="py-2 text-foreground hover:text-mrblue-400 transition-colors text-left text-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="py-2 text-foreground hover:text-mrblue-400 transition-colors text-left text-lg"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="py-2 text-foreground hover:text-mrblue-400 transition-colors text-left text-lg"
            >
              Our Work
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-mrblue-500 to-mrteal-500 hover:from-mrblue-600 hover:to-mrteal-600 text-white w-full text-lg"
            >
              Talk to Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
