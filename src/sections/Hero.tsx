import { Button } from "@/components/ui/button";
import { TOKEN_CONFIG } from "@/config";
import { ArrowRight, Copy, Check, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyContract = () => {
    navigator.clipboard.writeText(TOKEN_CONFIG.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Brilla Prep Community Token
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
          <span className="text-gradient">{TOKEN_CONFIG.ticker}</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          Briie just started as a counselor at Brilla Prep. On Day 1, she proposed something wild: a token that actually helps students. Hold {TOKEN_CONFIG.ticker}, save on prep, earn while you study.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground mb-10">
          <GraduationCap className="w-4 h-4" />
          1% of every transaction → Scholarship pool for students in need
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-lg px-8 h-12 glow-green" onClick={() => window.open(TOKEN_CONFIG.jupiterSwapUrl, "_blank")}>
            Buy {TOKEN_CONFIG.ticker}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 font-semibold text-lg px-8 h-12" onClick={() => document.getElementById("utility")?.scrollIntoView({ behavior: "smooth" })}>
            See Utility
          </Button>
        </div>

        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">CA</span>
          <code className="text-sm font-mono text-emerald-400 hidden sm:inline">
            {TOKEN_CONFIG.contractAddress.slice(0, 8)}...{TOKEN_CONFIG.contractAddress.slice(-8)}
          </code>
          <code className="text-sm font-mono text-emerald-400 sm:hidden">
            {TOKEN_CONFIG.contractAddress.slice(0, 4)}...{TOKEN_CONFIG.contractAddress.slice(-4)}
          </code>
          <button onClick={copyContract} className="p-1.5 rounded-lg hover:bg-secondary transition-colors" title="Copy contract address">
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
