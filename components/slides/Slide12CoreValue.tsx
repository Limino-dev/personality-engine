import type { SlideProps } from "@/lib/slides";
import { SlideBase, Step } from "./SlideBase";

export default function Slide12CoreValue({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <SlideBase chapter="09 · 核心价值" title="同样的算力，不同的价值" page={9}>
        <Step show={step >= 2}>
          <g transform="translate(75,255) scale(1.328)">
            <rect
              x="20"
              y="86"
              width="150"
              height="52"
              rx="10"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="2"
            />
            <text
              x="95"
              y="108"
              fontFamily="Noto Sans CJK SC"
              fontSize="13.5"
              fill="#8C8B85"
              fontWeight="500"
              textAnchor="middle"
            >
              同样的算力成本
            </text>
            <text
              x="95"
              y="127"
              fontFamily="Noto Sans CJK SC"
              fontSize="11"
              fill="#8C8B85"
              textAnchor="middle"
            >
              同一模型 · 同样消耗
            </text>
            <path
              d="M170 100 C 210 80, 230 70, 256 66"
              fill="none"
              stroke="#6F68AC"
              strokeWidth="1.8"
              strokeLinecap="round"
              markerEnd="url(#arr)"
            />
            <path
              d="M170 124 C 240 140, 320 152, 424 156"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="1.8"
              strokeLinecap="round"
              markerEnd="url(#arr)"
            />
            <rect
              x="260"
              y="42"
              width="140"
              height="46"
              rx="10"
              fill="#ECEAF8"
              stroke="#6F68AC"
              strokeWidth="2.2"
            />
            <text
              x="330"
              y="62"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#46406E"
              fontWeight="500"
              textAnchor="middle"
            >
              Agent人格引擎
            </text>
            <text
              x="330"
              y="80"
              fontFamily="Noto Sans CJK SC"
              fontSize="10.5"
              fill="#6F68AC"
              textAnchor="middle"
            >
              判断的主体介入
            </text>
            <path
              d="M400 64 C 430 60, 446 58, 466 56"
              fill="none"
              stroke="#6F68AC"
              strokeWidth="1.8"
              strokeLinecap="round"
              markerEnd="url(#arr)"
            />
            <rect
              x="470"
              y="28"
              width="196"
              height="58"
              rx="10"
              fill="none"
              stroke="#6F68AC"
              strokeWidth="2.4"
            />
            <text
              x="568"
              y="54"
              fontFamily="Noto Sans CJK SC"
              fontSize="14.5"
              fill="#57518C"
              fontWeight="500"
              textAnchor="middle"
            >
              精深产出 · 高价值
            </text>
            <text
              x="568"
              y="74"
              fontFamily="Noto Sans CJK SC"
              fontSize="11"
              fill="#6F68AC"
              textAnchor="middle"
            >
              同样成本，价值差几十倍
            </text>
            <rect
              x="470"
              y="134"
              width="170"
              height="46"
              rx="10"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="1.8"
            />
            <text
              x="555"
              y="162"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#8C8B85"
              fontWeight="500"
              textAnchor="middle"
            >
              平庸产出 · 低价值
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
            人格引擎不省算力——它让每一份算力换回更多价值
          </text>
        </Step>
      </SlideBase>
    </svg>
  );
}
