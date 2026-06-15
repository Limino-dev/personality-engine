import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

const CARDS = [
  {
    title: "✕  提示词人格",
    line1: "设定出来的是角色",
    line2: "构建出来的才是人格",
  },
  {
    title: "✕  记忆系统",
    line1: "他们做档案柜",
    line2: "我们做档案柜的主人",
  },
  {
    title: "✕  数字分身",
    line1: "副本是纪念品",
    line2: "发动机是生产力",
  },
];

export default function Slide09MisconceptionsMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile chapter="06 · 差异性" title="容易被认错的三件事" page={6}>
        <Step show={step >= 2}>
          {CARDS.map((card, i) => {
            const y = 240 + i * 220;
            return (
              <g key={i}>
                <rect x="60" y={y} width="600" height="180" rx="16" fill="#ECECEA" />
                <text
                  x="92"
                  y={y + 50}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="18"
                  fill="#7A7975"
                  fontWeight="500"
                >
                  {card.title}
                </text>
                <text
                  x="92"
                  y={y + 110}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="17"
                  fill="#57518C"
                  fontWeight="500"
                >
                  {card.line1}
                </text>
                <text
                  x="92"
                  y={y + 144}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="17"
                  fill="#57518C"
                  fontWeight="500"
                >
                  {card.line2}
                </text>
              </g>
            );
          })}
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
            不是角色，不是档案，不是副本
          </text>
          <text
            x="40"
            y="1180"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            ——是判断的主体
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
