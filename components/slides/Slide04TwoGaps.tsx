import type { SlideProps } from "@/lib/slides";
import { SlideBase, Step } from "./SlideBase";

export default function Slide04TwoGaps({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <SlideBase chapter="02 · Agent的双缺口" title="深与稳，两道结构性缺口" page={2}>
        <Step show={step >= 2}>
          <g transform="translate(75,255) scale(1.66)">
            <rect x="0" y="0" width="326" height="160" rx="16" fill="#F2F1EF" />
            <text
              x="28"
              y="48"
              fontFamily="Noto Sans CJK SC"
              fontSize="19"
              fill="#2B2A27"
              fontWeight="500"
            >
              深的缺口
            </text>
            <text
              x="28"
              y="94"
              fontFamily="Noto Sans CJK SC"
              fontSize="14.5"
              fill="#5E5D58"
            >
              无法深入思考 → 业务不精深
            </text>
            <text
              x="28"
              y="126"
              fontFamily="Noto Sans CJK SC"
              fontSize="13.5"
              fill="#8C8B85"
            >
              复利缺失，迭代解决不了
            </text>
            <rect x="354" y="0" width="326" height="160" rx="16" fill="#F2F1EF" />
            <text
              x="382"
              y="48"
              fontFamily="Noto Sans CJK SC"
              fontSize="19"
              fill="#2B2A27"
              fontWeight="500"
            >
              稳的缺口
            </text>
            <text
              x="382"
              y="94"
              fontFamily="Noto Sans CJK SC"
              fontSize="14.5"
              fill="#5E5D58"
            >
              上下文有限 → 业务不稳定
            </text>
            <text
              x="382"
              y="126"
              fontFamily="Noto Sans CJK SC"
              fontSize="13.5"
              fill="#8C8B85"
            >
              主语缺失，记忆堆不出来
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
            深与稳，恰好是现实业务最不能缺的两样
          </text>
        </Step>
      </SlideBase>
    </svg>
  );
}
