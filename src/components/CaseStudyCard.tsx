
import React from "react";

interface CaseStudyCardProps {
  title: string;
  description: string;
  category: string;
  impact: string;
  image: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  category,
  impact,
  image,
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow card-hover bg-card border border-border">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="px-3 py-1 bg-mrblue-900/50 text-mrblue-300 rounded-full text-sm font-medium">
            {category}
          </span>
          <span className="text-mrteal-400 font-semibold text-sm">{impact}</span>
        </div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
