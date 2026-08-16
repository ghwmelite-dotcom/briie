import { TOKEN_CONFIG } from "@/config";
import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle, GraduationCap, ExternalLink } from "lucide-react";

const communities = [
  { name: "Brilla Prep", description: "The main platform. Where the actual learning happens.", icon: GraduationCap, url: TOKEN_CONFIG.brillaprepUrl, color: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20", iconColor: "text-emerald-400" },
  { name: "Twitter / X", description: "Memes, updates, and Briie's financial advice (not financial advice).", icon: Twitter, url: TOKEN_CONFIG.twitterUrl, color: "from-blue-500/10 to-blue-600/5 border-blue-500/20", iconColor: "text-blue-400" },
  { name: "Telegram", description: "The degen study hall. Real-time vibes.", icon: MessageCircle, url: TOKEN_CONFIG.telegramUrl, color: "from-purple-500/10 to-purple-600/5 border-purple-500/20", iconColor: "text-purple-400" },
];

export default function Community() {
  return (
    <section id="community" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Join the <span className="text-gradient">Community</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">$BRIIE is a community token for students, degens, and everyone in between. No single owner — just Briie and the homies.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {communities.map((community) => (
            <a key={community.name} href={community.url} target="_blank" rel="noopener noreferrer" className={`group p-6 rounded-2xl bg-gradient-to-br ${community.color} border hover:scale-[1.02] transition-all duration-300`}>
              <community.icon className={`w-8 h-8 ${community.iconColor} mb-4`} />
              <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors">{community.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{community.description}</p>
              <div className="flex items-center text-sm font-medium text-emerald-400">Join <ExternalLink className="ml-1 w-4 h-4" /></div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to join Briie's class?</h3>
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-lg px-8 h-12 glow-green" onClick={() => window.open(TOKEN_CONFIG.jupiterSwapUrl, "_blank")}>
            Buy {TOKEN_CONFIG.ticker}
          </Button>
        </div>
      </div>
    </section>
  );
}
