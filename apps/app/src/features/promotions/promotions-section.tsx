'use client';
import * as React from 'react';
import { SwiperSlide } from 'swiper/react';
import { useTranslations } from 'next-intl';
import { Carousel } from '@spt/common';
import { OfferCardSkeleton, PromotionCard } from './promotion-card';
import { HomeSection } from '../home/home-section';
import { usePromotions } from './use-promotions';
import { useRouter } from 'next/navigation';

export const PromotionsSection = () => {
  const t = useTranslations('home');
  const { offers, isLoading, isError } = usePromotions();
  const router = useRouter();
  const onMoreClick = () => router.push('/offers');

  return (
    <HomeSection
      title={t('offers')}
      className={'h-[calc(24rem+3.5rem)]'}
      onMoreClick={onMoreClick}
    >
      <div className={'relative'}>
        <div className="absolute inset-0">
          {isLoading || isError ? (
            <OffersSkeleton />
          ) : (
            <Carousel>
              {offers.map((offer) => (
                <SwiperSlide
                  key={offer.id}
                  className={
                    '!w-auto mb-14 !overflow-visible mr-4 lg:m-1 lg:mb-14 lg:mr-0'
                  }
                >
                  <PromotionCard offer={offer} />
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
    <div
      className={'hidden lg:flex justify-center align-middle mx-auto gap-4 m-1'}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <OfferCardSkeleton key={index} />
      ))}
    </div>
    <div className={'lg:hidden w-fit flex flex-row overflow-hidden'}>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className={'mr-4'}>
          <OfferCardSkeleton />
        </div>
      ))}
    </div>
  </div>
);
