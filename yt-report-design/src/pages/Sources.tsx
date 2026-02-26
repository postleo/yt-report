import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, BookOpen, ExternalLink, CheckCircle, Database, FileText, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const primarySources = [
  {
    name: "Wikipedia",
    description: "Crowdsourced encyclopedia with extensive YouTube statistics and video milestone data.",
    url: "https://en.wikipedia.org/wiki/List_of_most-viewed_YouTube_videos",
    type: "Reference",
    reliability: "High",
  },
  {
    name: "YouTube Charts",
    description: "Official YouTube ranking system for music videos, trending content, and top artists.",
    url: "https://charts.youtube.com",
    type: "Official",
    reliability: "Highest",
  },
  {
    name: "Social Blade",
    description: "Third-party analytics platform tracking channel growth, view counts, and subscriber metrics.",
    url: "https://socialblade.com",
    type: "Analytics",
    reliability: "High",
  },
  {
    name: "Billboard",
    description: "Music industry charts and news, cross-referenced for music video performance data.",
    url: "https://billboard.com",
    type: "Industry",
    reliability: "High",
  },
];

const secondarySources = [
  { name: "YouTube Official Blog", type: "Official", url: "https://blog.youtube" },
  { name: "YouTube Culture & Trends", type: "Official", url: "https://youtube.com/trends" },
  { name: "Netflix Engagement Reports", type: "Industry", url: "https://netflix.com" },
  { name: "Variety Entertainment News", type: "News", url: "https://variety.com" },
  { name: "DataReportal Digital Reports", type: "Research", url: "https://datareportal.com" },
  { name: "Statista Statistics", type: "Research", url: "https://statista.com" },
  { name: "IFPI Global Music Report", type: "Industry", url: "https://ifpi.org" },
  { name: "Pew Research Center", type: "Research", url: "https://pewresearch.org" },
];

const methodology = [
  {
    step: 1,
    title: "Data Collection",
    description: "Primary statistics gathered from official sources (YouTube Charts, Wikipedia) with timestamp verification.",
  },
  {
    step: 2,
    title: "Cross-Referencing",
    description: "All major statistics cross-referenced with at least two independent sources for accuracy.",
  },
  {
    step: 3,
    title: "Historical Validation",
    description: "Milestone dates and achievement records validated against historical news coverage and official announcements.",
  },
  {
    step: 4,
    title: "Regular Updates",
    description: "Data refreshed monthly with change tracking to maintain currency and accuracy.",
  },
];

const limitations = [
  "View counts are snapshots at specific dates and continue to change over time",
  "Some engagement metrics (comments, shares) may not be publicly available for all videos",
  "Regional view data may not be available for all content",
  "Historical data before 2015 may have gaps due to YouTube analytics changes",
  "Creator revenue estimates are based on industry CPM averages, not actual earnings",
];

const Sources = () => {
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
            SOURCES & METHODOLOGY
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive bibliography, data collection standards, and transparency about our research process.
          </p>

          {/* Summary Stats */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-bold-body">40+ Sources</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-bold-body">Cross-Referenced</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border-[3px] border-secondary/30 rounded-full">
              <Database className="w-5 h-5 text-primary" />
              <span className="font-bold-body">Monthly Updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Sources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              📚 PRIMARY SOURCES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {primarySources.map((source) => (
              <div
                key={source.name}
                className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-xl text-foreground">{source.name}</h3>
                    <span className="badge-retro text-xs mt-2 inline-block">{source.type}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold-body ${
                    source.reliability === "Highest" 
                      ? "bg-primary/20 text-primary" 
                      : "bg-secondary/20 text-secondary"
                  }`}>
                    {source.reliability} Reliability
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{source.description}</p>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-bold-body text-sm">Visit Source</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Sources */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              📖 ADDITIONAL SOURCES
            </span>
          </div>

          <div className="bg-card border-[3px] border-secondary/30 rounded-[30px] overflow-hidden">
            <table className="w-full">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-heading text-sm">SOURCE</th>
                  <th className="px-6 py-4 text-left font-heading text-sm">TYPE</th>
                  <th className="px-6 py-4 text-left font-heading text-sm">LINK</th>
                </tr>
              </thead>
              <tbody>
                {secondarySources.map((source, index) => (
                  <tr
                    key={source.name}
                    className={`border-t border-secondary/20 ${index % 2 === 0 ? "bg-card" : "bg-card/50"}`}
                  >
                    <td className="px-6 py-4 font-bold-body text-foreground">{source.name}</td>
                    <td className="px-6 py-4">
                      <span className="badge-retro text-xs">{source.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              🔬 METHODOLOGY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step) => (
              <div
                key={step.step}
                className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl mb-4">
                  {step.step}
                </div>
                <h3 className="font-heading text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-header font-heading text-foreground text-sm">
              ⚠️ DATA LIMITATIONS
            </span>
          </div>

          <div className="bg-card border-[3px] border-secondary/30 rounded-[30px] p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-heading text-xl text-foreground mb-2">Transparency Note</h3>
                <p className="text-muted-foreground">
                  We believe in full transparency about the limitations of our data. Please consider these factors when using this report.
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {limitations.map((limitation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-xs font-heading">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Citation Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 border-[3px] border-primary rounded-[30px] p-8">
            <div className="flex items-start gap-4">
              <FileText className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-heading text-2xl text-foreground mb-4">How to Cite This Report</h3>
                <div className="bg-card rounded-[20px] p-4 mb-4">
                  <code className="text-sm text-foreground">
                    YouTube 2025 Report. (2026). [Title of specific page]. Retrieved January 2026, from [URL]
                  </code>
                </div>
                <p className="text-muted-foreground">
                  For academic citations, please reference specific page URLs with retrieval dates. All data points include individual source citations that can be used for detailed referencing.
                </p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-8 p-4 bg-muted/50 rounded-[20px] flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Last comprehensive data update: January 19, 2026. Next scheduled update: February 2026.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sources;
