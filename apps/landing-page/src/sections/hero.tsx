import React from 'react';
import Image from 'next/image';
import StatCar from '../assets/svg/stat-car.svg';
import StatUser from '../assets/svg/stat-users.svg';
import StatMask from '../assets/svg/stat-mask.svg';
import { cn } from '@nextui-org/theme';
import HeroImg from '../assets/images/hero.png';
import { Section } from '../components/section';

export const HeroSection = () => {
  return (
    <div className="flex flex-row md:flex-col justify-around bg-primary relative overflow-hidden">
      <MainSection />
      <div className="relative pt-28">
        <Image className="absolute bottom-0" src={StatMask} alt="Statistics" />
        <div className="absolute  bottom-0 w-8/12 2xl:w-6/12">
          <StatisticsSection />
        </div>
      </div>
    </div>
  );
};

const MainSection = () => {
  // const data = await fetch('https://api.example.com/data');

  const data = {
    title: 'اطلب قطع غيار سيارتك بكل سهولة مع SPT!',
    description:
      'مرحبا بك في SPT وجهتك المثالية لتجعل العثور على قطع غيار السيارات التي تحتاجها بسرعة وكفاءة سواء كنت تبحث عن قطع أصلية، مستعملة أو مستهلكة أخيرا، كل ما يلزم لتلبية احتياجات سيارتك.',
  };
  return (
    <Section className="flex flex-col-reverse lg:flex-row items-center justify-between pt-8 md:py-24 text-white">
      <div className="md:basis-4/12 leading-loose  ml-auto">
        <h1
          className={cn(
            'text-3xl text-center font-bold mb-4 leading-loose',
            'md:text-4xl md:text-right',
            'lg:text-5xl lg:text-right lg:leading-normal'
          )}
        >
          {data.title}
        </h1>
        <p
          className={cn(
            'text-sm text-center mb-8 leading-loose opacity-90 text-slate-300',
            'md:text-md md:text-right',
            'lg:text-lg lg:text-right lg:leading-relaxed'
          )}
        >
          {data.description}
        </p>
      </div>
      <Image
        src={HeroImg}
        alt="SPT on Mobile"
        className="lg:absolute lg:-left-24 lg:top-10 w-[80%] h-[80%] object-contain"
        objectFit={'contain'}
      />
    </Section>
  );
};

const StatisticsSection = () => {
  return (
    <section className="flex flex-row justify-around content-center text-center flex-wrap">
      <div className="text-center flex flex-col md:flex-row gap-4 items-center mb-6 md:mb-0">
        <div className="flex flex-col justify-around">
          <p className="text-2xl font-bold text-primary">56</p>
          <p className="text-xs">طلبات التشاليح</p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-4">
          <Image src={StatCar} width={32} height={32} alt="Statistics" />
        </div>
      </div>

      <div className="text-center flex flex-col md:flex-row gap-4 items-center mb-6 md:mb-0">
        <div className="flex flex-col justify-around">
          <p className="text-2xl font-bold text-primary">15K+</p>
          <p className="text-xs">عميل راضي</p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-4">
          <Image src={StatUser} width={32} height={32} alt="Statistics" />
        </div>
      </div>

      <div className="text-center flex flex-col md:flex-row gap-4 items-center">
        <div className="flex flex-col justify-around">
          <p className="text-2xl font-bold text-primary">1K+</p>
          <p className="text-xs">طلبات قطع الغيار</p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-4">
          <Image src={StatCar} width={32} height={32} alt="Statistics" />
        </div>
      </div>
    </section>
  );
};
