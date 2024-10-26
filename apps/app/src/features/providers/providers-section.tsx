'use client';
import { useLandingServiceGetLandingMostRatedProviders } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { HomeSection } from '../home/home-section';
import { useTranslations } from 'next-intl';
import { ProviderCard } from './provider-card';
import { TopRated } from '@spt/core';
import { Carousel } from '../../../../../libs/common/src/ui/carousel';
import { SwiperSlide } from 'swiper/react';

export const ProvidersSection = () => {
  const t = useTranslations('home');
  const { data, isLoading } = useLandingServiceGetLandingMostRatedProviders();
  const providers: TopRated = data?.data;

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <HomeSection title={t('spare_part_providers')}>
        <Carousel>
          {providers.spare_part_providers.map((provider) => (
            <SwiperSlide className={'pb-6 m-1 !w-auto'} key={provider.id}>
              <ProviderCard
                key={provider.id}
                name={provider.name}
                city={provider.city}
                rating={provider.rating}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      </HomeSection>
      <HomeSection title={t('junkyard_sale_providers')}>
        <Carousel>
          {providers.junkyard_sale_providers.map((provider) => (
            <SwiperSlide className={'pb-6 !w-auto'} key={provider.id}>
              <ProviderCard
                key={provider.id}
                name={provider.name}
                city={provider.city}
                rating={provider.rating}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      </HomeSection>
    </>
  );
};
