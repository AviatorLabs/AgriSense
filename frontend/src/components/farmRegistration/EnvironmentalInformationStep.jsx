import { LuCircleCheck } from 'react-icons/lu';

const choiceClass =
  'rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';

function EnvironmentalInformationStep({ data, onChange }) {
  return (
    <>
      <QuestionGroup
        title="Do you have soil test results?"
        description="For example, a report about soil nutrients or acidity."
        value={data.soilTest}
        onChange={(value) => onChange('soilTest', value)}
      />
      <QuestionGroup
        title="Do you have professional environmental measurements?"
        description="This could include rainfall, temperature, or water measurements from an advisor."
        value={data.environmentalMeasurements}
        onChange={(value) => onChange('environmentalMeasurements', value)}
      />
      <div className="mt-5 rounded-xl bg-muted p-4 sm:p-5">
        <p className="flex items-center gap-2 text-sm font-bold text-foreground">
          <LuCircleCheck className="h-4 w-4 text-primary-accent" aria-hidden="true" />
          You can continue without this information
        </p>
        <p className="mt-2 pl-6 text-sm leading-5 text-muted-foreground">
          Choose “Not yet” or “I am not sure” and AgriSense can use available local data instead.
        </p>
      </div>
    </>
  );
}

function QuestionGroup({ title, description, value, onChange }) {
  const options = ['Yes, I do', 'Not yet', 'I am not sure'];

  return (
    <fieldset className="border-b border-border py-5 first:pt-0">
      <legend className="text-sm font-semibold text-foreground">{title}</legend>
      <p className="mb-3 mt-1 text-xs text-muted-foreground">{description}</p>
      <div className="grid gap-2 sm:grid-cols-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={value === option}
            onClick={() => onChange(option)}
            className={`${choiceClass} text-center ${
              value === option
                ? 'border-primary bg-secondary text-foreground ring-1 ring-primary'
                : 'border-border bg-background text-foreground hover:border-primary'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export default EnvironmentalInformationStep;
