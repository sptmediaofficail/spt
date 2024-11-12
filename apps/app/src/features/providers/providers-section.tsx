'use client';

import { Carousel } from '@spt/common';
import { SwiperSlide } from 'swiper/react';
import { useTranslations } from 'next-intl';
import { ProviderCard, ProviderCardSkeleton } from './provider-card';
import { HomeSection } from '../home/home-section';
import { AdaptedProvider, useProviders } from './use-providers';
import { useRouter } from 'next/navigation';

export const ProvidersSection = () => {
  const t = useTranslations('home');
  const { providers, isLoading, isError } = useProviders();
  const router = useRouter();

  return (
    <>
      <ProviderSection
        title={t('spare_part_providers')}
        providers={providers.spare_part_providers}
        isLoading={isLoading}
        isError={isError}
        onMoreClick={() => router.push('/providers/spare-parts')}
      />
      <ProviderSection
        title={t('junkyard_sale_providers')}
        providers={providers.junkyard_sale_providers}
        isLoading={isLoading}
        isError={isError}
        onMoreClick={() => router.push('/providers/junkyard')}
      />
    </>
  );
};

type ProviderSectionProps = {
  title: string;
  providers: AdaptedProvider[];
  isLoading: boolean;
  isError: boolean;
  onMoreClick?: () => void;
};

const ProviderSection = ({
  title,
  providers,
  isLoading,
  isError,
  onMoreClick,
}: ProviderSectionProps) => (
  <HomeSection
    title={title}
    className="h-[calc(14rem+3rem)] w-full"
    onMoreClick={onMoreClick}
  >
    <div className="relative">
      <div className="absolute inset-0">
        {isLoading || isError ? (
          <ProvidersSkeleton />
        ) : (
          <Carousel>
            {providers.map((provider) => (
              <SwiperSlide
                className="mb-12 !w-auto !overflow-hidden lg:m-1 lg:mr-0 lg:mb-12 mr-4"
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
    <div
      className={'hidden lg:flex justify-center align-middle mx-auto gap-4 m-1'}
    >
      {Array.from({ length: items }).map((_, index) => (
        <ProviderCardSkeleton key={index} />
      ))}
    </div>
    <div className={'lg:hidden w-fit flex flex-row overflow-hidden'}>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className={'mr-4'}>
          <ProviderCardSkeleton />
        </div>
      ))}
    </div>
  </div>
);
