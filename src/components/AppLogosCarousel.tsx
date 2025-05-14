
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const applicationLogos = [
  { name: "Slack", icon: "slack" },
  { name: "Microsoft Teams", icon: "teams" },
  { name: "Google Workspace", icon: "google" },
  { name: "Trello", icon: "trello" },
  { name: "Asana", icon: "asana" },
  { name: "Jira", icon: "jira" },
  { name: "Salesforce", icon: "salesforce" },
  { name: "Hubspot", icon: "hubspot" },
  { name: "Notion", icon: "notion" },
  { name: "Airtable", icon: "airtable" },
  { name: "Zapier", icon: "zapier" },
  { name: "Make", icon: "make" },
  { name: "Monday", icon: "monday" },
  { name: "ClickUp", icon: "clickup" },
  { name: "Zendesk", icon: "zendesk" },
  { name: "Stripe", icon: "stripe" },
  { name: "Shopify", icon: "shopify" },
  { name: "QuickBooks", icon: "quickbooks" },
  { name: "Xero", icon: "xero" },
  { name: "DocuSign", icon: "docusign" },
  { name: "Dropbox", icon: "dropbox" },
  { name: "Box", icon: "box" },
  { name: "GitHub", icon: "github" },
  { name: "GitLab", icon: "gitlab" },
  { name: "Bitbucket", icon: "bitbucket" },
  { name: "Linear", icon: "linear" },
  { name: "Figma", icon: "figma" },
  { name: "Adobe", icon: "adobe" },
  { name: "Zoom", icon: "zoom" },
  { name: "Calendly", icon: "calendly" },
  { name: "Intercom", icon: "intercom" },
  { name: "Mailchimp", icon: "mailchimp" },
  { name: "Typeform", icon: "typeform" },
  { name: "Miro", icon: "miro" },
  { name: "Webflow", icon: "webflow" },
  { name: "WordPress", icon: "wordpress" },
  { name: "Contentful", icon: "contentful" },
  { name: "Twilio", icon: "twilio" },
  { name: "AWS", icon: "aws" },
  { name: "Google Cloud", icon: "gcloud" },
  { name: "Azure", icon: "azure" },
];

const AppLogosCarousel = () => {
  return (
    <div className="w-full py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="gradient-text">Apps We Connect</span>
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {applicationLogos.map((app, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="h-24 p-2 flex flex-col items-center justify-center">
                  <div className="h-12 w-12 bg-white rounded-md flex items-center justify-center mb-2">
                    <div className="text-xl font-bold text-mrblue-600">{app.name.charAt(0)}</div>
                  </div>
                  <span className="text-xs text-center text-muted-foreground">{app.name}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default AppLogosCarousel;
