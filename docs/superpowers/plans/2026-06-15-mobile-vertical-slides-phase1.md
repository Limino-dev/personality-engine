# 移动端竖屏 SVG 重设计 - Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Phase 1：搭建移动端竖屏 SVG 基础设施 + 完成 2 个示范 slide（Slide01Cover、Slide03BigModel）的移动版，让用户审查风格后再批量推进 Phase 2。

**Architecture:** 新建 `*.mobile.tsx` 后缀的移动版组件（viewBox 720×1280），用 `next/dynamic` + `ssr:false` 包装避免打入 server bundle。Presentation.tsx 用 mounted gate（client mount 后才渲染）+ useIsMobile hook 选择渲染桌面版或移动版，彻底避免 SSR 首屏闪烁。

**Tech Stack:** Next.js 15.5.19, React 19, TypeScript, Tailwind CSS（无测试套件，用 `npm run build` + dev server 视觉验证作为集成验证）。

**Spec:** `docs/superpowers/specs/2026-06-15-mobile-vertical-slides-design.md`

---

## 文件结构

| 文件 | 操作 | 职责 |
|---|---|---|
| `lib/use-is-mobile.ts` | 新建 | `useIsMobile()` hook，监听 `matchMedia('(max-width: 767px)')` |
| `components/slides/SlideBaseMobile.tsx` | 新建 | 移动版骨架（章节/标题/分隔线/页码），导出 `SlideBaseMobile` 和 `Step` |
| `components/slides/Slide01Cover.mobile.tsx` | 新建 | 封面移动版（nostep，居中布局） |
| `components/slides/Slide03BigModel.mobile.tsx` | 新建 | 内容页示范（4 step，含曲线图） |
| `lib/slides.ts` | 改造 | 加 `MobileComponent` 字段，2 个示范用 dynamic ssr:false，其余占位指向桌面版 |
| `components/Presentation.tsx` | 改造 | mounted gate + isMobile 切换 + 响应式 slide-container 样式 |
| `components/slides/Slide*.tsx`（19 个） | 改造 | 移除上一次临时加的 `preserveAspectRatio="none"`（桌面端不再需要拉伸） |
| `app/layout.tsx` | 改造 | 移除 `maximumScale` / `userScalable`（移动版重新设计后允许缩放查看细节） |

---

## Task 1: 创建 useIsMobile hook

**Files:**
- Create: `lib/use-is-mobile.ts`

- [ ] **Step 1: 写 hook**

```ts
"use client";

import { useEffect, useState } from "react";

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}
```

- [ ] **Step 2: 验证编译**

Run: `npm run build`
Expected: build 成功，无类型错误。文件被识别为 client module。

- [ ] **Step 3: Commit**

```bash
git add lib/use-is-mobile.ts
git commit -m "feat: add useIsMobile hook for responsive rendering"
```

---

## Task 2: 创建移动版骨架 SlideBaseMobile

**Files:**
- Create: `components/slides/SlideBaseMobile.tsx`

- [ ] **Step 1: 写骨架组件**

参考桌面版 `components/slides/SlideBase.tsx`，调整所有坐标到 720×1280 viewBox：

```tsx
import type { ReactNode } from "react";

interface SlideBaseMobileProps {
  chapter: string;
  title: string;
  page: number;
  totalPages?: number;
  children?: ReactNode;
}

export function SlideBaseMobile({
  chapter,
  title,
  page,
  totalPages = 15,
  children,
}: SlideBaseMobileProps) {
  return (
    <>
      <defs>
        <marker
          id="arr"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="context-stroke"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
      <rect width="720" height="1280" fill="#FFFFFF" />
      <g className="module">
        <text
          x="40"
          y="80"
          fontFamily="Noto Sans CJK SC"
          fontSize="22"
          fill="#57518C"
          fontWeight="500"
          letterSpacing="4"
        >
          {chapter}
        </text>
        <text
          x="40"
          y="160"
          fontFamily="Noto Sans CJK SC"
          fontSize="37"
          fill="#2B2A27"
          fontWeight="500"
        >
          {title}
        </text>
      </g>
      {children}
      <g className="module">
        <line
          x1="40"
          y1="1216"
          x2="680"
          y2="1216"
          stroke="#E3E2DF"
          strokeWidth="1"
        />
        <text
          x="680"
          y="1258"
          fontFamily="Noto Sans CJK SC"
          fontSize="18"
          fill="#8C8B85"
          textAnchor="end"
        >
          {String(page).padStart(2, "0")} / {totalPages}
        </text>
      </g>
    </>
  );
}

interface StepProps {
  show: boolean;
  children: ReactNode;
}

export function Step({ show, children }: StepProps) {
  return (
    <g className="module">
      <g
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(8px)",
          transition:
            "opacity 0.3s cubic-bezier(.22,.61,.36,1), transform 0.3s cubic-bezier(.22,.61,.36,1)",
        }}
      >
        {children}
      </g>
    </g>
  );
}
```

