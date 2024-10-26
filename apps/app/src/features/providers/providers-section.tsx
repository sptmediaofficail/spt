'use client';

import { Carousel } from '@spt/common';
import { SwiperSlide } from 'swiper/react';
import { useTranslations } from 'next-intl';
import { ProviderCard, ProviderCardSkeleton } from './provider-card';
import { HomeSection } from '../home/home-section';
import { AdaptedProvider, UseProviders } from './use-providers';

export const ProvidersSection = () => {
  const t = useTranslations('home');
  const { providers, isLoading } = UseProviders();

  return (
    <>
      <ProviderSection
        title={t('spare_part_providers')}
        providers={providers.spare_part_providers}
        isLoading={isLoading}
      />
      <ProviderSection
        title={t('junkyard_sale_providers')}
        providers={providers.junkyard_sale_providers}
        isLoading={isLoading}
      />
    </>
  );
};

type ProviderSectionProps = {
  title: string;
  providers: AdaptedProvider[];
  isLoading: boolean;
};

const ProviderSection = ({
  title,
  providers,
  isLoading,
}: ProviderSectionProps) => (
  <HomeSection title={title} className="h-[calc(14rem+3rem)] w-full">
    <div className="relative">
      <div className="absolute inset-0">
        {isLoading ? (
          <ProvidersSkeleton />
        ) : (
          <Carousel>
            {providers.map((provider) => (
              <SwiperSlide
                className="mb-12 !w-auto !overflow-hidden"
                key={provider.id}
              >
                <ProviderCard {...provider} />
              </SwiperSlide>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  </HomeSection>
);

const ProvidersSkeleton = ({ items = 10 }) => (
  <div className="absolute overflow-hidden w-full lg:w-auto">
    <div className="hidden lg:flex justify-center align-middle mx-auto">
      {Array.from({ length: items }).map((_, index) => (
        <ProviderCardSkeleton key={index} />
      ))}
    </div>
    <div className="lg:hidden flex justify-center align-middle mx-auto">
      <ProviderCardSkeleton />
    </div>
  </div>
);
