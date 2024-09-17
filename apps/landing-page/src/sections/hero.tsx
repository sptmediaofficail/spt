import React, { useMemo } from 'react';
import Image from 'next/image';
import StatCar from '../assets/svg/stat-car.svg';
import StatUser from '../assets/svg/stat-users.svg';
import StatMask from '../assets/svg/stat-mask.svg';
import HeroImg from '../assets/images/hero.png';
import { Section } from '../components/section';
import { sptClient } from '../service/spt-client/spt-client';
import { cn } from '@nextui-org/theme';
import HeroLine from '../assets/svg/hero-line.svg';
import HeroBg from '../assets/svg/hero-bg.svg';

export const HeroSection = () => {
  return (
    <div className="flex flex-row md:flex-col justify-around bg-[#012167] relative overflow-hidden">
      <MainSection />
      <div className="pt-28">
        <Image
          className="absolute bottom-0 pointer-events-none"
          src={StatMask}
          alt="Statistics"
          priority
        />
        <div className="absolute bottom-0 w-[65vw]">
          <StatisticsSection />
        </div>
      </div>
    </div>
  );
};

const MainSection = () => {
  const data = useMemo(
    () => ({
      title: 'اطلب قطع غيار سيارتك بكل سهولة مع',
      description:
        'مرحبا بك في SPT وجهتك المثالية لتجعل العثور على قطع غيار السيارات التي تحتاجها بسرعة وكفاءة سواء كنت تبحث عن قطع أصلية، مستعملة أو مستهلكة أخيرا، كل ما يلزم لتلبية احتياجات سيارتك.',
    }),
    []
  );
  return (
    <Section className="flex flex-col-reverse lg:flex-row items-center justify-between pt-8 md:pt-24 md:pb-12 2xl:pb-24 text-white relative">
      <div className="md:basis-5/12 leading-loose ml-auto z-20">
        <h1
          className={cn(
            'text-3xl text-center font-bold mb-8 leading-loose',
            'md:text-4xl md:text-right',
            'lg:text-5xl lg:text-center lg:leading-normal'
          )}
        >
          {data.title}{' '}
          <span className="relative">
            SPT!
            <Image
              src={HeroLine}
              alt="Hero Line"
              className="absolute inset-0 transform scale-[170%] top-[3rem] lg:top-[4.5rem] lg:right-[20%] pointer-events-none"
            />
          </span>
        </h1>
        <p
          className={cn(
            'text-sm text-center mb-8 leading-loose opacity-90 text-slate-300',
            'md:text-md md:text-right',
            'lg:text-lg lg:text-center lg:leading-relaxed'
          )}
        >
          {data.description}
        </p>
      </div>

      {/* Hero image and background section */}

      <div className="relative w-full h-full">
        <div className="lg:absolute lg:-top-64 lg:-left-[5%] lg:scale-150 lg:-translate-x-1/2 w-full h-full">
          <Image
            src={HeroBg}
            alt="Hero Background"
            className="absolute w-2/3 rotate-[95deg] top-12
            lg:rotate-0 lg:w-1/2 lg:-top-20 lg:left-[70%] scale-125 lg:scale-150 z-10"
            priority
          />
          <Image
            src={HeroImg}
            alt="Hero Image"
            className="relative z-20 w-full lg:w-[60%] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </Section>
  );
};

const StatisticsSection = async () => {
  const stats = await sptClient.getStats();

  return (
    <section
      className="flex
      2xl:h-[10rem] 2xl:scale-110
    w-full flex-row justify-around content-center text-center flex-wrap"
    >
      <StatisticItem
        value={stats.junkyard_sale_orders}
        label="طلبات التشاليح"
        icon={StatCar}
      />
      <StatisticItem value={stats.clients} label="عميل راضي" icon={StatUser} />
      <StatisticItem
        value={stats.spare_part_orders}
        label="طلبات قطع الغيار"
        icon={StatCar}
      />
    </section>
  );
};

const StatisticItem = ({
  value,
  label,
  icon,
}: {
  value: number;
  label: string;
  icon: string;
}) => (
  <div className="text-center flex flex-col md:flex-row gap-4 items-center mb-6 md:mb-0">
    <div className="flex flex-col justify-around">
      <p className="text-2xl font-bold text-primary">{value}</p>
      <p className="text-xs">{label}</p>
    </div>
    <div className="bg-gray-100 rounded-2xl p-4">
      <Image src={icon} width={32} height={32} alt={label} />
    </div>
  </div>
);
