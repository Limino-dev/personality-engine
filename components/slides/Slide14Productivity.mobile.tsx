import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

const SHACKLES = [
  {
    title: "时间枷锁，解除",
    l1: "判断力曾被工时锁死",
    l2: "现在可以永不停机",
  },
  {
    title: "并发枷锁，解除",
    l1: "一个人只能在一处判断",
    l2: "人格可同时在千处工作",
  },
  {
    title: "寿命枷锁，解除",
    l1: "几十年功力一代清零",
    l2: "人格资产可延续继承",
  },
];

export default function Slide14ProductivityMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile chapter="11 · 生产力跃迁" title="第一生产力的形态迁移" page={11}>
        <Step show={step >= 1}>
          <text
            x="40"
            y="272"
            fontFamily="Noto Sans CJK SC"
            fontSize="22"
            fill="#5E5D58"
          >
            非AI世界，人是第一生产力
          </text>
          <text
            x="40"
            y="306"
            fontFamily="Noto Sans CJK SC"
            fontSize="22"
            fill="#5E5D58"
          >
            一切都是人创造的
          </text>
          <text
            x="40"
            y="346"
            fontFamily="Noto Sans CJK SC"
            fontSize="22"
            fill="#5E5D58"
          >
            AI世界，基于人思维的
          </text>
          <text
            x="40"
            y="380"
            fontFamily="Noto Sans CJK SC"
            fontSize="22"
            fill="#5E5D58"
          >
            Agent人格引擎
          </text>
          <text
            x="40"
            y="414"
            fontFamily="Noto Sans CJK SC"
            fontSize="22"
            fill="#5E5D58"
          >
            是第一生产力
          </text>
        </Step>
        <Step show={step >= 2}>
          {SHACKLES.map((s, i) => {
            const y = 480 + i * 180;
            return (
              <g key={i}>
                <rect x="60" y={y} width="600" height="148" rx="16" fill="#F2F1EF" />
                <text
                  x="92"
                  y={y + 46}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="22"
                  fill="#46406E"
                  fontWeight="500"
                >
                  {s.title}
                </text>
                <text
                  x="92"
                  y={y + 92}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="18"
                  fill="#5E5D58"
                >
                  {s.l1}
                </text>
                <text
                  x="92"
                  y={y + 122}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="18"
                  fill="#5E5D58"
                >
                  {s.l2}
                </text>
              </g>
            );
          })}
        </Step>
        <Step show={step >= 3}>
          <text
            x="40"
            y="1120"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            执行交给AI
          </text>
          <text
            x="40"
            y="1160"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            判断有了引擎
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
