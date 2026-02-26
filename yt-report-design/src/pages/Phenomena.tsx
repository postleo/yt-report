import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, Sparkles, Eye, Users, TrendingUp, Play, MessageCircle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const squidGameTimeline = [
  { month: "Dec '24", views: 10, engagement: 15 },
  { month: "Jan '25", views: 85, engagement: 92 },
  { month: "Feb '25", views: 120, engagement: 95 },
  { month: "Mar '25", views: 95, engagement: 78 },
  { month: "Apr '25", views: 65, engagement: 55 },
  { month: "May '25", views: 45, engagement: 40 },
];

const kpopDemonData = [
  { month: "Jan", fancams: 50, lore: 30, reactions: 20 },
  { month: "Feb", fancams: 120, lore: 85, reactions: 55 },
  { month: "Mar", fancams: 180, lore: 140, reactions: 95 },
  { month: "Apr", fancams: 220, lore: 175, reactions: 120 },
  { month: "May", fancams: 290, lore: 200, reactions: 145 },
  { month: "Jun", fancams: 349, lore: 217, reactions: 165 },
];

const phenomena = [
  {
    id: "squid-game",
    title: "Squid Game Season 2",
    subtitle: "Global Streaming Phenomenon",
    stat: "152.5M",
    statLabel: "Hours Viewed (Netflix)",
    description: "Released December 2024, the second season sparked massive YouTube engagement with reactions, challenges, and analysis videos dominating trending.",
    impact: 5,
    stats: [
      { label: "Top 10 Trending", value: "8 weeks" },
      { label: "Challenge Videos", value: "50K+" },
      { label: "Reaction Content", value: "200K+" },
    ],
  },
  {
    id: "kpop-demons",
    title: "K-Pop Demon Hunters",
    subtitle: "Fictional Group Goes Viral",
    stat: "349M+",
    statLabel: "Aggregated Fancam Views",
    description: "A fictional K-Pop girl group created through user-generated content, blurring lines between reality and fiction in unprecedented ways.",
    impact: 4,
    stats: [
      { label: "Lore Videos", value: "217M views" },
      { label: "Dance Battles", value: "118M views" },
      { label: "Fan Edits", value: "5K+ creators" },
    ],
  },
  {
    id: "shorts-music",
    title: "YouTube Shorts Music Discovery",
    subtitle: "Short-Form Revolution",
    stat: "1.5B+",
    statLabel: "Views (Paris Baguette Short)",
    description: "YouTube Shorts became the primary music discovery platform, launching regional artists to international stardom.",
    impact: 5,
    stats: [
      { label: "Daily Views", value: "70B+" },
      { label: "Music Clips", value: "40% of shorts" },
      { label: "Artist Breakouts", value: "25+" },
    ],
  },
];

const Phenomena = () => {
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
            CULTURAL PHENOMENA
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            2025's defining cultural moments on YouTube - how video content shaped global culture and conversation.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-bold-body">3 Major Phenomena</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <Eye className="w-5 h-5 text-primary" />
              <span className="font-bold-body">500M+ Combined Views</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-bold-body">Global Participation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Phenomena Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-12">
          {phenomena.map((item, index) => (
            <div
              key={item.id}
              className="bg-card border-[3px] border-secondary/30 rounded-[30px] overflow-hidden"
            >
              {/* Header */}
              <div className={`p-6 md:p-8 ${index % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"}`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="badge-retro mb-3 inline-block">{item.subtitle}</span>
                    <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground max-w-xl">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl md:text-5xl font-heading text-primary">{item.stat}</div>
                    <div className="text-sm text-muted-foreground">{item.statLabel}</div>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="p-6 md:p-8 border-t border-secondary/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {item.stats.map((stat) => (
                    <div key={stat.label} className="bg-muted rounded-[20px] p-4 text-center">
                      <div className="text-2xl font-heading text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Squid Game Timeline Chart */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="section-header font-heading text-foreground text-sm">
              📈 SQUID GAME S2 YOUTUBE IMPACT
            </span>
          </div>

          <div className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 md:p-8">
            <h3 className="font-heading text-xl text-foreground mb-6">Views & Engagement Over Time (Millions)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={squidGameTimeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--secondary) / 0.2)" />
                  <XAxis dataKey="month" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                  <YAxis tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "3px solid hsl(var(--secondary) / 0.3)",
                      borderRadius: "15px",
                    }}
                    formatter={(value: number) => [`${value}M`, ""]}
                  />
                  <Area
                    type="monotone"
                    dataKey="views"
                    name="Views"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary) / 0.3)"
                    strokeWidth={3}
                  />
                  <Area
                    type="monotone"
                    dataKey="engagement"
                    name="Engagement"
                    stroke="hsl(var(--secondary))"
                    fill="hsl(var(--secondary) / 0.3)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* K-Pop Demon Hunters Chart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="section-header font-heading text-foreground text-sm">
              🎭 K-POP DEMON HUNTERS CONTENT GROWTH
            </span>
          </div>

          <div className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 md:p-8">
            <h3 className="font-heading text-xl text-foreground mb-6">Content Type Views (Millions)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={kpopDemonData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--secondary) / 0.2)" />
                  <XAxis dataKey="month" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                  <YAxis tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "3px solid hsl(var(--secondary) / 0.3)",
                      borderRadius: "15px",
                    }}
                    formatter={(value: number) => [`${value}M`, ""]}
                  />
                  <Line
                    type="monotone"
                    dataKey="fancams"
                    name="Fancams"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="lore"
                    name="Lore Videos"
                    stroke="hsl(var(--secondary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--secondary))", r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="reactions"
                    name="Reactions"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--muted-foreground))", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              💡 KEY INSIGHTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/10 border-[3px] border-primary/30 rounded-[30px] p-8">
              <Play className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-lg text-foreground mb-2">USER-GENERATED CONTENT</h3>
              <p className="text-muted-foreground">
                UGC drove 60% of phenomenon engagement, with creators building entire ecosystems around trending topics.
              </p>
            </div>

            <div className="bg-secondary/10 border-[3px] border-secondary/30 rounded-[30px] p-8">
              <MessageCircle className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-heading text-lg text-foreground mb-2">COMMUNITY BUILDING</h3>
              <p className="text-muted-foreground">
                K-Pop Demon Hunters showed how audiences can collaboratively create fictional universes with millions of participants.
              </p>
            </div>

            <div className="bg-primary/10 border-[3px] border-primary/30 rounded-[30px] p-8">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-lg text-foreground mb-2">CROSS-PLATFORM IMPACT</h3>
              <p className="text-muted-foreground">
                Trends originating on Netflix, TikTok, and other platforms found their largest audiences on YouTube.
              </p>
            </div>
          </div>

          {/* Source Note */}
          <div className="mt-8 p-4 bg-muted/50 rounded-[20px] flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Data sources: YouTube Culture Report 2025, Netflix Engagement Reports, Social Blade analytics. Last updated: January 2026.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Phenomena;
