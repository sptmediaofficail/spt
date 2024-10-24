'use client';

import { useSiteOffersServiceGetSiteOffers } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import * as React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Carousel } from '../../../../../libs/common/src/ui/carousel';
import { OfferCard, OfferCardSkeleton } from './offer-card';
import { useTranslations } from 'next-intl';
import { Offer } from '@spt/core';
import { HomeSection } from '../home/home-section';

export const OffersSection = () => {
  const t = useTranslations();
  const { data, isLoading } = useSiteOffersServiceGetSiteOffers({
    paginate: 10,
    contentLanguage: 'ar',
  });

  const offers = data?.data.data as Offer[];

  return (
    <HomeSection title={t('home.offers')}>
      <div className={'relative'}>
        <div className="absolute inset-0">
          <Carousel>
            {isLoading
              ? Array.from({ length: 10 }).map((_, index) => (
                  <SwiperSlide
                    key={index}
                    className={'!w-auto mb-14 ml-4 !overflow-visible'}
                  >
                    <OfferCardSkeleton />
                  </SwiperSlide>
                ))
              : [...offers, ...offers].map((offer) => (
                  <SwiperSlide
                    className={'!w-auto mb-14 !overflow-visible'}
                    key={offer.id}
                  >
                    <OfferCard offer={offer} />
                  </SwiperSlide>
                ))}
          </Carousel>
        </div>
      </div>
    </HomeSection>
  );
};
