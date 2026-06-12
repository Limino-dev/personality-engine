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

export interface SlideProps {
  step: number;
}

export interface SlideMeta {
  Component: ComponentType<SlideProps>;
  nostep: boolean;
}

export const SLIDES: SlideMeta[] = [
  { Component: Slide01Cover, nostep: true },
  { Component: Slide02Part01, nostep: true },
  { Component: Slide03BigModel, nostep: false },
  { Component: Slide04TwoGaps, nostep: false },
  { Component: Slide05ExperienceCurve, nostep: false },
  { Component: Slide06Subjectivity, nostep: false },
  { Component: Slide07Part02, nostep: true },
  { Component: Slide08PersonalityEngine, nostep: false },
  { Component: Slide09Misconceptions, nostep: false },
  { Component: Slide10LStack, nostep: false },
  { Component: Slide11Mechanism, nostep: false },
  { Component: Slide12CoreValue, nostep: false },
  { Component: Slide13Competition, nostep: false },
  { Component: Slide14Productivity, nostep: false },
  { Component: Slide15Part03, nostep: true },
  { Component: Slide16AdCreative, nostep: false },
  { Component: Slide17WorkLogic, nostep: false },
  { Component: Slide18Vision, nostep: false },
  { Component: Slide19Landscape, nostep: false },
];

export const stepsOf = (i: number): number => {
  if (i < 0 || i >= SLIDES.length) return 0;
  return SLIDES[i].nostep ? 0 : 3;
};
