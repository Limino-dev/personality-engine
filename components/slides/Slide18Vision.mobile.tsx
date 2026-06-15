import type { SlideProps } from "@/lib/slides";
import { Step } from "./SlideBaseMobile";

export default function Slide18VisionMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker
          id="arr"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="context-stroke"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
      <rect width="720" height="1280" fill="#FFFFFF" />
      <g className="module">
        <text
          x="40"
          y="80"
          fontFamily="Noto Sans CJK SC"
          fontSize="22"
          fill="#57518C"
          fontWeight="500"
          letterSpacing="4"
        >
          14 · 利米诺愿景
        </text>
      </g>
      <Step show={step >= 2}>
        <text
          x="40"
          y="280"
          fontFamily="Noto Sans CJK SC"
          fontSize="28"
          fill="#5E5D58"
        >
          非AI世界
        </text>
        <text
          x="40"
          y="320"
          fontFamily="Noto Sans CJK SC"
          fontSize="28"
          fill="#5E5D58"
        >
          人创造了一切
        </text>

        <rect x="42" y="354" width="92" height="3" fill="#6F68AC" />

        <text
          x="40"
          y="410"
          fontFamily="Noto Sans CJK SC"
          fontSize="24"
          fill="#5E5D58"
        >
          Agent人格引擎
        </text>
        <text
          x="40"
          y="446"
          fontFamily="Noto Sans CJK SC"
          fontSize="24"
          fill="#5E5D58"
        >
          人的主体性在
        </text>
        <text
          x="40"
          y="482"
          fontFamily="Noto Sans CJK SC"
          fontSize="24"
          fill="#5E5D58"
        >
          AI时代的技术形态
        </text>

        <text
          x="40"
          y="558"
          fontFamily="Noto Sans CJK SC"
          fontSize="27"
          fill="#46406E"
          fontWeight="500"
        >
          第一生产力完成了
        </text>
        <text
          x="40"
          y="598"
          fontFamily="Noto Sans CJK SC"
          fontSize="27"
          fill="#46406E"
          fontWeight="500"
        >
          形态迁移
        </text>
        <text
          x="40"
          y="638"
          fontFamily="Noto Sans CJK SC"
          fontSize="27"
          fill="#46406E"
          fontWeight="500"
        >
          没有换主人
        </text>
      </Step>

      <g className="module">
        <text
          x="40"
          y="1050"
          fontFamily="Noto Sans CJK SC"
          fontSize="34"
          fill="#2B2A27"
          fontWeight="500"
        >
          AI世界，利米诺
        </text>
        <text
          x="40"
          y="1098"
          fontFamily="Noto Sans CJK SC"
          fontSize="34"
          fill="#2B2A27"
          fontWeight="500"
        >
          让「一切」的源头
        </text>
        <text
          x="40"
          y="1146"
          fontFamily="Noto Sans CJK SC"
          fontSize="34"
          fill="#2B2A27"
          fontWeight="500"
        >
          依然是人
        </text>

        <line
          x1="40"
          y1="1216"
          x2="680"
          y2="1216"
          stroke="#E3E2DF"
          strokeWidth="1"
        />
        <text
          x="680"
          y="1258"
          fontFamily="Noto Sans CJK SC"
          fontSize="18"
          fill="#8C8B85"
          textAnchor="end"
        >
          14 / 15
        </text>
      </g>
    </svg>
  );
}
