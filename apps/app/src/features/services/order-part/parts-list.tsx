import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';
import { FormOrderParts } from './types';
import { PrimaryButton } from '../../../ui/primary-button';
import Image from 'next/image';
import { PartCard } from './part-card';
import AddParts from './assets/add-parts.svg';
import PlusIcon from './assets/white-plus-icon.svg';
import PrimaryPlusIcon from './assets/plus-icon.svg';
import { IoMdInformationCircleOutline } from 'react-icons/io';

export const PartsList = ({ onOpen }: { onOpen: () => void }) => {
  const t = useTranslations();
  const form = useFormContext<FormOrderParts>();
  const parts = form.watch('parts');

  const onDelete = (index: number) => {
    form.setValue(
      'parts',
      parts.filter((_, i) => i !== index)
    );
  };

  return parts.length > 0 ? (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-col lg:flex-row lg:items-center">
          <h2 className="text-md font-semibold">{t('add_part')}</h2>
          <div className={'flex gap-1 items-center text-accent'}>
            <IoMdInformationCircleOutline className={'w-4 h-4 lg:w-6 lg:h-6'} />
            <p className="text-xs lg:text-sm font-semibold">
              {t('add_more_parts')}
            </p>
          </div>
        </div>
        <PrimaryButton
          variant={'bordered'}
          onPress={onOpen}
          className="w-fit"
          text={t('add_part')}
          startContent={
            <Image src={PrimaryPlusIcon} alt="Add Parts" className={'w-3'} />
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parts.map((part, index) => (
          <PartCard
            key={index}
            index={index}
            {...part}
            onDelete={onDelete}
            onEdit={(index) => {
              console.log('Edit', index);
            }}
          />
        ))}
      </div>
    </>
  ) : (
    <div className="flex-1 flex flex-col gap-4 items-center justify-center">
      <Image src={AddParts} alt="Add Parts" />
      <h2 className="text-center text-gray-500 text-lg font-semibold">
        {t('no_parts_added')}
      </h2>
      <PrimaryButton
        onPress={onOpen}
        className="w-fit mx-auto px-8"
        text={t('add_part')}
        startContent={
          <Image src={PlusIcon} alt="Add Parts" className={'w-3'} />
        }
      />
    </div>
  );
};
