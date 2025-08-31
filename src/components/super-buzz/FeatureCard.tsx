import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard = ({ icon, title, description, className = "", style }: FeatureCardProps) => {
  return (
    <Card className={`group hover:shadow-buzz transition-all duration-300 hover:-translate-y-2 border-0 shadow-card ${className}`} style={style}>
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-buzz-red-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="text-buzz-red text-2xl">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-4 text-buzz-text group-hover:text-buzz-red transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;