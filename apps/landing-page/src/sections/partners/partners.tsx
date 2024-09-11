import { sptClient } from '../../service/spt-client/spt-client';
import { Section } from '../../components/section';
import { PartnersCarousel } from './partners-carousel';

export const PartnersSection = async () => {
  const partners = await sptClient.getPartners();
  return (
    <Section
      id={'partners'}
      title={'شركاؤنا'}
      className={'overflow-visible max-w-full px-0'}
      position={'center'}
    >
      <PartnersCarousel partners={partners} />
    </Section>
  );
};
