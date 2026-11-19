import { LuTractor, LuArrowRight } from 'react-icons/lu';
const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:bg-primary-accent/10';
const labelClass = 'mb-2 block text-sm font-semibold text-foreground';
const choiceClass =
  'rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';

function FarmInformationStep() {
  return (
    <>
      <section>
        <div className="flex flex-col gap-y-3 p-8 mt-10 bg-card rounded-xl shadow-md">
          <div className="w-12 h-12 flex items-center justify-center p-3 bg-secondary rounded-xl">
            <LuTractor className="w-6 h-6 stroke-primary" />
          </div>
          <p className="text-primary text-sm font-mono font-bold">STEP 1 · YOUR FARM</p>
          <h1 className="text-foreground text-3xl font-sans font-bold">Tell us about your farm</h1>
          <p className="text-muted-foreground text-base font-mono">
            Start with the basics. You can update these details whenever your farm changes.
          </p>
          <form action="">
            <div className="mb-5">
              <label className={labelClass} htmlFor="farm-name">
                Farm name <span aria-hidden="true">*</span>
              </label>
              <input id="farm-name" className={inputClass} placeholder="e.g. Abeba Family Farm" />
            </div>
            <div className="mb-6 grid gap-5 sm:grid-cols-[1fr_190px]">
              <div>
                <label className={labelClass} htmlFor="farm-area">
                  Total land area <span aria-hidden="true">*</span>
                </label>
                <input
                  id="farm-area"
                  className={inputClass}
                  type="number"
                  min="0.01"
                  step="any"
                  inputMode="decimal"
                  placeholder="e.g. 12"
                />
              </div>
              <fieldset>
                <legend className={`${labelClass} mb-2`}>Measurement unit</legend>
                <div className="flex rounded-xl border border-border bg-background p-1">
                  {['Hectares', 'Acres'].map((unit) => (
                    <button
                      key={unit}
                      type="button"
                      className={`min-h-10 flex-1 rounded-lg px-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        'Hectares' === unit
                          ? 'bg-secondary text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {unit}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
            <fieldset>
              <legend className={`${labelClass} mb-3`}>What best describes your farming?</legend>
              <div className="grid gap-3 sm:grid-cols-3">
                {['Crop farming', 'Livestock', 'Mixed farming'].map((activity) => (
                  <button
                    key={activity}
                    type="button"
                    className={`${choiceClass} min-h-14 ${
                      'Crop farming' === activity
                        ? 'border-primary bg-secondary text-foreground ring-1 ring-primary'
                        : 'border-border bg-background text-foreground hover:border-primary'
                    }`}
                  >
                    {activity}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Choose the main activity on this farm.
              </p>
            </fieldset>
            <div className="container flex justify-end mt-10">
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

export default FarmInformationStep;
