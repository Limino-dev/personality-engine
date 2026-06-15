"use client";

import { useCallback, useEffect, useState } from "react";
import { SLIDES, stepsOf } from "@/lib/slides";
import { useIsMobile } from "@/lib/use-is-mobile";

interface Position {
  cur: number;
  step: number;
}

export default function Presentation() {
  const [mounted, setMounted] = useState(false);
  const [{ cur, step }, setState] = useState<Position>({ cur: 0, step: 0 });
  const isMobile = useIsMobile();

  const show = useCallback((i: number, atStart = true) => {
    const idx = Math.max(0, Math.min(SLIDES.length - 1, i));
    const maxStep = stepsOf(idx);
    setState({ cur: idx, step: atStart ? 0 : maxStep });
  }, []);

  const next = useCallback(() => {
    setState(({ cur, step }) => {
      const maxStep = stepsOf(cur);
      if (step < maxStep) return { cur, step: step + 1 };
      if (cur < SLIDES.length - 1) return { cur: cur + 1, step: 0 };
      return { cur, step };
    });
  }, []);

  const prev = useCallback(() => {
    setState(({ cur, step }) => {
      if (step > 0) return { cur, step: step - 1 };
      if (cur > 0) {
        const newCur = cur - 1;
        return { cur: newCur, step: stepsOf(newCur) };
      }
      return { cur, step };
    });
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        show(0, true);
      } else if (e.key === "End") {
        show(SLIDES.length - 1, false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [next, prev, show]);

  useEffect(() => {
    let startX = 0;
    const onStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) {
        if (dx < 0) next();
        else prev();
      }
    };
    document.addEventListener("touchstart", onStart, { passive: true });
    document.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      document.removeEventListener("touchstart", onStart);
      document.removeEventListener("touchend", onEnd);
    };
  }, [next, prev]);

  useEffect(() => {
    let locked = false;
    const onWheel = (e: WheelEvent) => {
      if (locked) return;
      if (Math.abs(e.deltaY) < 5) return;
      locked = true;
      setState(({ cur }) => {
        if (e.deltaY > 0) {
          if (cur >= SLIDES.length - 1) return { cur, step: stepsOf(cur) };
          const nextCur = cur + 1;
          return { cur: nextCur, step: stepsOf(nextCur) };
        } else {
          if (cur <= 0) return { cur, step: 0 };
          const prevCur = cur - 1;
          return { cur: prevCur, step: stepsOf(prevCur) };
        }
      });
      window.setTimeout(() => {
        locked = false;
      }, 600);
    };
    document.addEventListener("wheel", onWheel, { passive: true });
    return () => document.removeEventListener("wheel", onWheel);
  }, []);

  if (!mounted) {
    return <main className="fixed inset-0 bg-stage" />;
  }

  const onStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.clientX < window.innerWidth * 0.25) prev();
    else next();
  };

  const progress = ((cur + 1) / SLIDES.length) * 100;
  const ActiveSlide = isMobile
    ? SLIDES[cur].MobileComponent
    : SLIDES[cur].Component;

  return (
    <main className="fixed inset-0 flex items-center justify-center">
      <div
        key={cur}
        className={
          isMobile
            ? "slide-container absolute bg-white overflow-hidden h-[100dvh] aspect-[9/16]"
            : "slide-container absolute aspect-video bg-white rounded-[10px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden w-[min(94vw,calc(94vh*16/9))]"
        }
        onClick={onStageClick}
      >
        <ActiveSlide step={step} />
      </div>

      <div
        className="fixed left-0 bottom-0 h-[3px] bg-primary z-10 transition-[width] duration-400 ease-out"
        style={{ width: `${progress}%` }}
      />

      <div className="fixed left-[18px] bottom-3 text-white/40 text-xs z-10 select-none">
        {cur + 1} / {SLIDES.length}
      </div>

      <div className="fixed right-[18px] bottom-3.5 text-white/[0.32] text-xs tracking-[0.5px] z-10 select-none">
        ← → 翻页 · 滚轮上下 · 空格前进
      </div>
    </main>
  );
}
