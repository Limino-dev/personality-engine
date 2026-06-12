import type { SlideProps } from "@/lib/slides";
import { SlideBase, Step } from "./SlideBase";

const FLOW_NODES = [
  { x: 95, y: 57, ySub: 77, title: "需求进入", sub: "产品 · 诉求" },
  { x: 340, y: 57, ySub: 77, title: "情境触发", sub: "激活侧面" },
  { x: 585, y: 57, ySub: 77, title: "创意产出", sub: "思维源代码" },
  { x: 585, y: 257, ySub: 277, title: "形态落地", sub: "视频 · 短剧" },
  { x: 340, y: 257, ySub: 277, title: "投放反馈", sub: "数据回流" },
  { x: 95, y: 257, ySub: 277, title: "沉淀校准", sub: "越用越准" },
];

const FLOW_RECTS = [
  [20, 32],
  [265, 32],
  [510, 32],
  [510, 232],
  [265, 232],
  [20, 232],
];

const FLOW_ARROWS = [
  "M170.0 60 L 265.0 60",
  "M415.0 60 L 510.0 60",
  "M585 88.0 L 585 232.0",
  "M510.0 260 L 415.0 260",
  "M265.0 260 L 170.0 260",
  "M95 232.0 L 95 88.0",
];

const FLOW_DIAGONALS = [
  [297.41100839002087, 142.61673811837585, 167.2161162082255, 71.33690992279836],
  [382.58899160997913, 142.61673811837585, 512.7838837917745, 71.33690992279836],
  [382.58899160997913, 177.38326188162415, 512.7838837917745, 248.66309007720164],
  [297.41100839002087, 177.38326188162415, 167.2161162082255, 248.66309007720164],
];

export default function Slide17WorkLogic({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <SlideBase chapter="13 · 工作逻辑" title="广告创意人格的工作逻辑" page={13}>
        <Step show={step >= 2}>
          <g transform="translate(150,168) scale(1.42)">
            {FLOW_ARROWS.map((d, i) => (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="#7A7975"
                strokeWidth="1.6"
                strokeLinecap="round"
                markerEnd="url(#arr)"
              />
            ))}
            {FLOW_DIAGONALS.map((l, i) => (
              <line
                key={i}
                x1={l[0]}
                y1={l[1]}
                x2={l[2]}
                y2={l[3]}
                stroke="#C9C8C4"
                strokeWidth="1.1"
              />
            ))}
            {FLOW_NODES.map((n, i) => (
              <g key={i}>
                <rect
                  x={FLOW_RECTS[i][0]}
                  y={FLOW_RECTS[i][1]}
                  width="150"
                  height="56"
                  rx="12"
                  fill="#EDEDEA"
                  stroke="#7A7975"
                  strokeWidth="1.6"
                />
                <text
                  x={n.x}
                  y={n.y}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="13"
                  fill="#52514C"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  {n.title}
                </text>
                <text
                  x={n.x}
                  y={n.ySub}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="11"
                  fill="#7A7975"
                  textAnchor="middle"
                >
                  {n.sub}
                </text>
              </g>
            ))}
            <circle cx="340" cy="160" r="46" fill="#6F68AC" />
            <text
              x="340"
              y="154"
              fontFamily="Noto Sans CJK SC"
              fontSize="12.5"
              fill="#FFFFFF"
              fontWeight="500"
              textAnchor="middle"
            >
              广告创意人格
            </text>
            <text
              x="340"
              y="174"
              fontFamily="Noto Sans CJK SC"
              fontSize="10.5"
              fill="#FFFFFF"
              textAnchor="middle"
              opacity="0.85"
            >
              人格引擎构建
            </text>
            <text
              x="340"
              y="320"
              fontFamily="Noto Sans CJK SC"
              fontSize="11"
              fill="#6F68AC"
              textAnchor="middle"
            >
              {"美妆 · 数码 · 食品 · 服饰　—　同一人格，跨行业产出"}
            </text>
          </g>
        </Step>
        <Step show={step >= 3}>
          <text
            x="64"
            y="690"
            fontFamily="Noto Sans CJK SC"
            fontSize="27"
            fill="#2B2A27"
            fontWeight="500"
          >
            需求进来，思维出去，数据回流——人格越转越准
          </text>
        </Step>
      </SlideBase>
    </svg>
  );
}
