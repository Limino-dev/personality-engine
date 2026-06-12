import type { SlideProps } from "@/lib/slides";
import { SlideBase, Step } from "./SlideBase";

const MECHANISM_NODES = [
  {
    x: 340,
    y: 22,
    title: "仲裁机制",
    desc: "固定裁决结构",
  },
  {
    x: 461.73523408577967,
    y: 110.44582472000673,
    title: "立体化机制",
    desc: "多源交叉成型",
  },
  {
    x: 415.2365122934366,
    y: 253.55417527999327,
    title: "触发机制",
    desc: "激活对应侧面",
  },
  {
    x: 264.76348770656347,
    y: 253.55417527999327,
    title: "反馈机制",
    desc: "沉淀回栈",
  },
  {
    x: 218.26476591422033,
    y: 110.44582472000675,
    title: "校准机制",
    desc: "防止漂移失真",
  },
];

export default function Slide11Mechanism({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <SlideBase chapter="08 · 机制" title="人格如何运转" page={8}>
        <Step show={step >= 2}>
          <g transform="translate(128,150) scale(1.6)">
            {MECHANISM_NODES.map((n, i) => (
              <line
                key={i}
                x1="340"
                y1="150"
                x2={n.x}
                y2={n.y}
                stroke="#C9C8C4"
                strokeWidth="1.2"
              />
            ))}
            <circle cx="340" cy="150" r="44" fill="#6F68AC" />
            <text
              x="340"
              y="146"
              fontFamily="Noto Sans CJK SC"
              fontSize="15"
              fill="#FFFFFF"
              fontWeight="500"
              textAnchor="middle"
            >
              人格
            </text>
            <text
              x="340"
              y="166"
              fontFamily="Noto Sans CJK SC"
              fontSize="12"
              fill="#FFFFFF"
              textAnchor="middle"
              opacity="0.85"
            >
              运转
            </text>
            {MECHANISM_NODES.map((n, i) => (
              <g key={i}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="42"
                  fill="#FFFFFF"
                  stroke="#7A7975"
                  strokeWidth="1.8"
                />
                <text
                  x={n.x}
                  y={n.y - 3}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="12"
                  fill="#52514C"
                  fontWeight="500"
                  textAnchor="middle"
                >
                  {n.title}
                </text>
                <text
                  x={n.x}
                  y={n.y + 16}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="10.5"
                  fill="#7A7975"
                  textAnchor="middle"
                >
                  {n.desc}
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
            五个机制，让人格活着，而不是摆着
          </text>
        </Step>
      </SlideBase>
    </svg>
  );
}
