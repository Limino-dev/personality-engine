import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

export default function Slide03BigModelMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile chapter="01 · 大模型的天性" title="什么都懂，想得浅" page={1}>
        <Step show={step >= 1}>
          <text
            x="40"
            y="240"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#5E5D58"
          >
            知识全面、横切极快，但权重冻结
          </text>
          <text
            x="40"
            y="280"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#5E5D58"
          >
            想得再好，也不沉淀回自己
          </text>
        </Step>
        <Step show={step >= 2}>
          <g transform="translate(60,340)">
            <line x1="20" y1="700" x2="580" y2="700" stroke="#E3E2DF" strokeWidth="1" />
            <line x1="20" y1="700" x2="20" y2="20" stroke="#E3E2DF" strokeWidth="1" />
            <path
              d="M 40 600 C 150 580, 280 565, 380 555 C 480 545, 540 530, 580 520"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 40 680 C 180 670, 260 640, 330 520 C 400 400, 480 220, 580 80"
              fill="none"
              stroke="#6F68AC"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="580" cy="520" r="3.5" fill="#8C8B85" />
            <circle
              cx="580"
              cy="80"
              r="4.5"
              fill="#B0A9DA"
              stroke="#6F68AC"
              strokeWidth="1.2"
            />
            <text
              x="575"
              y="60"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#6F68AC"
              fontWeight="500"
              textAnchor="end"
            >
              人 · 深度复利
            </text>
            <text
              x="575"
              y="505"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#8C8B85"
              fontWeight="500"
              textAnchor="end"
            >
              模型 · 深度定额
            </text>
            <text
              x="575"
              y="725"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#8C8B85"
              textAnchor="end"
            >
              投入的时间 →
            </text>
            <text
              x="15"
              y="30"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#8C8B85"
              textAnchor="end"
            >
              深度
            </text>
          </g>
        </Step>
        <Step show={step >= 3}>
          <text
            x="40"
            y="1140"
            fontFamily="Noto Sans CJK SC"
            fontSize="27"
            fill="#2B2A27"
            fontWeight="500"
          >
            人的深度是复利的
          </text>
          <text
            x="40"
            y="1180"
            fontFamily="Noto Sans CJK SC"
            fontSize="27"
            fill="#2B2A27"
            fontWeight="500"
          >
            模型的深度是定额的
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
