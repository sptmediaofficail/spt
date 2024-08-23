import Image from 'next/image';

export const PartnersSection = () => {
  const partners = [
    {
      name: 'BMW',
      logo: '/partners/BMW.png',
    },
    {
      name: 'Chery',
      logo: '/partners/Chery.png',
    },
    {
      name: 'Datsun',
      logo: '/partners/Datsun.png',
    },
    {
      name: 'Toyota',
      logo: '/partners/Toyota.png',
    },
    {
      name: 'Nissan',
      logo: '/partners/Nissan.png',
    },
    {
      name: 'Honda',
      logo: '/partners/Honda.png',
    },
    {
      name: 'Hyundai',
      logo: '/partners/Hyundai.png',
    },
    // {
    //   name: 'Mazda',
    //   logo: '/partners/Mazda.png',
    // },
    // {
    //   name: 'Suzuki',
    //   logo: '/partners/Suzuki.png',
    // },
  ];

  return (
    <section className="pt-24 max-w-screen-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center bg-primary text-white px-3 py-2 rounded-full w-fit mx-auto">
        شركاؤنا
      </h2>

      <div className="flex flex-wrap justify-between gap-8 mt-12">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
