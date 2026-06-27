import Hero from '../components/Hero';
import About from '../components/About';
import NextEventSection from '../components/NextEventSection';
import BirthdaySection from '../components/BirthdaySection';
import CampusFinder from '../components/CampusFinder';
import Events from '../components/Events';
import PrayerAltar from '../components/PrayerAltar';
import Testimonies from '../components/Testimonies';
import GOAwardSection from '../components/GOAwardSection';
import PioneerCTA from '../components/PioneerCTA';
import Footer from '../components/Footer';
import { PageWrapper } from '../components/animations';

export default function Home({ openModal }) {
  return (
    <PageWrapper>
      <div className="bg-[#fcfaf7] dark:bg-[#150c1f] transition-colors duration-500">
        <Hero openModal={openModal} />
        <About />
        <NextEventSection />
        <GOAwardSection />
        <CampusFinder />
        <Events />
        <BirthdaySection />
        <PrayerAltar />
        <Testimonies />
        <PioneerCTA openModal={openModal} />
        <Footer />
      </div>
    </PageWrapper>
  );
}
