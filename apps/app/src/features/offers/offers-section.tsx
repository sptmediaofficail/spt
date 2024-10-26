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
          {isLoading ? (
            <div className={'absolute overflow-hidden'}>
              <div className={'flex gap-4 '}>
                {Array.from({ length: 10 }).map((_, index) => (
                  <OfferCardSkeleton key={index} />
                ))}
              </div>
            </div>
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
