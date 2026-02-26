import { 
  TrendingUp, 
  Trophy, 
  Users, 
  BarChart3, 
  Sparkles, 
  Music, 
  Activity, 
  FileText,
  Info
} from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { icon: TrendingUp, label: "All-Time Most-Viewed", href: "/most-viewed", color: "primary" },
  { icon: Trophy, label: "2025 Milestones", href: "/milestones", color: "secondary" },
  { icon: Users, label: "Top Creators", href: "/creators", color: "primary" },
  { icon: BarChart3, label: "Genre Analysis", href: "/genres", color: "secondary" },
  { icon: Sparkles, label: "Cultural Phenomena", href: "/phenomena", color: "primary" },
  { icon: Music, label: "Music Charts", href: "/music", color: "secondary" },
  { icon: Activity, label: "Platform Trends", href: "/trends", color: "primary" },
  { icon: FileText, label: "Sources", href: "/sources", color: "secondary" },
  { icon: Info, label: "About", href: "/about", color: "primary" },
];

export const NavigationHub = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {navItems.map((item, index) => (
        <Link
          key={item.label}
          to={item.href}
          className={`group flex flex-col items-center p-6 rounded-[20px] border-[3px] transition-all duration-300 hover:-translate-y-1 ${
            item.color === "primary" 
              ? "bg-primary/5 border-primary/30 hover:border-primary hover:bg-primary/10" 
              : "bg-secondary/5 border-secondary/30 hover:border-secondary hover:bg-secondary/10"
          }`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-colors ${
            item.color === "primary" 
              ? "bg-primary/10 group-hover:bg-primary text-primary group-hover:text-primary-foreground" 
              : "bg-secondary/10 group-hover:bg-secondary text-secondary group-hover:text-secondary-foreground"
          }`}>
            <item.icon className="w-6 h-6" />
          </div>
          <span className="font-bold-body text-sm text-center text-foreground">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
};
