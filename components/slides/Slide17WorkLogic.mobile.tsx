import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

// 3×2 网格：上排 (1,2,3)，下排 (6,5,4) — 形成顺时针环路
// 中心广告创意人格节点
const FLOW_NODES = [
  // 上排（左→右）
  { x: 130, y: 290, title: "需求进入", sub: "产品 · 诉求" },
  { x: 360, y: 290, title: "情境触发", sub: "激活侧面" },
  { x: 590, y: 290, title: "创意产出", sub: "思维源代码" },
  // 下排（右→左）
  { x: 590, y: 540, title: "形态落地", sub: "视频 · 短剧" },
  { x: 360, y: 540, title: "投放反馈", sub: "数据回流" },
  { x: 130, y: 540, title: "沉淀校准", sub: "越用越准" },
];

const NODE_W = 180;
const NODE_H = 80;
const CENTER_X = 360;
const CENTER_Y = 415;

export default function Slide17WorkLogicMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile chapter="13 · 工作逻辑" title="广告创意人格的工作逻辑" page={13}>
        <Step show={step >= 2}>
          {/* 上排 (1→2→3) 水平箭头 */}
          <line
            x1={130 + NODE_W / 2}
            y1={290}
            x2={360 - NODE_W / 2}
            y2={290}
            stroke="#7A7975"
            strokeWidth="1.6"
            markerEnd="url(#arr)"
          />
          <line
            x1={360 + NODE_W / 2}
            y1={290}
            x2={590 - NODE_W / 2}
            y2={290}
            stroke="#7A7975"
            strokeWidth="1.6"
            markerEnd="url(#arr)"
          />
          {/* 右侧 3→4 垂直箭头 */}
          <line
            x1={590}
            y1={290 + NODE_H / 2}
            x2={590}
            y2={540 - NODE_H / 2}
            stroke="#7A7975"
            strokeWidth="1.6"
            markerEnd="url(#arr)"
          />
          {/* 下排 (4→5→6) 水平箭头（向左） */}
          <line
            x1={590 - NODE_W / 2}
            y1={540}
            x2={360 + NODE_W / 2}
            y2={540}
            stroke="#7A7975"
            strokeWidth="1.6"
            markerEnd="url(#arr)"
          />
          <line
            x1={360 - NODE_W / 2}
            y1={540}
            x2={130 + NODE_W / 2}
            y2={540}
            stroke="#7A7975"
            strokeWidth="1.6"
            markerEnd="url(#arr)"
          />
          {/* 左侧 6→1 垂直箭头（向上） */}
          <line
            x1={130}
            y1={540 - NODE_H / 2}
            x2={130}
            y2={290 + NODE_H / 2}
            stroke="#7A7975"
            strokeWidth="1.6"
            markerEnd="url(#arr)"
          />

          {/* 6 个节点 */}
          {FLOW_NODES.map((n, i) => (
            <g key={i}>
              <rect
                x={n.x - NODE_W / 2}
                y={n.y - NODE_H / 2}
                width={NODE_W}
                height={NODE_H}
                rx="12"
                fill="#EDEDEA"
                stroke="#7A7975"
                strokeWidth="1.6"
              />
              <text
                x={n.x}
                y={n.y - 4}
                fontFamily="Noto Sans CJK SC"
                fontSize="18"
                fill="#52514C"
                fontWeight="600"
                textAnchor="middle"
              >
                {n.title}
              </text>
              <text
                x={n.x}
                y={n.y + 22}
                fontFamily="Noto Sans CJK SC"
                fontSize="14"
                fill="#7A7975"
                textAnchor="middle"
              >
                {n.sub}
              </text>
            </g>
          ))}

          {/* 中心节点：广告创意人格 */}
          <circle cx={CENTER_X} cy={CENTER_Y} r="58" fill="#6F68AC" />
          <text
            x={CENTER_X}
            y={CENTER_Y - 4}
            fontFamily="Noto Sans CJK SC"
            fontSize="15"
            fill="#FFFFFF"
            fontWeight="500"
            textAnchor="middle"
          >
            广告创意人格
          </text>
          <text
            x={CENTER_X}
            y={CENTER_Y + 18}
            fontFamily="Noto Sans CJK SC"
            fontSize="12"
            fill="#FFFFFF"
            textAnchor="middle"
            opacity="0.85"
          >
            人格引擎构建
          </text>

          {/* 跨行业说明 */}
          <text
            x="360"
            y="650"
            fontFamily="Noto Sans CJK SC"
            fontSize="15"
            fill="#6F68AC"
            textAnchor="middle"
          >
            美妆 · 数码 · 食品 · 服饰
          </text>
          <text
            x="360"
            y="678"
            fontFamily="Noto Sans CJK SC"
            fontSize="15"
            fill="#6F68AC"
            textAnchor="middle"
          >
            同一人格，跨行业产出
          </text>
        </Step>
        <Step show={step >= 3}>
          <text
            x="40"
            y="1080"
            fontFamily="Noto Sans CJK SC"
            fontSize="22"
            fill="#2B2A27"
            fontWeight="500"
          >
            需求进来，思维出去
          </text>
          <text
            x="40"
            y="1120"
            fontFamily="Noto Sans CJK SC"
            fontSize="22"
            fill="#2B2A27"
            fontWeight="500"
          >
            数据回流
          </text>
          <text
            x="40"
            y="1160"
            fontFamily="Noto Sans CJK SC"
            fontSize="22"
            fill="#2B2A27"
            fontWeight="500"
          >
            人格越转越准
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