- [ ] **Step 2: 验证编译**

Run: `npm run build`
Expected: build 成功，无类型错误。

- [ ] **Step 3: Commit**

```bash
git add components/slides/SlideBaseMobile.tsx
git commit -m "feat: add SlideBaseMobile skeleton (viewBox 720x1280)"
```

---

## Task 3: 创建 Slide01Cover 移动版

**Files:**
- Create: `components/slides/Slide01Cover.mobile.tsx`

封面在桌面版是左对齐布局（logo 在左上、标题在左侧）。移动版改为**居中布局**：logo 和标题水平居中，整体在视口中上部。

- [ ] **Step 1: 写封面移动版**

```tsx
import type { SlideProps } from "@/lib/slides";
import { LOGO_DATA_URL } from "@/lib/logo";

export default function Slide01CoverMobile({}: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="1280" fill="#FFFFFF" />
      <g className="module">
        <defs>
          <clipPath id="lg-mobile">
            <rect x="310" y="380" width="100" height="100" rx="22" />
          </clipPath>
        </defs>
        <g clipPath="url(#lg-mobile)">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <image href={LOGO_DATA_URL} x="310" y="380" width="100" height="100" />
        </g>
        <text
          x="360"
          y="540"
          fontFamily="Noto Sans CJK SC"
          fontSize="23"
          fill="#57518C"
          fontWeight="500"
          letterSpacing="6"
          textAnchor="middle"
        >
          利米诺 · LIMINO
        </text>
        <text
          x="360"
          y="640"
          fontFamily="Noto Sans CJK SC"
          fontSize="58"
          fill="#2B2A27"
          fontWeight="500"
          textAnchor="middle"
        >
          Agent人格引擎
        </text>
        <rect x="314" y="670" width="92" height="3" fill="#6F68AC" />
        <text
          x="360"
          y="730"
          fontFamily="Noto Sans CJK SC"
          fontSize="26"
          fill="#5E5D58"
          textAnchor="middle"
        >
          让Agent具备深度与稳定的判断主体
        </text>
        <circle cx="660" cy="1230" r="10" fill="#B0A9DA" />
      </g>
    </svg>
  );
}
```

**关键坐标计算**：
- viewBox 720×1280，水平中心 x=360
- logo 居中：宽 100，左 x = (720-100)/2 = 310，垂直位置 y=380（屏幕上 30% 处）
- logo 下 60px：副标题 y=540
- 副标题下 100px：主标题 y=640
- 主标题下 30px：紫色细条 y=670，宽 92，左 x = (720-92)/2 = 314
- 细条下 60px：副标题描述 y=730
- 右下紫色圆 (660, 1230)

- [ ] **Step 2: 验证编译**

Run: `npm run build`
Expected: build 成功。

- [ ] **Step 3: Commit**

```bash
git add components/slides/Slide01Cover.mobile.tsx
git commit -m "feat: add Slide01Cover mobile version (centered layout)"
```

---

## Task 4: 创建 Slide03BigModel 移动版

**Files:**
- Create: `components/slides/Slide03BigModel.mobile.tsx`

