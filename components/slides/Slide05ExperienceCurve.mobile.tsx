import type { SlideProps } from "@/lib/slides";
import { SlideBaseMobile, Step } from "./SlideBaseMobile";

export default function Slide05ExperienceCurveMobile({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <SlideBaseMobile chapter="03 · 体验曲线" title="演示时惊艳，业务里失望" page={3}>
        <Step show={step >= 2}>
          <g transform="translate(0, 300) scale(1.1)">
            <line x1="56" y1="190" x2="644" y2="190" stroke="#E3E2DF" strokeWidth="1" />
            <line x1="56" y1="190" x2="56" y2="26" stroke="#E3E2DF" strokeWidth="1" />
            <text
              x="64"
              y="18"
              fontFamily="Noto Sans CJK SC"
              fontSize="12"
              fill="#8C8B85"
            >
              对Agent的预期
            </text>
            <line x1="200" y1="38" x2="644" y2="38" stroke="#B0A9DA" strokeWidth="1.3" />
            <text
              x="640"
              y="26"
              fontFamily="Noto Sans CJK SC"
              fontSize="12.5"
              fill="#6F68AC"
              fontWeight="500"
              textAnchor="end"
            >
              深与稳的天花板
            </text>
            <path
              d="M 66 172 C 150 62, 220 42, 290 50 C 400 68, 510 114, 622 142"
              fill="none"
              stroke="#8C8B85"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="272" cy="45" r="4" fill="#8C8B85" />
            <circle cx="622" cy="142" r="4" fill="#8C8B85" />
            <text
              x="240"
              y="30"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#5E5D58"
              fontWeight="500"
              textAnchor="middle"
            >
              以为无所不能
            </text>
            <text
              x="638"
              y="100"
              fontFamily="Noto Sans CJK SC"
              fontSize="13"
              fill="#5E5D58"
              fontWeight="500"
              textAnchor="end"
            >
              还需要人介入，替代落空
            </text>
            <text
              x="140"
              y="212"
              fontFamily="Noto Sans CJK SC"
              fontSize="11.5"
              fill="#8C8B85"
              textAnchor="middle"
            >
              初次尝试
            </text>
            <text
              x="370"
              y="212"
              fontFamily="Noto Sans CJK SC"
              fontSize="11.5"
              fill="#8C8B85"
              textAnchor="middle"
            >
              进入真实业务
            </text>
            <text
              x="580"
              y="212"
              fontFamily="Noto Sans CJK SC"
              fontSize="11.5"
              fill="#8C8B85"
              textAnchor="middle"
            >
              规模化替代
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
            对Agent的狂热与失望
          </text>
          <text
            x="40"
            y="1180"
            fontFamily="Noto Sans CJK SC"
            fontSize="25"
            fill="#2B2A27"
            fontWeight="500"
          >
            是同一条曲线的两端
          </text>
        </Step>
      </SlideBaseMobile>
    </svg>
  );
}
