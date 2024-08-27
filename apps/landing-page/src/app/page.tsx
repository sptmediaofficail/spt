import { Navbar } from '../navbar';
import { PartnersSection } from '../sections/partners';
import { ServicesSection } from '../sections/services';
import { HeroSection } from '../sections/hero';
import { TopSellingSection } from '../sections/top-selling/top-selling';
import { OffersSection } from '../sections/offers';
import 'swiper/css';

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <TopSellingSection />
      <OffersSection />
    </>
  );
}
