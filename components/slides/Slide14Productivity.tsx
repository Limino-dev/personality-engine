import type { SlideProps } from "@/lib/slides";
import { SlideBase, Step } from "./SlideBase";

const SHACKLES = [
  {
    title: "时间枷锁，解除",
    l1: "判断力曾被工时锁死",
    l2: "现在可以永不停机",
    x: 22,
  },
  {
    title: "并发枷锁，解除",
    l1: "一个人只能在一处判断",
    l2: "人格可同时在千处工作",
    x: 255,
  },
  {
    title: "寿命枷锁，解除",
    l1: "几十年功力一代清零",
    l2: "人格资产可延续继承",
    x: 488,
  },
];

export default function Slide14Productivity({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <SlideBase chapter="11 · 生产力跃迁" title="第一生产力的形态迁移" page={11}>
        <Step show={step >= 1}>
          <text
            x="64"
            y="172"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#5E5D58"
          >
            非AI世界，人是第一生产力——一切都是人创造的
          </text>
          <text
            x="64"
            y="212"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#5E5D58"
          >
            AI世界，基于人思维的Agent人格引擎，是第一生产力
          </text>
        </Step>
        <Step show={step >= 2}>
          <g transform="translate(75,308) scale(1.66)">
            {SHACKLES.map((s, i) => (
              <g key={i} transform={`translate(${i * 233},0)`}>
                <rect x="0" y="0" width="214" height="150" rx="16" fill="#F2F1EF" />
                <text
                  x={s.x}
                  y="44"
                  fontFamily="Noto Sans CJK SC"
                  fontSize="15"
                  fill="#46406E"
                  fontWeight="500"
                >
                  {s.title}
                </text>
                <text
                  x={s.x}
                  y="88"
                  fontFamily="Noto Sans CJK SC"
                  fontSize="12.5"
                  fill="#5E5D58"
                >
                  {s.l1}
                </text>
                <text
                  x={s.x}
                  y="116"
                  fontFamily="Noto Sans CJK SC"
                  fontSize="12.5"
                  fill="#5E5D58"
                >
                  {s.l2}
                </text>
              </g>
            ))}
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
            执行交给AI，判断有了引擎
          </text>
        </Step>
      </SlideBase>
    </svg>
  );
}
