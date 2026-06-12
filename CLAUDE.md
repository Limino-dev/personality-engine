# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概览

利米诺 · Agent 人格引擎 BP 演示页，从静态 HTML（`利米诺_BP_网页版.html`）迁移为 Next.js 单页应用。**`利米诺_BP_网页版.html` 是视觉与交互的唯一对照源**，迁移 / 改样式时优先参考其 SVG 坐标、配色、文字内容。

## 常用命令

```bash
npm install              # 注意：React 19 RC 与 next 15 有 peer dep 冲突，必要时加 --legacy-peer-deps
npm run dev              # 开发服务器 http://localhost:3000
npm run build            # 生产构建（验证 SVG-JSX 转换、TS 类型）
npm run lint             # eslint
```

无测试套件。

## 架构

### Slide 注册表（`lib/slides.ts`）

`SLIDES: SlideMeta[]` 是页面顺序的唯一真源。每项：
```ts
{ Component, nostep }   // nostep=true 表示封面/分隔页（无步进），nostep=false 表示内容页（4 个 step：0..3）
```
`stepsOf(i)` 按索引返回最大 step（nostep→0，否则→3）。**新增 / 调整顺序只改这个文件**，不要散落到组件。

当前 19 张：1 封面 + 3 PART 分隔（nostep）+ 15 内容（步进）。

### 状态机（`components/Presentation.tsx`）

单一位置状态 `{ cur, step }`：

- **键盘**：`→ / Space / Enter` 先推进 step，到 maxStep 后翻页；`←` 直接跳上一页并显示该页全部 step；`Home / End` 跳首末
- **鼠标点击**：屏幕左 25% 后退，其余前进
- **触摸**：水平位移 > 40px 翻页
- **滚轮**（PC）：`deltaY > 0` 下一页、`< 0` 上一页——**直接跳整页**，目标页 step 设为 `stepsOf(target)`（全部展示），不逐步推进。该行为与键盘箭头有意区分。

`setState(({ cur }) => ...)` 用函数式更新，避免闭包陈旧值。

### 渲染：单 ActiveSlide + 强制重挂载

```tsx
<div key={cur} className="slide-container ...">
  <ActiveSlide step={step} />
</div>
```
`key={cur}` 是触发 CSS 进入动画重播的关键——切换 slide 时整个容器卸载重建。

### Slide 组件模式（`components/slides/SlideBase.tsx`）

`SlideBase` 提供步进页公共骨架（章节文字 / 标题 / 分隔线 / 页码 / marker defs），并导出 `Step` 包装：

```tsx
<SlideBase chapter="01 · ..." title="..." page={1}>
  <Step show={step >= 1}>...</Step>
  <Step show={step >= 2}>...</Step>
  <Step show={step >= 3}>...</Step>
</SlideBase>
```

`Step` 是双层 `<g>`：
- 外层 `<g className="module">`：触发 CSS `module-enter` keyframe（slide 切换时播一次）
- 内层 `<g style={{ opacity, transform, transition }}>`：按 `show` 控制，按 → 时通过 inline transition 平滑过渡（**不会**重播 keyframe）

`SlideBase` 内部把标题簇拆成**两个** module：顶部（章节 + 标题）+ 底部（分隔线 + 页码），中间放 children Steps，确保动画从上往下依次出现。

`Slide01Cover` / `Slide02Part01` / `Slide07Part02` / `Slide15Part03` 不用 `SlideBase`，各自直接画 SVG，但同样用 `<g className="module">` 包裹以参与错峰动画。

### 动画（`app/globals.css`）

```css
.slide-container            → animation: slide-enter 0.3s ...
.slide-container svg > g.module → animation: module-enter 0.3s ... backwards
.slide-container svg > g.module:nth-of-type(N) → animation-delay: (N-1)*0.2s
```
- keyframe 从 `opacity:0 / translateY(10px)` 渐入
- `:nth-of-type` 只统计 `<g>` 元素，按 DOM 顺序错峰 0.2s
- 当前规则覆盖到 nth-of-type(8)；**slide 的 g.module 数量超过 8 时需扩展**
- `transform-box: fill-box` 让 CSS transform 在 SVG `<g>` 上正确生效

### SVG-to-JSX 转换约定

- `stroke-width` → `strokeWidth`，`font-family` → `fontFamily`，`letter-spacing` → `letterSpacing`，`text-anchor` → `textAnchor`，`clip-path` → `clipPath`
- `<image xlink:href="...">` 在 React 19 中可直接写 `<image href={...}>`
- `<defs>` / `<marker>` / `<clipPath>` 等高级 SVG 元素正常 JSX 化
- 内嵌 base64 资源放 `lib/`（如 `lib/logo.ts` 是封面 logo 的 `data:image/png;base64,...` 字符串）

### Tailwind 主题（`tailwind.config.ts`）

自定义色：`primary`（#6F68AC）/ `primary-light`（#B0A9DA）/ `primary-deep`（#46406E）/ `primary-mid`（#57518C）/ `stage`（#2A2A2D 舞台深灰）/ `page-cream`（#FBFAF8）/ `block-grey`（#F2F1EF）；自定义缓动 `ease-slide`（cubic-bezier(.22,.61,.36,1)）。

## 路径别名

`@/*` 指向仓库根（见 `tsconfig.json`），import 时用 `@/lib/slides`、`@/components/slides/...`。

## 修改 slide 时的常见陷阱

1. **新增 g.module 数量 > 8**：去 `globals.css` 加 `:nth-of-type(9)+` 的 delay 规则，否则后面的 module 会同时出现。
2. **步进页 child 必须用 `<Step>` 包裹**：直接放裸 SVG 元素会跳过 module 动画与 step 切换过渡。
3. **新增 slide 别忘了注册**：在 `lib/slides.ts` 的 `SLIDES` 数组正确位置插入，并设 `nostep` 标记。
4. **修改页码总数**：内容页右下角"01 / 15"是 `SlideBase` 的 `totalPages` 默认值；分隔页与封面没有这个标记。如果要改总基数，改 `SlideBase` 默认值即可。
5. **滚轮与箭头语义不同**：滚轮整页跳（满 step），箭头逐步推。改其中一方时小心别破坏另一方。
