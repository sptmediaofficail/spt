import { Navbar } from '../navbar';
import { PartnersSection } from '../sections/partners';
import { ServicesSection } from '../sections/services';
import { HeroSection } from '../sections/hero';

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
