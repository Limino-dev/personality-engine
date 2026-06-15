import type { SlideProps } from "@/lib/slides";
import { LOGO_DATA_URL } from "@/lib/logo";

export default function Slide01CoverMobile({}: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="1280" fill="#FFFFFF" />
      <g className="module">
        <defs>
          <clipPath id="lg-mobile">
            <rect x="310" y="380" width="100" height="100" rx="22" />
          </clipPath>
        </defs>
        <g clipPath="url(#lg-mobile)">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <image href={LOGO_DATA_URL} x="310" y="380" width="100" height="100" />
        </g>
        <text
          x="360"
          y="540"
          fontFamily="Noto Sans CJK SC"
          fontSize="23"
          fill="#57518C"
          fontWeight="500"
          letterSpacing="6"
          textAnchor="middle"
        >
          利米诺 · LIMINO
        </text>
        <text
          x="360"
          y="640"
          fontFamily="Noto Sans CJK SC"
          fontSize="58"
          fill="#2B2A27"
          fontWeight="500"
          textAnchor="middle"
        >
          Agent人格引擎
        </text>
        <rect x="314" y="670" width="92" height="3" fill="#6F68AC" />
        <text
          x="360"
          y="730"
          fontFamily="Noto Sans CJK SC"
          fontSize="26"
          fill="#5E5D58"
          textAnchor="middle"
        >
          让Agent具备深度与稳定的判断主体
        </text>
        <circle cx="660" cy="1230" r="10" fill="#B0A9DA" />
      </g>
    </svg>
  );
}
