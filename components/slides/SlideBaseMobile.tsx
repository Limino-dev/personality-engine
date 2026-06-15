import type { ReactNode } from "react";

interface SlideBaseMobileProps {
  chapter: string;
  title: string;
  page: number;
  totalPages?: number;
  children?: ReactNode;
}

export function SlideBaseMobile({
  chapter,
  title,
  page,
  totalPages = 15,
  children,
}: SlideBaseMobileProps) {
  return (
    <>
      <defs>
        <marker
          id="arr"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="context-stroke"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
      <rect width="720" height="1280" fill="#FFFFFF" />
      <g className="module">
        <text
          x="40"
          y="80"
          fontFamily="Noto Sans CJK SC"
          fontSize="22"
          fill="#57518C"
          fontWeight="500"
          letterSpacing="4"
        >
          {chapter}
        </text>
        <text
          x="40"
          y="160"
          fontFamily="Noto Sans CJK SC"
          fontSize="37"
          fill="#2B2A27"
          fontWeight="500"
        >
          {title}
        </text>
      </g>
      {children}
      <g className="module">
        <line
          x1="40"
          y1="1216"
          x2="680"
          y2="1216"
          stroke="#E3E2DF"
          strokeWidth="1"
        />
        <text
          x="680"
          y="1258"
          fontFamily="Noto Sans CJK SC"
          fontSize="18"
          fill="#8C8B85"
          textAnchor="end"
        >
          {String(page).padStart(2, "0")} / {totalPages}
        </text>
      </g>
    </>
  );
}

interface StepProps {
  show: boolean;
  children: ReactNode;
}

export function Step({ show, children }: StepProps) {
  return (
    <g className="module">
      <g
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(8px)",
          transition:
            "opacity 0.3s cubic-bezier(.22,.61,.36,1), transform 0.3s cubic-bezier(.22,.61,.36,1)",
        }}
      >
        {children}
      </g>
    </g>
  );
}
