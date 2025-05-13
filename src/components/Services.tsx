
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "App Integration",
      description: "Connect your existing software tools to create seamless workflows and eliminate manual data transfers.",
      icon: "workflow",
    },
    {
      title: "Workflow Optimization",
      description: "Analyze and redesign your business processes to reduce bottlenecks and maximize efficiency.",
      icon: "activity",
    },
    {
      title: "Custom AI Solutions",
      description: "Develop tailored AI solutions for document processing, data analysis, customer service, and more.",
      icon: "database",
    },
    {
      title: "RPA Implementation",
      description: "Automate repetitive tasks and processes with Robotic Process Automation technology.",
      icon: "cog",
    },
    {
      title: "Data Integration & Analytics",
      description: "Consolidate data from multiple sources to gain valuable business insights and improve decision making.",
      icon: "pie-chart",
    },
    {
      title: "AI Consultancy",
      description: "Strategic guidance on how to leverage AI to achieve your specific business objectives.",
      icon: "monitor",
    },
  ];

  return (
    <section id="services" className="bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our <span className="gradient-text">Services</span></h2>
        
        <p className="text-center max-w-2xl mx-auto mb-12 text-muted-foreground">
          We offer end-to-end automation solutions that help businesses streamline operations, 
          reduce costs, and drive growth through intelligent technology.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconName={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="mb-4">
                Every business is unique, which is why we follow a systematic approach to 
                delivering automation solutions that address your specific challenges and objectives.
              </p>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-mrblue-500 to-mrteal-500 text-white text-sm mr-3">1</span>
                  <span><strong>Discovery & Analysis:</strong> We begin by understanding your business processes, pain points, and goals.</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-mrblue-500 to-mrteal-500 text-white text-sm mr-3">2</span>
                  <span><strong>Solution Design:</strong> Our team designs a custom automation solution tailored to your needs.</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-mrblue-500 to-mrteal-500 text-white text-sm mr-3">3</span>
                  <span><strong>Implementation:</strong> We develop and deploy your solution with minimal disruption to operations.</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-mrblue-500 to-mrteal-500 text-white text-sm mr-3">4</span>
                  <span><strong>Training & Support:</strong> We provide comprehensive training and ongoing support.</span>
                </li>
              </ol>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Benefits of Our Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-mrblue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduce operational costs by up to 40%</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-mrblue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Improve process efficiency and accuracy</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-mrblue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free up staff time for higher-value work</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-mrblue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enhance customer experience through faster service</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-mrblue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Scale operations without proportionally increasing costs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-mrblue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gain valuable business insights from integrated data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
