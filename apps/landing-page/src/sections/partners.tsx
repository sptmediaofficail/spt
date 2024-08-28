import Image from 'next/image';
import { sptClient } from '../service/spt-client/spt-client';

export const PartnersSection = async () => {
  const partners = await sptClient.getPartners();
  return (
    <section className="pt-24 max-w-screen-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center bg-primary text-white px-3 py-2 rounded-full w-fit mx-auto">
        شركاؤنا
      </h2>

      <div className="flex flex-wrap justify-between gap-8 mt-12">
        {partners.map((partner) => (
          <div key={partner.id} className="flex items-center justify-center">
            <Image
              src={partner.image}
              alt={'Partner'}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