桌面版 step1 和 step3 是长行文字（在 1280 宽下恰好不溢出），移动版 720 宽需要拆成两行避免拥挤。

- [ ] **Step 1: 写内容页示范移动版**

```tsx
import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

export default function Slide03BigModelMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile chapter="01 · 大模型的天性" title="什么都懂，想得浅" page={1}>
        <Step show={step >= 1}>
          <text
            x="40"
            y="240"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#5E5D58"
          >
            知识全面、横切极快，但权重冻结
          </text>
          <text
            x="40"
            y="280"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#5E5D58"
          >
            想得再好，也不沉淀回自己
          </text>
        </Step>
        <Step show={step >= 2}>
          <g transform="translate(20,400)">
            <line x1="60" y1="142" x2="640" y2="142" stroke="#E3E2DF" strokeWidth="1" />
            <line x1="60" y1="142" x2="60" y2="16" stroke="#E3E2DF" strokeWidth="1" />
            <path
              d="M 70 124 C 160 98, 240 92, 340 89 C 440 87, 540 86, 614 86"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 70 130 C 200 124, 320 113, 430 89 C 510 70, 570 48, 616 26"
              fill="none"
              stroke="#6F68AC"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="614" cy="86" r="3.5" fill="#8C8B85" />
            <circle
              cx="616"
              cy="26"
              r="4.5"
              fill="#B0A9DA"
              stroke="#6F68AC"
              strokeWidth="1.2"
            />
            <text
              x="612"
              y="16"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#6F68AC"
              fontWeight="500"
              textAnchor="end"
            >
              人 · 深度复利
            </text>
            <text
              x="610"
              y="106"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#8C8B85"
              fontWeight="500"
              textAnchor="end"
            >
              模型 · 深度定额
            </text>
            <text
              x="640"
              y="164"
              fontFamily="Noto Sans CJK SC"
              fontSize="12"
              fill="#8C8B85"
              textAnchor="end"
            >
              投入的时间 →
            </text>
            <text
              x="54"
              y="26"
              fontFamily="Noto Sans CJK SC"
              fontSize="12"
              fill="#8C8B85"
              textAnchor="end"
            >
              深度
            </text>
          </g>
        </Step>
        <Step show={step >= 3}>
          <text
            x="40"
            y="1140"
            fontFamily="Noto Sans CJK SC"
            fontSize="27"
            fill="#2B2A27"
            fontWeight="500"
          >
            人的深度是复利的
          </text>
          <text
            x="40"
            y="1180"
            fontFamily="Noto Sans CJK SC"
            fontSize="27"
            fill="#2B2A27"
            fontWeight="500"
          >
            模型的深度是定额的
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
```

**关键坐标计算**：
- step1 文字拆两行（原 "知识全面...——想得再好..."）：y=240 和 y=280（行高 40）
- step2 曲线图：原坐标 60~640（宽 580），整体 translate(20, 400)。曲线图最终位置：x=80~700, y=416~564
- step3 金句拆两行：y=1140 和 y=1180（在分隔线 y=1216 上方留 36px 给两行）

- [ ] **Step 2: 验证编译**

Run: `npm run build`
Expected: build 成功。

- [ ] **Step 3: Commit**

```bash
git add components/slides/Slide03BigModel.mobile.tsx
git commit -m "feat: add Slide03BigModel mobile version (stacked layout)"
```

---

## Task 5: 改造 lib/slides.ts

**Files:**
- Modify: `lib/slides.ts`（整体重写）

加 `"use client"` + `MobileComponent` 字段。Phase 1 的 2 个移动版用 `dynamic ssr:false` 包装；其余 17 个暂时占位指向桌面版（Phase 2 替换）。

- [ ] **Step 1: 整体重写 lib/slides.ts**

