"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import { SLIDES, stepsOf } from "@/lib/slides";
import { useIsMobile } from "@/lib/use-is-mobile";

export default function Presentation() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <main className="fixed inset-0 bg-stage" />;
  }

  const progress = ((activeIndex + 1) / SLIDES.length) * 100;
  const containerClass = isMobile
    ? "bg-white overflow-hidden h-[100dvh] aspect-[9/16]"
    : "aspect-video bg-white rounded-[10px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden w-[min(94vw,calc(94vh*16/9))]";

  return (
    <main className="fixed inset-0 flex items-center justify-center">
      <Swiper
        modules={[Mousewheel, Keyboard]}
        slidesPerView={1}
        speed={350}
        mousewheel={{ enabled: true, forceToAxis: false, sensitivity: 1 }}
        keyboard={{ enabled: true }}
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
        className={containerClass}
      >
        {SLIDES.map((meta, i) => {
          const ActiveSlide = isMobile ? meta.MobileComponent : meta.Component;
          return (
            <SwiperSlide key={i} className="slide-container">
              <ActiveSlide step={stepsOf(i)} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div
        className="fixed left-0 bottom-0 h-[3px] bg-primary z-10 transition-[width] duration-400 ease-out"
        style={{ width: `${progress}%` }}
      />

      <div className="fixed left-[18px] bottom-3 text-white/40 text-xs z-10 select-none">
        {activeIndex + 1} / {SLIDES.length}
      </div>

      <div className="fixed right-[18px] bottom-3.5 text-white/[0.32] text-xs tracking-[0.5px] z-10 select-none">
        ← → 翻页 · 滚轮上下 · 空格前进
      </div>
    </main>
  );
}
