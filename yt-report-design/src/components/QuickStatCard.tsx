import { ExternalLink } from "lucide-react";

interface QuickStatCardProps {
  rank?: number;
  thumbnail: string;
  title: string;
  subtitle: string;
  stat: string;
  statLabel: string;
  category: string;
  onClick?: () => void;
}

export const QuickStatCard = ({
  rank,
  thumbnail,
  title,
  subtitle,
  stat,
  statLabel,
  category,
  onClick,
}: QuickStatCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-card border-[3px] border-secondary rounded-[30px] overflow-hidden card-hover cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {rank && (
          <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-lg">
            {rank}
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="badge-retro text-xs">{category}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg text-foreground mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{subtitle}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-heading text-primary">{stat}</div>
            <div className="text-xs text-muted-foreground uppercase">{statLabel}</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-5 h-5 text-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};
