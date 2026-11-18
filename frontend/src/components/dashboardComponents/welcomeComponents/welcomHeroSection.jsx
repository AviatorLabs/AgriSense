import { WiDayCloudy } from 'react-icons/wi';
import { TbWaveSawTool } from 'react-icons/tb';

export default function WelcomHeroSection() {
  return (
    <>
      <div className="flex items-end justify-between p-10 pb-0">
        <div className="flex flex-col gap-3">
          <p className="text-primary text-sm font-mono font-semibold">
            Tuesday, 16 June 2026 · Arsi, Oromia
          </p>
          <h1 className="text-foreground text-3xl font-sans font-bold">Good morning, Abebe.</h1>
          <p className="text-muted-foreground text-base font-mono">
            Here is a clear view of your farm before the day begins.
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <button className="text-foreground text-sm font-mono font-semibold px-4 py-3 bg-card border border-border rounded-xl">
            View report
          </button>
          <button className="text-primary-foreground text-sm font-mono font-semibold px-4 py-3 bg-primary rounded-xl">
            Create crop plan
          </button>
        </div>
      </div>
      <section className="flex gap-x-4 p-10 pb-0">
        <div className="flex flex-col gap-y-3 p-6 bg-primary rounded-xl">
          <div className="flex-2 flex">
            <div className="flex-1 flex flex-col gap-y-3">
              <div className="flex items-center gap-x-2">
                <span className="px-3 py-2 text-foreground text-xs font-mono font-bold bg-accent rounded-xl">
                  TODAY'S FIELD NOTE
                </span>
                <span className="text-primary-foreground text-xs font-mono">Estimated outlook</span>
              </div>
              <h2 className="text-primary-foreground text-2xl font-sans font-bold">
                Light rain is likely after 3 PM—finish teff top-dressing before noon.
              </h2>
              <p className="text-primary-foreground text-sm font-mono">
                Your crop calendar and local forecast show a good morning window for the East Plot.
                This is modelled guidance, not a verified field reading.
              </p>
            </div>
            <span className="w-11 h-11 flex items-center justify-center px-4 py-3 bg-primary-accent rounded-xl">
              <WiDayCloudy className="w-6 h-6 fill-foreground shrink-0" />
            </span>
          </div>
          <div className="flex items-center gap-x-3">
            <button className="text-primary text-sm font-mono font-semibold px-4 py-3 bg-primary-foreground rounded-xl">
              Plan field work
            </button>
            <button className="text-primary-foreground text-sm font-mono font-semibold px-4 py-3 bg-primary border border-primary-foreground rounded-xl">
              See environmental detail
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-3 p-6 bg-card border border-border rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-2">
              <p className="text-muted-foreground text-sm font-mono font-bold">FARM PULSE</p>
              <h2 className="text-foreground text-lg font-sans font-semibold">
                Healthy growing conditions
              </h2>
            </div>
            <span className="w-11 h-11 flex items-center justify-center px-4 py-3 bg-secondary rounded-xl">
              <TbWaveSawTool className="w-6 h-6 stroke-primary-accent shrink-0" />
            </span>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-y-2">
              <p className="text-foreground text-2xl font-sans font-bold">
                78
                <span className="text-base">/100</span>
              </p>
              <p className="text-muted-foreground text-sm font-mono">Farm health score</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-foreground text-2xl font-sans font-bold">3</p>
              <p className="text-muted-foreground text-sm font-mono">Active crop blocks</p>
            </div>
          </div>
          <div className="h-2 bg-background rounded-full">
            <div className="w-3/4 h-2 bg-primary-accent rounded-full"></div>
          </div>
          <p className="text-muted-foreground text-sm font-mono">
            Based on verified crop records + estimated weather data
          </p>
        </div>
      </section>
    </>
  );
}
