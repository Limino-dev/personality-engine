import type { SlideProps } from "@/lib/slides";

export default function Slide15Part03({}: SlideProps) {
  return (
    <svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <rect width="1280" height="720" fill="#FBFAF8" />
      <g className="module">
        <text
          x="64"
          y="300"
          fontFamily="Noto Sans CJK SC"
          fontSize="20"
          fill="#8C8B85"
          letterSpacing="6"
        >
          PART 03
        </text>
        <text
          x="64"
          y="392"
          fontFamily="Noto Sans CJK SC"
          fontSize="68"
          fill="#2B2A27"
          fontWeight="500"
        >
          落地与版图
        </text>
        <rect x="66" y="438" width="120" height="3" fill="#6F68AC" />
      </g>
      <g className="module">
        <text
          x="64"
          y="640"
          fontFamily="Noto Sans CJK SC"
          fontSize="16"
          fill="#8C8B85"
        >
          利米诺 · Agent人格引擎
        </text>
        <circle cx="1184" cy="632" r="10" fill="#B0A9DA" />
      </g>
    </svg>
  );
}
