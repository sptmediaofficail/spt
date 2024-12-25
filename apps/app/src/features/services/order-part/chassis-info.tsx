import { Input } from '../../../ui/input';
import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';
import Image from 'next/image';
import ChassisImage from './assets/chassis.svg';
import { IconText } from '../../../ui/typography';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { FormOrderParts } from './types';

export const ChassisInfo = () => {
  const t = useTranslations();
  const form = useFormContext<FormOrderParts>();

  return (
    <div className={'flex flex-col justify-between lg:flex-row gap-8'}>
      <div className={'w-full'}>
        <Input
          isRequired
          label={t('chassis_number')}
          labelPlacement="outside"
          placeholder={t('enter_chassis_number')}
          variant="bordered"
          // errorMessage={t('chassis_validation')}
          {...form.register('vin_serial')}
        />

        <div className={'mt-4'}>
          <IconText
            icon={<IoMdInformationCircleOutline className={'w-12 h-6'} />}
            color={'accent'}
          >
            <p className="text-accent text-sm font-semibold">
              {t('chassis_number_hint')}
            </p>
          </IconText>
        </div>
      </div>
      <Image src={ChassisImage} alt="Chassis" className={'w-full'} />
    </div>
  );
};
