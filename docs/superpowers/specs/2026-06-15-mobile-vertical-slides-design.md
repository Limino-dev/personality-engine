# 移动端竖屏 SVG 重设计

**日期**：2026-06-15
**作者**：Jason Chen + Claude
**状态**：待 review

## Context

当前项目（利米诺 Agent 人格引擎 BP 演示页）所有 slide 是 16:9 横屏 SVG（viewBox `0 0 1280 720`），在移动端竖屏视口下显示效果差。之前的尝试是给 SVG 加 `preserveAspectRatio="none"` 让内容拉伸适配 9:16 视口，但带来字体瘦高变形、圆角变椭圆、水平密集布局被横向压缩等问题。

用户决策：放弃拉伸方案，**为移动端重新设计一套独立的竖屏 SVG（viewBox `720 × 1280`）**。每个 slide 桌面版与移动版相互独立，由 Presentation.tsx 根据设备类型切换渲染。翻页方式（左右滑动）保持不变。

桌面端布局与代码零回归。

## 目标

1. 移动端（视口宽度 < 768px）显示独立的竖屏 SVG，内容按 9:16 视口重新布局
2. 桌面端（≥ 768px）保持当前 16:9 横屏布局与所有现有交互不变
3. 桌面版 SVG 不再需要 `preserveAspectRatio="none"`（之前临时方案加的，移动端不再拉伸后可移除）
4. 切换在客户端完成，SSR 渲染桌面版避免 hydration mismatch

## 非目标

- 不为桌面端做任何布局调整
- 不改变 slide 之间的步进逻辑（4 step：0/1/2/3，分隔页 nostep）
- 不重新设计 slide 内容（文字、章节、step 数与桌面版完全一致）
- 不改动画 keyframe（`slide-enter` / `module-enter` 复用）

## 架构

### 文件组织（两套独立组件）

新增 `*.mobile.tsx` 后缀的文件，与桌面版一一对应：

```
components/slides/
├── SlideBase.tsx                  # 桌面版骨架（已有，保持不变）
├── SlideBaseMobile.tsx            # 移动版骨架（新增）
├── Slide01Cover.tsx               # 桌面版（已有）
├── Slide01Cover.mobile.tsx        # 移动版（新增）
├── Slide02Part01.tsx
├── Slide02Part01.mobile.tsx
├── ...（共 19 对，38 个文件）
```

### 关键组件

**1. `lib/use-is-mobile.ts`（新建）**

```ts
"use client";
import { useEffect, useState } from "react";

export function useIsMobile() {
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

- 初始 `false`，SSR 与首次客户端渲染都按桌面处理（避免 hydration mismatch）
- mount 后立即检测 `matchMedia`，监听视口变化
- 监听器在 unmount 时清理

**2. `lib/slides.ts` 改造**

```ts
import Slide01Cover from "@/components/slides/Slide01Cover";
import Slide01CoverMobile from "@/components/slides/Slide01Cover.mobile";
// ...（19 对）

export interface SlideMeta {
  Component: ComponentType<SlideProps>;       // 桌面版
  MobileComponent: ComponentType<SlideProps>;  // 移动版
  nostep: boolean;
}

export const SLIDES: SlideMeta[] = [
  { Component: Slide01Cover, MobileComponent: Slide01CoverMobile, nostep: true },
  // ...
];
```

**3. `components/slides/SlideBaseMobile.tsx`（新建）**

移动版骨架，对照桌面版 `SlideBase.tsx` 调整坐标：

- viewBox 不在外层 svg（仍由各 slide 提供），SlideBaseMobile 只返回 fragment
- `<defs>`（marker）保留
- `<rect width="720" height="1280">` 背景
- 章节标题 `<text x="40" y="80" fontSize="22">`
- 主标题 `<text x="40" y="160" fontSize="37">`
- 分隔线 `<line x1="40" y1="1216" x2="680" y2="1216">`
- 页码 `<text x="680" y="1258" textAnchor="end">`
- 导出 `Step` 组件（与桌面版相同结构，`<g className="module">` 双层包装）

**4. `components/Presentation.tsx` 改造**

```tsx
import { useIsMobile } from "@/lib/use-is-mobile";

