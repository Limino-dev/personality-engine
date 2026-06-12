# personality-engine

利米诺 · Agent 人格引擎 BP 演示页（Next.js 实现）。

参考 `利米诺_BP_网页版.html` 静态页迁移而来，单页面应用，共 20 张 SVG 幻灯片（含 1 张封面、3 张 PART 分隔页、15 张内容步进页、1 张 Thanks 页）。

## 技术栈

- Next.js 15（App Router）
- React 19 + TypeScript
- Tailwind CSS v3

## 快速开始

```bash
npm install
npm run dev      # 启动开发服务器 http://localhost:3000
npm run build    # 生产构建
npm run start    # 启动生产服务器
npm run lint     # 代码检查
```

## 交互

- `→` / `Space` / `Enter`：前进（先步进当前页 step，再翻页）
- `←`：后退（直接跳到上一页并展示其全部 step）
- `Home` / `End`：跳首 / 跳末
- 鼠标点击：屏幕左 25% 区域后退，其他前进
- 触摸滑动：水平 > 40px 翻页

## 目录结构

```
app/                     # Next.js App Router
  layout.tsx             # 根布局
  page.tsx               # 主页面，渲染 <Presentation/>
  globals.css            # Tailwind 指令 + 全局背景

components/
  Presentation.tsx       # 客户端组件：状态机 + 事件 + 渲染
  slides/
    SlideBase.tsx        # 步进页公共骨架（章节标题/分隔线/页码）+ Step 动画包装
    Slide01..20.tsx      # 20 张 SVG 幻灯片

lib/
  slides.ts              # SLIDES 元数据 + stepsOf 工具
  logo.ts                # 封面 logo 的 base64 数据
```
