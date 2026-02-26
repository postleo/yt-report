interface TimelineItemProps {
  month: string;
  title: string;
  description: string;
  type: "music" | "creator" | "platform" | "cultural";
  isActive?: boolean;
}

const typeColors = {
  music: "bg-primary",
  creator: "bg-secondary",
  platform: "bg-muted-foreground",
  cultural: "bg-primary/70",
};

const typeLabels = {
  music: "Music",
  creator: "Creator",
  platform: "Platform",
  cultural: "Cultural",
};

export const TimelineItem = ({ month, title, description, type, isActive }: TimelineItemProps) => {
  return (
    <div className={`flex-shrink-0 w-72 bg-card border-[3px] rounded-[20px] p-5 transition-all duration-300 ${isActive ? 'border-primary shadow-lg' : 'border-secondary/50'}`}>
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-3 h-3 rounded-full ${typeColors[type]}`} />
        <span className="text-xs font-bold-body text-muted-foreground uppercase">{month}</span>
        <span className="ml-auto text-xs text-muted-foreground">{typeLabels[type]}</span>
      </div>
      
      <h4 className="font-heading text-base text-foreground mb-2 line-clamp-2">
        {title}
      </h4>
      
      <p className="text-sm text-muted-foreground line-clamp-2">
        {description}
      </p>
    </div>
  );
};
