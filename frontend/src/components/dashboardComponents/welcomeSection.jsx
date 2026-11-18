import WelcomHeroSection from './welcomeComponents/welcomHeroSection';
import FieldPriorities from './welcomeComponents/fieldPriorities';
import CropFit from './welcomeComponents/cropFit';
import ProgressNotification from './welcomeComponents/progressNotification';

export default function WelcomeSection() {
  return (
    <>
      <WelcomHeroSection />
      <FieldPriorities />
      <CropFit />
      <ProgressNotification />
    </>
  );
}
