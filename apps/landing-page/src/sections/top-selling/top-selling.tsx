'use client';
import { Section } from '../../components/section';
import { Tab, Tabs } from '@nextui-org/tabs';
import { ProvidersCarousel } from './stores/providers-carousel';
import { TopRated } from '../../service/spt-client/types';

const stores = [
  {
    avatar:
      'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    name: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    avatar:
      'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    name: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    avatar:
      'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    name: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    avatar:
      'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    name: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    avatar:
      'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    name: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    avatar:
      'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    name: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    avatar:
      'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    name: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    avatar:
      'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    name: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    avatar:
      'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    name: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    avatar:
      'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    name: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    avatar:
      'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    name: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    avatar:
      'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    name: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
];

export const TopSellingSection = ({ topRated }: { topRated: TopRated }) => {
  const tabs = [
    {
      id: 'spare_part_providers',
      title: 'متاجر قطع الغيار',
      providers: stores,
    },
    {
      id: 'second',
      title: 'متاجر تشاليح',
      providers: topRated.junkyard_sale_providers,
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
              {/* @ts-expect-error - to be fixed */}
              <ProvidersCarousel providers={tab.providers} />
            </div>
          </Tab>
        ))}
      </Tabs>
    </Section>
  );
};
