import { LuArrowLeft, LuCheck, LuCircleCheck } from 'react-icons/lu';
import { VscEdit } from 'react-icons/vsc';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';

const farmInfo = {
  'Farm Name': 'Abeba Family Farm',
  'Farming Type': 'Crop Farming',
  'Land Area': '12 hectares',
};
const farmLocation = {
  Country: 'Ethiopia',
  Region: 'Oromia',
  Zone: 'Arsi',
  Woreda: 'Lemu Bilbilo',
};

const envDitails = {
  'Soil test results': 'Available',
  'Environmental measurements': 'Not yet',
};

function FarmReviewStep() {
  return (
    <>
      <section>
        <div className="max-w-2xl flex flex-col gap-y-3 p-8 mt-10 bg-card rounded-xl shadow-md">
          <div className="w-12 h-12 flex items-center justify-center p-3 bg-accent rounded-xl">
            <LuCheck className="w-6 h-6 stroke-foreground" />
          </div>
          <p className="text-primary text-sm font-mono font-bold">STEP 4 · REVIEW</p>
          <h1 className="text-foreground text-3xl font-sans font-bold">Review your farm profile</h1>
          <p className="text-muted-foreground text-base font-mono">
            Please check these details. You can edit any section before we set up your personalized
            farm workspace.
          </p>
          <div className="flex flex-col gap-6 mt-4">
            <ReviewArticle label={'Farm Information'} values={farmInfo} />
            <ReviewArticle label={'Farm Location'} values={farmLocation} />
            <ReviewArticle label={'Environmental details'} values={envDitails} />
          </div>
          <p className="flex gap-2 p-5 bg-secondary rounded-xl">
            <IoShieldCheckmarkOutline className="w-5 h-5 stroke-primary shrink-0" />
            <span className="text-sm text-foreground font-mono">
              Your information is used to tailor farm guidance. You can manage your profile details
              at any time.
            </span>
          </p>
          <div className="container flex items-center justify-between mt-10">
            <button
              type="button"
              className="flex items-center gap-2 bg-card px-4 py-3 text-foreground text-sm font-mono font-bold"
            >
              <LuArrowLeft className="w-5 h-5 stroke-foreground" />
              Back
            </button>
            <button
              type="button"
              className="flex items-center gap-2 bg-primary px-4 py-3 text-primary-foreground text-sm font-mono font-bold rounded-xl"
            >
              Complete registration
              <LuCircleCheck className="w-5 h-5 stroke-primary-foreground" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function ReviewArticle({ label, values }) {
  return (
    <article className="border border-border rounded-xl p-5 ">
      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col gap-y-4">
          <p className="text-lg text-foreground font-sans font-bold">{label}</p>
          {label != 'Environmental details' ? (
            <div className="grid grid-cols-2 gap-4 mt-4">
              {Object.entries(values).map(([key, value]) => (
                <div key={key} className="flex flex-col gap-y-3">
                  <dt className="text-sm text-muted-foreground font-mono">{key}</dt>
                  <dd className="text-sm text-foreground font-mono font-semibold">{value}</dd>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4 mt-4">
              {Object.entries(values).map(([key, value]) => (
                <p className="text-sm text-muted-foreground font-mono">
                  {key}: <span className="text-foreground font-semibold">{value}</span>
                </p>
              ))}
            </div>
          )}
        </div>
        <button className="flex items-center gap-2 text-primary text-sm font-mono font-bold">
          <VscEdit className="w-5 h-5 fill-primary" />
          Edit
        </button>
      </div>
    </article>
  );
}

export default FarmReviewStep;
