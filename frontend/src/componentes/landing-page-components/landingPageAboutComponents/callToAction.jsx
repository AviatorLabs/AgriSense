import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function CallToAction() {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-7xl mx-auto px-3 py-32 grid grid-cols-2 gap-20">
        <div className="text-primary-foreground flex flex-col gap-y-3">
          <h2 className="text-sm font-mono font-bold">
            Make the next season count
          </h2>
          <h3 className="text-4xl font-sans font-bold">
            Bring smarter agricultural 
            <br />
            decisions to your farm.
          </h3>
          <p className=" text-lg font-mono">
            Set up your farm profile and start seeing the environmental, crop, and market signals that matter most.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="w-57 mt-6 flex items-center gap-1 px-4 py-3 bg-accent text-xs text-accent-foreground font-bold rounded-xl shadow-xl">
            Get started with AgriSense 
            <GoArrowRight className=" w-5 h-5 inline-block ml-1 fill-secondary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}
