import { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

interface StatCardProps {
  title: string;
  value: number;
  suffix?: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export const StatCard = ({ title, value, suffix = "", description, icon: Icon, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className="bg-card border-[3px] border-secondary rounded-[30px] p-6 card-hover animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <span className="badge-retro text-xs">{title}</span>
      </div>
      
      <div className="text-4xl font-heading text-foreground mb-2">
        <AnimatedCounter end={value} suffix={suffix} />
      </div>
      
      <p className="text-sm text-muted-foreground font-body">
        {description}
      </p>
    </div>
  );
};
