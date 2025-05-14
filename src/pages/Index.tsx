
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AppLogosCarousel from "@/components/AppLogosCarousel";

const Index = () => {
  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    // Update title
    document.title = "MR Labs - AI & Workflow Automation";

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      {/* Add padding top to accommodate the fixed navbar */}
      <div className="pt-16">
        <Hero />
        <Services />
        <AppLogosCarousel />
        <Portfolio />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
