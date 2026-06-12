import type { SlideProps } from "@/lib/slides";
import { SlideBase, Step } from "./SlideBase";

interface Node {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  fill: string;
  stroke?: string;
  strokeWidth?: number;
  textColor: string;
  label: string;
}

const LINES: Array<[number, number, string]> = [
  [132, 54, "#6F68AC"],
  [304, 36, "#6F68AC"],
  [92, 142, "#6F68AC"],
  [500, 50, "#9A93CC"],
  [588, 140, "#9A93CC"],
  [106, 236, "#B0A9DA"],
  [240, 272, "#B0A9DA"],
  [374, 284, "#B0A9DA"],
  [588, 226, "#8C8B85"],
  [492, 280, "#8C8B85"],
];

const NODES: Node[] = [
  { cx: 132, cy: 54, rx: 54, ry: 22, fill: "#6F68AC", textColor: "#FFFFFF", label: "广告创意" },
  { cx: 304, cy: 36, rx: 50, ry: 22, fill: "#6F68AC", textColor: "#FFFFFF", label: "剧本与IP" },
  { cx: 92, cy: 142, rx: 46, ry: 22, fill: "#6F68AC", textColor: "#FFFFFF", label: "设计美学" },
  { cx: 500, cy: 50, rx: 50, ry: 21, fill: "#CFC9EA", textColor: "#46406E", label: "法律策略" },
  { cx: 588, cy: 140, rx: 46, ry: 21, fill: "#CFC9EA", textColor: "#46406E", label: "投资决策" },
  { cx: 106, cy: 236, rx: 46, ry: 21, fill: "#ECEAF8", textColor: "#6F68AC", label: "心理咨询" },
  { cx: 240, cy: 272, rx: 46, ry: 21, fill: "#ECEAF8", textColor: "#6F68AC", label: "教育教学" },
  { cx: 374, cy: 284, rx: 46, ry: 21, fill: "#ECEAF8", textColor: "#6F68AC", label: "销售谈判" },
  { cx: 588, cy: 226, rx: 46, ry: 21, fill: "#F2F1EF", stroke: "#8C8B85", strokeWidth: 1.4, textColor: "#5E5D58", label: "人事招聘" },
  { cx: 492, cy: 280, rx: 46, ry: 21, fill: "#F2F1EF", stroke: "#8C8B85", strokeWidth: 1.4, textColor: "#5E5D58", label: "选品买手" },
];

const LEGENDS = [
  { x1: 60, text: "创作判断 · 首发", color: "#6F68AC" },
  { x1: 218, text: "专业判断", color: "#9A93CC" },
  { x1: 348, text: "关系判断", color: "#B0A9DA" },
  { x1: 478, text: "组织判断 · 终局", color: "#8C8B85" },
];

export default function Slide19Landscape({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <SlideBase chapter="15 · 多维度生产力" title="人格引擎生产力版图" page={15}>
        <Step show={step >= 2}>
          <g transform="translate(164,170) scale(1.4)">
            {LINES.map((l, i) => (
              <line
                key={i}
                x1="340"
                y1="150"
                x2={l[0]}
                y2={l[1]}
                stroke={l[2]}
                strokeWidth="1"
              />
            ))}
            <text
              x="252"
              y="96"
              fontFamily="Noto Sans CJK SC"
              fontSize="11"
              fill="#57518C"
              fontWeight="500"
              textAnchor="middle"
            >
              首发方向
            </text>
            {NODES.map((n, i) => (
              <g key={i}>
                <ellipse
                  cx={n.cx}
                  cy={n.cy}
                  rx={n.rx}
                  ry={n.ry}
                  fill={n.fill}
                  stroke={n.stroke}
                  strokeWidth={n.strokeWidth}
                />
                <text
                  x={n.cx}
                  y={n.cy + 4}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="12"
                  fill={n.textColor}
                  fontWeight="500"
                  textAnchor="middle"
                >
                  {n.label}
                </text>
              </g>
            ))}
            <ellipse cx="340" cy="150" rx="80" ry="36" fill="#46406E" />
            <text
              x="340"
              y="147"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#FFFFFF"
              fontWeight="500"
              textAnchor="middle"
            >
              Agent人格引擎
            </text>
            <text
              x="340"
              y="166"
              fontFamily="Noto Sans CJK SC"
              fontSize="10.5"
              fill="#FFFFFF"
              textAnchor="middle"
              opacity="0.78"
            >
              判断的主体
            </text>
            {LEGENDS.map((l, i) => (
              <g key={i}>
                <line
                  x1={l.x1}
                  y1="334"
                  x2={l.x1 + 20}
                  y2="334"
                  stroke={l.color}
                  strokeWidth="3"
                />
                <text
                  x={l.x1 + 26}
                  y="338"
                  fontFamily="Noto Sans CJK SC"
                  fontSize="11"
                  fill="#5E5D58"
                >
                  {l.text}
                </text>
              </g>
            ))}
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
            判断方差越大的领域，人格的价值越高
          </text>
        </Step>
      </SlideBase>
    </svg>
  );
}
