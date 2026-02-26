import { Play } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        {/* Scalloped border effect */}
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg scalloped-top">
          <Play className="w-8 h-8 text-primary-foreground fill-current" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-heading text-xl text-foreground">YT REPORT</span>
        <span className="text-sm text-muted-foreground font-bold-body">2025</span>
      </div>
    </div>
  );
};
