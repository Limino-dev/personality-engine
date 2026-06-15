import type { SlideProps } from "@/lib/slides";
import { SlideBase, Step } from "./SlideBase";

export default function Slide08PersonalityEngine({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <SlideBase chapter="05 · Agent人格引擎" title="让Agent长出判断的主体" page={5}>
        <Step show={step >= 2}>
          <g transform="translate(75,225) scale(1.328)">
            <rect
              x="180"
              y="16"
              width="320"
              height="44"
              rx="10"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="2"
            />
            <text
              x="340"
              y="44"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#8C8B85"
              fontWeight="500"
              textAnchor="middle"
            >
              Agent · 执行载体
            </text>
            <line
              x1="340"
              y1="82"
              x2="340"
              y2="66"
              stroke="#6F68AC"
              strokeWidth="1.8"
              markerEnd="url(#arr)"
            />
            <rect
              x="140"
              y="86"
              width="400"
              height="56"
              rx="12"
              fill="#ECEAF8"
              stroke="#6F68AC"
              strokeWidth="2.6"
            />
            <text
              x="340"
              y="112"
              fontFamily="Noto Sans CJK SC"
              fontSize="15"
              fill="#46406E"
              fontWeight="500"
              textAnchor="middle"
            >
              Agent人格引擎
            </text>
            <text
              x="340"
              y="132"
              fontFamily="Noto Sans CJK SC"
              fontSize="12"
              fill="#6F68AC"
              textAnchor="middle"
            >
              {"深 · 复利沉淀　　稳 · 判断主语"}
            </text>
            <line
              x1="340"
              y1="164"
              x2="340"
              y2="148"
              stroke="#8C8B85"
              strokeWidth="1.8"
              markerEnd="url(#arr)"
            />
            <rect
              x="180"
              y="168"
              width="320"
              height="44"
              rx="10"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="2"
            />
            <text
              x="340"
              y="196"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
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
            x="64"
            y="690"
            fontFamily="Noto Sans CJK SC"
            fontSize="27"
            fill="#2B2A27"
            fontWeight="500"
          >
            大模型与Agent之间的关键中间件——补深，补稳
          </text>
        </Step>
      </SlideBase>
    </svg>
  );
}
