'use client';
import { useParams } from 'next/navigation';
import { ShowProviderPage } from '../../../../../features/providers/show-provider-page';

export default function SparePartProviderPage() {
  const providerId = useParams().id as string;
  return <ShowProviderPage providerId={providerId} />;
}
