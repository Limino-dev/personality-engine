import type { SlideProps } from "@/lib/slides";
import { SlideBase, Step } from "./SlideBase";

export default function Slide09Misconceptions({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <SlideBase chapter="06 · 差异性" title="容易被认错的三件事" page={6}>
        <Step show={step >= 2}>
          <g transform="translate(75,248) scale(1.66)">
            <rect x="0" y="0" width="214" height="170" rx="16" fill="#ECECEA" />
            <text
              x="24"
              y="46"
              fontFamily="Noto Sans CJK SC"
              fontSize="15"
              fill="#7A7975"
              fontWeight="500"
            >
              ✕  提示词人格
            </text>
            <text
              x="24"
              y="98"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#57518C"
              fontWeight="500"
            >
              设定出来的是角色
            </text>
            <text
              x="24"
              y="128"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#57518C"
              fontWeight="500"
            >
              构建出来的才是人格
            </text>
            <rect x="233" y="0" width="214" height="170" rx="16" fill="#ECECEA" />
            <text
              x="257"
              y="46"
              fontFamily="Noto Sans CJK SC"
              fontSize="15"
              fill="#7A7975"
              fontWeight="500"
            >
              ✕  记忆系统
            </text>
            <text
              x="257"
              y="98"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#57518C"
              fontWeight="500"
            >
              他们做档案柜
            </text>
            <text
              x="257"
              y="128"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#57518C"
              fontWeight="500"
            >
              我们做档案柜的主人
            </text>
            <rect x="466" y="0" width="214" height="170" rx="16" fill="#ECECEA" />
            <text
              x="490"
              y="46"
              fontFamily="Noto Sans CJK SC"
              fontSize="15"
              fill="#7A7975"
              fontWeight="500"
            >
              ✕  数字分身
            </text>
            <text
              x="490"
              y="98"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#57518C"
              fontWeight="500"
            >
              副本是纪念品
            </text>
            <text
              x="490"
              y="128"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#57518C"
              fontWeight="500"
            >
              发动机是生产力
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
            不是角色，不是档案，不是副本——是判断的主体
          </text>
        </Step>
      </SlideBase>
    </svg>
  );
}
