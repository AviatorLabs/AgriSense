import React from "react";
import Section1 from "./landingPageFeatureComponents/section1";
import Section2 from "./landingPageFeatureComponents/section2";

export default function LandingPageFeature() {
  return (
    <section id="features" className="w-full flex flex-col gap-y-25">
      <Section1 />
      <Section2 />
    </section>
  );
}
