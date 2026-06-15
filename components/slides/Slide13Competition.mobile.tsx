import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

export default function Slide13CompetitionMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile chapter="10 · 应用之争" title="竞争的主战场在上移" page={10}>
        <Step show={step >= 2}>
          {/* Agent 层（上）— 紫色高亮 */}
          <rect
            x="60"
            y="280"
            width="600"
            height="160"
            rx="16"
            fill="#ECEAF8"
            stroke="#6F68AC"
            strokeWidth="2.4"
          />
          <text
            x="360"
            y="338"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#46406E"
            fontWeight="500"
            textAnchor="middle"
          >
            Agent层之争
          </text>
          <text
            x="360"
            y="378"
            fontFamily="Noto Sans CJK SC"
            fontSize="18"
            fill="#6F68AC"
            textAnchor="middle"
          >
            应用场景的全部载体
          </text>
          <text
            x="360"
            y="408"
            fontFamily="Noto Sans CJK SC"
            fontSize="18"
            fill="#6F68AC"
            textAnchor="middle"
          >
            竞争永不收敛
          </text>

          {/* 中间箭头 + 文字 */}
          <line
            x1="360"
            y1="528"
            x2="360"
            y2="472"
            stroke="#6F68AC"
            strokeWidth="2.2"
            markerEnd="url(#arr)"
          />
          <text
            x="384"
            y="504"
            fontFamily="Noto Sans CJK SC"
            fontSize="16"
            fill="#57518C"
            fontWeight="500"
          >
            主战场上移
          </text>

          {/* 模型层（下）— 灰色背景 */}
          <rect
            x="60"
            y="540"
            width="600"
            height="148"
            rx="16"
            fill="#F2F1EF"
          />
          <text
            x="360"
            y="592"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#5E5D58"
            fontWeight="500"
            textAnchor="middle"
          >
            模型层之争
          </text>
          <text
            x="360"
            y="630"
            fontFamily="Noto Sans CJK SC"
            fontSize="18"
            fill="#8C8B85"
            textAnchor="middle"
          >
            能力趋同 · 价格趋零
          </text>
          <text
            x="360"
            y="660"
            fontFamily="Noto Sans CJK SC"
            fontSize="18"
            fill="#8C8B85"
            textAnchor="middle"
          >
            竞争收敛
          </text>
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
            技术底层是入场券
          </text>
          <text
            x="40"
            y="1120"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            人格引擎是Agent
          </text>
          <text
            x="40"
            y="1160"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            的护城河
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
