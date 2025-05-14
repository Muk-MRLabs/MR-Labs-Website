import React from "react";
import ServiceCard from "./ServiceCard";
const Services = () => {
  const services = [{
    title: "App Integration",
    description: "Connect your tools so they work together. No more copying data between systems.",
    icon: "workflow"
  }, {
    title: "Process Streamlining",
    description: "Make your business run smoother. Cut out bottlenecks that slow you down.",
    icon: "activity"
  }, {
    title: "Custom AI Tools",
    description: "AI that works for you - handling docs, data, customers, whatever you need.",
    icon: "database"
  }, {
    title: "Robotic Automation",
    description: "Let robots handle the boring stuff. Free up your team for what matters.",
    icon: "cog"
  }, {
    title: "Data Insights",
    description: "Pull all your data into one place. See the big picture and make smarter moves.",
    icon: "pie-chart"
  }, {
    title: "AI Strategy",
    description: "Figure out where AI fits in your business. Get a plan that actually helps.",
    icon: "monitor"
  }];
  return <section id="services" className="bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">What We <span className="gradient-text">Do</span></h2>
        
        <p className="text-center text-xl max-w-2xl mx-auto mb-16 text-muted-foreground">
          We help businesses do more with less. Automation that saves time, 
          cuts costs, and helps you grow.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} iconName={service.icon} />)}
        </div>
        
        <div className="mt-20 bg-card rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">How We Work</h3>
              <p className="mb-6 text-xl">Every business is unique. That's why we don't use cookie-cutter solutions. Here's how we tackle your unique challenges:</p>
              <ol className="space-y-6">
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-mrblue-500 to-mrteal-500 text-white text-lg mr-4">1</span>
                  <span className="text-lg"><strong>Chat & Listen:</strong> We figure out where you're stuck and what you need.</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-mrblue-500 to-mrteal-500 text-white text-lg mr-4">2</span>
                  <span className="text-lg"><strong>Build a Plan:</strong> We design something that fits your business perfectly.</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-mrblue-500 to-mrteal-500 text-white text-lg mr-4">3</span>
                  <span className="text-lg"><strong>Make It Happen:</strong> We set everything up with minimal disruption.</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-mrblue-500 to-mrteal-500 text-white text-lg mr-4">4</span>
                  <span className="text-lg"><strong>Show You How:</strong> We make sure you know how to use everything.</span>
                </li>
              </ol>
            </div>
            <div className="bg-background rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">What You Get</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-mrblue-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Cut costs by up to 60%</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-mrblue-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Increase leads and sales</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-mrblue-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Free up your team for more important stuff</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-mrblue-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Happier customers with a faster service</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-mrblue-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Grow without hiring tons more people</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-mrblue-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">See what's really happening in your business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;