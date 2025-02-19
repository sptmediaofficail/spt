'use client';
import { Section } from '../../components/section';
import { Tab, Tabs } from '@heroui/tabs';
import { ProvidersCarousel } from './stores/providers-carousel';
import { TopRated } from '@spt/core';

export const TopSellingSection = ({ topRated }: { topRated: TopRated }) => {
  const tabs = [
    {
      id: 'spare_part_providers',
      title: 'متاجر قطع الغيار',
      providers: [
        ...topRated.spare_part_providers,
        ...topRated.spare_part_providers,
      ],
    },
    {
      id: 'second',
      title: 'متاجر تشاليح',
      providers: [
        ...topRated.junkyard_sale_providers,
        ...topRated.junkyard_sale_providers,
      ],
    },
  ];

  return (
    <Section
      id={'top-selling'}
      title={'الاكثر نشاطا وتقييما'}
      heading={'تعرف علي المتجر الاكثر نشاطا وتقييما'}
      description={
        'اختيار المتجر المناسب لقطع الغيار يمكن أن يكون له تأثير كبير على جودة وصيانة المنتجات التي تستخدمها'
      }
      position={'center'}
      className={'max-w-max overflow-visible px-0'}
    >
      <Tabs color="primary" aria-label="Tabs" className={'mt-6'}>
        {tabs.map((tab) => (
          <Tab key={tab.id} value={tab.id} title={tab.title}>
            <div className={'mt-6'}>
              <ProvidersCarousel providers={tab.providers} />
            </div>
          </Tab>
        ))}
      </Tabs>
    </Section>
  );
};
