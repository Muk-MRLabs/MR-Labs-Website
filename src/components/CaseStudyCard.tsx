
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
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 bg-white">
        <div className="flex justify-between items-center mb-3">
          <span className="px-3 py-1 bg-mrblue-50 text-mrblue-600 rounded-full text-xs font-medium">
            {category}
          </span>
          <span className="text-mrteal-600 font-semibold text-sm">{impact}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
