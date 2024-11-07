'use client';

import * as React from 'react';
import { SwiperSlide } from 'swiper/react';
import { useTranslations } from 'next-intl';
import { Carousel } from '@spt/common';
import { HomeSection } from '../home/home-section';
import { ReviewCard, ReviewCardSkeleton } from './review-card';
import { UseReviews } from './use-reviews';

export const ReviewsSection = () => {
  const t = useTranslations('home');
  const { reviews, isLoading, isError } = UseReviews();

  return (
    <HomeSection title={t('reviews')} className={'h-[calc(14rem+3rem)]'}>
      <div className={'relative'}>
        <div className="absolute inset-0">
          {isLoading || isError ? (
            <OffersSkeleton />
          ) : (
            <Carousel>
              {reviews.map((review) => (
                <SwiperSlide
                  key={review.id}
                  className={
                    '!w-auto mb-14 !overflow-visible mr-4 lg:m-1 lg:mb-14 lg:mr-0'
                  }
                >
                  <ReviewCard {...review} />
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
      {' '}
      {Array.from({ length: 10 }).map((_, index) => (
        <ReviewCardSkeleton key={index} />
      ))}
    </div>
    <div className={'lg:hidden w-fit flex flex-row overflow-hidden'}>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className={'mr-4'}>
          <ReviewCardSkeleton />
        </div>
      ))}
    </div>
  </div>
);
