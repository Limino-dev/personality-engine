import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

export default function Slide08PersonalityEngineMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile chapter="05 · Agent人格引擎" title="让Agent长出判断的主体" page={5}>
        <Step show={step >= 2}>
          <g transform="translate(110, 280)">
            {/* 顶部：Agent · 执行载体 */}
            <rect
              x="100"
              y="0"
              width="300"
              height="60"
              rx="12"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="2"
            />
            <text
              x="250"
              y="38"
              fontFamily="Noto Sans CJK SC"
              fontSize="15"
              fill="#8C8B85"
              fontWeight="500"
              textAnchor="middle"
            >
              Agent · 执行载体
            </text>

            {/* 连接箭头 */}
            <line
              x1="250"
              y1="110"
              x2="250"
              y2="80"
              stroke="#6F68AC"
              strokeWidth="1.8"
              markerEnd="url(#arr)"
            />

            {/* 中央：Agent 人格引擎 */}
            <rect
              x="60"
              y="114"
              width="380"
              height="76"
              rx="14"
              fill="#ECEAF8"
              stroke="#6F68AC"
              strokeWidth="2.6"
            />
            <text
              x="250"
              y="148"
              fontFamily="Noto Sans CJK SC"
              fontSize="15"
              fill="#46406E"
              fontWeight="500"
              textAnchor="middle"
            >
              Agent人格引擎
            </text>
            <text
              x="250"
              y="172"
              fontFamily="Noto Sans CJK SC"
              fontSize="12"
              fill="#6F68AC"
              textAnchor="middle"
            >
              深 · 复利沉淀　　稳 · 判断主语
            </text>

            {/* 连接箭头 */}
            <line
              x1="250"
              y1="240"
              x2="250"
              y2="210"
              stroke="#8C8B85"
              strokeWidth="1.8"
              markerEnd="url(#arr)"
            />

            {/* 底部：大模型 · 基座智能 */}
            <rect
              x="100"
              y="244"
              width="300"
              height="60"
              rx="12"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="2"
            />
            <text
              x="250"
              y="282"
              fontFamily="Noto Sans CJK SC"
              fontSize="15"
              fill="#8C8B85"
              fontWeight="500"
              textAnchor="middle"
            >
              大模型 · 基座智能
            </text>
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
            大模型与Agent之间的关键
          </text>
          <text
            x="40"
            y="1180"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            中间件——补深，补稳
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
