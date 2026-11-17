import { LuCheck } from 'react-icons/lu';

function RegistrationProgress({ steps, activeStep }) {
  return (
    <aside className="h-fit rounded-xl bg-card p-5 shadow-sm" aria-label="Setup progress">
      <h2 className="mb-4 font-bold text-foreground">Set up your farm</h2>
      <p className="mb-5 text-sm leading-6 text-muted-foreground">
        A few simple details help us tailor useful advice.
      </p>
      <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-1 lg:gap-4">
        {steps.map((item, index) => {
          const complete = index < activeStep;
          const isActive = index === activeStep;

          return (
            <li key={item.title} className="flex items-start gap-3">
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                  complete
                    ? 'border-primary-accent bg-primary-accent text-white'
                    : isActive
                      ? 'border-primary bg-primary text-white'
                      : 'border-border bg-card text-muted-foreground'
                }`}
                aria-current={isActive ? 'step' : undefined}
              >
                {complete ? <LuCheck aria-hidden="true" /> : index + 1}
              </span>
              <span className="pt-0.5">
                <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                <span className="hidden text-xs text-muted-foreground sm:block">
                  {item.subtitle}
                </span>
              </span>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}

export default RegistrationProgress;
