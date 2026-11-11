import React from "react";

export default function Section1() {
  return (
    <div className="w-full bg-muted">
      <div className="max-w-7xl mx-auto px-3 py-32 flex flex-col gap-y-6">
        <h2 className="text-sm text-primary font-mono font-bold">
          INTELLIGENCE FOR EVERY SEASON
        </h2>
        <div className="grid grid-cols-1 gap-5 justify-center md:grid-cols-2">
          <h3 className="text-foreground text-3xl font-sans font-bold">
            A trusted farming partner,
            <br />
            from field to market.
          </h3>
          <p className="text-muted-foreground text-lg font-mono">
            AgriSense makes complex agricultural intelligence practical. Our
            platform brings environmental data, land analysis, crop performance,
            and market context into one clear view for Ethiopian farming
            communities and agricultural partners.
          </p>
        </div>
        <div className="container grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="flex flex-col gap-y-3 px-5 py-4 bg-card rounded-xl shadow-md">
            <h3 className="text-foreground text-3xl font-sans font-bold">
              1 View
            </h3>
            <p className="text-muted-foreground text-sm font-mono">
                of your land, crops, climate, and market signals
            </p>
          </div>
          <div className="flex flex-col gap-y-3 px-5 py-4 bg-card rounded-xl shadow-md">
            <h3 className="text-foreground text-3xl font-sans font-bold">
              5 steps
            </h3>
            <p className="text-muted-foreground text-sm font-mono">
                from farm registration to harvest learning
            </p>
          </div>
          <div className="flex flex-col gap-y-3 px-5 py-4 bg-card rounded-xl shadow-md">
            <h3 className="text-foreground text-3xl font-sans font-bold">
              Seasonal
            </h3>
            <p className="text-muted-foreground text-sm font-mono">
                guidance designed around farm realities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
