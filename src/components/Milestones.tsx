import { useMemo } from 'react';

interface MilestonesProps {
  startDate: string;
}

interface Milestone {
  label: string;
  date: Date;
  isPast: boolean;
  emoji: string;
}

function calculateMilestones(startDate: string): Milestone[] {
  const start = new Date(startDate);
  const now = new Date();
  
  const milestones: Milestone[] = [];
  
  // Day milestones
  const dayMilestones = [100, 365, 500, 1000, 1500, 2000, 3000, 5000];
  dayMilestones.forEach(days => {
    const date = new Date(start);
    date.setDate(date.getDate() + days);
    milestones.push({
      label: `${days} days`,
      date,
      isPast: date <= now,
      emoji: days >= 1000 ? '🎉' : '✨'
    });
  });
  
  // Anniversary milestones
  for (let year = 1; year <= 10; year++) {
    const date = new Date(start);
    date.setFullYear(date.getFullYear() + year);
    milestones.push({
      label: `${year} ${year === 1 ? 'year' : 'years'}`,
      date,
      isPast: date <= now,
      emoji: year >= 5 ? '💍' : '💕'
    });
  }
  
  // Sort by date and filter to show relevant ones
  return milestones
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .filter(m => {
      const diffDays = Math.floor((m.date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      // Show past milestones (last 2) and upcoming (next 3)
      return m.isPast || diffDays <= 365;
    })
    .slice(-5);
}

export function Milestones({ startDate }: MilestonesProps) {
  const milestones = useMemo(() => calculateMilestones(startDate), [startDate]);
  
  if (milestones.length === 0) return null;

  return (
    <div className="glass-card p-6 sm:p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <h2 className="text-lg sm:text-xl font-serif font-semibold text-gradient-coral text-center mb-6">
        🎯 Your Milestones
      </h2>
      <div className="space-y-3">
        {milestones.map((milestone, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-between p-3 rounded-xl transition-all ${
              milestone.isPast 
                ? 'bg-primary/20 border border-primary/30' 
                : 'bg-white/5 border border-white/10'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{milestone.emoji}</span>
              <span className={`font-medium ${milestone.isPast ? 'text-primary' : 'text-white/80'}`}>
                {milestone.label}
              </span>
            </div>
            <span className={`text-sm ${milestone.isPast ? 'text-primary/80' : 'text-white/50'}`}>
              {milestone.date.toLocaleDateString('en-GB', { 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric' 
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Milestones;
