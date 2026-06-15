import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

// 5 节点环形：相对中心 (0,0)，半径 140
// 顶部 / 右上 / 右下 / 左下 / 左上
const MECHANISM_NODES = [
  { x: 0, y: -140, title: "仲裁机制", desc: "固定裁决结构" },
  { x: 133, y: -43, title: "立体化机制", desc: "多源交叉成型" },
  { x: 82, y: 114, title: "触发机制", desc: "激活对应侧面" },
  { x: -82, y: 114, title: "反馈机制", desc: "沉淀回栈" },
  { x: -133, y: -43, title: "校准机制", desc: "防止漂移失真" },
];

export default function Slide11MechanismMobile({ step }: SlideProps) {
  const cx = 360;
  const cy = 580;
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile chapter="08 · 机制" title="人格如何运转" page={8}>
        <Step show={step >= 2}>
          <g transform={`translate(${cx}, ${cy})`}>
            {/* 中央到 5 节点连线 */}
            {MECHANISM_NODES.map((n, i) => (
              <line
                key={`l-${i}`}
                x1="0"
                y1="0"
                x2={n.x}
                y2={n.y}
                stroke="#C9C8C4"
                strokeWidth="1.2"
              />
            ))}
            {/* 中央节点 */}
            <circle cx="0" cy="0" r="56" fill="#6F68AC" />
            <text
              x="0"
              y="-4"
              fontFamily="Noto Sans CJK SC"
              fontSize="18"
              fill="#FFFFFF"
              fontWeight="500"
              textAnchor="middle"
            >
              人格
            </text>
            <text
              x="0"
              y="22"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#FFFFFF"
              textAnchor="middle"
              opacity="0.85"
            >
              运转
            </text>
            {/* 5 外圈节点 */}
            {MECHANISM_NODES.map((n, i) => (
              <g key={`n-${i}`} transform={`translate(${n.x}, ${n.y})`}>
                <circle
                  cx="0"
                  cy="0"
                  r="50"
                  fill="#FFFFFF"
                  stroke="#7A7975"
                  strokeWidth="1.8"
                />
                <text
                  x="0"
                  y="-4"
                  fontFamily="Noto Sans CJK SC"
                  fontSize="14"
                  fill="#52514C"
                  fontWeight="500"
                  textAnchor="middle"
                >
                  {n.title}
                </text>
                <text
                  x="0"
                  y="18"
                  fontFamily="Noto Sans CJK SC"
                  fontSize="11"
                  fill="#7A7975"
                  textAnchor="middle"
                >
                  {n.desc}
                </text>
              </g>
            ))}
          </g>
        </Step>
        <Step show={step >= 3}>
          <text
            x="40"
            y="1140"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            五个机制，让人格活着
          </text>
          <text
            x="40"
            y="1180"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            而不是摆着
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
