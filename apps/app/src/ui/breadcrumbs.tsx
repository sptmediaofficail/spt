'use client';
import { useTranslations } from 'next-intl';
import {
  BreadcrumbItem,
  Breadcrumbs as NextBreadcrumbs,
} from '@nextui-org/breadcrumbs';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

export const Breadcrumbs = ({
  id,
  type,
}: {
  id: string;
  type: 'spare_parts' | 'junkyard_sale';
}) => {
  const t = useTranslations();
  return (
    <NextBreadcrumbs>
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
      <BreadcrumbItem>
        <Link href={`/providers/${id}`}>{t('provider_details')}</Link>
      </BreadcrumbItem>
    </NextBreadcrumbs>
  );
};
