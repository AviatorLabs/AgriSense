import React from "react";
import Section3 from "./landingPageAboutComponents/section3";
import Section4 from "./landingPageAboutComponents/section4";

export default function LandingPageAbout() {
  return (
    <>
      <section id="about" className="w-full flex flex-col gap-y-25">
        <Section3 />
        <Section4 />
      </section>
    </>
  );
}
