'use client';

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';
import { useTranslations } from 'next-intl';
import { FaHome } from 'react-icons/fa';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import Link from 'next/link';
import { useIntersectionObserver } from 'usehooks-ts';
import { Fragment, useEffect, useState } from 'react';
import { useProvidersInfinity } from './use-providers';
import { ProviderCard, ProviderCardSkeleton } from './provider-card';
import { useRouter } from 'next/navigation';

export const ProvidersPage = ({
  type,
}: {
  type: 'spare_parts' | 'junkyard_sale';
}) => {
  const t = useTranslations('home');
  const router = useRouter();
  const route = type === 'spare_parts' ? 'spare-parts' : 'junkyard';
  const onCardClick = (id: string) => router.push(`/providers/${route}/${id}`);
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    pageSize,
  } = useProvidersInfinity({
    type: type,
  });

  const [isFirstMount, setIsFirstMount] = useState(true);

  const { ref } = useIntersectionObserver({
    threshold: 0.5,
    onChange: (isIntersecting) => {
      if (isFirstMount) return;
      console.log('isIntersecting', isIntersecting);
      if (isIntersecting) {
        console.log('fetchNextPage');
        fetchNextPage({ pageParam: pageSize });
      }
    },
  });

  useEffect(() => {
    if (isFirstMount) setIsFirstMount(false);
  }, []);

  return (
    <div className="flex flex-col h-full p-4 lg:py-0 lg:px-0">
      <ProvidersBreadcrumbs type={type} />
      <Card className="px-2 lg:p-0 rounded shadow mt-2 lg:mt-0 flex-grow">
        <CardHeader className="p-3 lg:p-4">
          <h1 className="text-2xl lg:text-3xl font-bold">
            {type === 'spare_parts'
              ? t('spare_part_providers')
              : t('junkyard_sale_providers')}
          </h1>
        </CardHeader>
        <Divider className="bg-gray-100 w-[calc(100%-2rem)] mx-auto" />
        <CardBody className="flex flex-wrap flex-row gap-6 lg:gap-4 justify-center">
          {isLoading || isError ? (
            <ProvidersSkeleton />
          ) : (
            <>
              {data.pages.map((page, i) => (
                <Fragment key={i}>
                  {page.data.data.map((provider) => (
                    <ProviderCard
                      key={provider.id}
                      {...provider}
                      onClick={() => onCardClick(provider.id)}
                    />
                  ))}
                </Fragment>
              ))}
              <div ref={ref} className="w-full h-1" />
              {isFetchingNextPage && <ProviderCardSkeleton />}
            </>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

const ProvidersSkeleton = () => (
  <>
    {Array.from({ length: 20 }).map((_, i) => (
      <ProviderCardSkeleton key={i} />
    ))}
  </>
);

const ProvidersBreadcrumbs = ({
  type,
}: {
  type: 'spare_parts' | 'junkyard_sale';
}) => {
  const t = useTranslations();
  return (
    <div className="mb-2 lg:mb-4">
      <Breadcrumbs>
        <BreadcrumbItem className="flex items-center gap-2">
          <FaHome />
          <Link href="/">{t('sidenav.home')}</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href={`/providers/${type}`}>
            {type === 'spare_parts'
              ? t('home.spare_part_providers')
              : t('home.junkyard_sale_providers')}
          </Link>
        </BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};
