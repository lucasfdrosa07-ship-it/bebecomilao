import { useEffect, useState } from 'react';
import { Clock3 } from 'lucide-react';

const STORAGE_KEY = 'bebe-comilao-offer-deadline-v1';
const DURATION_MS = 17 * 60 * 1000;

export default function OfferCountdown() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    let deadline: number;
    try {
      const stored = Number(localStorage.getItem(STORAGE_KEY));
      deadline = Number.isFinite(stored) && stored > 0 ? stored : Date.now() + DURATION_MS;
      if (!stored || !Number.isFinite(stored) || stored <= 0) {
        localStorage.setItem(STORAGE_KEY, String(deadline));
      }
    } catch {
      deadline = Date.now() + DURATION_MS;
    }

    const tick = () => setRemaining(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
    tick();
    const interval = window.setInterval(tick, 1000);
    document.addEventListener('visibilitychange', tick);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener('visibilitychange', tick);
    };
  }, []);

  const time = remaining === null
    ? '--:--'
    : `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;

  const expired = remaining === 0;

  return (
    <div className="bg-offer-banner text-offer-banner-foreground px-3 py-2.5 text-center" aria-label={expired ? 'A oferta expirou! Mas se você continuar na página, ainda pode garantir o desconto.' : `Oferta limitada, expira em ${time}`}>
      <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-0.5 text-xs sm:text-sm font-bold">
        {expired ? (
          <span>A OFERTA EXPIROU! Mas se você continuar na página, ainda pode garantir o desconto.</span>
        ) : (
          <>
            <span>OFERTA LIMITADA - EXPIRA EM</span>
            <span className="inline-flex items-center gap-1.5 tabular-nums">
              <Clock3 className="w-4 h-4" aria-hidden="true" />
              <time role="timer" aria-live="off">{time}</time>
            </span>
          </>
        )}
      </div>
    </div>
  );
}