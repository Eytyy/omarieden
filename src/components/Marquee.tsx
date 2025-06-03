'use client';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

export function Marquee({
  children,
  speed = 100,
  lang,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  lang: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [runWidth, setRunWidth] = useState(0);
  const duration = runWidth ? runWidth / speed : 0;

  // Measure *one* run’s exact width (in whole pixels)
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const runEl = containerRef.current.querySelector('.marquee-run');
    if (runEl) {
      // use getBoundingClientRect() to avoid sub-pixel
      setRunWidth(Math.round(runEl.getBoundingClientRect().width));
    }
  }, [children]);

  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      <div
        ref={containerRef}
        className="inline-block whitespace-nowrap"
        style={
          {
            ['--run-width' as string]: `${runWidth}px`,
            animation: runWidth
              ? `${lang == 'en' ? 'scrollPx' : 'scrollPxRTL'} ${duration}s linear infinite`
              : undefined,
            willChange: 'transform',
          } as React.CSSProperties
        }
      >
        {[0, 1].map((i) => (
          <div
            key={`marquee-${i}`}
            className="marquee-run inline-block flex-shrink-0"
            // if you want spacing *between* runs, you can put a margin on the first:
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
