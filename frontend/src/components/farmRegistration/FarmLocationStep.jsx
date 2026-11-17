import { LuCircleHelp, LuMapPin } from 'react-icons/lu';

const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15';
const labelClass = 'mb-2 block text-sm font-semibold text-foreground';

function FarmLocationStep({ data, onChange, errors }) {
  return (
    <>
      <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="country">
            Country
          </label>
          <input
            id="country"
            className={inputClass}
            value={data.country}
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
            value={data.region}
            onChange={(event) => onChange('region', event.target.value)}
            placeholder="e.g. Oromia"
            autoComplete="address-level1"
            aria-invalid={Boolean(errors.region)}
            aria-describedby={errors.region ? 'region-error' : undefined}
          />
          {errors.region && (
            <p id="region-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.region}
            </p>
          )}
        </div>
        <div>
          <label className={labelClass} htmlFor="zone">
            Zone <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="zone"
            className={inputClass}
            value={data.zone}
            onChange={(event) => onChange('zone', event.target.value)}
            placeholder="e.g. Arsi"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="woreda">
            Woreda <span aria-hidden="true">*</span>
          </label>
          <input
            id="woreda"
            className={inputClass}
            value={data.woreda}
            onChange={(event) => onChange('woreda', event.target.value)}
            placeholder="e.g. Lemu Bilbilo"
            aria-invalid={Boolean(errors.woreda)}
            aria-describedby={errors.woreda ? 'woreda-error' : undefined}
          />
          {errors.woreda && (
            <p id="woreda-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.woreda}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="landmark">
            Specific location or landmark
            <span className="font-normal text-muted-foreground"> (optional)</span>
          </label>
          <input
            id="landmark"
            className={inputClass}
            value={data.landmark}
            onChange={(event) => onChange('landmark', event.target.value)}
            placeholder="e.g. Near Robe market"
          />
        </div>
      </div>
      <div className="my-5 rounded-xl border border-border">
        <div className="flex min-h-32 flex-col items-center justify-center rounded-t-xl bg-secondary px-5 py-6 text-center">
          <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-card text-primary">
            <LuMapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm font-semibold text-foreground">Farm location details</p>
          <p className="mt-1 text-xs text-muted-foreground">
            A map pin can be added in a future version.
          </p>
        </div>
        <p className="px-4 py-2 text-center text-xs text-muted-foreground">
          Location is based on the place names you provide; no GPS location is collected.
        </p>
      </div>
      <p className="mb-6 flex items-start gap-2 text-xs leading-5 text-muted-foreground">
        <LuCircleHelp className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        Your location details are farmer-provided and have not been independently verified.
      </p>
    </>
  );
}

export default FarmLocationStep;
