import React from 'react';
import { GoArrowRight } from 'react-icons/go';

export default function Section3() {
  return (
    <div className="w-full bg-secondary">
      <div className="max-w-7xl mx-auto px-3 py-32 grid grid-cols-1 gap-20 md:grid-cols-2">
        <div className="flex flex-col gap-y-3">
          <h2 className="text-sm text-primary font-mono font-bold">How it works</h2>
          <h3 className="text-foreground text-4xl font-sans font-bold">
            A clear path from field
            <br />
            data to better outcomes.
          </h3>
          <p className="text-muted-foreground text-lg font-mono">
            No complicated dashboards. Just a focused workflow that meets your farm where it is
            today.
          </p>
          <button className="w-57 mt-6 flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl">
            Start your farm profile
            <GoArrowRight className=" w-5 h-5 inline-block ml-1 fill-primary-foreground" />
          </button>
        </div>

        <ul className="flex flex-col gap-y-3">
          <li className=" flex items-center gap-3 p-5 bg-card rounded-xl shadow-md">
            <p className="w-10 h-10 p-2 flex items-center justify-center text-sm text-primary-foreground font-bold font-sans bg-primary rounded-full">
              01
            </p>
            <div className="flex flex-col gap-1">
              <h3 className="text-secondary-foreground text-lg font-sans font-bold">
                Register your farm
              </h3>
              <p className="text-sm text-muted-foreground font-mono">
                Add your farm location, field size, crops, and seasonal goals.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-3 p-5 bg-card rounded-xl shadow-md">
            <p className="w-10 h-10 p-2 flex items-center justify-center text-sm text-primary-foreground font-bold font-sans bg-primary rounded-full">
              02
            </p>
            <div className="flex flex-col gap-1">
              <h3 className="text-secondary-foreground text-lg font-sans font-bold">
                Understand your land
              </h3>
              <p className="text-sm text-muted-foreground font-mono">
                Review soil, terrain, weather, and environmental context.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-3 p-5 bg-card rounded-xl shadow-md">
            <p className="w-10 h-10 p-2 flex items-center justify-center text-sm text-primary-foreground font-bold font-sans bg-primary rounded-full">
              03
            </p>
            <div className="flex flex-col gap-1">
              <h3 className="text-secondary-foreground text-lg font-sans font-bold">
                Receive crop recommendations
              </h3>
              <p className="text-sm text-muted-foreground font-mono">
                Explore crop options suited to your local conditions and timing.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-3 p-5 bg-card rounded-xl shadow-md">
            <p className="w-10 h-10 p-2 flex items-center justify-center text-sm text-primary-foreground font-bold font-sans bg-primary rounded-full">
              04
            </p>
            <div className="flex flex-col gap-1">
              <h3 className="text-secondary-foreground text-lg font-sans font-bold">
                Monitor your crops
              </h3>
              <p className="text-sm text-muted-foreground font-mono">
                Follow field signals and get guidance through each growth stage.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-3 p-5 bg-card rounded-xl shadow-md">
            <p className="w-10 h-10 p-2 flex items-center justify-center text-sm text-primary-foreground font-bold font-sans bg-primary rounded-full">
              05
            </p>
            <div className="flex flex-col gap-1">
              <h3 className="text-secondary-foreground text-lg font-sans font-bold">
                Harvest & analyze results
              </h3>
              <p className="text-sm text-muted-foreground font-mono">
                Review yield, costs, and market performance to learn for next season.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
