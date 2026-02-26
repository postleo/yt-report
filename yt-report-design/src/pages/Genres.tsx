import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, BarChart3, Music2, Gamepad2, Tv, GraduationCap, Baby, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const genreData = [
  { name: "Pop Music", videos: 14, views: 5.84, avgViews: 417, percentage: 28, color: "hsl(var(--primary))" },
  { name: "K-Pop", videos: 6, views: 3.37, avgViews: 562, percentage: 12, color: "hsl(var(--secondary))" },
  { name: "Challenge/Entertainment", videos: 9, views: 4.94, avgViews: 549, percentage: 18, color: "hsl(var(--primary) / 0.7)" },
  { name: "Hip-Hop/Rap", videos: 5, views: 1.73, avgViews: 346, percentage: 10, color: "hsl(var(--secondary) / 0.7)" },
  { name: "Gaming", videos: 5, views: 1.11, avgViews: 222, percentage: 10, color: "hsl(var(--primary) / 0.5)" },
  { name: "R&B/Soul", videos: 4, views: 1.53, avgViews: 383, percentage: 8, color: "hsl(var(--secondary) / 0.5)" },
  { name: "Documentary", videos: 3, views: 0.46, avgViews: 155, percentage: 6, color: "hsl(var(--muted-foreground))" },
  { name: "Children's", videos: 6, views: 45, avgViews: 7500, percentage: 8, color: "hsl(var(--primary) / 0.3)" },
];

const quarterlyData = [
  { name: "Pop Music", Q1: 1.5, Q2: 1.8, Q3: 1.2, Q4: 1.3 },
  { name: "K-Pop", Q1: 1.2, Q2: 0.8, Q3: 0.7, Q4: 0.7 },
  { name: "Challenge", Q1: 1.0, Q2: 1.5, Q3: 1.2, Q4: 1.2 },
  { name: "Gaming", Q1: 0.3, Q2: 0.3, Q3: 0.3, Q4: 0.2 },
];

const engagementData = [
  { name: "K-Pop", likes: 8.2, comments: 1.5 },
  { name: "Pop", likes: 6.5, comments: 0.9 },
  { name: "Challenge", likes: 5.8, comments: 1.2 },
  { name: "Hip-Hop", likes: 4.2, comments: 0.8 },
  { name: "Gaming", likes: 3.5, comments: 1.1 },
];

const categories = [
  { icon: Music2, label: "Music", count: 25, color: "primary" },
  { icon: Gamepad2, label: "Gaming", count: 5, color: "secondary" },
  { icon: Tv, label: "Entertainment", count: 9, color: "primary" },
  { icon: GraduationCap, label: "Educational", count: 3, color: "secondary" },
  { icon: Baby, label: "Children's", count: 6, color: "primary" },
];

const Genres = () => {
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
            GENRE ANALYSIS
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive breakdown of performance by content type, engagement metrics, and category trends.
          </p>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border-[3px] ${
                  cat.color === "primary"
                    ? "bg-primary/10 border-primary/30"
                    : "bg-secondary/10 border-secondary/30"
                }`}
              >
                <cat.icon className={`w-5 h-5 ${cat.color === "primary" ? "text-primary" : "text-secondary"}`} />
                <span className="font-bold-body">{cat.label}</span>
                <span className="text-sm text-muted-foreground">({cat.count})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart - Genre Distribution */}
            <div className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 md:p-8">
              <h2 className="font-heading text-2xl text-foreground mb-6">Genre Distribution</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genreData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="percentage"
                      label={({ name, percentage }) => `${name}: ${percentage}%`}
                      labelLine={false}
                    >
                      {genreData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "3px solid hsl(var(--secondary) / 0.3)",
                        borderRadius: "15px",
                      }}
                      formatter={(value: number, name: string) => [`${value}%`, name]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar Chart - Quarterly Performance */}
            <div className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 md:p-8">
              <h2 className="font-heading text-2xl text-foreground mb-6">Quarterly Views (Billions)</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={quarterlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--secondary) / 0.2)" />
                    <XAxis dataKey="name" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                    <YAxis tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "3px solid hsl(var(--secondary) / 0.3)",
                        borderRadius: "15px",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="Q1" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Q2" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Q3" fill="hsl(var(--primary) / 0.6)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Q4" fill="hsl(var(--secondary) / 0.6)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Chart */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="section-header font-heading text-foreground text-sm">
              📊 ENGAGEMENT BY GENRE
            </span>
          </div>

          <div className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 md:p-8">
            <h2 className="font-heading text-2xl text-foreground mb-6">Likes & Comments per Million Views</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={engagementData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--secondary) / 0.2)" />
                  <XAxis type="number" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                  <YAxis dataKey="name" type="category" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} width={80} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "3px solid hsl(var(--secondary) / 0.3)",
                      borderRadius: "15px",
                    }}
                    formatter={(value: number) => [`${value}K`, ""]}
                  />
                  <Legend />
                  <Bar dataKey="likes" name="Likes (K)" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="comments" name="Comments (K)" fill="hsl(var(--secondary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Genre Stats Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="section-header font-heading text-foreground text-sm">
              📈 DETAILED STATISTICS
            </span>
          </div>

          <div className="overflow-x-auto">
            <div className="bg-card border-[3px] border-secondary/30 rounded-[30px] overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary text-secondary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading text-sm">GENRE</th>
                    <th className="px-6 py-4 text-left font-heading text-sm">VIDEOS</th>
                    <th className="px-6 py-4 text-left font-heading text-sm">TOTAL VIEWS</th>
                    <th className="px-6 py-4 text-left font-heading text-sm">AVG VIEWS</th>
                    <th className="px-6 py-4 text-left font-heading text-sm">SHARE</th>
                  </tr>
                </thead>
                <tbody>
                  {genreData.map((genre, index) => (
                    <tr
                      key={genre.name}
                      className={`border-t border-secondary/20 ${index % 2 === 0 ? "bg-card" : "bg-card/50"}`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: genre.color }}
                          />
                          <span className="font-bold-body text-foreground">{genre.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-heading text-foreground">{genre.videos}</td>
                      <td className="px-6 py-4 font-heading text-primary">{genre.views}B</td>
                      <td className="px-6 py-4 font-bold-body text-foreground">{genre.avgViews}M</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${genre.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">{genre.percentage}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Source Note */}
          <div className="mt-8 p-4 bg-muted/50 rounded-[20px] flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Data sources: YouTube Culture Report 2025, Billboard Charts, Social Blade analytics. Last updated: January 2026.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Genres;
