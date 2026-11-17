import { useState } from 'react';
import {
  LuArrowLeft,
  LuArrowRight,
  LuCircleCheck,
  LuClipboardCheck,
  LuMapPin,
  LuSprout,
  LuTractor,
} from 'react-icons/lu';
import PrimaryLogo from '../../assets/AgriSensePrimaryLogo.png';
import RegistrationNavigation from '../../components/farmRegistration/RegistrationNavigation';
import RegistrationProgress from '../../components/farmRegistration/RegistrationProgress';
import EnvironmentalInformationStep from '../../components/farmRegistration/EnvironmentalInformationStep';
import FarmInformationStep from '../../components/farmRegistration/FarmInformationStep';
import FarmLocationStep from '../../components/farmRegistration/FarmLocationStep';
import FarmReviewStep from '../../components/farmRegistration/FarmReviewStep';

const steps = [
  {
    title: 'Farm information',
    subtitle: 'Name, size & type',
    heading: 'Tell us about your farm',
    description: 'Start with the basics. You can update these details whenever your farm changes.',
    Icon: LuTractor,
  },
  {
    title: 'Farm location',
    subtitle: 'Where your farm is',
    heading: 'Where is your farm?',
    description:
      'Location helps us understand local weather and growing conditions. Use the nearest place name if needed.',
    Icon: LuMapPin,
  },
  {
    title: 'Environmental details',
    subtitle: 'Optional information',
    heading: 'What do you already know?',
    description:
      'These details can make your guidance more specific, but it is completely okay if you do not have them yet.',
    Icon: LuSprout,
  },
  {
    title: 'Review',
    subtitle: 'Confirm your profile',
    heading: 'Review your farm details',
    description: 'Check your information before creating your demo farm profile.',
    Icon: LuClipboardCheck,
  },
];

function createInitialFormData() {
  return {
    name: '',
    area: '',
    unit: 'Hectares',
    activity: 'Crop farming',
    country: 'Ethiopia',
    region: '',
    zone: '',
    woreda: '',
    landmark: '',
    soilTest: '',
    environmentalMeasurements: '',
  };
}

function validateStep(step, data) {
  const errors = {};

  if (step === 0) {
    if (!data.name.trim()) errors.name = 'Enter a name for your farm.';
    if (!data.area || !Number.isFinite(Number(data.area)) || Number(data.area) <= 0) {
      errors.area = 'Enter a farm size greater than zero.';
    }
  }

  if (step === 1) {
    if (!data.region.trim()) errors.region = 'Enter your region.';
    if (!data.woreda.trim()) errors.woreda = 'Enter your woreda.';
  }

  return errors;
}

