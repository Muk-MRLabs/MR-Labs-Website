import React from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <img src="/lovable-uploads/b1e34a76-0579-453d-bed3-39841e7c8d00.png" alt="MR Labs Logo" className="h-10 w-auto mr-2" />
              <span className="gradient-text">MR Labs</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Transforming businesses through intelligent automation and AI solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-8 w-8 rounded-full bg-mrblue-100 flex items-center justify-center text-mrblue-600 hover:bg-mrblue-200 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              
              <a href="#" className="h-8 w-8 rounded-full bg-mrblue-100 flex items-center justify-center text-mrblue-600 hover:bg-mrblue-200 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-muted-foreground hover:text-mrblue-500 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-mrblue-500 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("portfolio")} className="text-muted-foreground hover:text-mrblue-500 transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-mrblue-500 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-mrblue-500 transition-colors">
                  App Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-mrblue-500 transition-colors">
                  Workflow Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-mrblue-500 transition-colors">
                  Custom AI Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-mrblue-500 transition-colors">
                  RPA Implementation
                </a>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="text-muted-foreground mb-2">
                Level 5, 123 Collins Street<br />
                Melbourne VIC 3000<br />
                Australia
              </p>
              <p className="text-muted-foreground mb-1">
                 +61 3 9876 5432
              </p>
              <p className="text-muted-foreground">
                 info@mrlabs.com.au
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} MR Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;