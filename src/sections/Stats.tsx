import { useEffect, useState } from "react";
import { TrendingUp, Users, Droplets, Flame } from "lucide-react";

interface TokenData {
  price: number;
  marketCap: number;
  holders: number;
  volume24h: number;
}

function formatNumber(num: number): string {
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
  return `$${num.toFixed(4)}`;
}

function formatPrice(num: number): string {
  if (num < 0.01) return `$${num.toFixed(8)}`;
  return `$${num.toFixed(6)}`;
}

export default function Stats() {
  const [data, setData] = useState<TokenData>({
    price: 0.000042,
    marketCap: 420000,
    holders: 1250,
    volume24h: 89000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const change = (Math.random() - 0.48) * 0.000001;
        const newPrice = Math.max(0.000001, prev.price + change);
        return { ...prev, price: newPrice, marketCap: newPrice * 1e10 };
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "$BRIIE Price", value: formatPrice(data.price), icon: TrendingUp, change: "+12.5%", positive: true },
    { label: "Market Cap", value: formatNumber(data.marketCap), icon: Droplets, change: "+8.2%", positive: true },
    { label: "Student Holders", value: data.holders.toLocaleString(), icon: Users, change: "+45", positive: true },
    { label: "Scholarship Pool", value: formatNumber(data.volume24h), icon: Flame, change: "+5.3%", positive: true },
  ];

  return (
    <section id="stats" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-5 h-5 text-emerald-500" />
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${stat.positive ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold tracking-tight mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
