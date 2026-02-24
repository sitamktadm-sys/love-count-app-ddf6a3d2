import { useMemo } from 'react';

interface FunStatsProps {
  startDate: string;
}

interface Stats {
  fullMoons: number;
  christmases: number;
  valentines: number;
  weekends: number;
  heartbeatsMillions: number;
}

function calculateFunStats(startDate: string): Stats {
  const start = new Date(startDate);
  const now = new Date();
  const diffMs = now.getTime() - start.getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  const fullMoons = Math.floor(days / 29.5);
  
  let christmases = 0;
  for (let year = start.getFullYear(); year <= now.getFullYear(); year++) {
    const christmas = new Date(year, 11, 25);
    if (christmas >= start && christmas <= now) christmases++;
  }
  
  let valentines = 0;
  for (let year = start.getFullYear(); year <= now.getFullYear(); year++) {
    const valentine = new Date(year, 1, 14);
    if (valentine >= start && valentine <= now) valentines++;
  }
  
  const weekends = Math.floor(days / 7);
  
  const minutes = days * 24 * 60;
  const heartbeats = Math.floor(minutes * 70 * 2);
  const heartbeatsMillions = Math.floor(heartbeats / 1000000);
  
  return { fullMoons, christmases, valentines, weekends, heartbeatsMillions };
}

export function FunStats({ startDate }: FunStatsProps) {
  const stats = useMemo(() => calculateFunStats(startDate), [startDate]);

  const statItems = [
    { emoji: '🌕', value: stats.fullMoons, label: 'full moons', show: stats.fullMoons > 0 },
    { emoji: '🎄', value: stats.christmases, label: stats.christmases === 1 ? 'christmas' : 'christmases', show: stats.christmases > 0 },
    { emoji: '💝', value: stats.valentines, label: "valentine's", show: stats.valentines > 0 },
    { emoji: '🗓️', value: stats.weekends, label: 'weekends', show: stats.weekends > 0 },
    { emoji: '💓', value: `${stats.heartbeatsMillions}M`, label: 'heartbeats', show: stats.heartbeatsMillions > 0 },
  ];

  const visibleStats = statItems.filter(item => item.show);

  if (visibleStats.length === 0) return null;

  return (
    <div className="glass-card p-6 sm:p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-lg sm:text-xl font-serif font-semibold text-gradient-coral text-center mb-6">
        💕 Your Love in Numbers
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {visibleStats.map((stat, index) => (
          <div key={index} className="stat-box group w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.5rem)]">
            <span className="text-2xl sm:text-3xl mb-2 block">{stat.emoji}</span>
            <span className="text-2xl sm:text-3xl font-bold block leading-tight" style={{ color: '#E84A5F' }}>
              {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
            </span>
            <span className="text-xs uppercase tracking-wide text-white/50 mt-1 block">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FunStats;
