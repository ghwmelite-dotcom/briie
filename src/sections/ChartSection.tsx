import { TOKEN_CONFIG } from "@/config";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function ChartSection() {
  return (
    <section id="chart" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Live <span className="text-gradient">$BRIIE</span> Chart
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Track $BRIIE price action in real-time. Powered by DexScreener.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border bg-card glow-green">
          <iframe
            src={TOKEN_CONFIG.dexscreenerEmbedUrl}
            style={{ width: "100%", height: "600px", border: "none" }}
            title="DexScreener Chart"
            allow="clipboard-write"
          />
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline" size="sm" className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10" onClick={() => window.open(TOKEN_CONFIG.dexscreenerUrl, "_blank")}>
            Open DexScreener
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10" onClick={() => window.open(TOKEN_CONFIG.birdeyeUrl, "_blank")}>
            Open Birdeye
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
