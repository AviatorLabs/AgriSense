import NavBar from '../components/navBar';
import LandingPageHero from '../components/landing-page-components/landingPageHero';
import LandingPageAbout from '../components/landing-page-components/landingPageAbout';
import Footer from '../components/footer';
import LandingPageFeature from '../components/landing-page-components/landingPageFeature';
import CallToAction from '../components/callToAction';

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <main className="w-full flex flex-col gap-y-25 pb-36 bg-background">
        <LandingPageHero />
        <LandingPageFeature />
        <LandingPageAbout />
      </main>
      <CallToAction />
      <Footer />
    </>
  );
}
