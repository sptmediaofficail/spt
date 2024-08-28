import { Navbar } from '../navbar';
import { HeroSection } from '../sections/hero';
import { OffersSection } from '../sections/offers';
import 'swiper/css';
import { ServicesSection } from '../sections/services';
import { PartnersSection } from '../sections/partners/partners';
import { TopSellingSection } from '../sections/top-selling/top-selling';
import { sptClient } from '../service/spt-client/spt-client';

export default async function Index() {
  const topRated = await sptClient.topRated();
  const offers = await sptClient.getOffers();

  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <TopSellingSection topRated={topRated} />
      <OffersSection offers={offers} />
    </>
  );
}
