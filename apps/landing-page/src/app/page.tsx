import { Navbar } from '../navbar';
import { HeroSection } from '../components/hero';
import { PartnersSection } from '../sections/partners';
import { ServicesSection } from '../sections/services';

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
    </>
  );
}
