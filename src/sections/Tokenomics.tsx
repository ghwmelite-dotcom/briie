import { TOKEN_CONFIG } from "@/config";
import { Lock, Ban, CheckCircle2, Heart, TrendingUp } from "lucide-react";

const features = [
  { icon: Lock, title: "Liquidity Locked", description: "LP tokens are locked. Briie doesn't rug.", active: TOKEN_CONFIG.liquidityLocked },
  { icon: Ban, title: "Mint Renounced", description: "No new $BRIIE can ever be created. Fixed supply.", active: TOKEN_CONFIG.mintRenounced },
  { icon: Heart, title: "1% Scholarship Tax", description: "Every buy/sell feeds the scholarship pool for students in need.", active: true },
  { icon: TrendingUp, title: "Revenue Buybacks", description: "5% of Brilla Prep revenue buys back $BRIIE from the market.", active: true },
  { icon: CheckCircle2, title: "Fair Launch", description: "No presale. No insider allocations. Briie bought at the same price as you.", active: true },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"><span className="text-gradient">Tokenomics</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Built for the community. Built for students. Built to last.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-sm text-muted-foreground mb-1">Total Supply</div>
              <div className="text-3xl font-bold text-gradient">{TOKEN_CONFIG.totalSupply}</div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-sm text-muted-foreground mb-1">Transaction Tax</div>
              <div className="text-3xl font-bold text-emerald-400">{TOKEN_CONFIG.tax}</div>
              <div className="text-sm text-muted-foreground mt-1">→ {TOKEN_CONFIG.taxDestination}</div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-sm text-muted-foreground mb-1">Chain</div>
              <div className="text-3xl font-bold">Solana</div>
            </div>
          </div>

          <div className="grid gap-4">
            {features.map((feature) => (
              <div key={feature.title} className={`p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${feature.active ? "bg-emerald-500/5 border-emerald-500/20" : "bg-card border-border opacity-50"}`}>
                <feature.icon className={`w-6 h-6 shrink-0 mt-0.5 ${feature.active ? "text-emerald-500" : "text-muted-foreground"}`} />
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
