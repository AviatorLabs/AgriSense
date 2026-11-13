import NavBar from '../componentes/navBar';
import LandingPageHero from '../componentes/landing-page-components/landingPageHero';
import LandingPageAbout from '../componentes/landing-page-components/landingPageAbout';
import Footer from '../componentes/footer';
import LandingPageFeature from '../componentes/landing-page-components/landingPageFeature';
import CallToAction from '../componentes/callToAction';

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
