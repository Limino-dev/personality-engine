import type { SlideProps } from "@/lib/slides";

export default function Slide07Part02Mobile({}: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <g className="module">
        <text
          x="360"
          y="520"
          fontFamily="Noto Sans CJK SC"
          fontSize="22"
          fill="#8C8B85"
          letterSpacing="6"
          textAnchor="middle"
        >
          PART 02
        </text>
        <text
          x="360"
          y="640"
          fontFamily="Noto Sans CJK SC"
          fontSize="68"
          fill="#2B2A27"
          fontWeight="500"
          textAnchor="middle"
        >
          解法 · 人格引擎
        </text>
        <rect x="320" y="670" width="80" height="3" fill="#6F68AC" />
      </g>
      <g className="module">
        <text
          x="40"
          y="1210"
          fontFamily="Noto Sans CJK SC"
          fontSize="16"
          fill="#8C8B85"
        >
          利米诺 · Agent人格引擎
        </text>
        <circle cx="670" cy="1204" r="10" fill="#B0A9DA" />
      </g>
    </svg>
  );
}
