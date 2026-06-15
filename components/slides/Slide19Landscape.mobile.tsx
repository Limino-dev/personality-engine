import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

// 中心 (360, 530)
// 10 节点放射分布（按 4 层颜色分组，靠近的节点为一组）
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

const CENTER_X = 360;
const CENTER_Y = 530;

const NODES: Node[] = [
  // 紫深组（创作判断 · 首发）— 顶部
  { cx: 200, cy: 320, rx: 56, ry: 22, fill: "#6F68AC", textColor: "#FFFFFF", label: "广告创意" },
  { cx: 360, cy: 290, rx: 52, ry: 22, fill: "#6F68AC", textColor: "#FFFFFF", label: "剧本与IP" },
  { cx: 520, cy: 320, rx: 50, ry: 22, fill: "#6F68AC", textColor: "#FFFFFF", label: "设计美学" },
  // 紫浅组（专业判断）— 左右两侧
  { cx: 130, cy: 460, rx: 52, ry: 22, fill: "#CFC9EA", textColor: "#46406E", label: "法律策略" },
  { cx: 590, cy: 460, rx: 50, ry: 22, fill: "#CFC9EA", textColor: "#46406E", label: "投资决策" },
  // 紫最浅组（关系判断）— 中下层
  { cx: 170, cy: 680, rx: 50, ry: 22, fill: "#ECEAF8", textColor: "#6F68AC", label: "心理咨询" },
  { cx: 300, cy: 720, rx: 50, ry: 22, fill: "#ECEAF8", textColor: "#6F68AC", label: "教育教学" },
  { cx: 420, cy: 720, rx: 50, ry: 22, fill: "#ECEAF8", textColor: "#6F68AC", label: "销售谈判" },
  // 灰组（组织判断 · 终局）— 右下
  { cx: 550, cy: 680, rx: 50, ry: 22, fill: "#F2F1EF", stroke: "#8C8B85", strokeWidth: 1.4, textColor: "#5E5D58", label: "人事招聘" },
  { cx: 600, cy: 580, rx: 50, ry: 22, fill: "#F2F1EF", stroke: "#8C8B85", strokeWidth: 1.4, textColor: "#5E5D58", label: "选品买手" },
];

const LINE_COLORS = [
  "#6F68AC", "#6F68AC", "#6F68AC", // 紫深
  "#9A93CC", "#9A93CC", // 紫浅
  "#B0A9DA", "#B0A9DA", "#B0A9DA", // 紫最浅
  "#8C8B85", "#8C8B85", // 灰
];

const LEGENDS = [
  { text: "创作判断 · 首发", color: "#6F68AC" },
  { text: "专业判断", color: "#9A93CC" },
  { text: "关系判断", color: "#B0A9DA" },
  { text: "组织判断 · 终局", color: "#8C8B85" },
];

export default function Slide19LandscapeMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile chapter="15 · 多维度生产力" title="人格引擎生产力版图" page={15}>
        <Step show={step >= 2}>
          {/* 中心到 10 节点连线 */}
          {NODES.map((n, i) => (
            <line
              key={`l-${i}`}
              x1={CENTER_X}
              y1={CENTER_Y}
              x2={n.cx}
              y2={n.cy}
              stroke={LINE_COLORS[i]}
              strokeWidth="1"
            />
          ))}

          {/* "首发方向" 标记（顶部） */}
          <text
            x="360"
            y="248"
            fontFamily="Noto Sans CJK SC"
            fontSize="13"
            fill="#57518C"
            fontWeight="500"
            textAnchor="middle"
          >
            首发方向
          </text>

          {/* 10 个节点 */}
          {NODES.map((n, i) => (
            <g key={`n-${i}`}>
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
                fontSize="14"
                fill={n.textColor}
                fontWeight="500"
                textAnchor="middle"
              >
                {n.label}
              </text>
            </g>
          ))}

          {/* 中心节点：Agent人格引擎 */}
          <ellipse cx={CENTER_X} cy={CENTER_Y} rx="84" ry="40" fill="#46406E" />
          <text
            x={CENTER_X}
            y={CENTER_Y - 4}
            fontFamily="Noto Sans CJK SC"
            fontSize="16"
            fill="#FFFFFF"
            fontWeight="500"
            textAnchor="middle"
          >
            Agent人格引擎
          </text>
          <text
            x={CENTER_X}
            y={CENTER_Y + 18}
            fontFamily="Noto Sans CJK SC"
            fontSize="12"
            fill="#FFFFFF"
            textAnchor="middle"
            opacity="0.78"
          >
            判断的主体
          </text>

          {/* 图例（4 项，2×2 网格） */}
          {LEGENDS.map((l, i) => {
            const col = i % 2;
            const row = Math.floor(i / 2);
            const x = 100 + col * 300;
            const y = 880 + row * 40;
            return (
              <g key={`lg-${i}`}>
                <line
                  x1={x}
                  y1={y}
                  x2={x + 24}
                  y2={y}
                  stroke={l.color}
                  strokeWidth="3"
                />
                <text
                  x={x + 32}
                  y={y + 4}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="14"
                  fill="#5E5D58"
                >
                  {l.text}
                </text>
              </g>
            );
          })}
        </Step>
        <Step show={step >= 3}>
          <text
            x="40"
            y="1080"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            判断方差越大的领域
          </text>
          <text
            x="40"
            y="1120"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            人格的价值越高
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
