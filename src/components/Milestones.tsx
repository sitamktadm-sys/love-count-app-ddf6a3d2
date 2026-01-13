import { useMemo } from 'react';
import { Check } from 'lucide-react';

interface MilestonesProps {
  startDate: string;
}

interface Milestone {
  label: string;
  traditionName: string;
  date: Date;
  isPast: boolean;
  daysUntil: number;
}

const ANNIVERSARY_TRADITIONS: Record<number, string> = {
  1: 'Paper',
  2: 'Cotton',
  3: 'Leather',
  4: 'Fruit & Flowers',
  5: 'Wood',
  6: 'Sugar',
  7: 'Wool',
  8: 'Pottery',
  9: 'Willow',
  10: 'Tin',
};

function calculateMilestones(startDate: string): Milestone[] {
  const start = new Date(startDate);
  const now = new Date();
  
  const milestones: Milestone[] = [];
  
  // Anniversary milestones with traditions
  for (let year = 1; year <= 10; year++) {
    const date = new Date(start);
    date.setFullYear(date.getFullYear() + year);
    const isPast = date <= now;
    const diffTime = date.getTime() - now.getTime();
    const daysUntil = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    milestones.push({
      label: `${year} ${year === 1 ? 'Year' : 'Years'}`,
      traditionName: ANNIVERSARY_TRADITIONS[year] || '',
      date,
      isPast,
      daysUntil: isPast ? 0 : daysUntil,
    });
  }
  
  // Filter to show last 2 completed and next 3 upcoming
  const completed = milestones.filter(m => m.isPast).slice(-2);
  const upcoming = milestones.filter(m => !m.isPast).slice(0, 3);
  
  return [...completed, ...upcoming];
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
            className={`flex items-center justify-between p-3 sm:p-4 rounded-xl transition-all ${
              milestone.isPast 
                ? 'bg-emerald-500/15 border border-emerald-500/30' 
                : 'bg-white/5 border border-white/10'
            }`}
          >
            <div className="flex items-center gap-3">
              {milestone.isPast ? (
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/50 text-xs">○</span>
                </div>
              )}
              <div className="flex flex-col">
                <span className={`font-medium ${milestone.isPast ? 'text-white' : 'text-white/80'}`}>
                  {milestone.label} - {milestone.traditionName}
                </span>
              </div>
            </div>
            <div className="text-right">
              {milestone.isPast ? (
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
                  Completed!
                </span>
              ) : (
                <span className={`text-sm font-medium ${
                  milestone.daysUntil <= 365 ? 'text-[#E84A5F]' : 'text-white/50'
                }`}>
                  {milestone.daysUntil} days
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Milestones;
