'use client';

import { Section } from '../../components/section';
import { Tab, Tabs } from '@nextui-org/tabs';
import { StoresCarousel } from './stores/stores-carousel';

export const TopSellingSection = () => {
  const tabs = [
    {
      id: 'first',
      title: 'متاجر قطع الغيار',
    },
    {
      id: 'second',
      title: 'متاجر تشاليح',
    },
  ];

  return (
    <Section
      title={'الاكثر نشاطا وتقييما'}
      heading={'تعرف علي المتاجر الاكثر نشاطا وتقييما'}
      description={
        'اختيار المتاجر المناسب لقطع الغيار يمكن أن يكون له تأثير كبير على جودة وصيانة المنتجات التي تستخدمها'
      }
      position={'center'}
      className={'overflow-visible max-w-full'}
    >
      <Tabs color="primary" aria-label="Tabs" className={'mt-6'}>
        {tabs.map((tab) => (
          <Tab
            className="lg:px-24 px-12"
            key={tab.id}
            value={tab.id}
            title={tab.title}
          />
        ))}
      </Tabs>

      <div className={'mt-6 w-full overflow-visible'}>
        <StoresCarousel />
      </div>
    </Section>
  );
};
