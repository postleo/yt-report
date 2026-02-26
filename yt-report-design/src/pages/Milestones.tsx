import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, Trophy, Calendar, Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const milestones = [
  {
    date: "January 31, 2025",
    type: "music" as const,
    impact: 5,
    title: "APT. Becomes Fastest K-Pop Video to 1 Billion Views",
    stats: { days: "105 days", views: "1B+", artists: "ROSÉ & Bruno Mars" },
    description: "Breaking all previous K-Pop records, APT. achieved 1 billion views in just 105 days, surpassing Gangnam Style's long-held record.",
    source: "Wikipedia, Billboard Korea",
  },
  {
    date: "January 27, 2025",
    type: "creator" as const,
    impact: 5,
    title: "MrBeast Breaks Most-Liked Video Record",
    stats: { likes: "56M+", video: "Paris Baguette", previous: "Despacito" },
    description: "MrBeast's 'Would You Fly to Paris for a Baguette?' surpassed Despacito to become the most-liked video in YouTube history.",
    source: "Social Blade, YouTube Analytics",
  },
  {
    date: "February 2025",
    type: "platform" as const,
    impact: 4,
    title: "YouTube Recap Launches Globally",
    stats: { users: "Millions", feature: "Personalized", regions: "Global" },
    description: "YouTube's new personalized year-in-review feature rolls out to all users, similar to Spotify Wrapped.",
    source: "YouTube Official Blog",
  },
  {
    date: "March 2025",
    type: "cultural" as const,
    impact: 4,
    title: "K-Pop Demon Hunters Goes Viral",
    stats: { views: "349M+", content: "UGC", type: "Fictional" },
    description: "A fictional K-Pop girl group phenomenon captures millions through user-generated fancams and lore videos.",
    source: "YouTube Culture Report 2025",
  },
  {
    date: "May 2025",
    type: "music" as const,
    impact: 5,
    title: "Die With A Smile Reaches 1 Billion Views",
    stats: { views: "1B+", time: "<9 months", collab: "Gaga & Bruno" },
    description: "Lady Gaga and Bruno Mars' collaboration becomes Bruno's 10th billion-view video.",
    source: "YouTube Charts, Billboard",
  },
  {
    date: "May 2025",
    type: "creator" as const,
    impact: 5,
    title: "The Final Experiment Becomes Top Video of 2025",
    stats: { views: "698M+", creator: "MrBeast", duration: "22 min" },
    description: "MrBeast's survival video achieves the highest view count of any video released in 2025.",
    source: "Social Blade, YouTube Analytics",
  },
  {
    date: "June 23, 2025",
    type: "platform" as const,
    impact: 5,
    title: "YouTube Celebrates 20 Years",
    stats: { founded: "2005", videos: "Billions", users: "2B+" },
    description: "The platform marks two decades since 'Me at the zoo' was uploaded, becoming the world's largest video platform.",
    source: "YouTube Official",
  },
];

const typeColors = {
  music: "bg-primary border-primary",
  creator: "bg-secondary border-secondary",
  platform: "bg-muted-foreground border-muted-foreground",
  cultural: "bg-primary/70 border-primary/70",
};

const typeLabels = {
  music: "Music",
  creator: "Creator",
  platform: "Platform",
  cultural: "Cultural",
};

const Milestones = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Header />

      {/* Page Header */}
      <section className="py-12 border-b-[3px] border-secondary/20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-bold-body text-sm">Back to Home</span>
          </Link>

          <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-4">
            2025 MILESTONES
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Major achievements and record-breaking moments from YouTube's year in data.
          </p>

          {/* Summary Stats */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="font-bold-body">15+ Billion-View Club Additions</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-bold-body">8 New Records</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-bold-body">3 Cultural Phenomena</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-secondary/20 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-8">
                  {/* Timeline Dot */}
                  <div className={`hidden md:flex w-16 h-16 rounded-full ${typeColors[milestone.type]} items-center justify-center flex-shrink-0 z-10`}>
                    <span className="text-white font-heading text-lg">{index + 1}</span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 md:p-8 card-hover">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`badge-retro ${milestone.type === 'creator' || milestone.type === 'platform' ? 'bg-secondary' : ''}`}>
                        {typeLabels[milestone.type]}
                      </span>
                      <span className="text-sm text-muted-foreground">{milestone.date}</span>
                      <div className="flex items-center gap-1 ml-auto">
                        {Array.from({ length: milestone.impact }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-primary fill-current" />
                        ))}
                      </div>
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                      {milestone.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">
                      {milestone.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {Object.entries(milestone.stats).map(([key, value]) => (
                        <div key={key} className="px-4 py-2 bg-muted rounded-full">
                          <span className="font-bold-body text-foreground">{value}</span>
                          <span className="text-muted-foreground text-sm ml-1">{key}</span>
                        </div>
                      ))}
                    </div>

                    {/* Source */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ExternalLink className="w-4 h-4" />
                      <span>Source: {milestone.source}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Milestones;
