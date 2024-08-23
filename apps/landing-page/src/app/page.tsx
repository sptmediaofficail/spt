import { Navbar } from '../navbar';
import { HeroSection } from '../components/hero';
import { PartnersSection } from '../sections/partners';

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnersSection />
    </>
  );
}
