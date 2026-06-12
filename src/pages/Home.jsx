import Hero from '../components/Hero';
import About from '../components/About';
import CampusFinder from '../components/CampusFinder';
import Events from '../components/Events';
import PrayerAltar from '../components/PrayerAltar';
import Testimonies from '../components/Testimonies';
import Resources from '../components/Resources';
import PioneerCTA from '../components/PioneerCTA';
import Footer from '../components/Footer';
import { PageWrapper } from '../components/animations';

export default function Home({ openModal }) {
  return (
    <PageWrapper>
      <div className="bg-[#f9f5ef]">
        <Hero openModal={openModal} />
        <About />
        <CampusFinder />
        <Events />
        <PrayerAltar />
        <Testimonies />
        <Resources />
        <PioneerCTA openModal={openModal} />
        <Footer />
      </div>
    </PageWrapper>
  );
}
