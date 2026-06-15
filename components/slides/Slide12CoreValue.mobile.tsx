import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

export default function Slide12CoreValueMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile chapter="09 · 核心价值" title="同样的算力，不同的价值" page={9}>
        <Step show={step >= 2}>
          <g transform="translate(0, 240)">
            {/* 顶部：同样的算力成本 */}
            <rect
              x="220"
              y="0"
              width="280"
              height="78"
              rx="12"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="2"
            />
            <text
              x="360"
              y="34"
              fontFamily="Noto Sans CJK SC"
              fontSize="16"
              fill="#8C8B85"
              fontWeight="500"
              textAnchor="middle"
            >
              同样的算力成本
            </text>
            <text
              x="360"
              y="58"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#8C8B85"
              textAnchor="middle"
            >
              同一模型 · 同样消耗
            </text>

            {/* 中央到顶：连线 */}
            <line
              x1="360"
              y1="160"
              x2="360"
              y2="100"
              stroke="#6F68AC"
              strokeWidth="1.8"
              markerEnd="url(#arr)"
            />

            {/* 中央：Agent 人格引擎 */}
            <rect
              x="170"
              y="164"
              width="380"
              height="80"
              rx="14"
              fill="#ECEAF8"
              stroke="#6F68AC"
              strokeWidth="2.4"
            />
            <text
              x="360"
              y="200"
              fontFamily="Noto Sans CJK SC"
              fontSize="16"
              fill="#46406E"
              fontWeight="500"
              textAnchor="middle"
            >
              Agent人格引擎
            </text>
            <text
              x="360"
              y="224"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#6F68AC"
              textAnchor="middle"
            >
              判断的主体介入
            </text>

            {/* 中央向下两条分叉 */}
            <path
              d="M360 244 L 360 280 L 180 280 L 180 316"
              fill="none"
              stroke="#6F68AC"
              strokeWidth="1.8"
              strokeLinecap="round"
              markerEnd="url(#arr)"
            />
            <path
              d="M360 244 L 360 280 L 540 280 L 540 316"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="1.8"
              strokeLinecap="round"
              markerEnd="url(#arr)"
            />

            {/* 左下：精深产出 */}
            <rect
              x="40"
              y="320"
              width="280"
              height="92"
              rx="12"
              fill="none"
              stroke="#6F68AC"
              strokeWidth="2.2"
            />
            <text
              x="180"
              y="358"
              fontFamily="Noto Sans CJK SC"
              fontSize="17"
              fill="#57518C"
              fontWeight="500"
              textAnchor="middle"
            >
              精深产出 · 高价值
            </text>
            <text
              x="180"
              y="388"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#6F68AC"
              textAnchor="middle"
            >
              同样成本，价值差几十倍
            </text>

            {/* 右下：平庸产出 */}
            <rect
              x="400"
              y="320"
              width="280"
              height="92"
              rx="12"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="1.8"
            />
            <text
              x="540"
              y="358"
              fontFamily="Noto Sans CJK SC"
              fontSize="17"
              fill="#8C8B85"
              fontWeight="500"
              textAnchor="middle"
            >
              平庸产出 · 低价值
            </text>
            <text
              x="540"
              y="388"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#8C8B85"
              textAnchor="middle"
            >
              基线消耗，价值不增
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
            人格引擎不省算力
          </text>
          <text
            x="40"
            y="1180"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            ——它让每一份算力换回更多价值
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
