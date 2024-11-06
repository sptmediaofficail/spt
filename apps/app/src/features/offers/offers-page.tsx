'use client';

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';
import { useTranslations } from 'next-intl';
import { FaHome } from 'react-icons/fa';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { useOffersInfinity } from './use-offers';
import { OfferCard, OfferCardSkeleton } from './offer-card';
import { Divider } from '@nextui-org/divider';
import Link from 'next/link';
import { useIntersectionObserver } from 'usehooks-ts';
import { Fragment, useEffect, useState } from 'react';

export const OffersPage = () => {
  const t = useTranslations('home');
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    pageSize,
  } = useOffersInfinity();

  const [isFirstMount, setIsFirstMount] = useState(true);

  const { ref } = useIntersectionObserver({
    threshold: 0.5,
    onChange: (isIntersecting) => {
      if (isFirstMount) return;
      if (isIntersecting) {
        fetchNextPage({ pageParam: pageSize });
      }
    },
  });

  useEffect(() => {
    if (isFirstMount) setIsFirstMount(false);
  }, []);

  return (
    <div className="flex flex-col h-full p-4 lg:py-0 lg:px-0">
      <OffersBreadcrumbs />
      <Card className="px-2 lg:p-0 rounded shadow mt-2 lg:mt-0 flex-grow">
        <CardHeader className="p-3 lg:p-4">
          <h1 className="text-2xl lg:text-3xl font-bold">{t('offers')}</h1>
        </CardHeader>
        <Divider className="bg-gray-100 w-[calc(100%-2rem)] mx-auto" />
        <CardBody className="flex flex-wrap flex-row gap-4 justify-center">
          {isLoading || isError ? (
            <OffersSkeleton />
          ) : (
            <>
              {data.pages.map((page, i) => (
                <Fragment key={i}>
                  {page.data.data.map((offer) => (
                    <OfferCard key={offer.id} offer={offer} />
                  ))}
                </Fragment>
              ))}
              <div ref={ref} className="w-full h-1" />
              {isFetchingNextPage && <OffersSkeleton />}
            </>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

const OffersSkeleton = () => (
  <>
    {Array.from({ length: 20 }).map((_, i) => (
      <OfferCardSkeleton key={i} />
    ))}
  </>
);

const OffersBreadcrumbs = () => {
  const t = useTranslations();
  return (
    <div className="mb-2 lg:mb-4">
      <Breadcrumbs>
        <BreadcrumbItem className="flex items-center gap-2">
          <FaHome />
          <Link href="/">{t('sidenav.home')}</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/offers">{t('home.offers')}</Link>
        </BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};
