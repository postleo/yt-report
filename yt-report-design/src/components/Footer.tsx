import { Play, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Play className="w-6 h-6 text-primary-foreground fill-current" />
              </div>
              <div>
                <span className="font-heading text-lg">YT REPORT</span>
                <span className="block text-xs opacity-70">2025 Edition</span>
              </div>
            </div>
            <p className="text-sm opacity-80">
              The authoritative source for verified YouTube 2025 data and analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm mb-4">EXPLORE</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/most-viewed" className="hover:opacity-100 transition-opacity">All-Time Most Viewed</Link></li>
              <li><Link to="/milestones" className="hover:opacity-100 transition-opacity">2025 Milestones</Link></li>
              <li><Link to="/creators" className="hover:opacity-100 transition-opacity">Top Creators</Link></li>
              <li><Link to="/genres" className="hover:opacity-100 transition-opacity">Genre Analysis</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading text-sm mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/sources" className="hover:opacity-100 transition-opacity">Sources & Citations</Link></li>
              <li><Link to="/methodology" className="hover:opacity-100 transition-opacity">Methodology</Link></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity flex items-center gap-1">Download PDF <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity flex items-center gap-1">Export Data <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-sm mb-4">STAY UPDATED</h4>
            <p className="text-sm opacity-80 mb-3">Get notified when we release new reports.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 text-sm focus:outline-none focus:border-primary"
              />
              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm opacity-70">
            <span>© 2025 YT Report</span>
            <span>•</span>
            <span>40+ Verified Sources</span>
            <span>•</span>
            <span>Last Updated: January 19, 2026</span>
          </div>
          <div className="flex items-center gap-4 text-sm opacity-70">
            <Link to="/privacy" className="hover:opacity-100">Privacy</Link>
            <Link to="/terms" className="hover:opacity-100">Terms</Link>
            <Link to="/about" className="hover:opacity-100">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
