'use client';

import * as React from 'react';
import { SwiperSlide } from 'swiper/react';
import { useTranslations } from 'next-intl';
import { Carousel } from '@spt/common';
import { OfferCard, OfferCardSkeleton } from './offer-card';
import { HomeSection } from '../home/home-section';
import { UseOffers } from './use-offers';

export const OffersSection = () => {
  const t = useTranslations('home');
  const { offers, isLoading } = UseOffers();

  return (
    <HomeSection title={t('offers')} className={'h-[calc(24rem+3.5rem)]'}>
      <div className={'relative'}>
        <div className="absolute inset-0">
          {isLoading ? (
            <OffersSkeleton />
          ) : (
            <Carousel>
              {[...offers, ...offers].map((offer) => (
                <SwiperSlide
                  key={offer.id}
                  className={'!w-auto mb-14 !overflow-visible m-1'}
                >
                  <OfferCard offer={offer} />
                </SwiperSlide>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </HomeSection>
  );
};

const OffersSkeleton = () => (
  <div className={'absolute overflow-hidden w-full lg:w-auto'}>
    <div className={'hidden lg:flex justify-center align-middle mx-auto'}>
      {Array.from({ length: 10 }).map((_, index) => (
        <OfferCardSkeleton key={index} />
      ))}
    </div>
    <div className={'lg:hidden flex justify-center align-middle mx-auto'}>
      <OfferCardSkeleton />
    </div>
  </div>
);
