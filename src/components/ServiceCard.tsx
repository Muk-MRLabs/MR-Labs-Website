import React from "react";
import { Workflow, Activity, Database, Cog, PieChart, Monitor } from "lucide-react";
interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconName
}) => {
  const getIcon = () => {
    switch (iconName) {
      case "workflow":
        return <Workflow className="h-10 w-10" />;
      case "activity":
        return <Activity className="h-10 w-10" />;
      case "database":
        return <Database className="h-10 w-10" />;
      case "cog":
        return <Cog className="h-10 w-10" />;
      case "pie-chart":
        return <PieChart className="h-10 w-10" />;
      case "monitor":
        return <Monitor className="h-10 w-10" />;
      default:
        return <Database className="h-10 w-10" />;
    }
  };
  return <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow card-hover">
      <div className="h-14 w-14 rounded-full bg-gradient-to-r from-mrblue-100 to-mrteal-100 flex items-center justify-center mb-4 text-mrblue-600">
        {getIcon()}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>;
};
export default ServiceCard;