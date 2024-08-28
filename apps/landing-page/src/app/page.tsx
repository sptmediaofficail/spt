import { Navbar } from '../navbar';
import { HeroSection } from '../sections/hero';
import { OffersSection } from '../sections/offers';
import 'swiper/css';
import { ServicesSection } from '../sections/services';
import { PartnersSection } from '../sections/partners/partners';
import { TopSellingSection } from '../sections/top-selling/top-selling';

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
