import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';

function RegistrationNavigation({ activeStep, totalSteps, isSubmitting, onBack }) {
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === totalSteps - 1;

  return (
    <div className="mt-8 flex justify-between gap-3">
      {!isFirstStep ? (
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl px-2 py-3 text-sm font-semibold text-foreground hover:underline disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <LuArrowLeft aria-hidden="true" /> Back
        </button>
      ) : (
        <span />
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary/90 disabled:cursor-wait disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {isSubmitting
          ? 'Creating your farm…'
          : isLastStep
            ? 'Create farm'
            : activeStep === totalSteps - 2
              ? 'Review details'
              : 'Continue'}
        {!isSubmitting && <LuArrowRight aria-hidden="true" />}
      </button>
    </div>
  );
}

export default RegistrationNavigation;
