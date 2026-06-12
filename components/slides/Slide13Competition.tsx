import type { SlideProps } from "@/lib/slides";
import { SlideBase, Step } from "./SlideBase";

export default function Slide13Competition({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <SlideBase chapter="10 · 应用之争" title="竞争的主战场在上移" page={10}>
        <Step show={step >= 2}>
          <g transform="translate(75,240) scale(1.66)">
            <rect
              x="120"
              y="20"
              width="440"
              height="60"
              rx="12"
              fill="#ECEAF8"
              stroke="#6F68AC"
              strokeWidth="2.4"
            />
            <text
              x="340"
              y="48"
              fontFamily="Noto Sans CJK SC"
              fontSize="15"
              fill="#46406E"
              fontWeight="500"
              textAnchor="middle"
            >
              Agent层之争
            </text>
            <text
              x="340"
              y="70"
              fontFamily="Noto Sans CJK SC"
              fontSize="12.5"
              fill="#6F68AC"
              textAnchor="middle"
            >
              应用场景的全部载体 · 竞争永不收敛
            </text>
            <line
              x1="340"
              y1="146"
              x2="340"
              y2="88"
              stroke="#6F68AC"
              strokeWidth="2.2"
              markerEnd="url(#arr)"
            />
            <text
              x="358"
              y="121"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#57518C"
              fontWeight="500"
            >
              主战场上移
            </text>
            <rect x="120" y="150" width="440" height="56" rx="12" fill="#F2F1EF" />
            <text
              x="340"
              y="176"
              fontFamily="Noto Sans CJK SC"
              fontSize="15"
              fill="#5E5D58"
              fontWeight="500"
              textAnchor="middle"
            >
              模型层之争
            </text>
            <text
              x="340"
              y="196"
              fontFamily="Noto Sans CJK SC"
              fontSize="12.5"
              fill="#8C8B85"
              textAnchor="middle"
            >
              能力趋同 · 价格趋零 · 竞争收敛
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
            技术底层是入场券，人格引擎是Agent的护城河
          </text>
        </Step>
      </SlideBase>
    </svg>
  );
}
