'use client';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';
import { useTranslations } from 'next-intl';
import { FaHome } from 'react-icons/fa';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { UseOffers } from './use-offers';
import { OfferCard, OfferCardSkeleton } from './offer-card';
import { Divider } from '@nextui-org/divider';
import Link from 'next/link';
import { useIntersectionObserver } from 'usehooks-ts';
import { useState } from 'react';

export const OffersPage = () => {
  const { offers, isLoading, isError, setPagination } = UseOffers();
  const t = useTranslations('home');

  const [hasIntersected, setHasIntersected] = useState(false);
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    onChange: (isIntersecting) => {
      if (isIntersecting && !hasIntersected) {
        setHasIntersected(true); // Update state to skip future first load
      } else if (isIntersecting && hasIntersected) {
        console.log('Intersecting');
        setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
      }
    },
  });

  return (
    <div className="flex flex-col h-full">
      <OffersBreadcrumbs />
      {isIntersecting ? 'Obscured' : 'Fully in view'}

      <Card className="p-4 rounded shadow mt-4 h-full">
        <CardHeader className="py-0">
          <h1 className="text-2xl font-bold">{t('offers')}</h1>
        </CardHeader>
        <Divider className="mt-4 mb-2 bg-gray-100" />
        <CardBody className="flex flex-wrap flex-row gap-4">
          {isLoading || isError ? (
            <OffersSkeleton />
          ) : (
            <>
              {offers.map((offer) => (
                <OfferCard offer={offer} key={offer.id} />
              ))}
              <div ref={ref} style={{ height: '1px' }} />
            </>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

const OffersSkeleton = () => {
  return (
    <>
      {Array.from({ length: 9 }).map((_, i) => (
        <OfferCardSkeleton key={i} />
      ))}
    </>
  );
};

const OffersBreadcrumbs = () => {
  const t = useTranslations();
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem className="flex items-center gap-2">
          <FaHome />
          <Link href={'/'}>{t('sidenav.home')}</Link>
        </BreadcrumbItem>
        <BreadcrumbItem href="/offers">
          {<Link href={'/offers'}>{t('home.offers')}</Link>}
        </BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};
