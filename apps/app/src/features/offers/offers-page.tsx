'use client';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';
import { useTranslations } from 'next-intl';
import { FaHome } from 'react-icons/fa';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { UseOffers } from './use-offers';
import { OfferCard, OfferCardSkeleton } from './offer-card';
import { Divider } from '@nextui-org/divider';
import Link from 'next/link';
import { Pagination } from '@nextui-org/pagination';

export const OffersPage = () => {
  const { offers, isLoading, isError, setPagination } = UseOffers();
  const t = useTranslations('home');
  return (
    <div className={'h-screen flex flex-col'}>
      <OffersBreadcrumbs />
      <Card className="p-4 rounded shadow mt-4 flex-1">
        <CardHeader>
          <h1 className="text-2xl font-bold">{t('offers')}</h1>
        </CardHeader>
        <Divider className={'my-2 bg-gray-100'} />
        <CardBody className="flex flex-wrap flex-row gap-4">
          {isLoading || isError ? (
            <OffersSkeleton />
          ) : (
            offers.map((offer) => <OfferCard offer={offer} key={offer.id} />)
          )}
        </CardBody>

        <Pagination
          className={'mx-auto'}
          onChange={(page) => {
            console.log(page);
            setPagination({ page, paginate: 10 });
          }}
          showControls
          total={10}
          initialPage={1}
        />
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
