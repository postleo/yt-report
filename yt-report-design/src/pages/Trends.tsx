import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, Activity, Zap, Calendar, Users, PlayCircle, ExternalLink, Smartphone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const platformGrowth = [
  { year: "2020", users: 2.0, shorts: 0, creators: 50 },
  { year: "2021", users: 2.3, shorts: 15, creators: 55 },
  { year: "2022", users: 2.5, shorts: 30, creators: 60 },
  { year: "2023", users: 2.7, shorts: 50, creators: 68 },
  { year: "2024", users: 2.9, shorts: 65, creators: 75 },
  { year: "2025", users: 3.1, shorts: 80, creators: 85 },
];

const shortsGrowth = [
  { month: "Jan", views: 50 },
  { month: "Feb", views: 55 },
  { month: "Mar", views: 62 },
  { month: "Apr", views: 68 },
  { month: "May", views: 72 },
  { month: "Jun", views: 78 },
  { month: "Jul", views: 82 },
  { month: "Aug", views: 85 },
  { month: "Sep", views: 88 },
  { month: "Oct", views: 90 },
  { month: "Nov", views: 92 },
  { month: "Dec", views: 95 },
];

const platformUpdates = [
  {
    date: "February 2025",
    title: "YouTube Recap Launches Globally",
    description: "Personalized year-in-review feature rolls out to all users, similar to Spotify Wrapped.",
    type: "feature",
  },
  {
    date: "April 2025",
    title: "AI-Powered Recommendations Update",
    description: "New algorithm focuses on watch time satisfaction rather than just engagement metrics.",
    type: "algorithm",
  },
  {
    date: "June 2025",
    title: "YouTube Celebrates 20 Years",
    description: "Platform marks two decades since 'Me at the zoo' was uploaded on April 23, 2005.",
    type: "milestone",
  },
  {
    date: "August 2025",
    title: "Shorts Monetization Expansion",
    description: "Improved revenue sharing model for Shorts creators with 45% ad revenue split.",
    type: "monetization",
  },
  {
    date: "October 2025",
    title: "Premium Podcast Features",
    description: "Enhanced podcast experience with video chapters, transcripts, and background play.",
    type: "feature",
  },
];

const keyStats = [
  { icon: Users, label: "Monthly Active Users", value: "3.1B+", change: "+7% YoY" },
  { icon: PlayCircle, label: "Daily Video Views", value: "5B+", change: "+12% YoY" },
  { icon: Smartphone, label: "Mobile Watch Time", value: "70%", change: "+5% YoY" },
  { icon: Clock, label: "Avg Session Duration", value: "42 min", change: "+8% YoY" },
];

const typeColors: Record<string, string> = {
  feature: "bg-primary border-primary",
  algorithm: "bg-secondary border-secondary",
  milestone: "bg-primary/70 border-primary/70",
  monetization: "bg-secondary/70 border-secondary/70",
};

const Trends = () => {
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
            PLATFORM TRENDS
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            YouTube's evolution in 2025 - algorithm updates, feature releases, and platform growth metrics.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <Activity className="w-5 h-5 text-primary" />
              <span className="font-bold-body">20 Years of YouTube</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-bold-body">5 Major Updates</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-bold-body">YouTube Recap Launch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keyStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 text-center"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-heading text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                <span className="badge-retro text-xs">{stat.change}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Growth Chart */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="section-header font-heading text-foreground text-sm">
              📈 PLATFORM GROWTH (2020-2025)
            </span>
          </div>

          <div className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 md:p-8">
            <h3 className="font-heading text-xl text-foreground mb-6">Users (Billions) & Shorts Adoption (%)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={platformGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--secondary) / 0.2)" />
                  <XAxis dataKey="year" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                  <YAxis yAxisId="left" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "3px solid hsl(var(--secondary) / 0.3)",
                      borderRadius: "15px",
                    }}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="users"
                    name="Users (B)"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", r: 5 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="shorts"
                    name="Shorts Adoption (%)"
                    stroke="hsl(var(--secondary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--secondary))", r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Shorts Growth */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="section-header font-heading text-foreground text-sm">
              📱 YOUTUBE SHORTS DAILY VIEWS 2025
            </span>
          </div>

          <div className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 md:p-8">
            <h3 className="font-heading text-xl text-foreground mb-6">Billions of Daily Views</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={shortsGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--secondary) / 0.2)" />
                  <XAxis dataKey="month" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                  <YAxis tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "3px solid hsl(var(--secondary) / 0.3)",
                      borderRadius: "15px",
                    }}
                    formatter={(value: number) => [`${value}B`, "Daily Views"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="views"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary) / 0.3)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Updates Timeline */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              🚀 2025 PLATFORM UPDATES
            </span>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-secondary/20 hidden md:block" />

            <div className="space-y-6">
              {platformUpdates.map((update, index) => (
                <div key={index} className="relative flex gap-6 md:gap-8">
                  {/* Timeline Dot */}
                  <div
                    className={`hidden md:flex w-16 h-16 rounded-full ${typeColors[update.type]} items-center justify-center flex-shrink-0 z-10`}
                  >
                    <span className="text-white font-heading text-lg">{index + 1}</span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-card border-[3px] border-secondary/30 rounded-[30px] p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`badge-retro capitalize ${update.type === "algorithm" || update.type === "monetization" ? "bg-secondary" : ""}`}>
                        {update.type}
                      </span>
                      <span className="text-sm text-muted-foreground">{update.date}</span>
                    </div>
                    <h3 className="font-heading text-xl text-foreground mb-2">{update.title}</h3>
                    <p className="text-muted-foreground">{update.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 20th Anniversary Feature */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 border-[3px] border-primary rounded-[30px] p-8 md:p-12 text-center">
            <div className="text-7xl mb-6">🎉</div>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              YouTube Turns 20
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              On June 23, 2025, YouTube celebrated two decades since "Me at the zoo" was uploaded, becoming the world's largest video platform with over 3 billion monthly users.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-card rounded-[20px] px-6 py-4">
                <div className="text-3xl font-heading text-primary">April 23, 2005</div>
                <div className="text-muted-foreground">First Video Uploaded</div>
              </div>
              <div className="bg-card rounded-[20px] px-6 py-4">
                <div className="text-3xl font-heading text-primary">800M+</div>
                <div className="text-muted-foreground">Videos on Platform</div>
              </div>
              <div className="bg-card rounded-[20px] px-6 py-4">
                <div className="text-3xl font-heading text-primary">51M+</div>
                <div className="text-muted-foreground">Active Creators</div>
              </div>
            </div>
          </div>

          {/* Source Note */}
          <div className="mt-8 p-4 bg-muted/50 rounded-[20px] flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Data sources: YouTube Official Blog, Statista, DataReportal Digital 2025 Report. Last updated: January 2026.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trends;
