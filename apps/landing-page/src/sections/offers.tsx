'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Section } from '../components/section';
import { Offer } from '../service/spt-client/types';
import { IoPricetagOutline } from 'react-icons/io5';
import Background from '../assets/images/offers-bg.jpg';
import Gear from '../assets/svg/gear.svg';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { cn } from '@nextui-org/theme';

export const OffersSection = ({ offers }: { offers: Offer[] }) => {
  return (
    <Section
      position={'right'}
      title={'العروض'}
      heading={
        <div className={'flex items-center justify-between'}>
          <h3 className={cn('text-3xl lg:text-4xl font-semibold')}>
            تعرف علي ابرز عروض المنصة
          </h3>
          <div className="flex flex-row gap-2">
            <button className="arrow-right bg-secondary text-black shadow rounded-full top-1/2 p-1 z-10 left-10 lg:left-20">
              <RiArrowRightSLine className={'w-6 h-6 fill-gray-500'} />
            </button>

            <button className="arrow-left bg-primary shadow rounded-full top-1/2 p-1 z-10 left-10 lg:left-20">
              <RiArrowLeftSLine className={'w-6 h-6 fill-white'} />
            </button>
          </div>
        </div>
      }
    >
      <Swiper
        spaceBetween={30}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="mt-6"
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <OfferCard offer={offer} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

const OfferCard = ({ offer }: { offer: Offer }) => {
  return (
    <div className="bg-primary text-white rounded-xl shadow-lg flex flex-col md:flex-row p-6 md:p-24 relative overflow-hidden">
      <Image className={'opacity-60'} src={Background} alt="Background" fill />

      <Image
        className={'opacity-50 absolute -bottom-10 -right-20 hidden md:block'}
        src={Gear}
        alt="Background"
        width={0}
        height={0}
      />

      <div className="flex flex-col justify-center w-full sm:w-2/3 z-10">
        <div className="flex items-center space-x-2">
          <div className="bg-primary font-semibold text-white px-3 py-1 rounded-full flex flex-row gap-2 justify-center items-center">
            <IoPricetagOutline />
            <span>خصم</span>
            <span>
              %
              {Math.floor(
                ((parseInt(offer.price_before_discount) -
                  parseInt(offer.price_after_discount)) /
                  parseInt(offer.price_before_discount)) *
                  100
              )}
            </span>
          </div>
        </div>
        <h3 className="text-2xl font-bold mt-4">{offer.title}</h3>
        <p className="mt-4 text-sm opacity-60">{offer.description}</p>
      </div>

      <div className="w-1/3 flex justify-center items-center">
        <Image
          src={offer.image}
          alt="Offer Image"
          width={1000}
          height={1000}
          className="absolute rounded-lg top-0 left-0 opacity-80 rounded-r-full w-1/3 h-full"
        />
      </div>
    </div>
  );
};
