import { Eye, Video, BookOpen, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StatCard } from "@/components/StatCard";
import { QuickStatCard } from "@/components/QuickStatCard";
import { TimelineItem } from "@/components/TimelineItem";
import { NavigationHub } from "@/components/NavigationHub";

const stats = [
  { title: "Views", value: 22.6, suffix: "B+", description: "Total views analyzed across featured videos", icon: Eye, delay: 0 },
  { title: "Videos", value: 50, suffix: "+", description: "Videos documented with full statistics", icon: Video, delay: 100 },
  { title: "Sources", value: 40, suffix: "+", description: "Cited and referenced sources", icon: BookOpen, delay: 200 },
  { title: "Global", value: 195, suffix: "+", description: "Countries with represented content", icon: Globe, delay: 300 },
];

const quickStats = [
  {
    rank: 1,
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop",
    title: "Baby Shark Dance",
    subtitle: "Pinkfong",
    stat: "16B+",
    statLabel: "Views All-Time",
    category: "Most Viewed",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    title: "APT. - ROSÉ & Bruno Mars",
    subtitle: "Fastest K-Pop to 1B Views",
    stat: "105",
    statLabel: "Days to 1 Billion",
    category: "Record",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
    title: "Paris Baguette",
    subtitle: "MrBeast",
    stat: "56M+",
    statLabel: "Likes",
    category: "Most Liked",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=300&fit=crop",
    title: "MrBeast",
    subtitle: "@MrBeast",
    stat: "6th",
    statLabel: "Consecutive Year #1",
    category: "Top Creator",
  },
];

const timelineEvents = [
  { month: "January", title: "APT. Becomes Fastest K-Pop to 1 Billion Views", description: "ROSÉ & Bruno Mars collaboration breaks K-Pop speed record in just 105 days.", type: "music" as const },
  { month: "January", title: "MrBeast Breaks Most-Liked Record", description: "Paris Baguette video surpasses Despacito with 56M+ likes.", type: "creator" as const },
  { month: "February", title: "YouTube Recap Launches", description: "New personalized year-in-review feature rolls out globally.", type: "platform" as const },
  { month: "March", title: "K-Pop Demon Hunters Goes Viral", description: "Fictional girl group phenomenon captures millions with user-generated content.", type: "cultural" as const },
  { month: "April", title: "Die With A Smile Hits 1B Views", description: "Lady Gaga & Bruno Mars collaboration reaches billion-view milestone.", type: "music" as const },
  { month: "May", title: "The Final Experiment Breaks Records", description: "MrBeast's survival video becomes most-viewed of 2025.", type: "creator" as const },
  { month: "June", title: "YouTube Celebrates 20 Years", description: "Platform marks two decades since first video upload.", type: "platform" as const },
];

const Index = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollTimeline = (direction: "left" | "right") => {
    if (timelineRef.current) {
      const scrollAmount = 300;
      timelineRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 badge-retro mb-8 animate-fade-in">
              <span>📊</span>
              <span>2025 Edition</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-title font-heading text-foreground mb-6 animate-slide-up">
              YOUTUBE
              <br />
              <span className="text-primary">2025</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "100ms" }}>
              The Year in Data. Comprehensive analysis and full citations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <button className="pill bg-primary text-primary-foreground font-bold-body text-lg hover:opacity-90 transition-opacity px-8 py-4">
                Explore Data
              </button>
              <button className="pill bg-secondary text-secondary-foreground font-bold-body text-lg hover:opacity-90 transition-opacity px-8 py-4">
                Download Report (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              🏆 FEATURED STATISTICS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <QuickStatCard key={stat.title} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="section-header font-heading text-foreground text-sm">
                📅 2025 TIMELINE
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollTimeline("left")}
                className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTimeline("right")}
                className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div 
            ref={timelineRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} {...event} isActive={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              💡 KEY INSIGHTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/10 border-[3px] border-primary/30 rounded-[30px] p-8">
              <div className="text-5xl font-heading text-primary mb-4">#1</div>
              <h3 className="font-heading text-lg text-foreground mb-2">K-POP DOMINANCE</h3>
              <p className="text-muted-foreground font-body">
                K-Pop achieved the highest per-video engagement rate in 2025, with APT. setting new speed records.
              </p>
            </div>

            <div className="bg-secondary/10 border-[3px] border-secondary/30 rounded-[30px] p-8">
              <div className="text-5xl font-heading text-secondary mb-4">3.94B</div>
              <h3 className="font-heading text-lg text-foreground mb-2">MRBEAST VIEWS</h3>
              <p className="text-muted-foreground font-body">
                MrBeast generated 3.94 billion views across just 6 video releases in 2025.
              </p>
            </div>

            <div className="bg-primary/10 border-[3px] border-primary/30 rounded-[30px] p-8">
              <div className="text-5xl font-heading text-primary mb-4">60%</div>
              <h3 className="font-heading text-lg text-foreground mb-2">CHILDREN'S CONTENT</h3>
              <p className="text-muted-foreground font-body">
                Children's content maintains dominance, representing 60% of all-time top 10 videos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Hub */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              🧭 EXPLORE THE REPORT
            </span>
          </div>

          <NavigationHub />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