```ts
"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import Slide01Cover from "@/components/slides/Slide01Cover";
import Slide02Part01 from "@/components/slides/Slide02Part01";
import Slide03BigModel from "@/components/slides/Slide03BigModel";
import Slide04TwoGaps from "@/components/slides/Slide04TwoGaps";
import Slide05ExperienceCurve from "@/components/slides/Slide05ExperienceCurve";
import Slide06Subjectivity from "@/components/slides/Slide06Subjectivity";
import Slide07Part02 from "@/components/slides/Slide07Part02";
import Slide08PersonalityEngine from "@/components/slides/Slide08PersonalityEngine";
import Slide09Misconceptions from "@/components/slides/Slide09Misconceptions";
import Slide10LStack from "@/components/slides/Slide10LStack";
import Slide11Mechanism from "@/components/slides/Slide11Mechanism";
import Slide12CoreValue from "@/components/slides/Slide12CoreValue";
import Slide13Competition from "@/components/slides/Slide13Competition";
import Slide14Productivity from "@/components/slides/Slide14Productivity";
import Slide15Part03 from "@/components/slides/Slide15Part03";
import Slide16AdCreative from "@/components/slides/Slide16AdCreative";
import Slide17WorkLogic from "@/components/slides/Slide17WorkLogic";
import Slide18Vision from "@/components/slides/Slide18Vision";
import Slide19Landscape from "@/components/slides/Slide19Landscape";

// Phase 1 移动版（已完成）— 用 dynamic ssr:false 包装，避免打入 server bundle
const Slide01CoverMobile = dynamic(
  () => import("@/components/slides/Slide01Cover.mobile"),
  { ssr: false }
);
const Slide03BigModelMobile = dynamic(
  () => import("@/components/slides/Slide03BigModel.mobile"),
  { ssr: false }
);

export interface SlideProps {
  step: number;
}

export interface SlideMeta {
  Component: ComponentType<SlideProps>;
  MobileComponent: ComponentType<SlideProps>;
  nostep: boolean;
}

export const SLIDES: SlideMeta[] = [
  { Component: Slide01Cover, MobileComponent: Slide01CoverMobile, nostep: true },
  // Phase 2 待替换：以下 17 个 MobileComponent 暂时指向桌面版作为占位
  { Component: Slide02Part01, MobileComponent: Slide02Part01, nostep: true },
  { Component: Slide03BigModel, MobileComponent: Slide03BigModelMobile, nostep: false },
  { Component: Slide04TwoGaps, MobileComponent: Slide04TwoGaps, nostep: false },
  { Component: Slide05ExperienceCurve, MobileComponent: Slide05ExperienceCurve, nostep: false },
  { Component: Slide06Subjectivity, MobileComponent: Slide06Subjectivity, nostep: false },
  { Component: Slide07Part02, MobileComponent: Slide07Part02, nostep: true },
  { Component: Slide08PersonalityEngine, MobileComponent: Slide08PersonalityEngine, nostep: false },
  { Component: Slide09Misconceptions, MobileComponent: Slide09Misconceptions, nostep: false },
  { Component: Slide10LStack, MobileComponent: Slide10LStack, nostep: false },
  { Component: Slide11Mechanism, MobileComponent: Slide11Mechanism, nostep: false },
  { Component: Slide12CoreValue, MobileComponent: Slide12CoreValue, nostep: false },
  { Component: Slide13Competition, MobileComponent: Slide13Competition, nostep: false },
  { Component: Slide14Productivity, MobileComponent: Slide14Productivity, nostep: false },
  { Component: Slide15Part03, MobileComponent: Slide15Part03, nostep: true },
  { Component: Slide16AdCreative, MobileComponent: Slide16AdCreative, nostep: false },
  { Component: Slide17WorkLogic, MobileComponent: Slide17WorkLogic, nostep: false },
  { Component: Slide18Vision, MobileComponent: Slide18Vision, nostep: false },
  { Component: Slide19Landscape, MobileComponent: Slide19Landscape, nostep: false },
];

export const stepsOf = (i: number): number => {
  if (i < 0 || i >= SLIDES.length) return 0;
  return SLIDES[i].nostep ? 0 : 3;
};
```

- [ ] **Step 2: 验证编译**

Run: `npm run build`
Expected: build 成功，无类型错误。dynamic import 被识别为合法 client module。

- [ ] **Step 3: Commit**

