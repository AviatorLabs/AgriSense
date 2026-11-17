function FarmReviewStep({ data }) {
  return (
    <>
      <dl className="divide-y divide-border rounded-xl border border-border px-4 sm:px-5">
        <ReviewRow label="Farm name" value={data.name} />
        <ReviewRow
          label="Land area"
          value={`${data.area} ${data.unit} · farmer-provided, not verified`}
        />
        <ReviewRow label="Farming activity" value={data.activity} />
        <ReviewRow
          label="Location"
          value={[data.landmark, data.woreda, data.zone, data.region, data.country]
            .filter(Boolean)
            .join(', ')}
        />
        <ReviewRow label="Soil test results" value={data.soilTest || 'Not provided'} />
        <ReviewRow
          label="Environmental measurements"
          value={data.environmentalMeasurements || 'Not provided'}
        />
      </dl>
      <p className="mt-4 text-xs leading-5 text-muted-foreground">
        Your farm location and land size are based on information you provided and have not been
        independently verified.
      </p>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Prototype only · This information will not be sent to a backend.
      </p>
    </>
  );
}

function ReviewRow({ label, value }) {
  return (
    <div className="py-4 sm:flex sm:items-start sm:justify-between sm:gap-6">
      <dt className="mb-1 text-sm font-semibold text-muted-foreground sm:mb-0">{label}</dt>
      <dd className="text-sm text-foreground sm:max-w-[65%] sm:text-right">{value}</dd>
    </div>
  );
}

export default FarmReviewStep;
