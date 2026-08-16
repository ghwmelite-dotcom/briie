import { TOKEN_CONFIG } from "@/config";
import { CheckCircle2, Circle, Flame } from "lucide-react";

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Platform <span className="text-gradient">Coupling</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">$BRIIE grows as Brilla Prep grows. Every platform milestone triggers a token event.</p>
        </div>

        <div className="space-y-6">
          {TOKEN_CONFIG.milestones.map((milestone, i) => {
            const completed = i < 1;
            return (
              <div key={milestone.milestone} className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 ${completed ? "bg-emerald-500/5 border-emerald-500/20" : "bg-card border-border"}`}>
                <div className="shrink-0 mt-0.5">
                  {completed ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : <Circle className="w-6 h-6 text-muted-foreground" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{milestone.milestone}</h3>
                    {completed && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">Done</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <Flame className="w-3.5 h-3.5 inline mr-1 text-emerald-400" />
                    {milestone.action}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 text-center">
          <h3 className="text-lg font-bold mb-2">The Flywheel</h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            More students → More revenue → Token buybacks + burns → Higher $BRIIE value → More students can afford prep → More students.
          </p>
        </div>
      </div>
    </section>
  );
}
