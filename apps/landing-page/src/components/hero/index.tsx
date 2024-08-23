import React from 'react';
import Image from 'next/image';
import StatCar from '../../assets/svg/stat-car.svg';
import StatUser from '../../assets/svg/stat-users.svg';
import StatMask from '../../assets/svg/stat-mask.svg';
import MainSection from './main';

export const HeroSection = () => {
  return (
    <div className="flex flex-row md:flex-col justify-around bg-primary relative overflow-hidden">
      <MainSection />
      <div className="relative pt-28">
        <Image className="absolute bottom-0" src={StatMask} alt="Statistics" />
        <div className="absolute bottom-0 w-8/12 2xl:w-6/12">
          <StatisticsSection />
        </div>
      </div>
    </div>
  );
};

export const StatisticsSection = () => {
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
