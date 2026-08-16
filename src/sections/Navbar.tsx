import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TOKEN_CONFIG } from "@/config";
import { Twitter, MessageCircle, Menu, X, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-black font-bold text-sm">
              B
            </div>
            <span className="font-bold text-lg tracking-tight">
              {TOKEN_CONFIG.ticker}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Home", id: "hero" },
              { label: "Utility", id: "utility" },
              { label: "Chart", id: "chart" },
              { label: "Buy", id: "buy" },
              { label: "Roadmap", id: "roadmap" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href={TOKEN_CONFIG.brillaprepUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors" title="Brilla Prep">
              <GraduationCap className="w-4 h-4" />
            </a>
            <a href={TOKEN_CONFIG.twitterUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href={TOKEN_CONFIG.telegramUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold" onClick={() => window.open(TOKEN_CONFIG.jupiterSwapUrl, "_blank")}>
              Buy {TOKEN_CONFIG.ticker}
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {[
              { label: "Home", id: "hero" },
              { label: "Utility", id: "utility" },
              { label: "Chart", id: "chart" },
              { label: "Buy", id: "buy" },
              { label: "Roadmap", id: "roadmap" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary">
                {item.label}
              </button>
            ))}
            <div className="flex gap-3 px-4 pt-2">
              <a href={TOKEN_CONFIG.brillaprepUrl} target="_blank" rel="noopener noreferrer"><GraduationCap className="w-5 h-5 text-muted-foreground" /></a>
              <a href={TOKEN_CONFIG.twitterUrl} target="_blank" rel="noopener noreferrer"><Twitter className="w-5 h-5 text-muted-foreground" /></a>
              <a href={TOKEN_CONFIG.telegramUrl} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5 text-muted-foreground" /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
