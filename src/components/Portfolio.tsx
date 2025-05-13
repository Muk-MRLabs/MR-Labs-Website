
import React from "react";
import CaseStudyCard from "./CaseStudyCard";

const Portfolio = () => {
  const caseStudies = [
    {
      title: "Retail Stock Management",
      description: "We built a smart inventory system for a big retail chain that cut stockouts by 35% and reduced excess inventory costs.",
      category: "Retail",
      impact: "43% more efficient",
      image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
    },
    {
      title: "Finance Department Upgrade",
      description: "We automated bill payments for a manufacturing company. Now 85% of invoices process automatically, saving tons of time.",
      category: "Finance",
      impact: "68% cost savings",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80"
    },
    {
      title: "Customer Service AI",
      description: "We created a chatbot for a telco that now handles 60% of customer questions without needing a human to step in.",
      category: "Support",
      impact: "90% faster replies",
      image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
  ];

  return (
    <section id="portfolio" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our <span className="gradient-text">Work</span></h2>
        
        <p className="text-center max-w-2xl mx-auto mb-16 text-muted-foreground text-xl">
          Check out how we've helped real businesses get amazing results
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
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-muted px-10 py-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="mb-6 text-xl text-muted-foreground">
              We've got plenty more success stories to share
            </p>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-mrblue-400 font-medium text-xl hover:text-mrblue-300 transition-colors"
            >
              Hit us up for more examples
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
