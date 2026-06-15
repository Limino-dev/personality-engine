import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

export default function Slide04TwoGapsMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile chapter="02 · Agent的双缺口" title="深与稳，两道结构性缺口" page={2}>
        <Step show={step >= 2}>
          <rect x="60" y="240" width="600" height="220" rx="16" fill="#F2F1EF" />
          <text
            x="92"
            y="300"
            fontFamily="Noto Sans CJK SC"
            fontSize="28"
            fill="#2B2A27"
            fontWeight="500"
          >
            深的缺口
          </text>
          <text
            x="92"
            y="360"
            fontFamily="Noto Sans CJK SC"
            fontSize="22"
            fill="#5E5D58"
          >
            无法深入思考 → 业务不精深
          </text>
          <text
            x="92"
            y="410"
            fontFamily="Noto Sans CJK SC"
            fontSize="20"
            fill="#8C8B85"
          >
            复利缺失，迭代解决不了
          </text>
          <rect x="60" y="490" width="600" height="220" rx="16" fill="#F2F1EF" />
          <text
            x="92"
            y="550"
            fontFamily="Noto Sans CJK SC"
            fontSize="28"
            fill="#2B2A27"
            fontWeight="500"
          >
            稳的缺口
          </text>
          <text
            x="92"
            y="610"
            fontFamily="Noto Sans CJK SC"
            fontSize="22"
            fill="#5E5D58"
          >
            上下文有限 → 业务不稳定
          </text>
          <text
            x="92"
            y="660"
            fontFamily="Noto Sans CJK SC"
            fontSize="20"
            fill="#8C8B85"
          >
            主语缺失，记忆堆不出来
          </text>
        </Step>
        <Step show={step >= 3}>
          <text
            x="40"
            y="800"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            深与稳，恰好是现实业务
          </text>
          <text
            x="40"
            y="840"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            最不能缺的两样
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
