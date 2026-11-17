const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15';
const labelClass = 'mb-2 block text-sm font-semibold text-foreground';
const choiceClass =
  'rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';

function FarmInformationStep({ data, onChange, errors }) {
  return (
    <>
      <div className="mb-5">
        <label className={labelClass} htmlFor="farm-name">
          Farm name <span aria-hidden="true">*</span>
        </label>
        <input
          id="farm-name"
          className={inputClass}
          value={data.name}
          onChange={(event) => onChange('name', event.target.value)}
          placeholder="e.g. Abeba Family Farm"
          autoComplete="organization"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'farm-name-error' : undefined}
        />
        {errors.name && (
          <p id="farm-name-error" className="mt-1 text-sm text-destructive" role="alert">
            {errors.name}
          </p>
        )}
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
            value={data.area}
            onChange={(event) => onChange('area', event.target.value)}
            placeholder="e.g. 12"
            aria-invalid={Boolean(errors.area)}
            aria-describedby={errors.area ? 'farm-area-error' : undefined}
          />
          {errors.area && (
            <p id="farm-area-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.area}
            </p>
          )}
        </div>
        <fieldset>
          <legend className={`${labelClass} mb-2`}>Measurement unit</legend>
          <div className="flex rounded-xl border border-border bg-background p-1">
            {['Hectares', 'Acres'].map((unit) => (
              <button
                key={unit}
                type="button"
                onClick={() => onChange('unit', unit)}
                aria-pressed={data.unit === unit}
                className={`min-h-10 flex-1 rounded-lg px-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  data.unit === unit
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
              onClick={() => onChange('activity', activity)}
              aria-pressed={data.activity === activity}
              className={`${choiceClass} min-h-14 ${
                data.activity === activity
                  ? 'border-primary bg-secondary text-foreground ring-1 ring-primary'
                  : 'border-border bg-background text-foreground hover:border-primary'
              }`}
            >
              {activity}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Choose the main activity on this farm.</p>
      </fieldset>
    </>
  );
}

export default FarmInformationStep;
