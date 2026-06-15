import type { SlideProps } from "@/lib/slides";

export default function Slide15Part03Mobile({}: SlideProps) {
  return (
    <svg viewBox="0 0 720 1280" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="1280" fill="#FBFAF8" />
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
          PART 03
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
          落地与版图
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
