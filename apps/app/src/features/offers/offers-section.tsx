'use client';

import { useSiteOffersServiceGetSiteOffers } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import * as React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Carousel } from '../../../../../libs/common/src/ui/carousel';
import { OfferCard } from './offer-card';
import { useTranslations } from 'next-intl';
import { RiArrowLeftUpLine } from 'react-icons/ri';
import { mockedOffers } from './_mocks/mocked-offers';

export const OffersSection = () => {
  const t = useTranslations();
  const { data, isLoading } = useSiteOffersServiceGetSiteOffers({
    paginate: 3,
    contentLanguage: 'ar',
  });
  // const offers = data?.data.data as Offer[];
  const offers = mockedOffers;

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={'relative'}>
      <div className="absolute inset-0">
        <div
          className={'text-2xl font-bold text-right pb-6 flex justify-between'}
        >
          <h2>{t('home.offers')}</h2>
          <button
            className={
              'text-lg font-light text-gray-400 flex items-center gap-2'
            }
          >
            <span>{t('home.more')}</span>
            <RiArrowLeftUpLine className={'h-6 w-6'} />
          </button>
        </div>
        <Carousel>
          {offers.map((offer) => (
            <SwiperSlide className={''} key={offer.id}>
              <OfferCard offer={offer} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
