import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, Music2 as MusicIcon, Trophy, TrendingUp, Play, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const topSongs2025 = [
  { rank: 1, title: "APT.", artist: "ROSÉ & Bruno Mars", views: "2.01B", achievement: "Fastest K-Pop to 1B", days: 105 },
  { rank: 2, title: "Die With A Smile", artist: "Lady Gaga & Bruno Mars", views: "987M", achievement: "Bruno's 10th 1B video", days: 270 },
  { rank: 3, title: "Luther", artist: "Kendrick Lamar ft. SZA", views: "456M", achievement: "Top Hip-Hop 2025", days: null },
  { rank: 4, title: "tv off", artist: "Kendrick Lamar", views: "389M", achievement: "Back-to-back hits", days: null },
  { rank: 5, title: "Vampire 2.0", artist: "Olivia Rodrigo", views: "461M", achievement: "Pop-Rock revival", days: null },
];

const billionClub = [
  { name: "APT.", views: 2.01, color: "hsl(var(--primary))" },
  { name: "Die With A Smile", views: 0.987, color: "hsl(var(--secondary))" },
  { name: "Baby Shark", views: 16.2, color: "hsl(var(--primary) / 0.7)" },
  { name: "Despacito", views: 8.6, color: "hsl(var(--secondary) / 0.7)" },
  { name: "Shape of You", views: 6.5, color: "hsl(var(--primary) / 0.5)" },
];

const genreBreakdown = [
  { name: "Pop", value: 35, color: "hsl(var(--primary))" },
  { name: "K-Pop", value: 25, color: "hsl(var(--secondary))" },
  { name: "Hip-Hop", value: 20, color: "hsl(var(--primary) / 0.7)" },
  { name: "R&B", value: 12, color: "hsl(var(--secondary) / 0.7)" },
  { name: "Other", value: 8, color: "hsl(var(--muted-foreground))" },
];

const collaborationData = [
  { type: "Collaboration", avgViews: 684, count: 12 },
  { type: "Solo", avgViews: 289, count: 28 },
];

const Music = () => {
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
            MUSIC CHARTS
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Music video performance, billion-view achievements, and artist profiles with full citations.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <MusicIcon className="w-5 h-5 text-primary" />
              <span className="font-bold-body">25 Music Videos in Top 50</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="font-bold-body">15+ Billion-View Club</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-bold-body">2.3x Collab Effect</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Songs 2025 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              🎵 TOP SONGS 2025
            </span>
          </div>

          <div className="space-y-4">
            {topSongs2025.map((song) => (
              <div
                key={song.rank}
                className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 flex flex-col md:flex-row items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-2xl flex-shrink-0">
                  {song.rank}
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-heading text-xl text-foreground">{song.title}</h3>
                  <p className="text-muted-foreground">{song.artist}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-heading text-primary">{song.views}</div>
                    <div className="text-xs text-muted-foreground">Views</div>
                  </div>
                  {song.days && (
                    <div className="text-center">
                      <div className="text-2xl font-heading text-secondary">{song.days}</div>
                      <div className="text-xs text-muted-foreground">Days to 1B</div>
                    </div>
                  )}
                  <span className="badge-retro text-xs">{song.achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Billion Club Chart */}
            <div className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 md:p-8">
              <h2 className="font-heading text-2xl text-foreground mb-6">Billion-View Club (Views in Billions)</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={billionClub} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--secondary) / 0.2)" />
                    <XAxis type="number" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                    <YAxis dataKey="name" type="category" tick={{ fill: "hsl(var(--foreground))", fontSize: 10 }} width={100} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "3px solid hsl(var(--secondary) / 0.3)",
                        borderRadius: "15px",
                      }}
                      formatter={(value: number) => [`${value}B views`, ""]}
                    />
                    <Bar dataKey="views" radius={[0, 8, 8, 0]}>
                      {billionClub.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Genre Pie Chart */}
            <div className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 md:p-8">
              <h2 className="font-heading text-2xl text-foreground mb-6">Genre Distribution</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genreBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={90}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {genreBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "3px solid hsl(var(--secondary) / 0.3)",
                        borderRadius: "15px",
                      }}
                      formatter={(value: number) => [`${value}%`, ""]}
                    />
                    <Legend
                      formatter={(value) => <span className="text-foreground text-sm">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Effect */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              🤝 COLLABORATION EFFECT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborationData.map((item) => (
              <div
                key={item.type}
                className={`rounded-[30px] p-8 border-[3px] ${
                  item.type === "Collaboration"
                    ? "bg-primary/10 border-primary/30"
                    : "bg-secondary/10 border-secondary/30"
                }`}
              >
                <h3 className="font-heading text-2xl text-foreground mb-6">{item.type}</h3>
                <div className="flex items-end gap-4">
                  <div>
                    <div className="text-5xl font-heading text-primary">{item.avgViews}M</div>
                    <div className="text-muted-foreground">Average Views</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-heading text-foreground">{item.count}</div>
                    <div className="text-muted-foreground">Videos</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-card border-[3px] border-secondary/30 rounded-[30px] p-6">
              <span className="text-muted-foreground">Collaboration Multiplier Effect:</span>
              <span className="font-heading text-3xl text-primary ml-4">2.3x</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bruno Mars Feature */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="bg-card border-[3px] border-primary rounded-[30px] p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <MusicIcon className="w-16 h-16 text-primary-foreground" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="badge-retro mb-3 inline-block">Featured Artist</span>
                <h2 className="font-heading text-3xl text-foreground mb-2">Bruno Mars</h2>
                <p className="text-muted-foreground mb-4">
                  Featured in 2 of the top 5 songs of 2025, Bruno Mars continues to dominate with strategic collaborations.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="bg-muted rounded-full px-4 py-2">
                    <span className="font-heading text-primary">10</span>
                    <span className="text-muted-foreground ml-1">Billion-View Videos</span>
                  </div>
                  <div className="bg-muted rounded-full px-4 py-2">
                    <span className="font-heading text-primary">100%</span>
                    <span className="text-muted-foreground ml-1">Collab Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Source Note */}
          <div className="mt-8 p-4 bg-muted/50 rounded-[20px] flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Data sources: YouTube Charts, Billboard Hot 100, Wikipedia, IFPI Global Music Report. Last updated: January 2026.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Music;
