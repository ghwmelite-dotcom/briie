import { TOKEN_CONFIG } from "@/config";
import { GraduationCap, BookOpen, Trophy, Coins } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Study-to-Earn",
    description: "Complete a full Brilla Prep practice test and earn $BRIIE. The more you study, the more you earn.",
  },
  {
    icon: BookOpen,
    title: "Course Discounts",
    description: "Hold $BRIIE and unlock tiered discounts on all Brilla Prep courses — up to 25% off.",
  },
  {
    icon: Trophy,
    title: "Early Access",
    description: "Get first access to new practice tests, modules, and features before anyone else.",
  },
  {
    icon: Coins,
    title: "Scholarship Fund",
    description: "1% of every transaction feeds a scholarship pool for students who can't afford prep.",
  },
];

export default function UtilitySection() {
  return (
    <section id="utility" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Why Hold <span className="text-gradient">$BRIIE</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            This isn't just a memecoin. $BRIIE is tied to real utility on Brilla Prep. The platform grows, the token grows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2">Holder Tiers</h3>
          <p className="text-sm text-muted-foreground">The more $BRIIE you hold, the more you unlock.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOKEN_CONFIG.utilityTiers.map((tier, i) => (
            <div key={tier.name} className={`p-5 rounded-2xl border transition-all duration-300 ${i === 3 ? "bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/30" : "bg-card border-border hover:border-emerald-500/20"}`}>
              <div className="text-xs font-medium text-emerald-400 mb-1">{tier.name}</div>
              <div className="text-lg font-bold mb-2">{tier.amount}</div>
              <div className="text-sm text-muted-foreground">{tier.benefit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
