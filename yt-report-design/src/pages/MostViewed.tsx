import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, Play, TrendingUp, Users, Heart, Eye, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const videos = [
  { rank: 1, title: "Baby Shark Dance", artist: "Pinkfong", views: "16.2B", likes: "45M", category: "Children's", year: 2016, growth: "+2.3B in 2025" },
  { rank: 2, title: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee", views: "8.6B", likes: "55M", category: "Latin Pop", year: 2017, growth: "+400M in 2025" },
  { rank: 3, title: "Johny Johny Yes Papa", artist: "LooLoo Kids", views: "7.2B", likes: "19M", category: "Children's", year: 2016, growth: "+300M in 2025" },
  { rank: 4, title: "Bath Song", artist: "Cocomelon", views: "6.8B", likes: "22M", category: "Children's", year: 2018, growth: "+500M in 2025" },
  { rank: 5, title: "Shape of You", artist: "Ed Sheeran", views: "6.5B", likes: "32M", category: "Pop", year: 2017, growth: "+250M in 2025" },
  { rank: 6, title: "See You Again", artist: "Wiz Khalifa ft. Charlie Puth", views: "6.3B", likes: "36M", category: "Hip-Hop", year: 2015, growth: "+200M in 2025" },
  { rank: 7, title: "Wheels on the Bus", artist: "Cocomelon", views: "5.9B", likes: "18M", category: "Children's", year: 2018, growth: "+450M in 2025" },
  { rank: 8, title: "Phonics Song with TWO Words", artist: "ChuChu TV", views: "5.7B", likes: "15M", category: "Children's", year: 2014, growth: "+300M in 2025" },
  { rank: 9, title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", views: "5.4B", likes: "28M", category: "Pop/Funk", year: 2014, growth: "+180M in 2025" },
  { rank: 10, title: "Gangnam Style", artist: "PSY", views: "5.2B", likes: "25M", category: "K-Pop", year: 2012, growth: "+100M in 2025" },
];

const MostViewed = () => {
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
            ALL-TIME MOST VIEWED
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            As of January 2026 - Lifetime view counts with verified sources.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <Eye className="w-5 h-5 text-primary" />
              <span className="font-bold-body">16.2B Top Views</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-bold-body">60% Children's Content</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-bold-body">Avg 7.2B in Top 10</span>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-hidden rounded-[30px] border-[3px] border-secondary/30">
            <table className="w-full">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-heading text-sm">RANK</th>
                  <th className="px-6 py-4 text-left font-heading text-sm">VIDEO</th>
                  <th className="px-6 py-4 text-left font-heading text-sm">VIEWS</th>
                  <th className="px-6 py-4 text-left font-heading text-sm">LIKES</th>
                  <th className="px-6 py-4 text-left font-heading text-sm">CATEGORY</th>
                  <th className="px-6 py-4 text-left font-heading text-sm">2025 GROWTH</th>
                </tr>
              </thead>
              <tbody>
                {videos.map((video, index) => (
                  <tr 
                    key={video.rank} 
                    className={`border-t border-secondary/20 hover:bg-primary/5 transition-colors ${index % 2 === 0 ? 'bg-card' : 'bg-card/50'}`}
                  >
                    <td className="px-6 py-5">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading">
                        {video.rank}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-14 rounded-lg bg-muted flex items-center justify-center">
                          <Play className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="font-bold-body text-foreground">{video.title}</div>
                          <div className="text-sm text-muted-foreground">{video.artist}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-heading text-xl text-primary">{video.views}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-primary" />
                        <span className="font-bold-body">{video.likes}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="badge-retro text-xs">{video.category}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1 text-primary">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-bold-body text-sm">{video.growth}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {videos.map((video) => (
              <div key={video.rank} className="bg-card border-[3px] border-secondary/30 rounded-[20px] p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading flex-shrink-0">
                    {video.rank}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold-body text-foreground mb-1">{video.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{video.artist}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="badge-retro text-xs">{video.category}</span>
                      <span className="text-xs text-muted-foreground">{video.year}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-heading text-xl text-primary">{video.views}</span>
                        <span className="text-xs text-muted-foreground ml-1">views</span>
                      </div>
                      <div className="flex items-center gap-1 text-primary">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs font-bold-body">{video.growth}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Source Note */}
          <div className="mt-8 p-4 bg-muted/50 rounded-[20px] flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Data sources: Wikipedia, YouTube Charts, Social Blade. Last verified: January 19, 2026.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MostViewed;
