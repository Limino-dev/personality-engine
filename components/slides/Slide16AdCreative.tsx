import type { SlideProps } from "@/lib/slides";
import { SlideBase, Step } from "./SlideBase";

export default function Slide16AdCreative({ step }: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <SlideBase
        chapter="12 · 第一个应用方向"
        title="广告创意人格 — 电商 · 短视频 · 直播"
        page={12}
      >
        <Step show={step >= 2}>
          <g transform="translate(75,188) scale(1.328)">
            <rect
              x="40"
              y="34"
              width="150"
              height="52"
              rx="12"
              fill="#ECEAF8"
              stroke="#6F68AC"
              strokeWidth="2.4"
            />
            <text
              x="115"
              y="58"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#46406E"
              fontWeight="500"
              textAnchor="middle"
            >
              Agent人格引擎
            </text>
            <text
              x="115"
              y="77"
              fontFamily="Noto Sans CJK SC"
              fontSize="11.5"
              fill="#6F68AC"
              textAnchor="middle"
            >
              构建广告创意人格
            </text>
            <line
              x1="190"
              y1="60"
              x2="248"
              y2="60"
              stroke="#7A7975"
              strokeWidth="1.8"
              markerEnd="url(#arr)"
            />
            <rect
              x="252"
              y="34"
              width="160"
              height="52"
              rx="12"
              fill="none"
              stroke="#7A7975"
              strokeWidth="2"
            />
            <text
              x="332"
              y="58"
              fontFamily="Noto Sans CJK SC"
              fontSize="14"
              fill="#52514C"
              fontWeight="500"
              textAnchor="middle"
            >
              创意判断 · 源代码
            </text>
            <text
              x="332"
              y="77"
              fontFamily="Noto Sans CJK SC"
              fontSize="11.5"
              fill="#7A7975"
              textAnchor="middle"
            >
              持续、精深、稳定的产出
            </text>
            <line
              x1="412"
              y1="60"
              x2="470"
              y2="60"
              stroke="#7A7975"
              strokeWidth="1.8"
              markerEnd="url(#arr)"
            />
            <rect
              x="474"
              y="34"
              width="166"
              height="52"
              rx="12"
              fill="none"
              stroke="#7A7975"
              strokeWidth="2"
            />
            <text
              x="557"
              y="58"
              fontFamily="Noto Sans CJK SC"
              fontSize="13.5"
              fill="#52514C"
              fontWeight="500"
              textAnchor="middle"
            >
              形态 · 可视化阶段
            </text>
            <text
              x="557"
              y="77"
              fontFamily="Noto Sans CJK SC"
              fontSize="11.5"
              fill="#7A7975"
              textAnchor="middle"
            >
              文案 · 图片 · 视频 · 短剧
            </text>
            <path
              d="M557 86 L 557 112 L 115 112 L 115 90"
              fill="none"
              stroke="#C9C8C4"
              strokeWidth="1.6"
              strokeLinecap="round"
              markerEnd="url(#arr)"
            />
            <text
              x="336"
              y="108"
              fontFamily="Noto Sans CJK SC"
              fontSize="11.5"
              fill="#7A7975"
              textAnchor="middle"
            >
              效果数据当天回流 · 人格越用越准
            </text>
            <rect x="0" y="160" width="214" height="78" rx="12" fill="#F4F4F2" />
            <text
              x="22"
              y="196"
              fontFamily="Noto Sans CJK SC"
              fontSize="13.5"
              fill="#52514C"
              fontWeight="500"
            >
              终极刚需
            </text>
            <text
              x="22"
              y="224"
              fontFamily="Noto Sans CJK SC"
              fontSize="11.5"
              fill="#7A7975"
            >
              一切商业归于交易，为交易付费
            </text>
            <rect x="233" y="160" width="214" height="78" rx="12" fill="#F4F4F2" />
            <text
              x="255"
              y="196"
              fontFamily="Noto Sans CJK SC"
              fontSize="13.5"
              fill="#52514C"
              fontWeight="500"
            >
              高频消耗
            </text>
            <text
              x="255"
              y="224"
              fontFamily="Noto Sans CJK SC"
              fontSize="11.5"
              fill="#7A7975"
            >
              素材按天衰减，要持续稳定的供给
            </text>
            <rect x="466" y="160" width="214" height="78" rx="12" fill="#F4F4F2" />
            <text
              x="488"
              y="196"
              fontFamily="Noto Sans CJK SC"
              fontSize="13.5"
              fill="#52514C"
              fontWeight="500"
            >
              即时反馈
            </text>
            <text
              x="488"
              y="224"
              fontFamily="Noto Sans CJK SC"
              fontSize="11.5"
              fill="#7A7975"
            >
              转化当天回流，引擎收敛最快
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
            用户接收的是思维——引擎产的，正是思维源代码
          </text>
        </Step>
      </SlideBase>
    </svg>
  );
}
