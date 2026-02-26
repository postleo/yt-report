import { Logo } from "./Logo";
import { Search, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b-[3px] border-secondary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/most-viewed" className="font-bold-body text-sm text-foreground hover:text-primary transition-colors">
              Most Viewed
            </Link>
            <Link to="/milestones" className="font-bold-body text-sm text-foreground hover:text-primary transition-colors">
              Milestones
            </Link>
            <Link to="/creators" className="font-bold-body text-sm text-foreground hover:text-primary transition-colors">
              Creators
            </Link>
            <Link to="/genres" className="font-bold-body text-sm text-foreground hover:text-primary transition-colors">
              Genres
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Download Button */}
            <button className="hidden md:flex items-center gap-2 pill bg-secondary text-secondary-foreground font-bold-body text-sm hover:opacity-90 transition-opacity">
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-muted flex items-center justify-center"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 animate-slide-up">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search videos, creators, topics..."
                className="w-full pl-12 pr-4 py-3 rounded-full border-[3px] border-secondary/30 bg-card focus:border-primary focus:outline-none font-body"
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-secondary/20 animate-slide-up">
            <div className="flex flex-col gap-4">
              <Link to="/most-viewed" className="font-bold-body text-foreground hover:text-primary transition-colors">
                Most Viewed
              </Link>
              <Link to="/milestones" className="font-bold-body text-foreground hover:text-primary transition-colors">
                Milestones
              </Link>
              <Link to="/creators" className="font-bold-body text-foreground hover:text-primary transition-colors">
                Creators
              </Link>
              <Link to="/genres" className="font-bold-body text-foreground hover:text-primary transition-colors">
                Genres
              </Link>
              <button className="flex items-center gap-2 pill bg-secondary text-secondary-foreground font-bold-body text-sm w-fit">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
