import type { SlideProps } from "@/lib/slides";
import { SlideBase, Step } from "./SlideBase";

export default function Slide06Subjectivity({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <SlideBase chapter="04 · 人的主体性" title="同样的模型，不同的人" page={4}>
        <Step show={step >= 2}>
          <g transform="translate(75,230) scale(1.328)">
            <rect
              x="44"
              y="83"
              width="118"
              height="44"
              rx="10"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="2"
            />
            <text
              x="103"
              y="111"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#8C8B85"
              fontWeight="500"
              textAnchor="middle"
            >
              同一个大模型
            </text>
            <path
              d="M162 96 C 230 78, 280 62, 342 56"
              fill="none"
              stroke="#6F68AC"
              strokeWidth="1.8"
              strokeLinecap="round"
              markerEnd="url(#arr)"
            />
            <path
              d="M162 114 C 230 132, 280 148, 342 154"
              fill="none"
              stroke="#B0A9DA"
              strokeWidth="1.8"
              strokeLinecap="round"
              markerEnd="url(#arr)"
            />
            <rect
              x="350"
              y="28"
              width="286"
              height="58"
              rx="10"
              fill="none"
              stroke="#6F68AC"
              strokeWidth="2.2"
            />
            <circle
              cx="382"
              cy="49"
              r="8"
              fill="none"
              stroke="#6F68AC"
              strokeWidth="2"
            />
            <path
              d="M370 72 C 370 62, 376 58, 382 58 C 388 58, 394 62, 394 72"
              fill="none"
              stroke="#6F68AC"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <text
              x="412"
              y="53"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#57518C"
              fontWeight="500"
            >
              深度使用者
            </text>
            <text
              x="412"
              y="73"
              fontFamily="Noto Sans CJK SC"
              fontSize="12"
              fill="#6F68AC"
            >
              产出精深、稳定
            </text>
            <rect
              x="350"
              y="124"
              width="286"
              height="58"
              rx="10"
              fill="none"
              stroke="#B0A9DA"
              strokeWidth="2"
            />
            <circle
              cx="382"
              cy="145"
              r="8"
              fill="none"
              stroke="#B0A9DA"
              strokeWidth="2"
            />
            <path
              d="M370 168 C 370 158, 376 154, 382 154 C 388 154, 394 158, 394 168"
              fill="none"
              stroke="#B0A9DA"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <text
              x="412"
              y="149"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#6F68AC"
              fontWeight="500"
            >
              普通使用者
            </text>
            <text
              x="412"
              y="169"
              fontFamily="Noto Sans CJK SC"
              fontSize="12"
              fill="#B0A9DA"
            >
              产出平庸、不稳定
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
            模型是常数，人是变量——导致最终化学反应差异
          </text>
        </Step>
      </SlideBase>
    </svg>
  );
}
