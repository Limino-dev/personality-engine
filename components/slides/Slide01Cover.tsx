import type { SlideProps } from "@/lib/slides";
import { LOGO_DATA_URL } from "@/lib/logo";

export default function Slide01Cover({}: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <rect width="1280" height="720" fill="#FFFFFF" />
      <g className="module">
        <defs>
          <clipPath id="lg">
            <rect x="92" y="244" width="38" height="38" rx="9" />
          </clipPath>
        </defs>
        <g clipPath="url(#lg)">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <image href={LOGO_DATA_URL} x="92" y="244" width="38" height="38" />
        </g>
        <text
          x="146"
          y="272"
          fontFamily="Noto Sans CJK SC"
          fontSize="23"
          fill="#57518C"
          fontWeight="500"
          letterSpacing="6"
        >
          利米诺 · LIMINO
        </text>
        <text
          x="92"
          y="352"
          fontFamily="Noto Sans CJK SC"
          fontSize="58"
          fill="#2B2A27"
          fontWeight="500"
        >
          Agent人格引擎
        </text>
        <rect x="95" y="386" width="92" height="3" fill="#6F68AC" />
        <text
          x="92"
          y="446"
          fontFamily="Noto Sans CJK SC"
          fontSize="26"
          fill="#5E5D58"
        >
          让Agent具备深度与稳定的判断主体
        </text>
        <circle cx="1180" cy="652" r="10" fill="#B0A9DA" />
      </g>
    </svg>
  );
}
