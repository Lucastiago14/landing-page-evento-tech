import { useState, useEffect } from 'react';

export default function Countdown() {
  // Target date: October 15, 2026
  const targetDate = new Date('2026-10-15T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Dias', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 justify-center mt-12">
      {timeBlocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className="bg-slate-900 border border-slate-800 w-20 h-20 flex items-center justify-center rounded-2xl shadow-xl">
            <span className="text-3xl font-black text-blue-500 font-mono">
              {String(block.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mt-3">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}