```bash
git add lib/slides.ts
git commit -m "feat: add MobileComponent field to SlideMeta, wire 2 mobile slides via dynamic ssr:false"
```

---

## Task 6: 改造 Presentation.tsx

**Files:**
- Modify: `components/Presentation.tsx`

加 mounted gate（避免 SSR 首屏闪烁）+ useIsMobile 切换 + 响应式 slide-container 样式。

- [ ] **Step 1: 改造 Presentation.tsx**

完整改造文件。原文件已有 next/prev/show/onKey/onTouch/onWheel 逻辑，全部保留。改动：
1. import `useIsMobile`
2. 新增 `mounted` state
3. 新增 `useEffect(() => setMounted(true), [])`
4. mounted=false 时返回纯舞台背景（`<main className="fixed inset-0 bg-stage" />`）
5. 根据 isMobile 切换 ActiveSlide 和 slide-container className

```tsx
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
```

**关键改动点**：
- mounted gate：`if (!mounted) return <main className="fixed inset-0 bg-stage" />`，避免 SSR 渲染桌面版造成的移动端首屏闪烁
- ActiveSlide 根据 isMobile 切换
- slide-container className 根据 isMobile 切换：
  - 移动端：`h-[100dvh]`（动态视口高度，避免移动浏览器地址栏遮挡）+ `aspect-[9/16]` + 无圆角无阴影
  - 桌面端：恢复原 16:9 卡片样式

- [ ] **Step 2: 验证编译**

Run: `npm run build`
Expected: build 成功，无类型错误。

- [ ] **Step 3: Commit**

```bash
git add components/Presentation.tsx
git commit -m "feat: add mounted gate and isMobile switching in Presentation"
```

---

## Task 7: 清理 19 个桌面 slide 的 preserveAspectRatio

**Files:**
- Modify: `components/slides/Slide01Cover.tsx`
- Modify: `components/slides/Slide02Part01.tsx`
- Modify: `components/slides/Slide03BigModel.tsx`
- Modify: `components/slides/Slide04TwoGaps.tsx`
- Modify: `components/slides/Slide05ExperienceCurve.tsx`
- Modify: `components/slides/Slide06Subjectivity.tsx`
- Modify: `components/slides/Slide07Part02.tsx`
- Modify: `components/slides/Slide08PersonalityEngine.tsx`
- Modify: `components/slides/Slide09Misconceptions.tsx`
- Modify: `components/slides/Slide10LStack.tsx`
- Modify: `components/slides/Slide11Mechanism.tsx`
- Modify: `components/slides/Slide12CoreValue.tsx`
- Modify: `components/slides/Slide13Competition.tsx`
- Modify: `components/slides/Slide14Productivity.tsx`
- Modify: `components/slides/Slide15Part03.tsx`
- Modify: `components/slides/Slide16AdCreative.tsx`
- Modify: `components/slides/Slide17WorkLogic.tsx`
- Modify: `components/slides/Slide18Vision.tsx`
- Modify: `components/slides/Slide19Landscape.tsx`

每个文件的 svg 标签统一移除 `preserveAspectRatio="none"`（上一次临时加的，移动版独立设计后桌面端不再需要）。

- [ ] **Step 1: 逐个 Edit 19 个文件**

每个文件 Edit：

```
old: <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
new: <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
```

并行执行 19 个 Edit（在同一个消息中调用多个 Edit 工具）。

- [ ] **Step 2: 验证所有文件已清理**

Run: `grep -r 'preserveAspectRatio' components/slides/`
Expected: 无输出（19 个桌面版都不再包含该属性）。如有残留，补 Edit。

- [ ] **Step 3: 验证编译**

Run: `npm run build`
Expected: build 成功。

- [ ] **Step 4: Commit**

```bash
git add components/slides/Slide*.tsx
git commit -m "chore: revert preserveAspectRatio=none on desktop slides (no longer needed)"
```

---

## Task 8: 调整 layout.tsx viewport

**Files:**
- Modify: `app/layout.tsx`

移动版重新设计后允许双指缩放（用户可放大查看细节），移除 `maximumScale` / `userScalable` 锁定。

