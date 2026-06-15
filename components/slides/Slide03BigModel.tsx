import type { SlideProps } from "@/lib/slides";
import { SlideBase, Step } from "./SlideBase";

export default function Slide03BigModel({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <SlideBase chapter="01 · 大模型的天性" title="什么都懂，想得浅" page={1}>
        <Step show={step >= 1}>
          <text
            x="64"
            y="172"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#5E5D58"
          >
            知识全面、横切极快，但权重冻结——想得再好，也不沉淀回自己
          </text>
        </Step>
        <Step show={step >= 2}>
          <g transform="translate(89,272) scale(1.296)">
            <line x1="60" y1="142" x2="640" y2="142" stroke="#E3E2DF" strokeWidth="1" />
            <line x1="60" y1="142" x2="60" y2="16" stroke="#E3E2DF" strokeWidth="1" />
            <path
              d="M 70 124 C 160 98, 240 92, 340 89 C 440 87, 540 86, 614 86"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 70 130 C 200 124, 320 113, 430 89 C 510 70, 570 48, 616 26"
              fill="none"
              stroke="#6F68AC"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="614" cy="86" r="3.5" fill="#8C8B85" />
            <circle
              cx="616"
              cy="26"
              r="4.5"
              fill="#B0A9DA"
              stroke="#6F68AC"
              strokeWidth="1.2"
            />
            <text
              x="612"
              y="16"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#6F68AC"
              fontWeight="500"
              textAnchor="end"
            >
              人 · 深度复利
            </text>
            <text
              x="610"
              y="106"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#8C8B85"
              fontWeight="500"
              textAnchor="end"
            >
              模型 · 深度定额
            </text>
            <text
              x="640"
              y="164"
              fontFamily="Noto Sans CJK SC"
              fontSize="12"
              fill="#8C8B85"
              textAnchor="end"
            >
              投入的时间 →
            </text>
            <text
              x="54"
              y="26"
              fontFamily="Noto Sans CJK SC"
              fontSize="12"
              fill="#8C8B85"
              textAnchor="end"
            >
              深度
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
            人的深度是复利的，模型的深度是定额的
          </text>
        </Step>
      </SlideBase>
    </svg>
  );
}