function FarmRegistration() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(createInitialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [draftMessage, setDraftMessage] = useState('');
  const [createdFarm, setCreatedFarm] = useState(null);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);

  function handleFormChange(field, value) {
    setFormData((currentData) => ({ ...currentData, [field]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: '' }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (activeStep < steps.length - 1) {
      const stepErrors = validateStep(activeStep, formData);
      setErrors(stepErrors);
      if (Object.keys(stepErrors).length > 0) return;

      setErrors({});
      setActiveStep((currentStep) => currentStep + 1);
      return;
    }

    const allErrors = {
      ...validateStep(0, formData),
      ...validateStep(1, formData),
    };
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      setActiveStep(allErrors.name || allErrors.area ? 0 : 1);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    setCreatedFarm({ ...formData, area: Number(formData.area) });
    setIsSubmitting(false);
  }

  function handleBack() {
    setErrors({});
    setActiveStep((currentStep) => Math.max(currentStep - 1, 0));
  }

  function handleSaveAndFinishLater() {
    setDraftMessage(
      'Drafts are not saved in this frontend prototype. Keep this page open to continue later.',
    );
  }

  function handleStartOver() {
    setActiveStep(0);
    setFormData(createInitialFormData());
    setErrors({});
    setDraftMessage('');
    setCreatedFarm(null);
    setWorkspaceOpen(false);
  }

  const isComplete = createdFarm !== null;
  const currentStep = steps[activeStep];
  const StepIcon = currentStep.Icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="/" aria-label="AgriSense home">
            <img
              src={PrimaryLogo}
              alt="AgriSense"
              className="h-9 w-36 object-contain object-left"
            />
          </a>
          <p className="hidden text-sm text-muted-foreground sm:block">
            Farm setup · {activeStep < 2 ? 'about 3 minutes' : 'optional details'}
          </p>
          {!isComplete && !workspaceOpen && (
            <button
              type="button"
              onClick={handleSaveAndFinishLater}
              className="text-sm font-semibold text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Save and finish later
            </button>
          )}
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-8 lg:py-12">
        {!isComplete && !workspaceOpen && (
          <RegistrationProgress steps={steps} activeStep={activeStep} />
        )}

        <section className="mx-auto w-full max-w-2xl rounded-xl bg-card p-5 shadow-md sm:p-8 lg:p-10">
          {workspaceOpen ? (
            <div className="py-6">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary">
                <LuSprout className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                Farmer workspace preview
              </p>
              <h1 className="mb-3 text-2xl font-bold sm:text-3xl">Welcome to your workspace</h1>
              <p className="mb-6 leading-6 text-muted-foreground">
                Your demo farm profile is ready. This prototype workspace is the next step after
                registration.
              </p>
              <div className="rounded-xl border border-border p-5">
                <p className="font-bold">{createdFarm.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {createdFarm.area} {createdFarm.unit} · {createdFarm.activity}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {[createdFarm.woreda, createdFarm.zone, createdFarm.region, createdFarm.country]
                    .filter(Boolean)
                    .join(', ')}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setWorkspaceOpen(false)}
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl px-2 py-3 text-sm font-semibold text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <LuArrowLeft aria-hidden="true" /> Back to farm summary
              </button>
            </div>
          ) : isComplete ? (
            <div className="py-6" role="status">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary">
                <LuCircleCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                Farm setup complete
              </p>
              <h1 className="mb-3 text-2xl font-bold sm:text-3xl">Your farm is ready</h1>
              <p className="mb-6 leading-6 text-muted-foreground">
                Your farm details are ready for this preview. They have not been saved to a database
                or sent to a backend.
              </p>
              <div className="mb-8 rounded-xl bg-muted p-5">
                <h2 className="mb-3 font-bold">{createdFarm.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {createdFarm.area} {createdFarm.unit} · {createdFarm.activity}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {[createdFarm.woreda, createdFarm.zone, createdFarm.region, createdFarm.country]
                    .filter(Boolean)
                    .join(', ')}
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  Details provided by you; location and land size have not been independently
                  verified.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setWorkspaceOpen(true)}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Go to farmer workspace <LuArrowRight aria-hidden="true" />
              </button>
              <p className="mt-4 text-xs text-muted-foreground">
                Workspace access is a prototype preview; your farm details are only held in this
                page.
              </p>
            </div>
          ) : (
            <>
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <StepIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                Step {activeStep + 1} · {activeStep === 2 ? 'Optional details' : currentStep.title}
              </p>
              <h1 className="mb-2 text-2xl font-bold sm:text-3xl">{currentStep.heading}</h1>
              <p className="mb-7 text-sm leading-6 text-muted-foreground">
                {currentStep.description}
              </p>

              <form onSubmit={handleSubmit} noValidate>
                {activeStep === 0 && (
                  <FarmInformationStep
                    data={{
                      name: formData.name,
                      area: formData.area,
                      unit: formData.unit,
                      activity: formData.activity,
                    }}
                    onChange={handleFormChange}
                    errors={errors}
                  />
                )}
                {activeStep === 1 && (
                  <FarmLocationStep
                    data={{
                      country: formData.country,
                      region: formData.region,
                      zone: formData.zone,
                      woreda: formData.woreda,
                      landmark: formData.landmark,
                    }}
                    onChange={handleFormChange}
                    errors={errors}
                  />
                )}
                {activeStep === 2 && (
                  <EnvironmentalInformationStep
                    data={{
                      soilTest: formData.soilTest,
                      environmentalMeasurements: formData.environmentalMeasurements,
                    }}
                    onChange={handleFormChange}
                  />
                )}
                {activeStep === 3 && <FarmReviewStep data={formData} />}

                <RegistrationNavigation
                  activeStep={activeStep}
                  totalSteps={steps.length}
                  isSubmitting={isSubmitting}
                  onBack={handleBack}
                />
              </form>
              {draftMessage && (
                <p className="mt-4 text-sm text-muted-foreground" role="status">
                  {draftMessage}
                </p>
              )}
            </>
          )}
        </section>
      </main>
      {isComplete && !workspaceOpen && (
        <div className="pb-8 text-center">
          <button
            type="button"
            onClick={handleStartOver}
            className="text-sm font-semibold text-foreground underline underline-offset-4"
          >
            Set up another demo farm
          </button>
        </div>
      )}
    </div>
  );
}

export default FarmRegistration;
