import type { SlideProps } from "@/lib/slides";
import { SlideBase, Step } from "./SlideBase";

const STACK_ROWS = [
  { name: "动力节律层", desc: "底层动力结构与节奏偏好" },
  { name: "表达图谱层", desc: "表达风格与天赋张力" },
  { name: "认知模式层", desc: "信息如何处理，判断如何成型" },
  { name: "价值底线层", desc: "不可让步的判断尺度" },
  { name: "经验指纹层", desc: "判断的体重，风格的指纹" },
  { name: "技能扩展层", desc: "唯一开放边界，添翅膀不换骨" },
];

const NODE_DOTS = [
  [530, 69],
  [506, 96],
  [544, 123],
  [512, 150],
  [538, 177],
  [504, 204],
];

export default function Slide10LStack({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <SlideBase chapter="07 · L-Stack架构" title="利米诺人格栈" page={7}>
        <Step show={step >= 2}>
          <g transform="translate(89,178) scale(1.296)">
            <rect x="120" y="16" width="440" height="32" rx="8" fill="#6F68AC" />
            <text
              x="340"
              y="38"
              fontFamily="Noto Sans CJK SC"
              fontSize="13.5"
              fill="#FFFFFF"
              fontWeight="500"
              textAnchor="middle"
            >
              内核命题层 — 唯一轴心 · 整栈收敛于此
            </text>
            <rect x="136" y="48" width="5" height="183" rx="0" fill="#6F68AC" />
            <path
              d="M530 48 L 530 69 L 506 96 L 544 123 L 512 150 L 538 177 L 504 204 L 504 231"
              fill="none"
              stroke="#B0A9DA"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            {STACK_ROWS.map((row, i) => (
              <g key={i}>
                <rect
                  x="150"
                  y={58 + i * 29}
                  width="410"
                  height="22"
                  rx="5"
                  fill="#F2F1EF"
                />
                <text
                  x="166"
                  y={74 + i * 29}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="13"
                  fill="#46406E"
                  fontWeight="500"
                >
                  {row.name}
                </text>
                <text
                  x="318"
                  y={74 + i * 29}
                  fontFamily="Noto Sans CJK SC"
                  fontSize="12"
                  fill="#8C8B85"
                >
                  {row.desc}
                </text>
              </g>
            ))}
            {NODE_DOTS.map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="3.2" fill="#6F68AC" />
            ))}
            <line
              x1="592"
              y1="124"
              x2="554"
              y2="123"
              stroke="#8C8B85"
              strokeWidth="1"
            />
            <text
              x="596"
              y="128"
              fontFamily="Noto Sans CJK SC"
              fontSize="11"
              fill="#5E5D58"
            >
              层间咬合
            </text>
            <rect x="120" y="231" width="440" height="30" rx="8" fill="#B0A9DA" />
            <text
              x="340"
              y="251"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#46406E"
              fontWeight="500"
              textAnchor="middle"
            >
              情境触发层 — 外部需求由此触发人格
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
            一个轴心，七层结构——人格是构建出来的，不是设定出来的
          </text>
        </Step>
      </SlideBase>
    </svg>
  );
}
