import PrimaryLogo from '../assets/AgriSensePrimaryLogo.png';
//import EnvironmentalInformationStep from '../components/farmRegistration/EnvironmentalInformationStep';
//import FarmInformationStep from '../components/farmRegistration/FarmInformationStep';
//import FarmLocationStep from '../components/farmRegistration/FarmLocationStep';
import FarmReviewStep from '../components/farmRegistration/FarmReviewStep';

function FarmRegistration() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <header className="w-full h-19 bg-card border-b border-border">
          <div className="max-w-7xl container flex items-center justify-between mx-auto p-3">
            <img
              src={PrimaryLogo}
              alt="AgriSense primary logo"
              className="w-40 h-15 object-cover"
            />
            <p className="text-sm text-muted-foreground font-mono">Farm setup · about 3 minutes</p>
            <button className="bg-card text-foreground text-sm font-mono font-semibold hover:cursor-pointer">
              Save and finish later
            </button>
          </div>
        </header>
        <main className="max-w-7xl container mx-auto flex gap-x-10 px-3 py-12">
          <aside>
            <div className="w-72 flex flex-col gap-y-3 bg-card p-6 rounded-xl shadow-md">
              <p className="text-foreground text-lg font-sans font-bold">Set up your farm</p>
              <p className="text-sm text-muted-foreground font-mono">
                A few simple details help us tailor useful advice.
              </p>
              <ul className="flex flex-col gap-y-4 mt-6">
                <li className="flex gap-x-3">
                  <span className="w-8 h-8 p-3 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-mono font-bold">
                    1
                  </span>
                  <div className="felx flex-col gap-y-3">
                    <p className="text-base text-foreground font-mono font-semibold">
                      Farm information
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">Name, size & type</p>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="w-8 h-8 p-3 flex items-center justify-center rounded-full border border-border text-muted-foreground text-sm font-mono font-bold">
                    2
                  </span>
                  <div className="felx flex-col gap-y-3">
                    <p className="text-base text-muted-foreground font-mono font-semibold">
                      Farm location
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">Where your farm is</p>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="w-8 h-8 p-3 flex items-center justify-center rounded-full border border-border text-muted-foreground text-sm font-mono font-bold">
                    3
                  </span>
                  <div className="felx flex-col gap-y-3">
                    <p className="text-base text-muted-foreground font-mono font-semibold">
                      Environmental details
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">Optional information</p>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="w-8 h-8 p-3 flex items-center justify-center rounded-full border border-border text-muted-foreground text-sm font-mono font-bold">
                    4
                  </span>
                  <div className="felx flex-col gap-y-3">
                    <p className="text-base text-muted-foreground font-mono font-semibold">
                      Review
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">Confirm your profile</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
          {/* <FarmInformationStep /> */}
          {/* <FarmLocationStep /> */}
          {/* <EnvironmentalInformationStep /> */}
          <FarmReviewStep />
        </main>
      </div>
    </>
  );
}

export default FarmRegistration;
