import { LuArrowLeft, LuArrowRight, LuCircleCheck } from 'react-icons/lu';
import { IoPartlySunnyOutline } from 'react-icons/io5';

const choiceClass =
  'rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';

function EnvironmentalInformationStep() {
  return (
    <>
      <section>
        <form className="flex flex-col gap-y-3 p-8 mt-10 bg-card rounded-xl shadow-md">
          <div className="w-12 h-12 flex items-center justify-center p-3 bg-secondary rounded-xl">
            <IoPartlySunnyOutline className="w-6 h-6 stroke-primary" />
          </div>
          <p className="text-primary text-sm font-mono font-bold">STEP 3 · OPTIONAL DETAILS</p>
          <h1 className="text-foreground text-3xl font-sans font-bold">
            What do you already know?
          </h1>
          <p className="text-muted-foreground text-base font-mono">
            These details can make your guidance more specific, but it is completely okay if you do
            not have them yet.
          </p>
          <QuestionGroup
            title="Do you have soil test results?"
            description="For example, a report about soil nutrients or acidity."
          />
          <QuestionGroup
            title="Do you have professional environmental measurements?"
            description="This could include rainfall, temperature, or water measurements from an advisor."
          />
          <div className="mt-5 rounded-xl bg-muted p-4 sm:p-5">
            <p className="flex items-center gap-2 text-base font-bold font-mono text-foreground">
              <LuCircleCheck className="h-4 w-4 text-primary-accent" aria-hidden="true" />
              You can continue without this information
            </p>
            <p className="mt-2 pl-6 text-sm leading-5 text-muted-foreground font-mono">
              Choose “I don't have this information yet” and AgriSense will use available local data
              instead.
            </p>
            <button className="mt-2 pl-6 taxt-sm text-primary font-mono font-bold">
              I don't have this information yet
            </button>
          </div>
          <div className="container flex items-center justify-between mt-10">
            <button type='button' className="flex items-center gap-2 bg-card px-4 py-3 text-foreground text-sm font-mono font-bold">
              <LuArrowLeft className="w-5 h-5 stroke-foreground" />
              Back
            </button>
            <button type='button' className="flex items-center gap-2 bg-primary px-4 py-3 text-primary-foreground text-sm font-mono font-bold rounded-xl">
              Review details 
              <LuArrowRight className="w-5 h-5 stroke-primary-foreground" />
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

function QuestionGroup({ title, description, value, onChange }) {
  const options = ['Yes, I do', 'Not yet', 'I am not sure'];

  return (
    <fieldset className="mt-6 border-b border-border py-5 first:pt-0">
      <legend className="text-lg font-semibold font-sans text-foreground">{title}</legend>
      <p className="mb-3 mt-1 text-sm text-muted-foreground font-mono">{description}</p>
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
