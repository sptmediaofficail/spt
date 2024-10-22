'use client';

import { useSiteOffersServiceGetSiteOffers } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import * as React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Carousel } from '../../../../../libs/common/src/ui/carousel';
import { OfferCard, OfferCardSkeleton } from './offer-card';
import { useTranslations } from 'next-intl';
import { RiArrowLeftUpLine } from 'react-icons/ri';
import { Offer } from '@spt/core';

export const OffersSection = () => {
  const t = useTranslations();
  const { data, isLoading } = useSiteOffersServiceGetSiteOffers({
    paginate: 3,
    contentLanguage: 'ar',
  });

  const offers = data?.data.data as Offer[];

  return (
    <div className={'relative'}>
      <div className="absolute inset-0">
        <Header title={t('home.offers')} moreText={t('home.more')} />
        <Carousel>
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <SwiperSlide className={'!w-auto mb-14 ml-4'} key={index}>
                  <OfferCardSkeleton />
                </SwiperSlide>
              ))
            : offers.map((offer) => (
                <SwiperSlide className={'!w-auto mb-14'} key={offer.id}>
                  <OfferCard offer={offer} />
                </SwiperSlide>
              ))}
        </Carousel>
      </div>
    </div>
  );
};

const Header = ({ title, moreText }: { title: string; moreText: string }) => (
  <div className={'text-2xl font-bold text-right pb-6 flex justify-between'}>
    <h2>{title}</h2>
    <button
      className={'text-lg font-light text-gray-400 flex items-center gap-2'}
    >
      <span>{moreText}</span>
      <RiArrowLeftUpLine className={'h-6 w-6'} />
    </button>
  </div>
);
