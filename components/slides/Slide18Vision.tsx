import type { SlideProps } from "@/lib/slides";
import { Step } from "./SlideBase";

export default function Slide18Vision({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <rect width="1280" height="720" fill="#FFFFFF" />
      <g className="module">
        <text
          x="64"
          y="66"
          fontFamily="Noto Sans CJK SC"
          fontSize="22"
          fill="#57518C"
          fontWeight="500"
          letterSpacing="4"
        >
          14 · 利米诺愿景
        </text>
        <text
          x="96"
          y="352"
          fontFamily="Noto Sans CJK SC"
          fontSize="38"
          fill="#2B2A27"
          fontWeight="500"
        >
          AI世界，利米诺让「一切」的源头依然是人
        </text>
      </g>
      <Step show={step >= 2}>
        <text
          x="96"
          y="286"
          fontFamily="Noto Sans CJK SC"
          fontSize="29"
          fill="#5E5D58"
        >
          非AI世界，人创造了一切
        </text>
        <rect x="98" y="394" width="92" height="3" fill="#6F68AC" />
        <text
          x="96"
          y="456"
          fontFamily="Noto Sans CJK SC"
          fontSize="25"
          fill="#5E5D58"
        >
          Agent人格引擎——人的主体性在AI时代的技术形态
        </text>
        <text
          x="96"
          y="508"
          fontFamily="Noto Sans CJK SC"
          fontSize="28"
          fill="#46406E"
          fontWeight="500"
        >
          第一生产力完成了形态迁移，没有换主人
        </text>
        <line
          x1="64"
          y1="648"
          x2="1216"
          y2="648"
          stroke="#E3E2DF"
          strokeWidth="1"
        />
        <text
          x="1216"
          y="690"
          fontFamily="Noto Sans CJK SC"
          fontSize="18"
          fill="#8C8B85"
          textAnchor="end"
        >
          14 / 15
        </text>
      </Step>
    </svg>
  );
}
