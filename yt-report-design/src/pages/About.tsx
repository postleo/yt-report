import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, Info, Target, Users, BarChart3, Mail, MessageCircle, Github, Twitter, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const objectives = [
  {
    icon: BarChart3,
    title: "Accessible Data",
    description: "Present complex YouTube statistics in engaging, easy-to-understand formats for all audiences.",
  },
  {
    icon: Target,
    title: "Research-Grade Accuracy",
    description: "Provide cited, cross-referenced information suitable for academic and professional use.",
  },
  {
    icon: Users,
    title: "Multi-Audience Support",
    description: "Serve creators, marketers, researchers, and enthusiasts with tailored insights.",
  },
];

const audiences = [
  {
    type: "Primary",
    groups: ["Content Creators", "Digital Marketers", "Media Researchers"],
    description: "Professionals seeking platform insights for strategy and analysis.",
  },
  {
    type: "Secondary",
    groups: ["YouTube Enthusiasts", "Digital Media Students", "Tech Journalists"],
    description: "Individuals tracking trends and studying platform dynamics.",
  },
  {
    type: "General",
    groups: ["Curious Viewers", "Pop Culture Fans", "Trend Followers"],
    description: "Anyone interested in understanding YouTube's cultural impact.",
  },
];

const features = [
  "Interactive data visualizations with export options",
  "Comprehensive source citations for all statistics",
  "Light and dark mode for comfortable viewing",
  "Mobile-responsive design across all devices",
  "Regular monthly updates with change tracking",
  "Comparison tools for videos, creators, and trends",
];

const About = () => {
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
            ABOUT THIS PROJECT
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive digital report showcasing YouTube's 2025 landscape with data analysis and cultural insights.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 border-[3px] border-primary flex items-center justify-center mx-auto mb-8">
              <Info className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              To be the authoritative source for YouTube analytics and trends — where researchers, marketers, and industry professionals turn for comprehensive statistics and in-depth analysis.
            </p>
            <div className="inline-block bg-card border-[3px] border-secondary/30 rounded-[30px] px-8 py-4">
              <span className="text-muted-foreground">Philosophy:</span>
              <span className="font-heading text-foreground ml-2">Clarity over flash. Depth over breadth. Accuracy over engagement.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              🎯 CORE OBJECTIVES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((obj) => (
              <div
                key={obj.title}
                className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <obj.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">{obj.title}</h3>
                <p className="text-muted-foreground">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              👥 TARGET AUDIENCES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((audience) => (
              <div
                key={audience.type}
                className={`rounded-[30px] p-8 border-[3px] ${
                  audience.type === "Primary"
                    ? "bg-primary/10 border-primary"
                    : audience.type === "Secondary"
                    ? "bg-secondary/10 border-secondary"
                    : "bg-muted border-muted-foreground/30"
                }`}
              >
                <span className="badge-retro mb-4 inline-block">{audience.type}</span>
                <div className="space-y-2 mb-4">
                  {audience.groups.map((group) => (
                    <div key={group} className="font-heading text-lg text-foreground">
                      {group}
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              ✨ KEY FEATURES
            </span>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Heart className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              📬 GET IN TOUCH
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="mailto:contact@youtube2025report.com"
              className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 text-center hover:border-primary transition-colors group"
            >
              <Mail className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm">For inquiries and partnerships</p>
            </a>

            <a
              href="#"
              className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 text-center hover:border-primary transition-colors group"
            >
              <Twitter className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg text-foreground mb-2">Twitter/X</h3>
              <p className="text-muted-foreground text-sm">Follow for updates and insights</p>
            </a>

            <a
              href="#"
              className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6 text-center hover:border-primary transition-colors group"
            >
              <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg text-foreground mb-2">Feedback</h3>
              <p className="text-muted-foreground text-sm">Share suggestions and corrections</p>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-primary/10 border-[3px] border-primary rounded-[30px] p-8 md:p-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-8">
                Get notified when we release new data, insights, and annual reports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 rounded-full border-[3px] border-secondary/30 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
                <button className="pill bg-primary text-primary-foreground font-bold-body px-8 py-4 hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Built with care for the YouTube community. Data updated monthly.
          </p>
          <p className="text-muted-foreground mt-2">
            Last update: January 19, 2026
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
