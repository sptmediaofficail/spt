import { sptClient } from '../../service/spt-client/spt-client';
import { Section } from '../../components/section';
import Image from 'next/image';

export const PartnersSection = async () => {
  const partners = await sptClient.getPartners();
  return (
    <Section
      id={'partners'}
      title={'شركاؤنا'}
      className={'overflow-visible max-w-full'}
      position={'center'}
    >
      <div
        className={`
          grid
          gap-8
          grid-cols-2
          lg:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]
          justify-items-center
          mt-8
        `}
      >
        {partners.map((partner) => (
          <Image
            key={partner.id}
            src={partner.image}
            alt={'Partner'}
            width={150}
            height={150}
            className="object-contain"
          />
        ))}
      </div>
    </Section>
  );
};
