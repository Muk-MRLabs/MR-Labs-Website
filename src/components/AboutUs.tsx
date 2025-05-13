
import React from "react";
import TeamMember from "./TeamMember";

const AboutUs = () => {
  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "Alex has over 15 years of experience in AI and software development, with a passion for helping businesses transform their operations through automation.",
      imagePath: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Sarah leads our technical team with expertise in machine learning, AI integration, and developing cutting-edge automation solutions.",
      imagePath: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    },
    {
      name: "Michael Roberts",
      role: "Head of Client Solutions",
      bio: "Michael specializes in analyzing client workflows and developing tailored automation strategies that deliver measurable results.",
      imagePath: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About <span className="gradient-text">MR Labs</span></h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="mb-4">
              Founded in Melbourne in 2015, MR Labs began with a simple mission: to make 
              powerful AI automation accessible to businesses of all sizes. What started as 
              a small consulting firm has grown into a leading automation agency trusted by 
              businesses across Australia and beyond.
            </p>
            <p className="mb-4">
              Our team combines deep technical expertise with business acumen to deliver 
              solutions that don't just look impressive—they drive real results for our clients.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Our Mission</h3>
            <p>
              We exist to bridge the gap between cutting-edge AI technology and practical 
              business applications. Our mission is to help organizations work smarter, not 
              harder, by implementing intelligent automation that removes friction, 
              reduces costs, and creates new opportunities for growth.
            </p>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-video bg-gradient-to-tr from-mrblue-500 to-mrteal-500 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-medium">MR Labs Office, Melbourne</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-muted rounded-lg z-0"></div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-8">Meet Our Leadership Team</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {team.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imagePath={member.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
