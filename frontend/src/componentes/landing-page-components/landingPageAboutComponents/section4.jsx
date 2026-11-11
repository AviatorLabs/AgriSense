import React from "react";
import { TiWeatherDownpour } from "react-icons/ti";
import { PiStack } from "react-icons/pi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

export default function Section4() {
  return (
    <div className="max-w-7xl w-full mx-auto px-3 flex flex-col gap-y-6">
      <h2 className="text-sm text-primary font-mono font-bold">
        Illustrative data preview
      </h2>
      <div className="container flex items-center justify-between">
        <h3 className="text-foreground text-4xl font-sans font-bold">
          Know what matters before
          <br />
          the season changes.
        </h3>
        <p className="text-sm text-muted-foreground font-mono">
          The values below are sample data to illustrate the type of field
          intelligence AgriSense can organize.
        </p>
      </div>
      <div className="container grid grid-cols-4 gap-3">
        <div className="flex flex-col gap-2 p-3 bg-card border-2 border-border rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground font-mono font-semibold">
              Rainfall outlook
            </p>
            <span className="flex items-center justify-center p-2 rounded-xl">
              <TiWeatherDownpour className="w-6 h-6 fill-primary" />{" "}
            </span>
          </div>
          <p className="text-secondary-foreground text-3xl font-bold font-sans">
            83mm
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Sample forecast · next 14 days
          </p>
        </div>

        <div className="flex flex-col gap-2 p-3 bg-card border-2 border-border rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground font-mono font-semibold">
              Soil organic matter
            </p>
            <span className="flex items-center justify-center p-2 rounded-xl">
              <PiStack className="w-6 h-6 fill-primary" />{" "}
            </span>
          </div>
          <p className="text-secondary-foreground text-3xl font-bold font-sans">
           3.6%
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Sample field reading · upper layer
          </p>
        </div>

        <div className="flex flex-col gap-2 p-3 bg-card border-2 border-border rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground font-mono font-semibold">
              Soil organic matter
            </p>
            <span className="flex items-center justify-center p-2 rounded-xl">
              <HiOutlineBadgeCheck className="w-6 h-6 stroke-primary" />{" "}
            </span>
          </div>
          <p className="text-secondary-foreground text-3xl font-bold font-sans">
           High
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Sample recommendation · current season
          </p>
        </div>

        <div className="flex flex-col gap-2 p-3 bg-card border-2 border-border rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground font-mono font-semibold">
              Yield scenario
            </p>
            <span className="flex items-center justify-center p-2 rounded-xl">
              <HiMiniArrowTrendingUp className="w-6 h-6 fill-primary" />{" "}
            </span>
          </div>
          <p className="text-secondary-foreground text-3xl font-bold font-sans">
           4.8 t/ha
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Illustrative estimate · sample farm
          </p>
        </div>
      </div>
    </div>
  );
}
