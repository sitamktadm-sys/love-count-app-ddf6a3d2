import { useState, useEffect } from 'react';

interface LoveCounterProps {
  startDate: string;
}

interface TimeBreakdown {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
}

function calculateTimeBreakdown(startDate: string): TimeBreakdown {
  const start = new Date(startDate);
  const now = new Date();
  
  const diffMs = now.getTime() - start.getTime();
  
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  
  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return { years, months, days, totalDays, totalHours, totalMinutes, totalSeconds };
}

function formatNumber(num: number): string {
  return num.toLocaleString();
}

export function LoveCounter({ startDate }: LoveCounterProps) {
  const [time, setTime] = useState<TimeBreakdown>(() => calculateTimeBreakdown(startDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeBreakdown(startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="text-center space-y-5 animate-fade-in counter-glow py-6">
      {/* Primary Counter */}
      <div className="text-2xl sm:text-[32px] md:text-[40px] font-semibold leading-tight">
        {time.years > 0 && (
          <>
            <span className="text-gradient">{time.years}</span>
            <span className="text-white/90"> {time.years === 1 ? 'year' : 'years'}, </span>
          </>
        )}
        <span className="text-gradient">{time.months}</span>
        <span className="text-white/90"> {time.months === 1 ? 'month' : 'months'}, </span>
        <span className="text-gradient">{time.days}</span>
        <span className="text-white/90"> {time.days === 1 ? 'day' : 'days'}</span>
      </div>

      {/* Secondary Live Counter */}
      <div className="text-sm sm:text-[15px] text-white/60 font-light tracking-wider">
        <span className="tabular-nums font-medium text-white/70">{formatNumber(time.totalDays)}</span>
        <span> days</span>
        <span className="mx-2.5 opacity-40">•</span>
        <span className="tabular-nums font-medium text-white/70">{formatNumber(time.totalHours)}</span>
        <span> hours</span>
        <span className="mx-2.5 opacity-40">•</span>
        <span className="tabular-nums font-medium text-white/70 animate-pulse-soft">{formatNumber(time.totalMinutes)}</span>
        <span> minutes</span>
      </div>
    </div>
  );
}

export default LoveCounter;
