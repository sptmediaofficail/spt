import { ShowProviderPage } from '../../../../features/providers/show-provider-page';
import { fetchClient } from '../../../../fetch-client';
import { Metadata } from 'next';
import { getProviderData } from '../../../../features/providers/use-providers';

export const revalidate = 60; // Revalidate the page every 60 seconds

// Dynamic Params Configuration
export const dynamicParams = true; // Set to false to return 404 for unknown paths

// Generate static paths for provider IDs during build
export async function generateStaticParams(): Promise<{ id: string }[]> {
  const { data } = (await fetchClient.GET('/provider/ids')) as {
    data: { data: Array<string> };
  };
  return data.data.map((id) => ({ id }));
}

// Generate metadata for each provider
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const provider = await getProviderData(params.id);

  // Metadata Fallbacks
  const providerName = provider?.name || 'مزود غير معروف';
  const providerRate = provider?.rate ?? 'غير متوفر';
  const completedOrders = provider?.total_completed_orders ?? 0;
  const defaultImage = 'https://spt.sa/phone.png';

  // Brand Details
  const brandDetails =
    provider?.spare_part_brands
      ?.map((brand) => `${brand.name}${brand.logo ? ' (شعار متوفر)' : ''}`)
      .join('، ') || 'تفاصيل العلامات التجارية غير متوفرة';

  // OpenGraph Images
  const images = provider?.spare_part_brands?.map((brand) => ({
    url: brand.logo || defaultImage,
    alt: `${providerName} - ${brand.name} - قطع غيار السيارات`,
  })) || [{ url: defaultImage, alt: 'قطع غيار السيارات' }];

  return {
    title: `${providerName} - قطع غيار السيارات | SPT`,
    description: `${providerName} يقدم مجموعة واسعة من خدمات قطع غيار السيارات، مع تقييم ${providerRate} بناءً على ${completedOrders} طلبات مكتملة. يتميز المزود بتوفير علامات تجارية موثوقة تشمل: ${brandDetails}.`,
    openGraph: {
      type: 'website',
      locale: 'ar_SA',
      url: `https://spt.sa/provider/${params.id}`,
      siteName: 'SPT قطع غيار السيارات',
      title: `${providerName} - قطع غيار السيارات`,
      description: `${providerName} يقدم مجموعة واسعة من خدمات قطع غيار السيارات، مع تقييم ${providerRate} بناءً على ${completedOrders} طلبات مكتملة. يتميز المزود بتوفير علامات تجارية موثوقة تشمل: ${brandDetails}.`,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@SPT',
      creator: '@SPT',
      title: `${providerName} - قطع غيار السيارات | SPT`,
      description: `${providerName} يقدم مجموعة واسعة من خدمات قطع غيار السيارات، مع تقييم ${providerRate} بناءً على ${completedOrders} طلبات مكتملة. يتميز المزود بتوفير علامات تجارية موثوقة تشمل: ${brandDetails}.`,
      images: images[0]?.url,
    },
    keywords: [
      providerName,
      provider?.branches || 'فروع مزود غير معروفة',
      'قطع غيار سيارات',
      'قطع غيار السيارات الأصلية',
      'قطع غيار السيارات المستعملة',
      ...(provider?.spare_part_brands?.map((brand) => brand.name) || []),
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
      description: `${providerName} يقدم مجموعة واسعة من خدمات قطع غيار السيارات، مع تقييم ${providerRate} وعلامات تجارية موثوقة تشمل: ${brandDetails}.`,
      url: `https://spt.sa/provider/${params.id}`,
      logo: images[0]?.url || defaultImage,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: providerRate,
        reviewCount: completedOrders,
      },
      brand:
        provider?.spare_part_brands?.map((brand) => ({
          '@type': 'Brand',
          name: brand.name,
          logo: brand.logo || defaultImage,
        })) || [],
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
