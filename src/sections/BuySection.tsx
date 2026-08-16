import { TOKEN_CONFIG } from "@/config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet, Coins, BarChart3 } from "lucide-react";

const steps = [
  { icon: Wallet, title: "Get a Wallet", description: "Download Phantom or Solflare and create your Solana wallet.", action: "Download Phantom", link: "https://phantom.app" },
  { icon: Coins, title: "Buy SOL", description: "Purchase SOL from an exchange and send it to your wallet.", action: "Buy SOL", link: "https://www.coinbase.com/buy-solana" },
  { icon: BarChart3, title: "Swap for $BRIIE", description: `Connect to Jupiter and swap SOL for ${TOKEN_CONFIG.ticker}.`, action: "Launch Jupiter", link: TOKEN_CONFIG.jupiterSwapUrl },
];

export default function BuySection() {
  return (
    <section id="buy" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">How to <span className="text-gradient">Buy</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Get {TOKEN_CONFIG.ticker} in 3 steps. Fair launch. No presale. Briie approves.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={step.title} className="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <step.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="text-xs font-medium text-emerald-400 mb-2">Step {i + 1}</div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
              <Button variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 p-0 h-auto" onClick={() => window.open(step.link, "_blank")}>
                {step.action} <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border bg-card p-1 glow-green">
            <div className="bg-card rounded-xl overflow-hidden">
              <iframe src={`https://jup.ag/swap/USDC-SOL?outputMint=${TOKEN_CONFIG.contractAddress}`} style={{ width: "100%", height: "500px", border: "none" }} title="Jupiter Swap" allow="clipboard-write" />
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">Powered by Jupiter Aggregator. Swap any token for {TOKEN_CONFIG.ticker} instantly.</p>
        </div>
      </div>
    </section>
  );
}
