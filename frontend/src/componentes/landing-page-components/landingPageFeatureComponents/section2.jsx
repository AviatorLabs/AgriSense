import React from "react";
import { PiPlantFill } from "react-icons/pi";
import { WiDayCloudy } from "react-icons/wi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaChartBar } from "react-icons/fa6";
import { LuWallet } from "react-icons/lu";

export default function Section2() {
  return (
    <div className="max-w-7xl w-full mx-auto px-3 flex flex-col gap-y-6">
      <h2 className="text-sm text-primary font-mono font-bold">
        PLATFORM CAPABILITIES
      </h2>
      <h3 className="text-foreground text-3xl font-sans font-bold">
        Make every field
        <br />
        decision more informed.
      </h3>
      <p className="text-muted-foreground text-sm font-mono max-w-2/3">
        From soil preparation to sale day, AgriSense turns scattered signals
        into practical farm action.
      </p>
      <div className="container grid grid-cols-3 gap-3">
        <article className="w-98 h-50 flex flex-col gap-y-3 bg-card p-6 shadow-md rounded-xl">
          <span className="w-10 h-10 flex items-center justify-center bg-secondary p-2 rounded-xl">
            <PiPlantFill className="w-4 h-4 fill-primary-accent" />{" "}
          </span>
          <h3 className="text-foreground text-lg font-sans font-semibold">
            Smart Crop Recommendations
          </h3>
          <p className="text-muted-foreground text-sm font-mono">
            Match crop choices to your soil, rainfall pattern, location, and seasonal window.
          </p>
        </article>

        <article className="w-98 h-50 flex flex-col gap-y-3 bg-card p-6 shadow-md rounded-xl">
          <span className="w-10 h-10 flex items-center justify-center bg-secondary p-2 rounded-xl">
            <WiDayCloudy className="w-4 h-4 fill-primary-accent" />{" "}
          </span>
          <h3 className="text-foreground text-lg font-sans font-semibold">
            Soil & Climate Intelligence
          </h3>
          <p className="text-muted-foreground text-sm font-mono">
            See key fertility, weather, and risk signals in one clear, farm-level overview.
          </p>
        </article>

        <article className="w-98 h-50 flex flex-col gap-y-3 bg-card p-6 shadow-md rounded-xl">
          <span className="w-10 h-10 flex items-center justify-center bg-secondary p-2 rounded-xl">
            <MdOutlineRemoveRedEye className="w-4 h-4 fill-primary-accent" />{" "}
          </span>
          <h3 className="text-foreground text-lg font-sans font-semibold">
            Crop Lifecycle Monitoring
          </h3>
          <p className="text-muted-foreground text-sm font-mono">
            Track crop stages and receive timely prompts when field conditions change.
          </p>
        </article>

        <article className="w-98 h-50 flex flex-col gap-y-3 bg-card p-6 shadow-md rounded-xl">
          <span className="w-10 h-10 flex items-center justify-center bg-secondary p-2 rounded-xl">
            <FaChartBar className="w-4 h-4 fill-primary-accent" />{" "}
          </span>
          <h3 className="text-foreground text-lg font-sans font-semibold">
            Agricultural Market Insights
          </h3>
          <p className="text-muted-foreground text-sm font-mono">
            Use market trends and price context to plan better planting and selling decisions.
          </p>
        </article>

        <article className="w-98 h-50 flex flex-col gap-y-3 bg-card p-6 shadow-md rounded-xl">
          <span className="w-10 h-10 flex items-center justify-center bg-secondary p-2 rounded-xl">
            <LuWallet className="w-4 h-4 stroke-primary-accent" />{" "}
          </span>
          <h3 className="text-foreground text-lg font-sans font-semibold">
            Farm Profitability Tracking
          </h3>
          <p className="text-muted-foreground text-sm font-mono">
            Connect costs, expected yield, and market outlook to understand profitability.
          </p>
        </article>
      </div>
    </div>
  );
}
