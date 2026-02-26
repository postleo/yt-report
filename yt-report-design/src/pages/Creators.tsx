import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, Trophy, Play, TrendingUp, Users, Star, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const creators = [
  {
    rank: 1,
    name: "MrBeast",
    handle: "@MrBeast",
    subscribers: "340M+",
    views2025: "3.94B",
    videos2025: 6,
    avgViews: "565M",
    topVideo: "The Final Experiment",
    badge: "6th Consecutive Year #1",
    featured: true,
  },
  {
    rank: 2,
    name: "T-Series",
    handle: "@tsaboringbut",
    subscribers: "280M+",
    views2025: "12.5B",
    videos2025: 450,
    avgViews: "28M",
    topVideo: "Various Music Videos",
    badge: "Top Music Label",
    featured: false,
  },
  {
    rank: 3,
    name: "Cocomelon",
    handle: "@Cocomelon",
    subscribers: "180M+",
    views2025: "45B",
    videos2025: 120,
    avgViews: "375M",
    topVideo: "Bath Song",
    badge: "Top Kids Content",
    featured: false,
  },
  {
    rank: 4,
    name: "SET India",
    handle: "@setindia",
    subscribers: "175M+",
    views2025: "8.2B",
    videos2025: 2000,
    avgViews: "4M",
    topVideo: "Daily Episodes",
    badge: "Top TV Channel",
    featured: false,
  },
  {
    rank: 5,
    name: "Kids Diana Show",
    handle: "@KidsDianaShow",
    subscribers: "125M+",
    views2025: "5.8B",
    videos2025: 85,
    avgViews: "68M",
    topVideo: "Diana and Roma",
    badge: "Top Kids Creator",
    featured: false,
  },
];

const Creators = () => {
  const featuredCreator = creators.find(c => c.featured);
  const otherCreators = creators.filter(c => !c.featured);

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
            TOP CREATORS 2025
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Performance analysis, growth metrics, and achievement tracking for YouTube's top channels.
          </p>
        </div>
      </section>

      {/* Featured Creator - MrBeast */}
      {featuredCreator && (
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <span className="section-header font-heading text-foreground text-sm">
                👑 FEATURED CREATOR
              </span>
            </div>

            <div className="bg-card border-[3px] border-primary rounded-[30px] overflow-hidden">
              {/* Banner */}
              <div className="h-32 bg-gradient-to-r from-primary to-secondary relative">
                <div className="absolute bottom-0 left-8 translate-y-1/2">
                  <div className="w-24 h-24 rounded-full bg-secondary border-4 border-card flex items-center justify-center">
                    <span className="font-heading text-3xl text-secondary-foreground">MB</span>
                  </div>
                </div>
              </div>

              <div className="pt-16 pb-8 px-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div>
                    <h2 className="font-heading text-3xl text-foreground mb-1">{featuredCreator.name}</h2>
                    <p className="text-muted-foreground">{featuredCreator.handle}</p>
                    <div className="mt-3">
                      <span className="badge-retro">{featuredCreator.badge}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-heading text-primary">{featuredCreator.subscribers}</div>
                    <div className="text-sm text-muted-foreground uppercase">Subscribers</div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-muted rounded-[20px] p-5 text-center">
                    <div className="text-3xl font-heading text-foreground">
                      <AnimatedCounter end={3.94} decimals={2} suffix="B" />
                    </div>
                    <div className="text-sm text-muted-foreground">2025 Views</div>
                  </div>
                  <div className="bg-muted rounded-[20px] p-5 text-center">
                    <div className="text-3xl font-heading text-foreground">{featuredCreator.videos2025}</div>
                    <div className="text-sm text-muted-foreground">Videos</div>
                  </div>
                  <div className="bg-muted rounded-[20px] p-5 text-center">
                    <div className="text-3xl font-heading text-foreground">{featuredCreator.avgViews}</div>
                    <div className="text-sm text-muted-foreground">Avg Views</div>
                  </div>
                  <div className="bg-muted rounded-[20px] p-5 text-center">
                    <div className="text-3xl font-heading text-foreground">56M+</div>
                    <div className="text-sm text-muted-foreground">Most Likes</div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-full">
                    <Trophy className="w-5 h-5 text-primary" />
                    <span className="font-bold-body">Most-Liked Video Record: Paris Baguette (56M+ likes)</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-full">
                    <Video className="w-5 h-5 text-secondary" />
                    <span className="font-bold-body">Top Video 2025: The Final Experiment (698M views)</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-full">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="font-bold-body">65% of videos feature brand integrations (3.2 avg sponsors)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Creators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              📊 TOP CHANNELS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherCreators.map((creator) => (
              <div key={creator.rank} className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-heading text-xl flex-shrink-0">
                    {creator.rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-heading text-xl text-foreground">{creator.name}</h3>
                        <p className="text-sm text-muted-foreground">{creator.handle}</p>
                      </div>
                      <span className="badge-retro text-xs bg-secondary">{creator.badge}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div>
                        <div className="font-heading text-lg text-primary">{creator.subscribers}</div>
                        <div className="text-xs text-muted-foreground">Subscribers</div>
                      </div>
                      <div>
                        <div className="font-heading text-lg text-foreground">{creator.views2025}</div>
                        <div className="text-xs text-muted-foreground">2025 Views</div>
                      </div>
                      <div>
                        <div className="font-heading text-lg text-foreground">{creator.videos2025}</div>
                        <div className="text-xs text-muted-foreground">Videos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Creators;
