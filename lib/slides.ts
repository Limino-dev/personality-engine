"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import Slide01Cover from "@/components/slides/Slide01Cover";
import Slide02Part01 from "@/components/slides/Slide02Part01";
import Slide03BigModel from "@/components/slides/Slide03BigModel";
import Slide04TwoGaps from "@/components/slides/Slide04TwoGaps";
import Slide05ExperienceCurve from "@/components/slides/Slide05ExperienceCurve";
import Slide06Subjectivity from "@/components/slides/Slide06Subjectivity";
import Slide07Part02 from "@/components/slides/Slide07Part02";
import Slide08PersonalityEngine from "@/components/slides/Slide08PersonalityEngine";
import Slide09Misconceptions from "@/components/slides/Slide09Misconceptions";
import Slide10LStack from "@/components/slides/Slide10LStack";
import Slide11Mechanism from "@/components/slides/Slide11Mechanism";
import Slide12CoreValue from "@/components/slides/Slide12CoreValue";
import Slide13Competition from "@/components/slides/Slide13Competition";
import Slide14Productivity from "@/components/slides/Slide14Productivity";
import Slide15Part03 from "@/components/slides/Slide15Part03";
import Slide16AdCreative from "@/components/slides/Slide16AdCreative";
import Slide17WorkLogic from "@/components/slides/Slide17WorkLogic";
import Slide18Vision from "@/components/slides/Slide18Vision";
import Slide19Landscape from "@/components/slides/Slide19Landscape";

// Phase 1 移动版（已完成）— 用 dynamic ssr:false 包装，避免打入 server bundle
const Slide01CoverMobile = dynamic(
  () => import("@/components/slides/Slide01Cover.mobile"),
  { ssr: false }
);
const Slide03BigModelMobile = dynamic(
  () => import("@/components/slides/Slide03BigModel.mobile"),
  { ssr: false }
);
const Slide02Part01Mobile = dynamic(
  () => import("@/components/slides/Slide02Part01.mobile"),
  { ssr: false }
);
const Slide04TwoGapsMobile = dynamic(
  () => import("@/components/slides/Slide04TwoGaps.mobile"),
  { ssr: false }
);
const Slide05ExperienceCurveMobile = dynamic(
  () => import("@/components/slides/Slide05ExperienceCurve.mobile"),
  { ssr: false }
);
const Slide06SubjectivityMobile = dynamic(
  () => import("@/components/slides/Slide06Subjectivity.mobile"),
  { ssr: false }
);
const Slide07Part02Mobile = dynamic(
  () => import("@/components/slides/Slide07Part02.mobile"),
  { ssr: false }
);
const Slide08PersonalityEngineMobile = dynamic(
  () => import("@/components/slides/Slide08PersonalityEngine.mobile"),
  { ssr: false }
);
const Slide09MisconceptionsMobile = dynamic(
  () => import("@/components/slides/Slide09Misconceptions.mobile"),
  { ssr: false }
);

export interface SlideProps {
  step: number;
}

export interface SlideMeta {
  Component: ComponentType<SlideProps>;
  MobileComponent: ComponentType<SlideProps>;
  nostep: boolean;
}

export const SLIDES: SlideMeta[] = [
  { Component: Slide01Cover, MobileComponent: Slide01CoverMobile, nostep: true },
  // Phase 2 待替换：以下 17 个 MobileComponent 暂时指向桌面版作为占位
  { Component: Slide02Part01, MobileComponent: Slide02Part01Mobile, nostep: true },
  { Component: Slide03BigModel, MobileComponent: Slide03BigModelMobile, nostep: false },
  { Component: Slide04TwoGaps, MobileComponent: Slide04TwoGapsMobile, nostep: false },
  { Component: Slide05ExperienceCurve, MobileComponent: Slide05ExperienceCurveMobile, nostep: false },
  { Component: Slide06Subjectivity, MobileComponent: Slide06SubjectivityMobile, nostep: false },
  { Component: Slide07Part02, MobileComponent: Slide07Part02Mobile, nostep: true },
  { Component: Slide08PersonalityEngine, MobileComponent: Slide08PersonalityEngineMobile, nostep: false },
  { Component: Slide09Misconceptions, MobileComponent: Slide09MisconceptionsMobile, nostep: false },
  { Component: Slide10LStack, MobileComponent: Slide10LStack, nostep: false },
  { Component: Slide11Mechanism, MobileComponent: Slide11Mechanism, nostep: false },
  { Component: Slide12CoreValue, MobileComponent: Slide12CoreValue, nostep: false },
  { Component: Slide13Competition, MobileComponent: Slide13Competition, nostep: false },
  { Component: Slide14Productivity, MobileComponent: Slide14Productivity, nostep: false },
  { Component: Slide15Part03, MobileComponent: Slide15Part03, nostep: true },
  { Component: Slide16AdCreative, MobileComponent: Slide16AdCreative, nostep: false },
  { Component: Slide17WorkLogic, MobileComponent: Slide17WorkLogic, nostep: false },
  { Component: Slide18Vision, MobileComponent: Slide18Vision, nostep: false },
  { Component: Slide19Landscape, MobileComponent: Slide19Landscape, nostep: false },
];

export const stepsOf = (i: number): number => {
  if (i < 0 || i >= SLIDES.length) return 0;
  return SLIDES[i].nostep ? 0 : 3;
};
