import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

const FLOW_NODES = [
  {
    title: "Agent人格引擎",
    sub: "构建广告创意人格",
    fill: "#ECEAF8",
    stroke: "#6F68AC",
    titleColor: "#46406E",
    subColor: "#6F68AC",
  },
  {
    title: "创意判断 · 源代码",
    sub: "持续、精深、稳定的产出",
    fill: "none",
    stroke: "#7A7975",
    titleColor: "#52514C",
    subColor: "#7A7975",
  },
  {
    title: "形态 · 可视化阶段",
    sub: "文案 · 图片 · 视频 · 短剧",
    fill: "none",
    stroke: "#7A7975",
    titleColor: "#52514C",
    subColor: "#7A7975",
  },
];

const CARDS = [
  { title: "终极刚需", desc: "一切商业归于交易，为交易付费" },
  { title: "高频消耗", desc: "素材按天衰减，要持续稳定的供给" },
  { title: "即时反馈", desc: "转化当天回流，引擎收敛最快" },
];

export default function Slide16AdCreativeMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile
        chapter="12 · 第一个应用方向"
        title="广告创意人格"
        page={12}
      >
        <Step show={step >= 1}>
          <text
            x="40"
            y="240"
            fontFamily="Noto Sans CJK SC"
            fontSize="22"
            fill="#5E5D58"
          >
            电商 · 短视频 · 直播
          </text>
        </Step>
        <Step show={step >= 2}>
          {/* 3 节点纵向流程 */}
          {FLOW_NODES.map((n, i) => {
            const y = 310 + i * 130;
            const rectH = 100;
            return (
              <g key={i}>
                <rect
                  x="60"
                  y={y}
                  width="600"
                  height={rectH}
                  rx="14"
                  fill={n.fill}
                  stroke={n.stroke}
                  strokeWidth={i === 0 ? 2.4 : 2}
                />
                <text
                  x="360"
                  y={y + 42}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="22"
                  fill={n.titleColor}
                  fontWeight="500"
                  textAnchor="middle"
                >
                  {n.title}
                </text>
                <text
                  x="360"
                  y={y + 74}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="17"
                  fill={n.subColor}
                  textAnchor="middle"
                >
                  {n.sub}
                </text>
                {/* 节点之间向下的箭头（i=0,1 之后） */}
                {i < 2 && (
                  <line
                    x1="360"
                    y1={y + rectH + 20}
                    x2="360"
                    y2={y + rectH + 4}
                    stroke="#7A7975"
                    strokeWidth="1.8"
                    markerEnd="url(#arr)"
                  />
                )}
              </g>
            );
          })}

          {/* 回流说明（底部循环说明） */}
          <text
            x="360"
            y="734"
            fontFamily="Noto Sans CJK SC"
            fontSize="15"
            fill="#7A7975"
            textAnchor="middle"
          >
            效果数据当天回流 · 人格越用越准
          </text>

          {/* 3 张小卡片纵向 stack */}
          {CARDS.map((c, i) => {
            const y = 770 + i * 92;
            return (
              <g key={i}>
                <rect x="60" y={y} width="600" height="76" rx="12" fill="#F4F4F2" />
                <text
                  x="92"
                  y={y + 32}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="18"
                  fill="#52514C"
                  fontWeight="500"
                >
                  {c.title}
                </text>
                <text
                  x="92"
                  y={y + 58}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="15"
                  fill="#7A7975"
                >
                  {c.desc}
                </text>
              </g>
            );
          })}
        </Step>
        <Step show={step >= 3}>
          <text
            x="40"
            y="1100"
            fontFamily="Noto Sans CJK SC"
            fontSize="22"
            fill="#2B2A27"
            fontWeight="500"
          >
            用户接收的是思维
          </text>
          <text
            x="40"
            y="1140"
            fontFamily="Noto Sans CJK SC"
            fontSize="22"
            fill="#2B2A27"
            fontWeight="500"
          >
            引擎产的，正是思维源代码
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
