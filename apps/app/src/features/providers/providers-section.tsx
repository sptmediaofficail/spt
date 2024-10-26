'use client';
import { HomeSection } from '../home/home-section';
import { useTranslations } from 'next-intl';
import { ProviderCard, ProviderCardSkeleton } from './provider-card';
import { Carousel } from '../../../../../libs/common/src/ui/carousel';
import { SwiperSlide } from 'swiper/react';
import { UseProviders } from './use-providers';

export const ProvidersSection = () => {
  const t = useTranslations('home');
  const { providers, isLoading } = UseProviders();

  return (
    <>
      <HomeSection
        title={t('spare_part_providers')}
        className={'h-[calc(12rem+3rem)] w-full'}
      >
        <div className={'relative'}>
          <div className="absolute inset-0">
            {isLoading ? (
              <ProvidersSkeleton />
            ) : (
              <Carousel>
                {providers.spare_part_providers.map((provider) => (
                  <SwiperSlide
                    className={'mb-12 !w-auto !overflow-hidden'}
                    key={provider.id}
                  >
                    <ProviderCard key={provider.id} {...provider} />
                  </SwiperSlide>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </HomeSection>
      <HomeSection
        title={t('junkyard_sale_providers')}
        className={'h-[calc(12rem+3.5rem)] w-full'}
      >
        <div className={'relative'}>
          <div className="absolute inset-0">
            {isLoading ? (
              <ProvidersSkeleton />
            ) : (
              <Carousel>
                {providers.junkyard_sale_providers.map((provider) => (
                  <SwiperSlide
                    className={'mb-12 !w-auto !overflow-hidden'}
                    key={provider.id}
                  >
                    <ProviderCard key={provider.id} {...provider} />
                  </SwiperSlide>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </HomeSection>
    </>
  );
};

const ProvidersSkeleton = () => (
  <div className={'absolute overflow-hidden w-full lg:w-auto'}>
    <div className={'hidden lg:flex justify-center align-middle mx-auto'}>
      {Array.from({ length: 10 }).map((_, index) => (
        <ProviderCardSkeleton key={index} />
      ))}
    </div>
    <div className={'lg:hidden flex justify-center align-middle mx-auto'}>
      <ProviderCardSkeleton />
    </div>
  </div>
);
