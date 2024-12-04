'use client';
import { H1 } from '../../../../ui/typography';
import { PrimaryDivider } from '../../../../ui/divider';
import { Tab, Tabs } from '@nextui-org/tabs';
import { useTranslations } from 'next-intl';
import { Select, SelectItem } from '@nextui-org/select';
import Image from 'next/image';
import AddParts from '../../../../features/services/assets/add-parts.svg';
import { PrimaryButton } from '../../../../ui/primary-button';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

const selectors = [
  {
    label: 'select_year',
    options: years,
  },
  {
    label: 'select_brand',
    options: ['Toyota', 'Nissan', 'Honda', 'Mitsubishi'],
  },
  {
    label: 'select_model',
    options: ['Corolla', 'Camry', 'Yaris', 'Prius'],
  },
];

export default function OrderSparePartPage() {
  const t = useTranslations();
  return (
    <div className={'w-full p-4 flex flex-col gap-4 h-full'}>
      <H1>{'order_spare_part'}</H1>

      <PrimaryDivider />

      <Tabs
        fullWidth
        variant={'underlined'}
        color={'primary'}
        className={'w-full'}
      >
        <Tab title={t('enter_chassis_number')}>
          <div className={'flex flex-col lg:flex-row gap-4'}>
            {selectors.map((selector) => (
              <Select
                label={t(selector.label)}
                labelPlacement={'outside'}
                isRequired
                key={selector.label}
                classNames={{
                  trigger: 'rounded-lg shadow-sm border border-gray-300',
                  label: 'after:text-[#05b5b4] after:px-1',
                }}
                color={'primary'}
                required
                variant={'bordered'}
                className={'w-full rounded-none'}
                placeholder={t(selector.label)}
              >
                {selector.options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </Select>
            ))}
          </div>
        </Tab>
        <Tab title={t('enter_car_details')}>Tab 2</Tab>
      </Tabs>

      <div className={'flex-1 flex flex-col gap-4 items-center justify-center'}>
        <Image src={AddParts} alt="Add Parts" />
        <h2 className={'text-center text-gray-500 text-lg font-semibold'}>
          {t('no_parts_added')}
        </h2>

        <PrimaryButton className={'w-fit mx-auto px-8'} text={t('add_part')} />
      </div>
    </div>
  );
}
