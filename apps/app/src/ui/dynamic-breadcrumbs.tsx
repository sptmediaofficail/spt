'use client';
import { useTranslations } from 'next-intl';
import {
  BreadcrumbItem,
  Breadcrumbs as NextBreadcrumbs,
} from '@nextui-org/breadcrumbs';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const DynamicBreadcrumbs = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const pathSegments = pathname
    .split('/')
    .filter(Boolean)
    .filter((segment) => {
      // filter path segments that has numbers
      return !/\d/.test(segment);
    });

  const breadcrumbLabels: Record<string, string> = {
    providers: t('home.providers'),
    spare_parts: t('home.spare_part_providers'),
    junkyard_sale: t('home.junkyard_sale_providers'),
    car_dismantling: t('home.car_dismantling_providers'),
    services: t('sidenav.services'),
    'order-spare-part': t('sidenav.order_spare_part'),
  };

  return (
    <NextBreadcrumbs className={'p-4 lg:p-0 lg:pb-4'}>
      <BreadcrumbItem className="flex items-center gap-2">
        <FaHome />
        <Link href="/">{t('sidenav.home')}</Link>
      </BreadcrumbItem>
      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const label = breadcrumbLabels[segment] || t(segment);
        return (
          <BreadcrumbItem isDisabled={segment === 'services'} key={path}>
            <Link href={path}>{label}</Link>
          </BreadcrumbItem>
        );
      })}
    </NextBreadcrumbs>
  );
};
