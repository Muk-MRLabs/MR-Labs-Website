
import React, { useEffect, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const applicationLogos = [
  { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-2019.svg" },
  { name: "Microsoft Teams", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg" },
  { name: "Google Workspace", logo: "https://cdn.worldvectorlogo.com/logos/google-workspace-icon-2020-.svg" },
  { name: "Trello", logo: "https://cdn.worldvectorlogo.com/logos/trello.svg" },
  { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg" },
  { name: "Jira", logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
  { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
  { name: "Hubspot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
  { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" },
  { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable.svg" },
  { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg" },
  { name: "Monday", logo: "https://cdn.worldvectorlogo.com/logos/monday-1.svg" },
  { name: "ClickUp", logo: "https://cdn.worldvectorlogo.com/logos/clickup.svg" },
  { name: "Zendesk", logo: "https://cdn.worldvectorlogo.com/logos/zendesk-1.svg" },
  { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
  { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
  { name: "QuickBooks", logo: "https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg" },
  { name: "DocuSign", logo: "https://cdn.worldvectorlogo.com/logos/docusign-1.svg" },
  { name: "Dropbox", logo: "https://cdn.worldvectorlogo.com/logos/dropbox-1.svg" },
  { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
  { name: "GitLab", logo: "https://cdn.worldvectorlogo.com/logos/gitlab.svg" },
  { name: "Linear", logo: "https://cdn.worldvectorlogo.com/logos/linear-logo-1.svg" },
  { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
  { name: "Adobe", logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg" },
  { name: "Zoom", logo: "https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg" },
  { name: "Calendly", logo: "https://cdn.worldvectorlogo.com/logos/calendly.svg" },
  { name: "Intercom", logo: "https://cdn.worldvectorlogo.com/logos/intercom-1.svg" },
  { name: "Mailchimp", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon-1.svg" },
  { name: "Typeform", logo: "https://cdn.worldvectorlogo.com/logos/typeform-2.svg" },
  { name: "Miro", logo: "https://cdn.worldvectorlogo.com/logos/miro-2.svg" },
  { name: "Webflow", logo: "https://cdn.worldvectorlogo.com/logos/webflow-1.svg" },
  { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg" },
  { name: "Contentful", logo: "https://cdn.worldvectorlogo.com/logos/contentful.svg" },
  { name: "Twilio", logo: "https://cdn.worldvectorlogo.com/logos/twilio-2.svg" },
  { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
  { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
  { name: "Azure", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-3.svg" },
];

const AppLogosCarousel = () => {
  const [api, setApi] = useState<any>(null);

  const autoplayPlugin = React.useMemo(
    () =>
      Autoplay({
        delay: 3000, // Slow and readable speed (3 seconds per slide)
        stopOnInteraction: false, // Continue autoplay after user interaction
        stopOnMouseEnter: false, // Don't stop on mouse enter
      }),
    []
  );

  return (
    <div className="w-full py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="gradient-text">Apps We Connect</span>
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true, // Enable looping
          }}
          plugins={[autoplayPlugin]} // Add the autoplay plugin
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {applicationLogos.map((app, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="h-24 p-2 flex flex-col items-center justify-center">
                  <div className="h-12 w-12 bg-muted rounded-md flex items-center justify-center mb-2 overflow-hidden">
                    <img 
                      src={app.logo} 
                      alt={`${app.name} logo`} 
                      className="h-8 w-8 object-contain" 
                    />
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
