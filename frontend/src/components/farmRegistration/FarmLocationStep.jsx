import { LuMapPin, LuArrowLeft, LuArrowRight } from 'react-icons/lu';

const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15';
const labelClass = 'mb-2 block text-sm font-semibold text-foreground';

function FarmLocationStep() {
  return (
    <>
      <section>
        <div className="max-w-3xl flex flex-col gap-y-3 p-8 mt-10 bg-card rounded-xl shadow-md">
          <p className="text-primary text-sm font-mono font-bold">STEP 2 · LOCATION</p>
          <h1 className="text-foreground text-3xl font-sans font-bold">Where is your farm?</h1>
          <p className="text-muted-foreground text-base font-mono">
            Location helps us understand local weather and growing conditions. Use the nearest place
            name if needed.
          </p>
          <form className="grid gap-x-4 gap-y-5 grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="country">
                Country
              </label>
              <input
                id="country"
                className={inputClass}
                value={'Ethiopia'}
                onChange={(event) => onChange('country', event.target.value)}
                autoComplete="country-name"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="region">
                Region <span aria-hidden="true">*</span>
              </label>
              <input
                id="region"
                className={inputClass}
                onChange={(event) => onChange('region', event.target.value)}
                placeholder="e.g. Oromia"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="zone">
                Zone <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <input id="zone" className={inputClass} placeholder="e.g. Arsi" />
            </div>
            <div>
              <label className={labelClass} htmlFor="woreda">
                Woreda <span aria-hidden="true">*</span>
              </label>
              <input id="woreda" className={inputClass} placeholder="e.g. Lemu Bilbilo" />
            </div>
            <div className="col-span-2">
              <label className={labelClass} htmlFor="landmark">
                Specific location or landmark
              </label>
              <input id="landmark" className={inputClass} placeholder="e.g. Near Robe market" />
            </div>

            <div className="col-span-2 my-5 rounded-xl border border-border">
              <div className="flex min-h-32 flex-col items-center justify-center rounded-t-xl bg-secondary px-5 py-6 text-center">
                <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-card text-primary">
                  <LuMapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold text-foreground">Pin your farm location</p>
                <p className="mt-1 text-xs text-muted-foreground">Interactive map preview</p>
              </div>
              <button className="w-full px-4 py-2 text-sm text-primary font-mono font-semibold">
                Use my current location
              </button>
            </div>
            <div>
              <label className={labelClass} htmlFor="region">
                Latitude <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <input id="latitude" className={inputClass} placeholder="e.g. 7.560" />
            </div>
            <div>
              <label className={labelClass} htmlFor="region">
                Longitude <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <input id="longitude" className={inputClass} placeholder="e.g. 39.210" />
            </div>

            <div className="col-span-2 container flex items-center justify-between mt-10">
              <button type='button' className="flex items-center gap-2 bg-card px-4 py-3 text-foreground text-sm font-mono font-bold">
                <LuArrowLeft className="w-5 h-5 stroke-foreground" />
                Back
              </button>
              <button type='button' className="flex items-center gap-2 bg-primary px-4 py-3 text-primary-foreground text-sm font-mono font-bold rounded-xl">
                Continue
                <LuArrowRight className="w-5 h-5 stroke-primary-foreground" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default FarmLocationStep;
