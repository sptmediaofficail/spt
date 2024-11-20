import { ShowProviderPage } from '../../../../features/providers/show-provider-page';
import { fetchClient } from '../../../../fetch-client';
import { Metadata } from 'next';
import { IProvider } from '../../../../features/providers/types';

export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const { data } = (await fetchClient.GET('/provider/ids')) as {
    data: { data: Array<string> };
  };
  return data.data.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data } = (await fetchClient.GET('/provider/{id}', {
    params: {
      path: { id: params.id },
    },
  })) as { data: { data: IProvider } };

  const provider = data?.data;

  // Fallbacks for robust metadata
  const providerName = provider?.name || 'مزود غير معروف';
  const providerRate = provider?.rate ?? 'غير متوفر';
  const completedOrders = provider?.total_completed_orders ?? 0;
  const defaultImage = '/default-image.png';
  const images = provider?.spare_part_brands?.map((brand) => ({
    url: brand.logo || defaultImage,
    alt: `${providerName} - قطع غيار السيارات`,
  })) || [{ url: defaultImage, alt: 'قطع غيار السيارات' }];

  return {
    title: `${providerName} - قطع غيار السيارات | SPT`,
    description: `${providerName} يقدم خدمات قطع غيار السيارات مع تقييم ${providerRate} وعدد طلبات مكتملة ${completedOrders}.`,
    openGraph: {
      type: 'website',
      locale: 'ar_SA',
      url: `https://spt.sa/provider/${params.id}`,
      site_name: 'SPT قطع غيار السيارات',
      title: `${providerName} - قطع غيار السيارات`,
      description: `${providerName} يقدم خدمات قطع غيار السيارات مع تقييم ${providerRate}.`,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@SPT',
      creator: '@SPT',
      title: `${providerName} - قطع غيار السيارات`,
      description: `${providerName} يقدم خدمات قطع غيار السيارات مع تقييم ${providerRate}.`,
      images: images[0]?.url,
    },
    keywords: [
      providerName,
      provider?.branches || 'فروع مزود غير معروفة',
      'قطع غيار سيارات',
      'قطع غيار السيارات الأصلية',
      'قطع غيار السيارات المستعملة',
      ...(provider?.spare_part_brands
        ?.map((brand) => brand.name)
        .filter(Boolean) || []),
    ],
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: providerName,
      description: `${providerName} يقدم خدمات قطع غيار السيارات مع تقييم ${providerRate}.`,
      url: `https://spt.sa/provider/${params.id}`,
      logo: images[0]?.url || defaultImage,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: providerRate,
        reviewCount: completedOrders,
      },
    },
  };
}

export default async function JunkyardProviderPage({
  params,
}: {
  params: { id: string };
}) {
  return <ShowProviderPage id={params.id} />;
}