- [ ] **Step 1: 简化 viewport**

修改 `app/layout.tsx`：

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "利米诺 · Agent人格引擎",
  description: "利米诺 BP · Agent 人格引擎演示",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
```

完全移除 `export const viewport`（Next.js 默认 viewport 即 `width=device-width, initial-scale=1`，够用）。

- [ ] **Step 2: 验证编译**

Run: `npm run build`
Expected: build 成功。

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "chore: remove viewport lock (allow pinch zoom for mobile detail viewing)"
```

---

## Task 9: 端到端验证

- [ ] **Step 1: 跑 build**

Run: `npm run build`
Expected: build 成功，TypeScript / ESLint 零错误。Route `/` 大小无明显增长（移动版 dynamic ssr:false 会拆成独立 chunk）。

- [ ] **Step 2: 启动 dev server**

Run: `npm run dev`
Expected: server 启动在 http://localhost:3000。

- [ ] **Step 3: 桌面端浏览器验证（≥ 768px）**

打开 http://localhost:3000：
- 确认 slide 是 16:9 卡片样式（圆角、阴影、居中）
- 确认键盘 `→ Space Enter` 推进 step / 翻页、`←` 后退、`Home/End` 跳首末
- 确认鼠标点击左 25% 后退、其余前进
- 确认滚轮上下翻页
- 确认 slide 切换有 `slide-enter` 动画，g.module 错峰渐入
- 切到第 14 页确认 Slide14Productivity 的三个枷锁卡片显示完整（之前的 bug 修复仍生效）

- [ ] **Step 4: 移动端模拟验证（Chrome DevTools Toggle Device Toolbar）**

切到 iPhone 12 Pro（390×844）或 iPhone SE（375×667）：
- 确认 slide 是 9:16 竖屏，撑满视口高度（`h-[100dvh]`），无圆角无阴影
- 切到第 1 页：确认 Slide01CoverMobile 居中显示 logo + 标题 + 副标题
- 切到第 3 页：确认 Slide03BigModelMobile 显示章节标题 + 主标题 + step 内容
- 按 → 推进 step，确认 step1（两行大字）→ step2（曲线图）→ step3（金句两行）依次显示
- 触摸左右滑动，确认翻页正常
- 切到其他页（如第 2 页 PART 01 分隔页），确认占位（暂时显示桌面版 16:9）—— 这是 Phase 1 的预期行为，Phase 2 替换

- [ ] **Step 5: 视觉风格审查**

由用户审查 Slide01CoverMobile 和 Slide03BigModelMobile 的视觉风格：
- 居中布局是否合适
- 字号是否易读（不缩放，按 SVG 内部坐标 1:1 渲染）
- 曲线图位置是否合理
- 颜色与桌面版是否一致

如审查不通过，回到 Task 3/4 调整坐标后重新 commit。

- [ ] **Step 6: 最终 commit（如有 fixup）**

```bash
# 如审查后有调整
git add components/slides/*.mobile.tsx
git commit -m "fix: adjust mobile slide coordinates per visual review"
```

---

## Phase 1 完成标志

1. 19 个桌面 slide 全部移除 `preserveAspectRatio="none"`，桌面端零回归
2. 2 个移动版 slide（Slide01CoverMobile、Slide03BigModelMobile）正确渲染
3. mounted gate + dynamic ssr:false 生效，无 SSR 首屏闪烁
4. `npm run build` 通过
5. 用户审查 Phase 1 风格，确认后进入 Phase 2

## Phase 2 占位说明

`lib/slides.ts` 中 17 个未实现的 `MobileComponent` 字段当前指向桌面版组件作为占位。Phase 2 会逐个替换为真正的 `*.mobile.tsx`，并按 Phase 1 风格规范统一布局。

Phase 2 完成时需要：
- 17 个新建 `*.mobile.tsx` 文件
- 在 `lib/slides.ts` 中把这 17 个 MobileComponent 字段全部用 `dynamic ssr:false` 包装（与 Phase 1 的 2 个一致）
