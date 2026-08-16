import { TOKEN_CONFIG } from "@/config";
import { Twitter, MessageCircle, GraduationCap, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-black font-bold text-sm">B</div>
            <span className="font-bold text-lg">{TOKEN_CONFIG.ticker}</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href={TOKEN_CONFIG.brillaprepUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1"><GraduationCap className="w-4 h-4" /> Brilla Prep</a>
            <a href={TOKEN_CONFIG.twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1"><Twitter className="w-4 h-4" /> Twitter</a>
            <a href={TOKEN_CONFIG.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1"><MessageCircle className="w-4 h-4" /> Telegram</a>
            <a href={TOKEN_CONFIG.dexscreenerUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1"><ExternalLink className="w-4 h-4" /> Chart</a>
          </div>

          <p className="text-xs text-muted-foreground text-center md:text-right max-w-xs">
            {TOKEN_CONFIG.ticker} is a community token. Not financial advice. Briie is not a licensed financial advisor (or counselor, technically).
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Brilla Prep. All rights reserved. Built on Solana.
        </div>
      </div>
    </footer>
  );
}
