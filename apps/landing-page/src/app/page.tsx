import { Navbar } from '../navbar';
import { HeroSection } from '../sections/hero';
import { OffersSection } from '../sections/offers';
import 'swiper/css';
import { ServicesSection } from '../sections/services';
import { PartnersSection } from '../sections/partners/partners';
import { TopSellingSection } from '../sections/top-selling/top-selling';
import { sptClient } from '../service/spt-client/spt-client';
import { AboutSection } from '../sections/about';
import { DownloadSection } from '../sections/download';
import { HowOrderSection } from '../sections/how-order';
import { Footer } from '../footer';

export default async function Index() {
  const topRated = await sptClient.topRated();
  const offers = await sptClient.getOffers();
  const downloadData = await sptClient.getDownloadData();
  const howOrderData = await sptClient.getHowOrderData();
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <TopSellingSection topRated={topRated} />
      <OffersSection offers={offers} />
      <AboutSection />
      <HowOrderSection howOrderData={howOrderData[0]} />
      <DownloadSection downloadData={downloadData} />
      <Footer />
    </>
  );
}