export default function Presentation() {
  const isMobile = useIsMobile();
  // ...
  const ActiveSlide = isMobile
    ? SLIDES[cur].MobileComponent
    : SLIDES[cur].Component;

  return (
    <main className="fixed inset-0 flex items-center justify-center">
      <div
        key={cur}
        className={
          isMobile
            ? "slide-container absolute bg-white overflow-hidden h-[100dvh] aspect-[9/16] mx-auto"
            : "slide-container absolute aspect-video bg-white rounded-[10px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden w-[min(94vw,calc(94vh*16/9))]"
        }
        onClick={onStageClick}
      >
        <ActiveSlide step={step} />
      </div>
      {/* progress / counter / hint 不变 */}
    </main>
  );
}
```

- 移动端：`aspect-[9/16]` + `h-[100dvh]`（动态视口高度，避免移动浏览器地址栏遮挡）+ 居中 + 无圆角阴影
- 桌面端：恢复原 `aspect-video` + rounded + shadow + 16:9 宽度公式
- 删除上一次的 `preserveAspectRatio="none"` 改动相关的所有响应式类

### 移动版 SVG 设计原则

**viewBox = `0 0 720 1280`**（9:16，与桌面 1280×720 镜像对应）

| 元素 | 桌面版坐标 | 移动版坐标 |
|---|---|---|
| 背景 rect | 0,0 1280×720 | 0,0 720×1280 |
| 章节标题 | x=64, y=66 | x=40, y=80 |
| 主标题 | x=64, y=124 | x=40, y=160 |
| 分隔线 | y=648 | y=1216 |
| 页码 | y=690 | y=1258 |
| 主体内容区域 | y≈170~630（高度 460） | y≈200~1180（高度 980） |
| 字号 | 37/27/25/22/18/15/12.5 等 | 保持原值不缩放（SVG 内部坐标，最终按容器缩放到视口） |
| 字体 | Noto Sans CJK SC | 不变 |
| 颜色 | primary/primary-light/primary-deep/page-cream 等 | 不变 |

**主体内容布局策略**（按内容类型分类）：

1. **大段文字**（如 Slide03 桌面"什么都懂，想得浅"）：直接保留，可换行或加大字号
2. **水平多卡片**（如 Slide14 SHACKLES 三卡片、Slide09 三 misconceptions）：纵向 stack，每个卡片宽度 ≈ 600（居中），高度按内容
3. **机制图/网络图**（如 Slide11 五圆、Slide19 landscape）：保留视觉结构，整体居中，必要时缩小 scale
4. **流程图**（如 Slide17 work logic）：6 个节点的环形/网格布局，纵向展开
5. **金句**（step 3 底部）：保留底部位置，y 调整到 1180 左右

### 桌面版清理

回滚上一次的临时改动：
- 移除 19 个 slide 的 `preserveAspectRatio="none"`（不再需要拉伸）
- Presentation.tsx 的 `md:` 响应式类简化为基于 isMobile 的条件 className
- 移除 `app/layout.tsx` 中的 `maximumScale: 1, userScalable: false`（移动版重新设计后不需要锁缩放，让用户可以双指缩放查看细节）

## 分阶段实施

### Phase 1：基础设施 + 2 个示范（先验证风格）

新增文件：
- `lib/use-is-mobile.ts`
- `components/slides/SlideBaseMobile.tsx`
- `components/slides/Slide01Cover.mobile.tsx`（封面）
- `components/slides/Slide03BigModel.mobile.tsx`（内容页示范）

改造文件：
- `lib/slides.ts`（加 MobileComponent 字段，先填 2 个示范，其余先填占位指向桌面版）
- `components/Presentation.tsx`（响应式容器 + isMobile 切换）
- 19 个桌面版 slide 文件（移除 preserveAspectRatio="none"）
- `app/layout.tsx`（移除 maximumScale / userScalable）

验证：你审查 Slide01Cover.mobile 和 Slide03BigModel.mobile 的视觉风格，确认后批量推进 Phase 2。

### Phase 2：批量推进剩余 17 个 slide

按 SLIDES 顺序逐个实现：
- Slide02Part01 / Slide04-10 / Slide11-19

每个 slide 移动版遵循 Phase 1 确立的风格规范。完成后 `lib/slides.ts` 把所有 MobileComponent 字段填齐。

## 验证步骤

1. `npm run dev` 启动
2. 桌面浏览器（≥768px）打开 http://localhost:3000：
   - 确认 16:9 卡片样式、圆角阴影、键盘/滚轮/点击翻页正常
3. Chrome DevTools 切到移动端模拟（iPhone 12 / 375×812 等）：
   - 确认 9:16 竖屏 SVG 撑满视口
   - 左右滑动翻页正常
   - 步进动画（→ 推进 step）正常
4. 真机测试（可选）：手机浏览器打开 dev server 局域网地址
5. `npm run build` 验证 TypeScript 与 lint

## 风险与待定项

- **SSR 首次渲染闪烁**：默认 SSR 桌面版，移动端首次加载时会有一帧从桌面切换到移动的闪烁。可接受（通常 < 100ms 不可见）。如不可接受，后续可用 `next/dynamic` + `ssr:false` 包装移动版组件。
- **底部 fixed UI 在移动端**：progress / counter / hint 是 fixed 定位挂在 viewport，会盖在 slide 上层。位置需在 Phase 1 实测调整。
- **`100dvh` 兼容性**：现代浏览器（iOS 15.4+ / Chrome 108+）支持 `dvh`。老设备 fallback 用 `100vh`。
- **示范 slide 选择**：Phase 1 选了封面（简单）+ Slide03（典型内容页）。如果你希望先做特定的 slide（例如最复杂的 Slide19 landscape），告诉我。
