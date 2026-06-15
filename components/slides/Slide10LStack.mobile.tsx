import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

const STACK_ROWS = [
  { name: "动力节律层", desc: "底层动力结构与节奏偏好" },
  { name: "表达图谱层", desc: "表达风格与天赋张力" },
  { name: "认知模式层", desc: "信息如何处理，判断如何成型" },
  { name: "价值底线层", desc: "不可让步的判断尺度" },
  { name: "经验指纹层", desc: "判断的体重，风格的指纹" },
  { name: "技能扩展层", desc: "唯一开放边界，添翅膀不换骨" },
];

export default function Slide10LStackMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile chapter="07 · L-Stack架构" title="利米诺人格栈" page={7}>
        <Step show={step >= 2}>
          <g transform="translate(60, 230)">
            {/* 顶部：内核命题层 */}
            <rect x="0" y="0" width="600" height="50" rx="10" fill="#6F68AC" />
            <text
              x="300"
              y="32"
              fontFamily="Noto Sans CJK SC"
              fontSize="16"
              fill="#FFFFFF"
              fontWeight="500"
              textAnchor="middle"
            >
              内核命题层 — 唯一轴心 · 整栈收敛于此
            </text>

            {/* 6 层 stack */}
            {STACK_ROWS.map((row, i) => {
              const y = 66 + i * 56;
              return (
                <g key={i}>
                  <rect x="20" y={y} width="560" height="46" rx="8" fill="#F2F1EF" />
                  <text
                    x="40"
                    y={y + 30}
                    fontFamily="Noto Sans CJK SC"
                    fontSize="16"
                    fill="#46406E"
                    fontWeight="500"
                  >
                    {row.name}
                  </text>
                  <text
                    x="200"
                    y={y + 30}
                    fontFamily="Noto Sans CJK SC"
                    fontSize="14"
                    fill="#8C8B85"
                  >
                    {row.desc}
                  </text>
                </g>
              );
            })}

            {/* 底部：情境触发层 */}
            <rect x="0" y="402" width="600" height="46" rx="10" fill="#B0A9DA" />
            <text
              x="300"
              y="432"
              fontFamily="Noto Sans CJK SC"
              fontSize="16"
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
            x="40"
            y="1140"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            一个轴心，七层结构
          </text>
          <text
            x="40"
            y="1180"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            ——人格是构建出来的，不是设定出来的
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
