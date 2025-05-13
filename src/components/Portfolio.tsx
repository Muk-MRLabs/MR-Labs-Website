
import React from "react";
import CaseStudyCard from "./CaseStudyCard";

const Portfolio = () => {
  const caseStudies = [
    {
      title: "Retail Inventory Automation",
      description: "For a leading Australian retail chain, we developed an AI-powered inventory management system that reduced stockouts by 35% and decreased excess inventory costs by 28%.",
      category: "Retail",
      impact: "43% efficiency increase",
      image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
    },
    {
      title: "Finance Department Workflow Optimization",
      description: "We redesigned the accounts payable process for a mid-size manufacturing company, automating 85% of the invoice processing workflow and integrating with their existing ERP system.",
      category: "Finance",
      impact: "68% cost reduction",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80"
    },
    {
      title: "Customer Support AI Assistant",
      description: "Our team built a conversational AI solution for a telecommunications provider that now handles 60% of customer inquiries without human intervention.",
      category: "Customer Service",
      impact: "90% faster response times",
      image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
  ];

  return (
    <section id="portfolio" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our <span className="gradient-text">Portfolio</span></h2>
        
        <p className="text-center max-w-2xl mx-auto mb-12 text-muted-foreground">
          See how our automation solutions have helped real businesses achieve extraordinary results and competitive advantages.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              description={study.description}
              category={study.category}
              impact={study.impact}
              image={study.image}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-muted px-8 py-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Looking for more examples?</h3>
            <p className="mb-4 text-muted-foreground">
              We have many more success stories we'd be happy to share.
            </p>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-mrblue-500 font-medium hover:text-mrblue-700 transition-colors"
            >
              Contact us for a tailored case study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
